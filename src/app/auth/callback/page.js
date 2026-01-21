"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { subscribeAction } from "@/actions/stripe";
import { toast, Toaster } from "sonner";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
);

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get the session from Supabase
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        if (sessionError) throw sessionError;

        if (!session || !session.user) {
          toast.error("Authentication failed");
          router.push("/");
          return;
        }

        const email = session.user.email;

        // Create Stripe checkout session
        toast.success("Redirecting to checkout...");
        const { url } = await subscribeAction({ email });

        // Redirect to Stripe checkout
        window.location.href = url;
      } catch (err) {
        console.error("Auth callback error:", err);
        toast.error(err.message || "Authentication error");
        setTimeout(() => router.push("/"), 2000);
      }
    };

    handleCallback();
  }, [router]);

  return (
    <div className="bg-black min-h-screen flex items-center justify-center text-white">
      <Toaster position="top-right" />
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        <p>Processing your authentication...</p>
      </div>
    </div>
  );
}
