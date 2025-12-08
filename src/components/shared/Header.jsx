import { useState } from "react";

export function Header() {
const [open, setOpen] = useState(false);
  return (
 <header className="sticky top-0 z-40 bg-gradient-to-b from-gray-900/95 to-gray-900/75 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://dev252.kodesolution.com/digiplus/wp-content/themes/digiplus/assets/images/logo/logo-wide-white.png"
            className="w-32"
            alt="logo"
          />
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium relative">
          <a href="#" className="transition hover:text-yellow-400">Home</a>

          {/* Pages Dropdown - CLICK TO OPEN */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="transition hover:text-yellow-400 flex items-center gap-1"
            >
              Pages ▼
            </button>

            <div
              className={`absolute left-0 mt-2 w-40 rounded-lg bg-gray-800 border border-gray-700 shadow-lg overflow-hidden transition-all duration-300 origin-top ${
                open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
              }`}
            >
              <a className="block px-4 py-2 hover:bg-gray-700" href="#">About</a>
              <a className="block px-4 py-2 hover:bg-gray-700" href="#">Team</a>
              <a className="block px-4 py-2 hover:bg-gray-700" href="#">Pricing</a>
              <a className="block px-4 py-2 hover:bg-gray-700" href="#">FAQ</a>
            </div>
          </div>

          <a href="#" className="transition hover:text-yellow-400">Services</a>
          <a href="#" className="transition hover:text-yellow-400">Projects</a>
          <a href="#" className="transition hover:text-yellow-400">Blog</a>
          <a href="#" className="transition hover:text-yellow-400">Contact</a>
        </nav>

        {/* Call + menu icon */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-200">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400/10">
              📞
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.16em]">Call Anytime</p>
              <p className="text-sm font-semibold">017-50050088</p>
            </div>
          </div>
          <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">☰</button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="inline-flex md:hidden h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm">
          ☰
        </button>
      </div>
    </header>
  );
}