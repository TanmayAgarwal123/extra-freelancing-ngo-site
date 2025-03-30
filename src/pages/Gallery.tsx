
import React from 'react';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { ImageIcon, Users } from 'lucide-react';

// Gallery images with proper descriptions
const images = [
  { 
    id: 1, 
    url: 'https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?q=80&w=600&auto=format&fit=crop', 
    alt: 'Children studying in a classroom',
    caption: 'Computer education session at our center' 
  },
  { 
    id: 2, 
    url: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?q=80&w=600&auto=format&fit=crop', 
    alt: 'Group of students in discussion',
    caption: 'Group learning activities promote teamwork' 
  },
  { 
    id: 3, 
    url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop', 
    alt: 'Annual celebration event',
    caption: 'Annual cultural performance by our students' 
  },
  { 
    id: 4, 
    url: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=600&auto=format&fit=crop', 
    alt: 'Educational art project',
    caption: 'Art and craft workshop for creative expression' 
  },
  { 
    id: 5, 
    url: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=600&auto=format&fit=crop', 
    alt: 'Outdoor learning activities',
    caption: 'Environmental education field trip' 
  },
  { 
    id: 6, 
    url: 'https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=600&auto=format&fit=crop', 
    alt: 'Teachers training session',
    caption: 'Teacher development workshop' 
  },
  { 
    id: 7, 
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop', 
    alt: 'Community outreach program',
    caption: 'Healthcare awareness camp in the community' 
  },
  { 
    id: 8, 
    url: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=600&auto=format&fit=crop', 
    alt: 'Parent-teacher meeting',
    caption: 'Parents and teachers collaborate for child development' 
  },
];

// YouTube videos
const videos = [
  { id: 1, videoId: 'yrvyifeCtec', title: 'Lakshya NGO Introduction' },
  { id: 2, videoId: 'LXb3EKWsInQ', title: 'Annual Cultural Program Highlights' },
  // More videos would be added here
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-lakshya-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 font-serif">Our Gallery</h1>
            <p className="text-xl">
              Glimpses of our journey, events, and impact through images and videos
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 font-serif text-gray-800 text-center flex items-center justify-center gap-2">
            <ImageIcon className="h-8 w-8 text-lakshya-orange" />
            <span>Photo Gallery</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105 duration-300">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-3 bg-white">
                  <p className="text-sm text-gray-700">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 font-serif text-gray-800 text-center">Video Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
              <div key={video.id} className="shadow-md rounded-lg overflow-hidden">
                <YouTubeEmbed videoId={video.videoId} title={video.title} />
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://www.youtube.com/@ManoramaGupta19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lakshya-blue hover:text-blue-800 transition-colors"
            >
              Visit our YouTube channel for more videos →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
