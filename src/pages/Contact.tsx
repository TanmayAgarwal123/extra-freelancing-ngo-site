
import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    // Show success message (in a real app, this would be a toast notification)
    alert('Your message has been sent. We will get back to you soon!');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-lakshya-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 font-serif">Contact Us</h1>
            <p className="text-xl">
              We'd love to hear from you. Get in touch with us for any queries, feedback, or collaboration opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 font-serif text-gray-800">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lakshya-blue focus:border-lakshya-blue"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lakshya-blue focus:border-lakshya-blue"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lakshya-blue focus:border-lakshya-blue"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lakshya-blue focus:border-lakshya-blue"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Donation">Donation</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lakshya-blue focus:border-lakshya-blue"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button type="submit" className="bg-lakshya-blue hover:bg-blue-600 text-white px-8 py-2">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6 font-serif text-gray-800">Contact Information</h2>
                
                <div className="bg-white rounded-lg shadow-md p-6">
                  <ul className="space-y-6">
                    <li className="flex">
                      <MapPin size={24} className="text-lakshya-orange mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                        <p className="text-gray-600">
                          446, Rangpur Road No. 5, Dadwara, Kota, Rajasthan, India
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <Phone size={24} className="text-lakshya-orange mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                        <p className="text-gray-600">
                          <a href="tel:+919529291177" className="hover:text-lakshya-blue transition-colors">
                            +91 9529291177
                          </a>
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <Mail size={24} className="text-lakshya-orange mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                        <p className="text-gray-600">
                          <a href="mailto:lakshyawelfaresoc@gmail.com" className="hover:text-lakshya-blue transition-colors">
                            lakshyawelfaresoc@gmail.com
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-8">
                    <h3 className="font-bold text-gray-800 mb-3">Connect With Us</h3>
                    <a 
                      href="https://www.youtube.com/@ManoramaGupta19" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                    >
                      YouTube Channel
                    </a>
                  </div>
                </div>
                
                {/* Google Map */}
                <div className="mt-8 rounded-lg overflow-hidden shadow-md h-80">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114900.67209421259!2d75.77724224999999!3d25.180070449999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f85043013aa9d%3A0xa4c21755143a9fb8!2sKota%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1652345678901!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    title="Location Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
