
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import TeamMember from '@/components/TeamMember';
import { Users } from 'lucide-react';

// Team member data with images - matching the ones from TeamSection
const teamMembers = [
  { 
    name: "Manorama Gupta", 
    designation: "Founder & President",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
  },
  { 
    name: "Rakesh Gupta", 
    designation: "Co-Founder & Teacher",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop"
  },
  { 
    name: "Sunita Agrawal", 
    designation: "Director Member & Teacher",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop"
  },
  { name: "Govind Singh", designation: "Treasurer" },
  { name: "Ritu Sharma", designation: "Director Member" },
  { 
    name: "Tanmay Agarwal", 
    designation: "Teacher",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
  },
  { name: "Mahek Sharma", designation: "Teacher" },
  { name: "Rupali Bharawa", designation: "Teacher" },
  { name: "Shree Bharat Narayan Jha", designation: "Teacher" },
  { name: "Madhuri Jha", designation: "Teacher" },
  { name: "Ramnarayan Debnath", designation: "Teacher" },
  { name: "Bani Debnath", designation: "Teacher" }
];

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-lakshya-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 font-serif">About Lakshya NGO</h1>
            <p className="text-xl">
              Discover our journey, mission, and the passionate team behind our education initiative.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-serif text-gray-800">Our History</h2>
            
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-4">
                Lakshya NGO was founded in Kota, Rajasthan with a vision to bridge the educational gap for underprivileged children. What started as a small initiative with just a handful of students has now grown into a comprehensive educational program serving over 50 children.
              </p>
              <p className="mb-4">
                Our founders, Manorama Gupta and Rakesh Gupta, recognized the critical need for quality education in underserved communities. They started with after-school tutoring sessions, which gradually expanded to include more subjects, activities, and dedicated volunteer teachers.
              </p>
              <p>
                Today, Lakshya NGO operates with a team of passionate educators who are committed to nurturing not just the academic growth but also the overall development of our students. We believe in creating a supportive learning environment where every child can discover their potential and work towards a brighter future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-serif text-gray-800 text-center">Our Mission & Vision</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-lakshya-light-blue p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-lakshya-blue">Our Mission</h3>
                <p className="text-gray-700">
                  To provide quality education to underprivileged children, empowering them with knowledge, skills, and values to build a better future for themselves and their communities.
                </p>
              </div>
              
              <div className="bg-lakshya-light-orange p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-lakshya-orange">Our Vision</h3>
                <p className="text-gray-700">
                  A world where every child has equal access to quality education, regardless of their socioeconomic background, and can realize their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 font-serif text-gray-800 flex items-center justify-center gap-2">
            <Users className="h-8 w-8 text-lakshya-orange" />
            <span>Our Leadership Team</span>
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Meet the dedicated individuals who work tirelessly to make our mission a reality.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMember 
                key={index}
                name={member.name}
                designation={member.designation}
                image={member.image}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact">
              <Button className="bg-lakshya-orange hover:bg-orange-600 text-white transition-colors">
                Join Our Team as a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
