"use client";

import { useEffect, useState } from "react";
import { ListIcon } from "@phosphor-icons/react";

import DownloadButton from "./DownloadButton";
import Logo from "./Logo";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <nav className="p-4 text-white sticky top-0 z-50 backdrop-blur-xl">
        <div className="flex justify-between items-center">
          <Logo />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="text-white"
          >
            <ListIcon size={28} />
          </button>
        </div>
        {menuOpen && (
          <div className="flex flex-col space-y-2 mt-4">
            <div className="text-md py-2">
              <DownloadButton />
            </div>
          </div>
        )}
      </nav>
    );
  }

  return (
    <nav className="flex justify-between items-center p-4 text-white sticky top-0 z-50 backdrop-blur-xl">
      <Logo />
      <DownloadButton />
    </nav>
  );
}
