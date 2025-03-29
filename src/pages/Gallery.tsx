
import React from 'react';
import YouTubeEmbed from '@/components/YouTubeEmbed';

// Placeholder images (would be replaced with real images)
const images = [
  { id: 1, url: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23', alt: 'Children playing' },
  { id: 2, url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9', alt: 'Nature' },
  { id: 3, url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86', alt: 'Trees' },
  { id: 4, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', alt: 'Mountain' },
  { id: 5, url: 'https://images.unsplash.com/photo-1472396961693-142e6e269027', alt: 'Wildlife' },
  { id: 6, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', alt: 'Mountains' },
];

// YouTube videos
const videos = [
  { id: 1, videoId: 'yrvyifeCtec', title: 'Lakshya NGO Introduction' },
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
          <h2 className="text-3xl font-bold mb-8 font-serif text-gray-800 text-center">Photo Gallery</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105 duration-300">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover"
                />
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
