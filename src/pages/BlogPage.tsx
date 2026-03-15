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
      <section style={{ padding: '60px 24px', maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ 
            display: 'flex', 
            flexDirection: 'column',
            background: 'rgba(255,255,255,0.03)', 
            borderRadius: '32px', overflow: 'hidden', 
            border: '1px solid rgba(255,255,255,0.07)',
            cursor: 'pointer'
          }}
          className="featured-card"
        >
          <div style={{ position: 'relative', minHeight: '300px', width: '100%' }}>
            <img 
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Featured" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.8), transparent)' }} />
          </div>
          <div style={{ padding: 'clamp(24px, 5vw, 60px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ color: '#D4AF37', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Featured Story
            </span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 5vw, 2.8rem)', fontWeight: 700, marginBottom: '20px', lineHeight: 1.2 }}>
              The Psychology of Deep Work in an Era of Distraction
            </h2>
            <p style={{ fontFamily: 'Nunito Sans, sans-serif', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', color: 'rgba(255,255,255,0.6)', marginBottom: '32px', lineHeight: 1.6 }}>
              Discover how cognitive load theory and digital minimalism can transform your professional output.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users2 size={20} color="#0D1B2A" />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700 }}>Dr. Sarah Chen</span>
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>Cognitive Scientist</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* GRID SECTION */}
      <section style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column',
            gap: '24px',
            marginBottom: '48px' 
          }}>
            <div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 6vw, 3rem)', fontWeight: 700 }}>Latest Updates</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '8px' }}>Explore our most recent thoughts and discoveries.</p>
            </div>
            <div style={{ 
              display: 'flex', 
              gap: '8px', 
              overflowX: 'auto', 
              paddingBottom: '12px',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }} className="hide-scrollbar">
              {['All', 'Productivity', 'Science', 'Guide', 'Community'].map((cat, i) => (
                <button key={cat} style={{ 
                  padding: '8px 16px', borderRadius: '9999px', 
                  background: i === 0 ? '#D4AF37' : 'transparent', 
                  color: i === 0 ? '#0D1B2A' : 'white', 
                  border: '1px solid ' + (i === 0 ? '#D4AF37' : 'rgba(255,255,255,0.2)'),
                  fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s',
                  whiteSpace: 'nowrap'
                }}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', 
            gap: '24px' 
          }}>
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ cursor: 'pointer' }}
                className="blog-card"
              >
                <div style={{ 
                  borderRadius: '24px', overflow: 'hidden', 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.3s', height: '100%',
                  display: 'flex', flexDirection: 'column'
                }}>
                  <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                      className="card-img"
                    />
                    <div style={{ 
                      position: 'absolute', top: '16px', left: '16px', 
                      background: 'rgba(212,175,55,0.95)', color: '#0D1B2A', 
                      padding: '4px 10px', borderRadius: '6px', 
                      fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em'
                    }}>
                      {post.category}
                    </div>
                  </div>
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: '12px', color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', marginBottom: '12px', fontWeight: 600 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={10} /> {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h4 style={{ 
                      fontFamily: 'Cormorant Garamond, serif', 
                      fontSize: '1.5rem', fontWeight: 700, 
                      marginBottom: '12px', lineHeight: 1.3, color: 'white' 
                    }}>
                      {post.title}
                    </h4>
                    <p style={{ 
                      fontFamily: 'Nunito Sans, sans-serif', 
                      fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', 
                      lineHeight: 1.5, marginBottom: '20px' 
                    }}>
                      {post.excerpt}
                    </p>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', color: '#D4AF37', fontWeight: 700, fontSize: '0.85rem' }}>
                      Read Article <ArrowRight size={14} />
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
