"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white hover:text-orange-400 transition-colors z-40"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`fixed top-16 left-0 right-0 bg-slate-800 border-b border-slate-700 md:hidden transition-all duration-300 z-35 ${
          isOpen ? "max-h-96 overflow-y-auto" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col space-y-1 px-4 py-4">
          <Link
            href="/"
            className="text-white hover:text-orange-400 hover:bg-slate-700 px-3 py-2 rounded transition-colors block"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-white hover:text-orange-400 hover:bg-slate-700 px-3 py-2 rounded transition-colors block"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            href="/areas/stockport"
            className="text-white hover:text-orange-400 hover:bg-slate-700 px-3 py-2 rounded transition-colors block"
            onClick={closeMenu}
          >
            Areas
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-orange-400 hover:bg-slate-700 px-3 py-2 rounded transition-colors block"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-orange-400 hover:bg-slate-700 px-3 py-2 rounded transition-colors block"
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link
            href="/admin/login"
            className="text-white/50 hover:text-white hover:bg-slate-700 px-3 py-2 rounded transition-colors block text-sm flex items-center gap-2"
            onClick={closeMenu}
          >
            ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â°ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¸ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ Admin Login
          </Link>
          <div className="border-t border-slate-600 my-2" />
          <a
            href="tel:07309903243"
            className="text-orange-400 hover:text-orange-300 px-3 py-2 rounded font-semibold flex items-center gap-2"
            onClick={closeMenu}
          >
            <Phone className="w-4 h-4" />
            Call: 07309903243
          </a>
        </div>
      </nav>
    </>
  )
}
