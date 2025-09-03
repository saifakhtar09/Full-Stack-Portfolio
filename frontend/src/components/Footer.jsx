import { useEffect } from "react";

// Load Google Font dynamically
const loadGoogleFont = () => {
  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

export default function Footer() {
  useEffect(() => {
    loadGoogleFont();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 font-sans" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Branding */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold mb-4 hover:text-primary transition-colors duration-300">
              Saif <span className="text-primary">Developer</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Helping entrepreneurs transform their ideas into successful digital products. 
              Let's build something amazing together.
            </p>
            <div className="flex space-x-4">
              {["linkedin", "github", "twitter", "dribbble"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-gray-400 hover:text-primary transition-colors duration-300 text-xl"
                >
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {["Web Development", "Mobile Apps", "Cloud Solutions", "Consulting"].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {[
                { name: "Home", id: "home" },
                { name: "Portfolio", id: "projects" },
                { name: "Testimonials", id: "testimonials" },
                { name: "Contact", id: "contact" },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; 2025 Saif Developer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
