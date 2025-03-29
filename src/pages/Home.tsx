
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ImpactSection from '@/components/home/ImpactSection';
import AboutSection from '@/components/home/AboutSection';
import ActionSection from '@/components/home/ActionSection';
import TeamSection from '@/components/home/TeamSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ImpactSection />
      <AboutSection />
      <ActionSection />
      <TeamSection />
    </div>
  );
};

export default Home;
