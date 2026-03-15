import React from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Lightbulb, BarChart3, Zap, Users2, ArrowRight, Search } from 'lucide-react';
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
        padding: '160px 0 100px 0', 
        background: 'linear-gradient(to bottom, #0D1B2A, #080808)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        {/* Background Decorative Elements */}
        <div style={{ 
          position: 'absolute', top: '20%', right: '-10%', 
          width: '500px', height: '500px', 
          background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)', 
          zIndex: 0 
        }} />
        
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
          >
            <span style={{ 
              fontFamily: 'Montserrat, sans-serif', 
              fontSize: '0.85rem', fontWeight: 700, 
              color: '#D4AF37', letterSpacing: '0.3em', 
              textTransform: 'uppercase', display: 'block', 
              marginBottom: '24px' 
            }}>
              Insights & Resources
            </span>
            <h1 style={{ 
              fontFamily: 'Cormorant Garamond, serif', 
              fontSize: 'clamp(3rem, 7vw, 5.5rem)', 
              fontWeight: 700, lineHeight: 1.1, 
              marginBottom: '32px', color: 'white' 
            }}>
              The <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Locked In</span> Journal
            </h1>
            <p style={{ 
              fontFamily: 'Nunito Sans, sans-serif', 
              fontSize: '1.2rem', color: 'rgba(255,255,255,0.6)', 
              lineHeight: 1.8, fontWeight: 300 
            }}>
              Expert perspectives on deep work, cognitive endurance, and the pursuit of mastery. Learn how to optimize your environment and mindset for peak performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED POST */}
      <section style={{ padding: '80px 0', maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ 
            display: 'flex', flexDirection: 'column', lg: 'row', 
            background: 'rgba(255,255,255,0.03)', 
            borderRadius: '24px', overflow: 'hidden', 
            border: '1px solid rgba(255,255,255,0.07)',
            cursor: 'pointer'
          }}
          className="featured-card"
        >
          <div style={{ flex: 1, position: 'relative', minHeight: '350px' }}>
            <img 
              src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Featured" 
              style={{ width: '100%', height: '100%', objectCover: 'cover', position: 'absolute', inset: 0 }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(8,8,8,0.4), transparent)' }} />
          </div>
          <div style={{ flex: 1, padding: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ color: '#D4AF37', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Featured Story
            </span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', fontWeight: 700, marginBottom: '24px', lineHeight: 1.2 }}>
              The Psychology of Deep Work in an Era of Distraction
            </h2>
            <p style={{ fontFamily: 'Nunito Sans, sans-serif', fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', marginBottom: '32px', lineHeight: 1.7 }}>
              Discover how cognitive load theory and digital minimalism can transform your professional output and personal satisfaction.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users2 size={20} color="#0D1B2A" />
              </div>
              <div>
                <span style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700 }}>Dr. Sarah Chen</span>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Cognitive Scientist</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* GRID SECTION */}
      <section style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', fontWeight: 700 }}>Latest Updates</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '8px' }}>Explore our most recent thoughts and discoveries.</p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['All', 'Productivity', 'Science', 'Guide', 'Community'].map((cat, i) => (
                <button key={cat} style={{ 
                  padding: '8px 20px', borderRadius: '9999px', 
                  background: i === 0 ? '#D4AF37' : 'transparent', 
                  color: i === 0 ? '#0D1B2A' : 'white', 
                  border: '1px solid ' + (i === 0 ? '#D4AF37' : 'rgba(255,255,255,0.2)'),
                  fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s'
                }}>
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', 
            gap: '40px' 
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
                  borderRadius: '20px', overflow: 'hidden', 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.3s', height: '100%',
                  display: 'flex', flexDirection: 'column'
                }}>
                  <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      style={{ width: '100%', height: '100%', objectCover: 'cover', transition: 'transform 0.5s' }}
                      className="card-img"
                    />
                    <div style={{ 
                      position: 'absolute', top: '20px', left: '20px', 
                      background: 'rgba(212,175,55,0.9)', color: '#0D1B2A', 
                      padding: '4px 12px', borderRadius: '4px', 
                      fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em'
                    }}>
                      {post.category}
                    </div>
                  </div>
                  <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', gap: '16px', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginBottom: '16px', fontWeight: 600 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Clock size={12} /> {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h4 style={{ 
                      fontFamily: 'Cormorant Garamond, serif', 
                      fontSize: '1.8rem', fontWeight: 700, 
                      marginBottom: '16px', lineHeight: 1.3, color: 'white' 
                    }}>
                      {post.title}
                    </h4>
                    <p style={{ 
                      fontFamily: 'Nunito Sans, sans-serif', 
                      fontSize: '0.95rem', color: 'rgba(255,255,255,0.5)', 
                      lineHeight: 1.6, marginBottom: '24px' 
                    }}>
                      {post.excerpt}
                    </p>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', color: '#D4AF37', fontWeight: 700, fontSize: '0.9rem' }}>
                      Read Article <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section style={{ padding: '100px 0', background: '#0D1B2A' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', fontWeight: 700, marginBottom: '24px' }}>
              Don't Miss a <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Breakthrough</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '40px', fontSize: '1.1rem' }}>
              Get our monthly digest of focus research and productivity strategies delivered directly to your inbox.
            </p>
            <div style={{ display: 'flex', gap: '12px', maxWidth: '500px', margin: '0 auto' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{ 
                  flex: 1, background: 'rgba(255,255,255,0.05)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  padding: '16px 24px', borderRadius: '9999px', 
                  color: 'white', outline: 'none' 
                }} 
              />
              <button style={{ 
                background: '#D4AF37', color: '#0D1B2A', 
                padding: '0 32px', borderRadius: '9999px', 
                fontWeight: 800, cursor: 'pointer', border: 'none' 
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .featured-card:hover img { transform: scale(1.05); transition: transform 0.8s; }
        .blog-card:hover .card-img { transform: scale(1.1); }
        .blog-card:hover > div { border-color: #D4AF37 !important; background: rgba(255,255,255,0.05) !important; transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
      `}</style>
    </div>
  );
}
