import { ArrowDown } from "lucide-react";
import experienceIcon from "@assets/experience_1750467136272.png";
import educationIcon from "@assets/education_1750467136271.png";
import aboutImage from "@assets/IMG_20250607_172417_116_1750468447854.webp";

export default function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-600 text-lg mb-2">Get To Know More</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-primary mb-16">About Me</h1>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="animate-slide-in-left">
            <img 
              src={aboutImage} 
              alt="Pranesh N - AI and Data Science Student" 
              className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-xl hover-lift"
            />
          </div>
          <div className="flex-1 animate-slide-in-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover-lift text-center">
                <img src={experienceIcon} alt="Experience icon" className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Experience</h3>
                <p className="text-gray-600">Fresher<br/>5+ Months Total Experience</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover-lift text-center">
                <img src={educationIcon} alt="Education icon" className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Education</h3>
                <p className="text-gray-600">B.Tech in AI & Data Science<br/>Dr. NGP Institute of Technology</p>
              </div>
            </div>
            <div className="text-container">
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Motivated B.Tech student specializing in Artificial Intelligence and Data Science with a strong foundation in data science, machine learning, and programming. Experienced in hands-on projects and internships with exposure to deep learning, data visualization, and intelligent systems. Quick learner with good communication and creativity, aiming to apply innovative solutions to real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
      <ArrowDown 
        className="absolute bottom-8 right-8 w-8 h-8 animate-bounce-slow cursor-pointer text-primary hover:text-secondary transition-colors duration-300" 
        onClick={() => scrollToSection('experience')}
      />
    </section>
  );
}
