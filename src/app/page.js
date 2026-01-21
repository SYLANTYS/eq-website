"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { subscribeAction } from "@/actions/stripe";
import { Toaster, toast } from "sonner";

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
  const [isLogin, setIsLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword?.value;

    // Validate passwords match (only for signup)
    if (!isLogin && password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      if (isLogin) {
        // Login flow
        toast.success("Logging in...");
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;

        // Create Stripe checkout session
        const { url } = await subscribeAction({ email });

        // Redirect to Stripe checkout
        window.location.href = url;
      } else {
        // Signup flow
        toast.success("Passwords match! Creating account...");

        // Create user in Supabase with password
        const { user, error } = await supabase.auth.signUp({
          email,
          password,
        });

        // Check if email already exists
        if (error?.message?.includes("already registered")) {
          toast.info("Email already registered. Switching to login...");
          setIsLogin(true);
          setLoading(false);
          return;
        }

        if (error) throw error;

        // Create Stripe checkout session
        const { url } = await subscribeAction({ email });

        // Redirect to Stripe checkout
        window.location.href = url;
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error(err.message || "Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black">
      <Toaster position="top-right" />
      <Navbar />
      <main className="min-h-[calc(100vh-297px)] flex items-center justify-center px-6 text-white mb-8">
        <div className="max-w-screen-md w-full mx-auto">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-2xl font-bold text-center">
              Unlock Airs Pro Themes
            </h1>

            <p className="text-gray-400 text-base text-center max-w-sm">
              Airs Pro is a one-time upgrade. Unlock premium themes instantly
              after checkout. No recurring charges.
            </p>

            <form
              id="subscriptionForm"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full max-w-sm text-left"
              autoComplete="off"
            >
              <div className="flex flex-col gap-2 mb-1">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-xl text-white bg-black"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded-xl text-white bg-black"
                  placeholder="********"
                  required
                />
              </div>
              {!isLogin && (
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="w-full p-2 border border-gray-300 rounded-xl text-white bg-black"
                    placeholder="********"
                    required={!isLogin}
                  />
                </div>
              )}
              {!isLogin && (
                <p className="text-gray-400 text-sm text-center max-w-sm">
                  <strong>Remember</strong> this email and password to log in on
                  the <strong>Pro</strong> tab
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-2 rounded-xl transition ${
                  loading
                    ? "bg-gray-100 text-black opacity-70 cursor-not-allowed"
                    : "bg-gray-100 text-black cursor-pointer"
                }`}
              >
                {loading ? "Loading..." : "Create Pro Account & Pay ($4.99)"}
              </button>
              <p className="text-gray-400 text-sm text-center max-w-sm -mt-2">
                <i>Secure checkout via Stripe</i>
              </p>
              {isLogin && (
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-gray-400 hover:text-gray-300 text-sm text-center cursor-pointer"
                >
                  Back to Sign Up
                </button>
              )}
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
