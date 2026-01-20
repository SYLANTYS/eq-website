// pages/help.jsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HelpPage() {
  return (
    <div className="bg-black">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-12 text-zinc-900 dark:text-zinc-100">
        <h1 className="text-3xl font-bold mb-2">Help & Support</h1>
        <p className="text-sm text-zinc-500 mb-8">Last updated: Jan 19, 2026</p>

        {/* ===================== */}
        {/* Getting Started */}
        {/* ===================== */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Airs Audio System lets you{" "}
              <strong>EQ any audio on the web in real time</strong>.
            </li>
            <li>
              Open any website that plays audio, then click the Airs icon to
              begin EQing that tab.
            </li>
            <li>
              The current tab is EQed automatically when you open the extension.
            </li>
            <li>
              To EQ another tab, switch to it and click the Airs icon again.
            </li>
          </ul>
        </section>

        {/* ===================== */}
        {/* Equalizer Controls */}
        {/* ===================== */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Equalizer Controls</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Each draggable dot represents an EQ filter affecting a specific
              frequency range.
            </li>
            <li>
              Drag dots left or right to target lower or higher frequencies.
            </li>
            <li>Drag dots up or down to boost or cut those frequencies.</li>
            <li>
              Shelf filters affect everything above or below a cutoff frequency,
              while peaking filters target a focused frequency range.
            </li>
            <li>
              Shift-dragging a filter adjusts its width (Q value), changing how
              narrow or wide the effect is.
            </li>
          </ul>
        </section>

        {/* ===================== */}
        {/* Spectrum Visualizer */}
        {/* ===================== */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Spectrum Visualizer</h2>
          <p>
            The spectrum visualizer shows the audio you're listening to in real
            time, along with the impact of your EQ changes. This helps you see
            how boosts and cuts affect the sound across the frequency range.
          </p>
        </section>

        {/* ===================== */}
        {/* Pro Features */}
        {/* ===================== */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Pro Features</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Unlock additional themes and visual styles in the{" "}
              <strong>Pro</strong> tab.
            </li>
            <li>
              Access enhanced visualizations and advanced controls as they're
              released.
            </li>
          </ul>
        </section>

        {/* ===================== */}
        {/* Performance & Compatibility */}
        {/* ===================== */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Performance & Compatibility
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Airs works with <strong>any website</strong> that plays audio.
            </li>
            <li>
              Audio processing happens locally in your browser using the Web
              Audio API.
            </li>
            <li>
              If audio stops processing, reopening the extension or refreshing
              the tab will restore EQ.
            </li>
          </ul>
        </section>

        {/* ===================== */}
        {/* Privacy */}
        {/* ===================== */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>All audio processing happens locally in your browser.</li>
            <li>
              Airs does <strong>not</strong> record, store, or transmit your
              audio.
            </li>
            <li>No listening history or website data is collected.</li>
          </ul>
        </section>

        {/* ===================== */}
        {/* Troubleshooting */}
        {/* ===================== */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Make sure the tab is actively playing audio before opening Airs.
            </li>
            <li>
              If EQ stops responding, refresh the page and reopen the extension.
            </li>
            <li>
              Some sites may require user interaction (click/play) before audio
              can be processed.
            </li>
          </ul>
        </section>

        {/* ===================== */}
        {/* Support */}
        {/* ===================== */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p>
            If you have questions, bug reports, or feature requests, contact me
            at <strong>2017catch.21@gmail.com</strong>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
