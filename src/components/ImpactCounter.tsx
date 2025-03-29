
import React, { useState, useEffect, useRef } from 'react';

interface ImpactCounterProps {
  end: number; // Changed from endValue to end
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const ImpactCounter: React.FC<ImpactCounterProps> = ({ 
  end, 
  duration = 2000, 
  prefix = '', 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, isVisible]);

  return (
    <div ref={counterRef} className="text-5xl md:text-6xl font-bold text-lakshya-blue transition-all duration-500">
      {prefix}{count}{suffix}
    </div>
  );
};

export default ImpactCounter;
