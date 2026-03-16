import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, User, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { toast } from 'sonner';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0D1B2A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight px-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Get in <span className="text-[#D4AF37] italic">touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-light px-6" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Have questions about Locked In? We'd love to hear from you. Built for those who build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-24 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10 sm:space-y-12 px-4"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Let's start a conversation</h3>
              <p className="text-white/50 text-base sm:text-lg font-light leading-relaxed" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                Whether you're interested in partnerships, have feedback about growth features, or need support with your niche development, we're here to help.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              {[
                { icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6" />, title: "Email us", value: "lockInjoh@gmail.com" },
                { icon: <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />, title: "Live community", value: "WhatsApp Group (24/7)" },
                { icon: <User className="h-5 w-5 sm:h-6 sm:w-6" />, title: "Support", value: "help@lockin.app" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 sm:gap-6 group">
                  <div className="p-3 sm:p-4 bg-white/5 border border-white/10 rounded-2xl text-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/40 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-1">{item.title}</div>
                    <div className="text-white text-lg sm:text-xl font-bold break-all sm:break-normal" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl mx-4 sm:mx-0"
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div className="space-y-2 sm:space-y-3">
                <label htmlFor="name" className="text-[10px] sm:text-xs font-bold text-white/40 uppercase tracking-widest">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="h-12 sm:h-14 bg-white/5 border-white/10 text-white rounded-xl focus:border-[#D4AF37]/50 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2 sm:space-y-3">
                <label htmlFor="email" className="text-[10px] sm:text-xs font-bold text-white/40 uppercase tracking-widest">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="h-12 sm:h-14 bg-white/5 border-white/10 text-white rounded-xl focus:border-[#D4AF37]/50 text-sm sm:text-base"
                />
              </div>

              <div className="space-y-2 sm:space-y-3">
                <label htmlFor="message" className="text-[10px] sm:text-xs font-bold text-white/40 uppercase tracking-widest">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows={4}
                  className="bg-white/5 border-white/10 text-white rounded-xl focus:border-[#D4AF37]/50 resize-none text-sm sm:text-base"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 sm:h-16 flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-[#D4AF37] to-[#f0c040] text-[#0D1B2A] font-bold text-base sm:text-lg rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-none cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </Button>

              <p className="text-[10px] text-white/20 text-center font-bold uppercase tracking-widest mt-4">
                By submitting this form, you join the Locked In elite.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
