
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Heart } from 'lucide-react';

type BlogPost = {
  id: number;
  title: string;
  date: string;
  likes: number;
  liked: boolean;
  author: string;
  excerpt: string;
};

const Footer = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Computer Lab Upgrade Enhances Digital Education",
      date: "May 12, 2023",
      likes: 42,
      liked: false,
      author: "Priya Sharma",
      excerpt: "Our students now have access to 10 new computers with educational software to help build critical digital literacy skills for the future."
    },
    {
      id: 2,
      title: "Annual Summer Camp Celebrates Arts and Culture",
      date: "July 23, 2023",
      likes: 38,
      liked: false,
      author: "Rahul Mehra",
      excerpt: "Over 60 children participated in our 2-week summer camp focused on traditional arts, dance, and environmental awareness activities."
    }
  ]);

  const handleLike = (id: number) => {
    setBlogPosts(posts => 
      posts.map(post => 
        post.id === id 
          ? { 
              ...post, 
              likes: post.liked ? post.likes - 1 : post.likes + 1,
              liked: !post.liked 
            } 
          : post
      )
    );
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-lakshya-orange pb-2">About Us</h3>
            <p className="mb-4 text-gray-300">
              Lakshya NGO is dedicated to transforming lives through education. 
              We focus on providing quality education to underprivileged children in Kota, addressing both 
              academic needs and holistic development.
            </p>
            <Link to="/about" className="text-lakshya-orange hover:text-lakshya-light-orange transition-colors">
              Learn More →
            </Link>
          </div>

          {/* Recent Blogs */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-lakshya-orange pb-2">Recent Blogs</h3>
            <ul className="space-y-4">
              {blogPosts.map(post => (
                <li key={post.id} className="border-b border-gray-800 pb-2">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {post.title}
                  </a>
                  <div className="mt-1 text-sm text-gray-400">
                    {post.excerpt}
                  </div>
                  <div className="flex justify-between items-center mt-1 text-sm">
                    <span className="text-gray-400">{post.date}</span>
                    <button 
                      onClick={() => handleLike(post.id)}
                      className="flex items-center text-gray-400 hover:text-lakshya-orange transition-colors"
                    >
                      <Heart size={14} className={post.liked ? "fill-lakshya-orange text-lakshya-orange" : ""} /> 
                      <span className="ml-1">{post.likes}</span>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">by {post.author}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Connected */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-lakshya-orange pb-2">Get Connected</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-lakshya-orange mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  446, Rangpur Road No. 5, Dadwara, Kota, Rajasthan, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-lakshya-orange mr-2 flex-shrink-0" />
                <a href="tel:+919529291177" className="text-gray-300 hover:text-white transition-colors">
                  +91 9529291177
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-lakshya-orange mr-2 flex-shrink-0" />
                <a href="mailto:lakshyawelfaresoc@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  lakshyawelfaresoc@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400">
          <p>Copyright ©2025 All rights reserved | Made with <Heart size={14} className="inline fill-red-500 text-red-500" /> by Tanmay A</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
