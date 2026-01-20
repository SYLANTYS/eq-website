"use server";

import { stripe } from "@/lib/stripe";

export const subscribeAction = async ({ id, email, product }) => {
  const prices = [
    "price_1SrUTIQwZPNYyBC6AxgOgJTu", // permanent
  ];

  const { url } = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: prices[product],
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${process.env.NEXT_PUBLIC_URL}/thankyou`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}`,

    customer_email: email, // helps Stripe prefill customer

    // ✅ This is the key: attach metadata to the subscription object
    subscription_data: {
      metadata: {
        id,
        email,
      },
      trial_period_days: 3,
    },
  });

  return url;
};
