
import React from 'react';
import YouTubeEmbed from '../YouTubeEmbed';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToNextSection = () => {
    const impactSection = document.querySelector('#impact-section');
    if (impactSection) {
      impactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-12 md:py-24 bg-gradient-to-r from-blue-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative z-10 animate-fade-in">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif bg-clip-text text-transparent bg-gradient-to-r from-lakshya-blue to-lakshya-orange">
              Empowering Lives Through Education
            </h1>
            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto text-lg md:text-xl">
              We believe every child deserves access to quality education regardless of their background.
              Join us in our mission to create a brighter future for underprivileged children.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-[1.01] transition-all duration-500 border-4 border-white">
            <YouTubeEmbed videoId="yrvyifeCtec" title="Lakshya NGO Introduction" />
          </div>
          
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
            <div 
              onClick={scrollToNextSection}
              className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
              <ArrowDown className="text-lakshya-orange" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-lakshya-light-blue rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-lakshya-light-orange rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
    </section>
  );
};

export default HeroSection;
