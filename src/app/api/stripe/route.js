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

  try {
    // ✅ One-time payment completed
    if (
      event.type === "checkout.session.completed" &&
      data.payment_status === "paid"
    ) {
      const customerEmail = data.customer_email;

      if (customerEmail) {
        console.log("Processing payment for:", customerEmail);

        // Update user profile to mark as paid by updating is_pro_user querying by email
        const { error } = await supabaseAdmin
          .from("profiles")
          .update({
            is_pro_user: true,
          })
          .eq("email", customerEmail);

        if (error) {
          console.error("Supabase update error:", error);
          throw error;
        }

        console.log("Successfully updated user:", customerEmail);
      }
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } catch (err) {
    console.error("Webhook processing error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
