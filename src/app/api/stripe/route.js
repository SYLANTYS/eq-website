import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );
  } catch (err) {
    console.error("Stripe webhook error:", err);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  const data = event.data.object;

  // ✅ Checkout completed → activate subscription if paid
  if (
    event.type === "checkout.session.completed" &&
    data.payment_status === "paid"
  ) {
    const subscriptionId = data.subscription;

    if (subscriptionId) {
      const subscription = await stripe.subscriptions.retrieve(subscriptionId);
      const { id, email } = subscription.metadata || {};
      const trialEnd = subscription.trial_end;

      if (id && email) {
        await supabaseAdmin
          .from("profiles")
          .update({
            subscription: true,
            trial_deadline: new Date(
              (trialEnd ?? Math.floor(Date.now() / 1000)) * 1000,
            ),
          })
          .eq("id", id)
          .eq("email", email);
      }
    }
  }

  // ❌ Subscription became inactive or was deleted
  if (
    event.type === "customer.subscription.deleted" ||
    (event.type === "customer.subscription.updated" &&
      data.status !== "active" &&
      data.status !== "trialing")
  ) {
    const { id, email } = data.metadata || {};

    if (!id || !email) {
      const subscription = await stripe.subscriptions.retrieve(data.id);
      const meta = subscription.metadata || {};
      meta.id &&
        meta.email &&
        (await supabaseAdmin
          .from("profiles")
          .update({ subscription: false })
          .eq("id", meta.id)
          .eq("email", meta.email));
    } else {
      await supabaseAdmin
        .from("profiles")
        .update({ subscription: false })
        .eq("id", id)
        .eq("email", email);
    }
  }

  return new Response(null, { status: 200 });
}
