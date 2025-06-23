import { ArrowDown, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const workExperience = [
    {
      title: "Quality Control (QC) Associate",
      company: "Gessdemn Global Services",
      duration: "June 2024 – 1 Month",
      responsibilities: [
        "Performed quality checks on deliverables to ensure accuracy and compliance with client specifications",
        "Identified and reported data discrepancies, contributing to improved process reliability",
        "Collaborated with the operations team to maintain quality standards in project execution"
      ]
    },
    {
      title: "Data Science Intern",
      company: "Appin Technology",
      duration: "Jan 2023 – 4 Weeks",
      responsibilities: [
        "Worked on real-time datasets to perform preprocessing and visualization using Python",
        "Gained hands-on experience in machine learning model building and evaluation",
        "Participated in end-to-end project development and reporting"
      ]
    }
  ];

  const programmingSkills = [
    { name: "Python", level: "Beginner" },
    { name: "SQL", level: "Beginner" },
    { name: "Unity", level: "Game Dev" },
    { name: "UI/UX", level: "Design" }
  ];

  const aiSkills = [
    { name: "AI", level: "Beginner" },
    { name: "Machine Learning", level: "Beginner" },
    { name: "Manual Testing", level: "Learning" },
    { name: "Database", level: "Beginner" }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 relative">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-600 text-lg mb-2">Explore My</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-center text-primary mb-16">Experience & Skills</h1>
        
        {/* Work Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8">Work Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workExperience.map((job, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover-lift ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
                <h3 className="text-xl font-semibold text-primary mb-2">{job.title}</h3>
                <p className="text-secondary font-medium mb-2">{job.company}</p>
                <p className="text-gray-600 mb-4">{job.duration}</p>
                <ul className="text-gray-700 space-y-2">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-4 h-4 mt-1 mr-2 text-accent flex-shrink-0" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="animate-scale-up">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover-lift animate-slide-in-left">
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">Programming & Development</h3>
              <div className="grid grid-cols-2 gap-4">
                {programmingSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-accent" />
                    <div>
                      <h4 className="font-medium text-gray-800">{skill.name}</h4>
                      <p className="text-sm text-gray-600">{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover-lift animate-slide-in-right">
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">AI & Data Science</h3>
              <div className="grid grid-cols-2 gap-4">
                {aiSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-accent" />
                    <div>
                      <h4 className="font-medium text-gray-800">{skill.name}</h4>
                      <p className="text-sm text-gray-600">{skill.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArrowDown 
        className="absolute bottom-8 right-8 w-8 h-8 animate-bounce-slow cursor-pointer text-primary hover:text-secondary transition-colors duration-300" 
        onClick={() => scrollToSection('projects')}
      />
    </section>
  );
}
