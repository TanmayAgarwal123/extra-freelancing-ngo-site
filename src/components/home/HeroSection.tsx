
import React from 'react';
import YouTubeEmbed from '../YouTubeEmbed';

const HeroSection: React.FC = () => {
  return (
    <section className="relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 font-serif text-gray-800">
            Empowering Lives Through <span className="text-lakshya-blue">Education</span>
          </h1>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We believe every child deserves access to quality education regardless of their background.
            Join us in our mission to create a brighter future for underprivileged children.
          </p>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <YouTubeEmbed videoId="yrvyifeCtec" title="Lakshya NGO Introduction" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
