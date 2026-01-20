// pages/privacy.jsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 text-zinc-900 dark:text-zinc-100">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-zinc-500 mb-8">Last updated: Jan 19, 2026</p>

        <p className="mb-6">
          This Privacy Policy explains how Airs Audio System handles data when
          you use the extension. Airs is designed to be privacy-first and
          performs all audio processing locally on your device.
        </p>

        {/* ===================== */}
        {/* Information Collection */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Information We Collect
        </h2>
        <p className="mb-6">
          Airs Audio System collects an email address when you create an account
          to access Pro features. This information is used solely for
          authentication, subscription status, and account management.
        </p>

        {/* ===================== */}
        {/* Audio Data */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Audio Data</h2>
        <p className="mb-6">
          All audio processing is done locally in your browser using the Web
          Audio API. Audio from websites is never recorded, stored, or sent to
          any external servers.
        </p>

        {/* ===================== */}
        {/* Tracking */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Tracking & Analytics
        </h2>
        <p className="mb-6">
          Airs does not use analytics tools, tracking pixels, cookies, or
          telemetry. We do not monitor your browsing activity, listening habits,
          or EQ settings.
        </p>

        {/* ===================== */}
        {/* Local Storage */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Local Storage</h2>
        <p className="mb-6">
          Any saved preferences, presets, or theme selections are stored locally
          in your browser using extension storage. This data never leaves your
          device.
        </p>

        {/* ===================== */}
        {/* Third Parties */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Third-Party Services
        </h2>
        <p className="mb-6">
          Airs Audio System does not share data with third parties. The
          extension does not integrate with analytics providers, advertisers, or
          external audio services.
        </p>

        {/* ===================== */}
        {/* Permissions */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Browser Permissions
        </h2>
        <p className="mb-6">
          The extension requires access to active tabs in order to apply EQ to
          audio sources. This access is used solely for real-time audio
          processing and nothing else.
        </p>

        {/* ===================== */}
        {/* Children */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Children's Privacy
        </h2>
        <p className="mb-6">
          Airs Audio System does not knowingly collect any data from children.
          Because no personal data is collected, there is no age-based data
          processing.
        </p>

        {/* ===================== */}
        {/* Policy Changes */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Changes to This Policy
        </h2>
        <p className="mb-6">
          If this Privacy Policy changes, updates will be posted on this page.
          Continued use of the extension after changes constitutes acceptance of
          the updated policy.
        </p>

        {/* ===================== */}
        {/* Contact */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
        <p className="mb-2">
          If you have questions about this Privacy Policy or how Airs Audio
          System handles data, contact:
        </p>
        <p className="font-semibold">2017catch.21@gmail.com</p>
      </main>
      <Footer />
    </div>
  );
}
