// pages/terms.jsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 text-zinc-900 dark:text-zinc-100">
        <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
        <p className="text-sm text-zinc-500 mb-8">Last updated: Jan 19, 2026</p>

        <p className="mb-6">
          Please read these Terms and Conditions carefully before using the Airs
          Audio System browser extension.
        </p>

        {/* ===================== */}
        {/* Acknowledgment */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Acknowledgment</h2>
        <p className="mb-4">
          These Terms govern your access to and use of Airs Audio System
          (&quot;the Service&quot;). By installing or using the extension, you
          agree to be bound by these Terms.
        </p>
        <p className="mb-6">
          If you do not agree to these Terms, you may not use the Service.
        </p>

        {/* ===================== */}
        {/* Accounts & Access */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Accounts and Access
        </h2>
        <p className="mb-4">
          Airs Audio System can be used without an account for basic features.
          An account with a valid email address is required to access
          <strong> Pro features</strong>.
        </p>
        <p className="mb-6">
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activity that occurs under your
          account.
        </p>

        {/* ===================== */}
        {/* Pro Features & Payments */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Pro Features & Payments
        </h2>
        <p className="mb-4">
          Pro features may require a paid subscription. Subscription details,
          pricing, and billing terms are presented at the time of purchase.
        </p>
        <p className="mb-6">
          Payments are processed through third-party payment providers. Airs
          Audio System does not store your payment information.
        </p>

        {/* ===================== */}
        {/* Acceptable Use */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Acceptable Use</h2>
        <p className="mb-4">
          You agree not to misuse the Service, attempt to interfere with its
          normal operation, or use it in a way that violates applicable laws or
          browser policies.
        </p>
        <p className="mb-6">
          You may not attempt to reverse engineer, tamper with, or abuse the
          extension or related services.
        </p>

        {/* ===================== */}
        {/* Termination */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Termination</h2>
        <p className="mb-4">
          You may stop using the Service at any time by uninstalling the
          extension or requesting account deletion.
        </p>
        <p className="mb-6">
          We reserve the right to suspend or terminate access to Pro features if
          these Terms are violated or if abuse or malicious behavior is
          detected.
        </p>

        {/* ===================== */}
        {/* Limitation of Liability */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Limitation of Liability
        </h2>
        <p className="mb-4">
          To the fullest extent permitted by law, Airs Audio System shall not be
          liable for any indirect, incidental, or consequential damages arising
          from the use of the Service.
        </p>
        <p className="mb-6">
          The Service is provided &quot;as is&quot; and &quot;as available&quot;
          without warranties of any kind. We do not guarantee uninterrupted
          operation or compatibility with all websites or audio sources.
        </p>

        {/* ===================== */}
        {/* Governing Law */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Governing Law</h2>
        <p className="mb-6">
          These Terms are governed by the laws of the State of Maine, without
          regard to its conflict of law principles.
        </p>

        {/* ===================== */}
        {/* Changes */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">
          Modifications to Terms
        </h2>
        <p className="mb-6">
          We may update these Terms from time to time. Updates will be posted on
          this page. Continued use of the Service after changes take effect
          constitutes acceptance of the revised Terms.
        </p>

        {/* ===================== */}
        {/* Contact */}
        {/* ===================== */}
        <h2 className="text-2xl font-semibold mt-10 mb-4">Contact</h2>
        <p className="mb-2">
          If you have questions about these Terms, contact me at:
        </p>
        <p className="font-semibold">2017catch.21@gmail.com</p>
      </main>
      <Footer />
    </div>
  );
}
