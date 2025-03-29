
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

// Initial donors
const initialDonors = [
  { id: 1, name: 'Manorama Gupta', amount: '', date: '2023-08-15' },
  { id: 2, name: 'Rakesh Gupta', amount: '', date: '2023-07-22' },
];

const Donate: React.FC = () => {
  const [donors, setDonors] = useState(initialDonors);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would connect to a payment gateway
    // For now, we'll simulate a successful donation
    
    const newDonor = {
      id: donors.length + 1,
      name: formData.name,
      amount: `₹${formData.amount}`,
      date: new Date().toISOString().split('T')[0],
    };
    
    setDonors(prev => [newDonor, ...prev]);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      amount: '',
      message: '',
    });
    
    // Show success message (in a real app, this would be a toast notification)
    alert('Thank you for your donation!');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-lakshya-orange to-red-600 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6 font-serif">Better to Give than to Receive</h1>
            <p className="text-xl">
              Your contribution helps us continue our mission of providing quality education to underprivileged children.
            </p>
          </div>
        </div>
      </section>

      {/* Latest Donations */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 font-serif text-gray-800 text-center">Latest Donations</h2>
            <p className="text-center text-gray-600 mb-10">
              We extend our heartfelt gratitude to all our donors who have generously contributed to our cause.
              Your support is making a real difference in the lives of our students.
            </p>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {donors.map((donor) => (
                    <div key={donor.id} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-lakshya-light-orange flex items-center justify-center text-lakshya-orange">
                          <Heart size={20} />
                        </div>
                        <div className="ml-3">
                          <h3 className="font-bold text-gray-800">{donor.name}</h3>
                          <p className="text-sm text-gray-500">{donor.date}</p>
                          {donor.amount && <p className="text-lakshya-orange font-bold">{donor.amount}</p>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 font-serif text-gray-800 text-center">Make a Donation</h2>
            
            <div className="bg-gray-50 rounded-lg shadow-md p-6 md:p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lakshya-orange focus:border-lakshya-orange"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lakshya-orange focus:border-lakshya-orange"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                      Donation Amount (₹)
                    </label>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      required
                      min="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lakshya-orange focus:border-lakshya-orange"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lakshya-orange focus:border-lakshya-orange"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <Button type="submit" className="bg-lakshya-orange hover:bg-orange-600 text-white px-8 py-2">
                      Donate Now
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="mt-8 text-center text-gray-600">
              <p>
                For other donation methods or for any queries regarding donations, 
                please contact us at <a href="mailto:lakshyawelfaresoc@gmail.com" className="text-lakshya-blue">lakshyawelfaresoc@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
