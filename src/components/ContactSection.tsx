
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, we would handle form submission here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="section-padding bg-neural-lighter/30">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              I'm currently available for freelance work, research collaborations, 
              and full-time data science positions. If you have a project that you 
              want to get started, think you need my help with something, or just 
              want to say hello, then get in touch.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="text-neural-accent mr-4" size={24} />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">johndoe@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-neural-accent mr-4" size={24} />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="text-white">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="text-neural-accent mr-4" size={24} />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">San Francisco, CA</p>
                </div>
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
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-300">Email</label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your Email"
                        className="bg-neural border-neural-lighter text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-gray-300">Subject</label>
                    <Input
                      id="subject"
                      placeholder="Subject"
                      className="bg-neural border-neural-lighter text-white"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-gray-300">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Your Message"
                      rows={5}
                      className="bg-neural border-neural-lighter text-white resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-neural-accent hover:bg-neural-accent/80">
                    <Send className="mr-2" size={16} /> Send Message
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
