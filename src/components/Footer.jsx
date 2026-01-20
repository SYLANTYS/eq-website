import DownloadButton from "./DownloadButton";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="pt-7 bg-black/90 text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section: Logo/Tagline + Download */}
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-sm text-gray-400 mt-2">Download Airs Audio</p>
          <div className="text-md">
            <DownloadButton />
          </div>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="text-base font-semibold text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/privacy" className="hover:text-gray-200">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-200">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-base font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/help" className="hover:text-gray-200">
                Help
              </a>
            </li>
            <li>
              <a
                href="mailto:2017catch.21@gmail.com"
                className="hover:text-gray-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 mt-6 py-2 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Airs Audio. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          {/* Add social icons here if needed */}
        </div>
      </div>
    </footer>
  );
}
