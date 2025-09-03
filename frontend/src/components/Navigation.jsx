import { useState } from "react";
import { Link } from "react-scroll";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full px-4 lg:px-20 py-4 flex justify-between items-center shadow-md bg-gray-900 z-50">
      <div className="text-2xl font-bold cursor-pointer hover:text-blue-500 transition-colors duration-300">
        MyPortfolio
      </div>

      <ul className="hidden md:flex space-x-8">
        {["Home", "Skills", "Projects", "Testimonials", "Services", "Contact"].map(
          (section) => (
            <li key={section}>
              <Link
                to={section.toLowerCase()}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
              >
                {section}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span className="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
        <span className="block w-6 h-0.5 bg-white mb-1 transition-all duration-300"></span>
        <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col items-center py-4 md:hidden shadow-lg">
          {["Home", "Skills", "Projects", "Testimonials", "Services", "Contact"].map(
            (section) => (
              <li key={section} className="py-2">
                <Link
                  to={section.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-blue-500 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {section}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </nav>
  );
}
