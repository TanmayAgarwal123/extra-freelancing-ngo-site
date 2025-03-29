
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif text-gray-800">Who We Are</h2>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-4">
              Lakshya NGO is dedicated to transforming lives through education. Founded with a heartfelt mission, we focus on providing quality education to underprivileged children.
            </p>
            <p>
              With a dedicated team of passionate teachers, we nurture a learning environment where students not only excel academically but also develop into compassionate individuals.
            </p>
          </div>
          
          <div className="mt-8">
            <Link to="/about">
              <Button variant="outline" className="border-lakshya-blue text-lakshya-blue hover:bg-lakshya-blue hover:text-white transition-colors">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
