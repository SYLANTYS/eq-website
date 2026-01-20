"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  //supabase will handle user creation and authentication
  //replace this function with subscribeAction from src/actions/stripe.js
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;

    try {
      const res = await fetch("/api/create-portal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        window.location.href = data.url;
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error("Portal error:", err);
      alert("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black">
      <Navbar />
      <main className="min-h-[calc(100vh-297px)] flex items-center justify-center px-6 text-white mb-8">
        <div className="max-w-screen-md w-full mx-auto">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-2xl font-bold text-center">
              Make One-Time Payment
            </h1>

            <p className="text-gray-400 text-base text-center max-w-sm">
              Airs Pro is a $5 upgrade. Unlock premium themes + all future Pro
              updates. No recurring charges.
            </p>

            <form
              id="subscriptionForm"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full max-w-sm text-left"
              autoComplete="off"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-xl text-white"
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
                  className="w-full p-2 border border-gray-300 rounded-xl text-white"
                  placeholder="********"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 border border-gray-300 rounded-xl text-white"
                  placeholder="********"
                  required
                />
              </div>
              <p className="text-gray-400 text-sm text-center max-w-sm">
                <i>
                  You will use this email and password to log in on the{" "}
                  <strong>Pro</strong> tab
                </i>
              </p>
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-2 rounded-xl transition ${
                  loading
                    ? "bg-gray-100 text-black opacity-70 cursor-not-allowed"
                    : "bg-gray-100 text-black cursor-pointer"
                }`}
              >
                {loading ? "Loading..." : "Create Pro Account ($4.99 USD)"}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
