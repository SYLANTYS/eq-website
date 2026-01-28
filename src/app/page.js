"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Toaster, toast } from "sonner";
import { GoogleChromeLogoIcon } from "@phosphor-icons/react";

/**
 * Supabase schema notes:
 *
 * Table: profiles
 * - id: uuid (PRIMARY KEY, FK → auth.users.id)
 * - email: text (copied from auth.users.email on signup)
 * - is_pro_user: boolean (admin/Stripe only — users must NOT update)
 *
 * Behavior:
 * - One-to-one with auth.users
 * - Row is auto-created via DB trigger on signup
 * - RLS enabled
 * - Users can SELECT their own row only
 * - NO client-side UPDATE policy exists
 *
 * Important:
 * - is_pro_user is read-only on the client
 * - Any update must use Supabase service role (server / webhook)
 */

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
);

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoading(true);

    try {
      toast.success("Redirecting to Google...");

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;
    } catch (err) {
      console.error("Error:", err);
      toast.error(err.message || "Failed to sign in with Google");
      setLoading(false);
    }
  };

  return (
    <div className="bg-black">
      <Toaster position="top-right" />
      <Navbar />
      <main className="min-h-[calc(100vh-297px)] flex items-center justify-center px-6 text-white my-8">
        <div className="max-w-screen-md w-full mx-auto">
          <div className="flex flex-col items-center gap-10">
            <h1 className="text-4xl font-bold text-center">
              Unlock Airs Pro Themes
            </h1>
            <div className="flex flex-col items-center gap-4 mb-8">
              <p className="text-gray-300 text-lg text-center max-w-sm">
                Airs Pro is a <strong>one-time</strong> upgrade.
              </p>

              <p className="text-gray-300 text-lg text-center max-w-sm">
                Sign in securely, then complete checkout to unlock{" "}
                <strong>all premium </strong> themes instantly.
              </p>

              <p className="text-gray-300 text-lg text-center max-w-sm">
                <strong>No</strong> recurring charges.
              </p>
            </div>

            <div className="flex flex-col gap-3 w-full max-w-sm">
              <button
                onClick={handleGoogleSignIn}
                disabled={loading}
                className={`w-full px-6 py-2 rounded-xl transition flex items-center justify-center gap-2 ${
                  loading
                    ? "bg-gray-100 text-black opacity-70 cursor-not-allowed"
                    : "bg-gray-100 text-black cursor-pointer hover:bg-gray-200"
                }`}
              >
                <GoogleChromeLogoIcon
                  size={30}
                  weight="bold"
                  className="text-green-600"
                />
                {loading ? "Loading..." : "Continue with Google"}
              </button>
              <p className="text-gray-400 text-sm text-center max-w-sm my-1">
                <i>Secure checkout powered by Stripe ($4.99)</i>
              </p>
              <p className="text-gray-500 text-xs text-center max-w-sm">
                Apple Pay available on iPhone at
                <i> airs-audio-system.vercel.app</i>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
