
import React from 'react';
import TeamMember from '../TeamMember';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Team member data
const teamMembers = [
  { name: "Manorama Gupta", designation: "Founder & President" },
  { name: "Rakesh Gupta", designation: "Co-Founder & Teacher" },
  { name: "Sunita Agrawal", designation: "Director Member & Teacher" },
  { name: "Govind Singh", designation: "Treasurer" },
  { name: "Ritu Sharma", designation: "Director Member" },
  { name: "Tanmay Agarwal", designation: "Teacher" },
  { name: "Mahek Sharma", designation: "Teacher" },
  { name: "Rupali Bharawa", designation: "Teacher" },
  { name: "Shree Bharat Narayan Jha", designation: "Teacher" },
  { name: "Madhuri Jha", designation: "Teacher" },
  { name: "Ramnarayan Debnath", designation: "Teacher" },
  { name: "Bani Debnath", designation: "Teacher" }
];

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 font-serif text-gray-800">Meet Our Team</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Our dedicated team of passionate educators and administrators work tirelessly 
          to create a nurturing learning environment for our students.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamMember 
              key={index}
              name={member.name}
              designation={member.designation}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/contact">
            <Button className="bg-lakshya-orange hover:bg-orange-600 text-white transition-colors">
              Be a Volunteer
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
