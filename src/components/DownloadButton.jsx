"use client";

import { GoogleChromeLogoIcon } from "@phosphor-icons/react";

export default function DownloadButton({ scale }) {
  return (
    <a
      href="https://chromewebstore.google.com/detail/airs-audio-system/ibhmgglejliilciffebcbnklceoblcbe"
      className={`flex items-center bg-green-600 text-white rounded-lg px-2 py-2 space-x-1 hover:bg-green-600/95 transition max-w-fit ${scale}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GoogleChromeLogoIcon size={28} weight="fill" />
      <div className="flex flex-col items-start leading-none">
        <span className="text-xs leading-none">Link to Chrome</span>
        <span className="text-lg font-semibold leading-none">Web Store</span>
      </div>
    </a>
  );
}
