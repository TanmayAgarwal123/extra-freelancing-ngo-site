
import React from 'react';
import TeamMember from '../TeamMember';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Team member data with images
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

const TeamSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 font-serif text-gray-800 animate-fade-in">Meet Our Team</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in">
          Our dedicated team of passionate educators and administrators work tirelessly 
          to create a nurturing learning environment for our students.
        </p>
        
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <TeamMember 
                    name={member.name}
                    designation={member.designation}
                    image={member.image}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2 h-10 w-10" />
            <CarouselNext className="relative static ml-2 h-10 w-10" />
          </div>
        </Carousel>
        
        <div className="mt-12 text-center">
          <Link to="/contact">
            <Button className="bg-lakshya-orange hover:bg-orange-600 text-white transition-colors transform hover:scale-110 duration-300 shadow-lg">
              Be a Volunteer
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
