import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold text-primary hover:text-secondary transition-colors duration-300 cursor-pointer">
              Pranesh N
            </div>
            <ul className="hidden md:flex space-x-8 text-lg font-medium">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-primary hover:text-secondary transition-colors duration-300 hover:underline hover:underline-offset-4"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="text-primary hover:text-secondary transition-colors duration-300 hover:underline hover:underline-offset-4"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-primary hover:text-secondary transition-colors duration-300 hover:underline hover:underline-offset-4"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-primary hover:text-secondary transition-colors duration-300 hover:underline hover:underline-offset-4"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`fixed top-0 w-full z-50 md:hidden transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="flex justify-between items-center h-20 px-4">
          <div className="text-xl font-bold text-primary">Pranesh N</div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary" />
            ) : (
              <Menu className="h-6 w-6 text-primary" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="py-2">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full px-4 py-3 text-left text-primary hover:bg-gray-50 hover:text-secondary transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="block w-full px-4 py-3 text-left text-primary hover:bg-gray-50 hover:text-secondary transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full px-4 py-3 text-left text-primary hover:bg-gray-50 hover:text-secondary transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full px-4 py-3 text-left text-primary hover:bg-gray-50 hover:text-secondary transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
