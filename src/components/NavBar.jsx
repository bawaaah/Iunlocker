import { useState } from "react";

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <h1 className="text-xl font-bold">Iunlocker Solutions</h1>

        {/* Hamburger menu button for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation menu */}
        <ul
          className={`fixed top-0 left-0 w-full h-full bg-blue-900 flex flex-col items-center justify-center space-y-6 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:static md:transform-none md:flex md:flex-row md:space-y-0 md:space-x-6 md:bg-transparent`}
        >
          <li>
            <button
              className="text-lg hover:text-orange-400"
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection("products");
              }}
            >
              Collection
            </button>
          </li>
          <li>
            <button
              className="text-lg hover:text-orange-400"
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection("accessories");
              }}
            >
              Accessories
            </button>
          </li>
          <li>
            <button
              className="text-lg hover:text-orange-400"
              onClick={() => {
                setIsMenuOpen(false);
                scrollToSection("contact");
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
