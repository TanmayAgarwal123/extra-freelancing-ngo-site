
import React from 'react';
import ActionCard from '../ActionCard';
import { BookOpen, Heart, Users } from 'lucide-react';

const ActionSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif text-gray-800">How You Can Help</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ActionCard 
            title="Our Mission" 
            description="Learn about our vision to provide quality education and create opportunities for underprivileged children."
            buttonText="Read More"
            link="/about"
            icon={<BookOpen size={32} />}
          />
          
          <ActionCard 
            title="Make Donations" 
            description="Your contribution helps us provide better facilities, learning materials, and resources for our students."
            buttonText="Donate Now"
            link="/donate"
            icon={<Heart size={32} />}
            bgColor="bg-lakshya-light-orange"
          />
          
          <ActionCard 
            title="We Need Volunteers" 
            description="Share your knowledge and skills with our students. Make a difference in their lives as a volunteer."
            buttonText="Join Us"
            link="/contact"
            icon={<Users size={32} />}
          />
        </div>
      </div>
    </section>
  );
};

export default ActionSection;
