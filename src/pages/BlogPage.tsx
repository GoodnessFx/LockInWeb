import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users2, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "What is LockIn? Your Ultimate Focus Companion",
      excerpt: "LockIn is a revolutionary productivity app designed to help you lock in your focus and achieve your goals through disciplined time management.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Productivity",
      date: "Mar 15, 2026",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Science Behind Focus: Why LockIn Works",
      excerpt: "Understanding the psychological principles that make LockIn an effective tool for building lasting habits and maintaining focus.",
      image: "https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Science",
      date: "Mar 10, 2026",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Building Your Focus Routine: A Complete Guide",
      excerpt: "Learn how to create and maintain effective focus routines using LockIn's powerful features and customization options.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Guide",
      date: "Mar 05, 2026",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Success Stories: How Users Are Locking In",
      excerpt: "Real testimonials and case studies from LockIn users who have transformed their productivity and achieved their goals.",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Community",
      date: "Feb 28, 2026",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Advanced Features: Maximizing Your LockIn Experience",
      excerpt: "Discover the advanced features and hidden gems that can take your productivity to the next level with LockIn.",
      image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Tutorial",
      date: "Feb 20, 2026",
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "Join the LockIn Community: Connect and Grow Together",
      excerpt: "Learn how to connect with other LockIn users, share strategies, and participate in challenges to boost your productivity.",
      image: "https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Community",
      date: "Feb 15, 2026",
      readTime: "5 min read"
    }
  ];

  return (
    <div style={{ backgroundColor: '#080808', minHeight: '100vh', color: 'white', overflowX: 'hidden' }}>
      <Navbar />
      
      {/* BLOG HERO SECTION */}
      <section style={{ 
        position: 'relative', 
        padding: '120px 0 60px 0', 
        background: 'linear-gradient(to bottom, #0D1B2A, #080808)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-[#D4AF37]/10 text-[#D4AF37] px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase border border-[#D4AF37]/20"
              >
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></div>
                Insights & Resources
              </motion.div>
            </div>
            <h1 style={{ 
              fontFamily: 'Cormorant Garamond, serif', 
              fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
              fontWeight: 700, lineHeight: 1.1, 
              marginBottom: '24px', color: 'white' 
            }}>
              The <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Locked In</span> Journal
            </h1>
            <p style={{ 
              fontFamily: 'Nunito Sans, sans-serif', 
              fontSize: 'clamp(1rem, 3vw, 1.2rem)', color: 'rgba(255,255,255,0.6)', 
              lineHeight: 1.7, fontWeight: 300 
            }}>
              Expert perspectives on deep work, cognitive endurance, and the pursuit of mastery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="px-5 sm:px-6 py-10 sm:py-16 max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="featured-card bg-white/5 rounded-3xl sm:rounded-[2rem] overflow-hidden border border-white/10 cursor-pointer flex flex-col"
        >
          <div className="relative min-h-[240px] sm:min-h-[300px] w-full">
            <img 
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Featured" 
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent" />
          </div>
          <div className="p-6 sm:p-10 md:p-16 flex flex-col justify-center">
            <span className="text-[#D4AF37] font-extrabold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-4 sm:mb-5">
              Featured Story
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5 leading-tight text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              The Psychology of Deep Work in an Era of Distraction
            </h2>
            <p className="font-sans text-sm sm:text-lg text-white/60 mb-8 sm:mb-10 leading-relaxed" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Discover how cognitive load theory and digital minimalism can transform your professional output.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#D4AF37] flex items-center justify-center">
                <Users2 size={18} color="#0D1B2A" />
              </div>
              <div>
                <span className="block text-sm sm:text-base font-bold text-white">Dr. Sarah Chen</span>
                <span className="text-xs sm:text-sm text-white/40">Cognitive Scientist</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* GRID SECTION */}
      <section className="py-10 sm:py-16">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6">
          <div className="flex flex-col gap-5 sm:gap-6 mb-8 sm:mb-12">
            <div>
              <h3 className="font-serif text-3xl sm:text-5xl font-bold text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Latest Updates</h3>
              <p className="text-sm sm:text-base text-white/50 mt-2">Explore our most recent thoughts and discoveries.</p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-3 hide-scrollbar">
              {['All', 'Productivity', 'Science', 'Guide', 'Community'].map((cat, i) => (
                <button key={cat} className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold transition-all whitespace-nowrap border ${i === 0 ? 'bg-[#D4AF37] text-[#0D1B2A] border-[#D4AF37]' : 'bg-transparent text-white border-white/20'}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="cursor-pointer group"
              >
                <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 transition-all duration-300 h-full flex flex-col hover:border-[#D4AF37]/30">
                  <div className="h-52 sm:h-56 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#0D1B2A] px-2.5 py-1 rounded-md text-[9px] font-extrabold uppercase tracking-widest">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    <div className="flex gap-3 text-white/40 text-[10px] sm:text-xs mb-3 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} /> {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h4 className="font-serif text-xl sm:text-2xl font-bold mb-3 leading-tight text-white group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      {post.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-white/50 leading-relaxed mb-5" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-[#D4AF37] font-bold text-xs sm:text-sm uppercase tracking-wider">
                      Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
