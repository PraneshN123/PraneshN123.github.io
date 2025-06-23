export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="py-12 px-4 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-8 text-lg">
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                About
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('experience')}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
        <p className="text-gray-300">&copy; 2024 Pranesh N. All rights reserved.</p>
      </div>
    </footer>
  );
}
