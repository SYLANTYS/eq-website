"use server";

import { stripe } from "@/lib/stripe";

export const subscribeAction = async ({ email }) => {
  const priceId = "price_1SrUTIQwZPNYyBC6AxgOgJTu"; // permanent

  const { url } = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}/thankyou`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL || "http://localhost:3000"}`,
    customer_email: email, // helps Stripe prefill customer
  });

  return { url };
};
