
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TeamMemberProps {
  name: string;
  designation: string;
  quote?: string;
  image?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, designation, quote, image }) => {
  // Default quotes about education
  const defaultQuotes = [
    "Education is the most powerful weapon which you can use to change the world.",
    "The beautiful thing about learning is that no one can take it away from you.",
    "Education is not the filling of a pail, but the lighting of a fire.",
    "An investment in knowledge pays the best interest.",
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "The roots of education are bitter, but the fruit is sweet.",
    "Education is not preparation for life; education is life itself.",
    "The function of education is to teach one to think intensively and to think critically.",
    "Education is the key to unlock the golden door of freedom.",
    "The mind is not a vessel to be filled, but a fire to be kindled.",
    "Education's purpose is to replace an empty mind with an open one.",
    "Learning is a treasure that will follow its owner everywhere."
  ];
  
  // Pick a random quote if none provided
  const displayQuote = quote || defaultQuotes[Math.floor(Math.random() * defaultQuotes.length)];
  
  // Default avatar letters (first letters of first and last name)
  const nameParts = name.split(' ');
  const initials = nameParts.length > 1 
    ? `${nameParts[0][0]}${nameParts[nameParts.length - 1][0]}`
    : name.substring(0, 2);
    
  // Generate a random pastel background color
  const colors = [
    ['from-pink-200 to-pink-300', 'text-pink-800'],
    ['from-blue-200 to-blue-300', 'text-blue-800'],
    ['from-green-200 to-green-300', 'text-green-800'],
    ['from-purple-200 to-purple-300', 'text-purple-800'],
    ['from-yellow-200 to-yellow-300', 'text-yellow-800'],
    ['from-indigo-200 to-indigo-300', 'text-indigo-800'],
    ['from-red-200 to-red-300', 'text-red-800'],
    ['from-lakshya-light-blue to-lakshya-blue', 'text-white'],
    ['from-lakshya-light-orange to-lakshya-orange', 'text-white']
  ];
  
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300">
      <div className="p-6">
        {image ? (
          <Avatar className="h-24 w-24 mx-auto mb-4">
            <AvatarImage src={image} alt={name} className="object-cover" />
            <AvatarFallback className={`bg-gradient-to-r ${randomColor[0]} ${randomColor[1]}`}>
              {initials}
            </AvatarFallback>
          </Avatar>
        ) : (
          <div className={`w-24 h-24 rounded-full mx-auto mb-4 bg-gradient-to-r ${randomColor[0]} flex items-center justify-center ${randomColor[1]} text-xl font-bold animate-pulse`}>
            {initials}
          </div>
        )}
        
        <h3 className="text-xl font-bold text-gray-800 text-center">{name}</h3>
        <p className="text-lakshya-orange text-center mb-4">{designation}</p>
        
        <div className="border-t border-gray-200 pt-4 mt-2">
          <p className="text-gray-600 italic text-sm">"{displayQuote}"</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
