
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for contacting me. I'll respond as soon as possible.",
    });
  };
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="inline-block mb-3 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Get In Touch
          </span>
          <h2 className="section-heading">Contact Me</h2>
          <p className="section-subheading mx-auto">
            Have questions or want to discuss a project? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 glass-card p-8"
          >
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    className="bg-secondary/50"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="bg-secondary/50"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Project Idea"
                  className="bg-secondary/50"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Hi, I'd like to talk about..."
                  className="bg-secondary/50 min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className={cn(
                  "w-full md:w-auto px-8 py-6 h-auto font-medium",
                  "bg-primary hover:bg-primary/90 text-primary-foreground",
                  "flex items-center gap-2",
                  "transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md"
                )}
              >
                Send Message <Send size={16} />
              </Button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">student@school.edu</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Monday - Friday, 9am - 4pm
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">School</h4>
                  <p className="text-muted-foreground">Lincoln Middle School</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    1234 Education Ave, Hometown, ST 98765
                  </p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    For school project inquiries only
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
