
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpen, Heart, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-100 rounded-full opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-20 w-60 h-60 bg-orange-100 rounded-full opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-40 right-1/3 w-20 h-20 bg-green-100 rounded-full opacity-30 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold mb-6 font-serif text-gray-800">Who We Are</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-lakshya-blue to-lakshya-orange mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:shadow-xl transition-all duration-300 animate-on-scroll">
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  <span className="text-lakshya-blue font-bold text-xl">Lakshya NGO</span> is dedicated to transforming lives through education. Founded with a heartfelt mission, we focus on providing quality education to underprivileged children.
                </p>
                <p className="mb-6">
                  With a dedicated team of passionate teachers, we nurture a learning environment where students not only excel academically but also develop into compassionate individuals.
                </p>
                
                <div className="flex justify-center mt-8">
                  <Link to="/about">
                    <Button className="bg-lakshya-blue hover:bg-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-on-scroll">
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-md flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div className="mr-4 mt-1 bg-lakshya-blue p-3 rounded-full text-white">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To provide quality education to underprivileged children and empower them to build a better future.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-lg shadow-md flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div className="mr-4 mt-1 bg-lakshya-orange p-3 rounded-full text-white">
                  <Heart size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Make Donations</h3>
                  <p className="text-gray-600">
                    Your contributions help us sustain and expand our educational programs for more children.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg shadow-md flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div className="mr-4 mt-1 bg-green-500 p-3 rounded-full text-white">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">We Need Volunteers</h3>
                  <p className="text-gray-600">
                    Join our team of dedicated volunteers to make a direct impact on children's education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
