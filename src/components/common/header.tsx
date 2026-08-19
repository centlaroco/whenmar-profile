import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold text-gray-900"
        >
          Whenmar
        </Link>

        <div className="flex gap-2">
          <Link
            to="/"
            className="px-4 py-2 text-gray-600 hover:text-violet-600"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="px-4 py-2 text-gray-600 hover:text-violet-600"
          >
            About
          </Link>

          <Link
            to="/contact"
            className="px-4 py-2 text-gray-600 hover:text-violet-600"
          >
            Contact
          </Link>
        </div>

      </div>
    </nav>
  )
}