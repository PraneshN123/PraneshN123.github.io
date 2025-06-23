import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@assets/profile image_1750467487346.png";
import linkedinIcon from "@assets/linkedin_1750467136273.png";
import githubIcon from "@assets/github_1750467136273.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadCV = () => {
    // Download the actual PDF resume
    const link = document.createElement('a');
    link.href = '/Pranesh Resume_1750468583041.pdf';
    link.download = 'Pranesh_N_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="profile" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <div className="animate-fade-in">
            <img 
              src={profileImage} 
              alt="Pranesh N profile picture" 
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-300" 
            />
          </div>
          <div className="text-center lg:text-left animate-slide-up">
            <p className="text-lg text-gray-600 font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4 typewriter">Pranesh N</h1>
            <p className="text-xl lg:text-2xl text-gray-700 font-medium mb-8">AI & Data Science Student</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={downloadCV}
                className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Download CV
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
              >
                Contact Info
              </Button>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <img 
                src={linkedinIcon} 
                alt="LinkedIn profile" 
                className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300" 
                onClick={() => window.open('https://linkedin.com', '_blank')}
              />
              <img 
                src={githubIcon} 
                alt="GitHub profile" 
                className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300" 
                onClick={() => window.open('https://github.com', '_blank')}
              />
            </div>
          </div>
        </div>
      </div>
      <ArrowDown 
        className="absolute bottom-8 right-8 w-8 h-8 animate-bounce-slow cursor-pointer text-primary hover:text-secondary transition-colors duration-300" 
        onClick={() => scrollToSection('about')}
      />
    </section>
  );
}
