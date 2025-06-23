import { Mail, Phone, MapPin } from "lucide-react";
import emailIcon from "@assets/email_1750467136272.png";
import linkedinIcon from "@assets/linkedin_1750467136273.png";
import githubIcon from "@assets/github_1750467136273.png";

export default function ContactSection() {
  const contactInfo = {
    email: "praneshkriss@gmail.com",
    phone: "+91-7538833882",
    location: "Coimbatore, Tamil Nadu"
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gray-600 text-lg mb-2">Get in Touch</p>
        <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-16">Contact Me</h1>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 animate-scale-up">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300"
                 onClick={() => window.open(`mailto:${contactInfo.email}`, '_blank')}>
              <img src={emailIcon} alt="Email icon" className="w-10 h-10" />
              <div className="text-left">
                <p className="text-lg font-medium text-gray-800">{contactInfo.email}</p>
                <p className="text-sm text-gray-600">Email</p>
              </div>
            </div>
            <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors duration-300"
                 onClick={() => window.open(`tel:${contactInfo.phone}`, '_blank')}>
              <Phone className="w-10 h-10 text-primary" />
              <div className="text-left">
                <p className="text-lg font-medium text-gray-800">{contactInfo.phone}</p>
                <p className="text-sm text-gray-600">Phone</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-10 h-10 text-primary" />
              <div className="text-left">
                <p className="text-lg font-medium text-gray-800">{contactInfo.location}</p>
                <p className="text-sm text-gray-600">Location</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">Let's connect and discuss opportunities in AI & Data Science!</p>
            <div className="flex justify-center gap-6">
              <img 
                src={linkedinIcon} 
                alt="LinkedIn" 
                className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300" 
                onClick={() => window.open('https://linkedin.com', '_blank')}
              />
              <img 
                src={githubIcon} 
                alt="GitHub" 
                className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-300" 
                onClick={() => window.open('https://github.com', '_blank')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
