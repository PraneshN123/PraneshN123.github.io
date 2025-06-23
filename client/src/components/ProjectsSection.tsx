import { ArrowDown, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import signLanguageImage from "@assets/image_1750469370494.png";

export default function ProjectsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const mainProject = {
    title: "Ensemble CNN Architecture for Banana Crop Disease Detection",
    description: "An integrated mobile framework for sustainable banana crop management using ensemble CNN-based models capable of detecting multiple banana leaf diseases with high accuracy. Promotes sustainable farming through early detection and actionable insights.",
    techStack: ["Python", "CNN", "Deep Learning", "Mobile Development"],
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
  };

  const presentations = [
    {
      type: "International Conference",
      title: "Sign Language Detection System",
      description: "Presented a research paper on a deep learning model for recognizing and classifying sign language gestures, showcasing AI's role in improving accessibility for the hearing-impaired community.",
      image: signLanguageImage
    },
    {
      type: "National Conference",
      title: "Swarm Intelligence in Logistics",
      description: "Presented a paper proposing a logistics optimization model using swarm intelligence algorithms, highlighting the role of intelligent automation in supply chain and delivery systems.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-600 text-lg mb-2">Browse My Recent</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-primary mb-16">Projects & Achievements</h1>
        
        {/* Main Project */}
        <div className="mb-16 animate-scale-up">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-xl hover-lift p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={mainProject.image} 
                  alt="Banana crop disease detection AI project" 
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">{mainProject.title}</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {mainProject.description}
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {mainProject.techStack.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-secondary text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="flex items-center gap-2"
                    onClick={() => window.open('https://github.com', '_blank')}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conference Presentations */}
        <div className="animate-fade-in">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8">Conference Presentations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {presentations.map((presentation, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover-lift ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                <div className="mb-4">
                  <img 
                    src={presentation.image} 
                    alt={`${presentation.type} presentation`} 
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{presentation.type}</h3>
                <h4 className="font-semibold text-gray-800 mb-3">{presentation.title}</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {presentation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ArrowDown 
        className="absolute bottom-8 right-8 w-8 h-8 animate-bounce-slow cursor-pointer text-primary hover:text-secondary transition-colors duration-300" 
        onClick={() => scrollToSection('contact')}
      />
    </section>
  );
}
