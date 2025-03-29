
import React from 'react';
import ImpactCounter from '../ImpactCounter';

const ImpactSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-lakshya-blue to-blue-700 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 font-serif">Our Impact</h2>
          
          <div className="flex flex-col items-center justify-center">
            <ImpactCounter endValue={50} prefix="" suffix="+" />
            <p className="mt-4 text-xl">Served over 50 underprivileged children in Kota</p>
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto">
            <p className="text-lg">
              Through our programs, we've seen remarkable improvements in academic performance,
              increased school attendance, and growing confidence in our students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
