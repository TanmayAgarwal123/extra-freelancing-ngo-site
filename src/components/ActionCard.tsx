
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ActionCardProps {
  title: string;
  description: string;
  buttonText: string;
  link: string;
  icon: React.ReactNode;
  bgColor?: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ 
  title, 
  description, 
  buttonText, 
  link, 
  icon,
  bgColor = "bg-white" 
}) => {
  return (
    <div className={`${bgColor} rounded-lg shadow-md overflow-hidden p-6 transition-all duration-300 hover:shadow-xl`}>
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-lakshya-light-blue text-lakshya-blue">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <Link to={link}>
          <Button className="bg-lakshya-blue hover:bg-blue-600 text-white transition-colors">
            {buttonText}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ActionCard;
