
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, QrCode, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';

// Initial donors
const initialDonors = [
  { id: 1, name: 'Manorama Gupta', amount: 'Rs. 5,000', date: '2023-08-15', confirmed: true },
  { id: 2, name: 'Rakesh Gupta', amount: 'Rs. 2,500', date: '2023-07-22', confirmed: true },
];

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Donate: React.FC = () => {
  const [donors, setDonors] = useState(initialDonors);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: '',
  });
  const [showQrCode, setShowQrCode] = useState(false);
  const [submittedInfo, setSubmittedInfo] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    // Scroll to top on page load
    window.scrollTo(0, 0);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.amount) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Show QR code
    setShowQrCode(true);
    setSubmittedInfo(true);
  };

  const handlePaymentComplete = () => {
    // Simulate payment completion
    setShowQrCode(false);
    
    // Submit information for admin approval
    const pendingDonation = {
      id: donors.length + 1,
      name: formData.name,
      amount: `Rs. ${Number(formData.amount).toLocaleString()}`,
      date: new Date().toISOString().split('T')[0],
      confirmed: false, // Needs admin confirmation
    };
    
    toast({
      title: "Thank you for your donation!",
      description: "Your donation information has been submitted and will be displayed after admin confirmation.",
      className: "bg-green-50 border-green-200",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      amount: '',
      message: '',
    });
  };

  // Filter to only show confirmed donors
  const confirmedDonors = donors.filter(donor => donor.confirmed);
  
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-lakshya-orange to-red-600 text-white py-24 animate-fade-in">
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
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {confirmedDonors.map((donor) => (
                    <div key={donor.id} className="bg-gray-50 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-lakshya-light-orange flex items-center justify-center text-lakshya-orange">
                          <Heart size={20} className="animate-pulse" />
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
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md p-6 md:p-8 border border-orange-100">
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lakshya-orange focus:border-lakshya-orange transition-colors"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lakshya-orange focus:border-lakshya-orange transition-colors"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lakshya-orange focus:border-lakshya-orange transition-colors"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-lakshya-orange focus:border-lakshya-orange transition-colors"
                    ></textarea>
                  </div>
                  
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      className="bg-lakshya-orange hover:bg-orange-600 text-white px-8 py-2 transform hover:scale-105 transition-all duration-300"
                      disabled={submittedInfo}
                    >
                      {submittedInfo ? "Form Submitted" : "Donate Now"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            
            <div className="mt-8 text-center text-gray-600">
              <p>
                For other donation methods or for any queries regarding donations, 
                please contact us at <a href="mailto:lakshyawelfaresoc@gmail.com" className="text-lakshya-blue hover:underline">lakshyawelfaresoc@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Dialog */}
      <Dialog open={showQrCode} onOpenChange={setShowQrCode}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">Scan to Donate</DialogTitle>
            <DialogDescription className="text-center">
              Scan this QR code with your UPI app to donate ₹{formData.amount}
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex justify-center my-4">
            <div className="p-4 bg-white rounded-lg border-2 border-lakshya-orange">
              <QrCode size={200} className="text-gray-900" />
            </div>
          </div>
          
          <div className="text-center mb-4">
            <p className="font-medium text-gray-700">Amount: ₹{formData.amount}</p>
            <p className="text-sm text-gray-500">Recipient: Lakshya NGO</p>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => setShowQrCode(false)}
              className="border-red-500 text-red-500 hover:bg-red-50"
            >
              <X className="mr-1" size={16} /> Cancel
            </Button>
            <Button 
              onClick={handlePaymentComplete}
              className="bg-green-600 hover:bg-green-700"
            >
              I've Completed Payment
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Donate;
