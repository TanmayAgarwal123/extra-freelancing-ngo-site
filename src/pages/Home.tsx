
import React, { useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import ImpactSection from '@/components/home/ImpactSection';
import AboutSection from '@/components/home/AboutSection';
import ActionSection from '@/components/home/ActionSection';
import TeamSection from '@/components/home/TeamSection';

const Home: React.FC = () => {
  useEffect(() => {
    // Add animation classes to elements as they scroll into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      element.classList.add('opacity-0');
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="bg-gradient-to-br from-white to-gray-50">
      <HeroSection />
      <ImpactSection />
      <AboutSection />
      <ActionSection />
      <TeamSection />
    </div>
  );
};

export default Home;
