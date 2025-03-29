
import React from 'react';
import ImpactCounter from '../ImpactCounter';
import { Users, Calendar } from 'lucide-react';

const ImpactSection: React.FC = () => {
  return (
    <section id="impact-section" className="py-16 bg-gradient-to-r from-lakshya-blue via-blue-600 to-lakshya-orange text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif opacity-90">Our Impact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 border border-white/20">
            <div className="flex justify-center mb-4">
              <Users size={48} className="text-white" />
            </div>
            <div className="text-4xl font-bold mb-2">
              <ImpactCounter end={50} duration={2000} />+
            </div>
            <p className="text-lg opacity-80">Children Educated</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 border border-white/20">
            <div className="flex justify-center mb-4">
              <Calendar size={48} className="text-white" />
            </div>
            <div className="text-4xl font-bold mb-2">
              <ImpactCounter end={5} duration={2000} />+
            </div>
            <p className="text-lg opacity-80">Years of Service</p>
          </div>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto text-center animate-on-scroll">
          <p className="text-xl">
            "Served over <span className="font-bold">50</span> underprivileged children in Kota, Rajasthan."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
