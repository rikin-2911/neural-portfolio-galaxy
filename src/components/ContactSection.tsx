
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real application, we would send this data to a server or email API
    // For now, we'll simulate sending and show a toast message
    setTimeout(() => {
      console.log('Form submitted to rikinpithadia98@gmail.com', formData);
      toast({
        title: "Message Sent",
        description: "Your message has been sent to rikinpithadia98@gmail.com",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-neural-lighter/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              I'm currently available for research collaborations, internships, 
              and project partnerships in data science and AI. If you have an interesting 
              project that you want to discuss, think you need my help with something, 
              or just want to say hello, then get in touch.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="text-neural-accent mr-4" size={24} />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">rikinpithadia98@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-neural-accent mr-4" size={24} />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white">+91 6353865443</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="text-neural-accent mr-4" size={24} />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Gandhinagar, Gujarat, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-white">Connect With Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/rikin-2911" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neural-lighter p-3 rounded-full text-white hover:bg-neural-accent transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/rikin-pithadia-20b94729b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neural-lighter p-3 rounded-full text-white hover:bg-neural-accent transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://www.instagram.com/rikin_2911/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-neural-lighter p-3 rounded-full text-white hover:bg-neural-accent transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="bg-neural-lighter border-neural-lighter">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-gray-300">Name</label>
                      <Input
                        id="name"
                        placeholder="Your Name"
                        className="bg-neural border-neural-lighter text-white"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-300">Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        className="bg-neural border-neural-lighter text-white"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-gray-300">Subject</label>
                    <Input
                      id="subject"
                      placeholder="Subject"
                      className="bg-neural border-neural-lighter text-white"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-gray-300">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Your Message"
                      rows={5}
                      className="bg-neural border-neural-lighter text-white resize-none"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-neural-accent hover:bg-neural-accent/80 transition-all duration-300 transform hover:scale-105"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2" size={16} /> 
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
