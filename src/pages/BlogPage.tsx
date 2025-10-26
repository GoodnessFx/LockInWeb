import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, TrendingUp, Users, Zap, Shield, ArrowLeft, BookOpen, Lightbulb, BarChart3, Heart, Settings, Users2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';

export function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "What is LockIn? Your Ultimate Focus Companion",
      excerpt: "LockIn is a revolutionary productivity app designed to help you lock in your focus and achieve your goals through disciplined time management and habit building.",
      content: "LockIn is more than just another productivity app - it's your personal accountability partner. Built with the philosophy that 'rent is due everyday,' LockIn helps you maintain consistent focus on what truly matters. Whether you're an entrepreneur, student, or professional, LockIn provides the structure and motivation you need to stay locked in on your objectives.",
      icon: <BookOpen className="w-6 h-6" />,
      date: "2025-01-15",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "The Science Behind Focus: Why LockIn Works",
      excerpt: "Understanding the psychological principles that make LockIn an effective tool for building lasting habits and maintaining focus.",
      content: "LockIn leverages proven psychological principles including the Pomodoro Technique, habit stacking, and behavioral psychology. The app creates a sense of urgency and accountability that mirrors real-world pressures, helping users develop the mental discipline needed for long-term success. By gamifying focus and productivity, LockIn makes the journey toward your goals engaging and sustainable.",
      icon: <Lightbulb className="w-6 h-6" />,
      date: "2025-01-10",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Building Your Focus Routine: A Complete Guide",
      excerpt: "Learn how to create and maintain effective focus routines using LockIn's powerful features and customization options.",
      content: "Creating a successful focus routine starts with understanding your peak performance times and setting realistic goals. LockIn's intelligent scheduling system adapts to your lifestyle, suggesting optimal focus sessions based on your energy levels and commitments. The app's progress tracking helps you identify patterns and optimize your approach for maximum productivity.",
      icon: <Settings className="w-6 h-6" />,
      date: "2025-01-05",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Success Stories: How Users Are Locking In",
      excerpt: "Real testimonials and case studies from LockIn users who have transformed their productivity and achieved their goals.",
      content: "From students improving their study habits to entrepreneurs scaling their businesses, LockIn users consistently report significant improvements in focus, productivity, and goal achievement. The app's community features create a supportive environment where users can share progress, celebrate milestones, and learn from each other's experiences.",
      icon: <BarChart3 className="w-6 h-6" />,
      date: "2024-01-01",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Advanced Features: Maximizing Your LockIn Experience",
      excerpt: "Discover the advanced features and hidden gems that can take your productivity to the next level with LockIn.",
      content: "Beyond the core functionality, LockIn offers a suite of advanced features designed for power users. From custom focus templates to detailed analytics and integrations with other productivity tools, these features provide additional layers of customization and insight. This guide walks you through each advanced feature and provides practical tips for incorporating them into your workflow.",
      icon: <Zap className="w-6 h-6" />,
      date: "2023-12-25",
      readTime: "10 min read"
    },
    {
      id: 6,
      title: "Join the LockIn Community: Connect and Grow Together",
      excerpt: "Learn how to connect with other LockIn users, share strategies, and participate in challenges to boost your productivity.",
      content: "The LockIn community is a vibrant network of like-minded individuals committed to personal and professional growth. Through the app's social features, users can connect, share insights, and participate in group challenges. This article explores how to make the most of the community aspects of LockIn and how collective accountability can accelerate your progress.",
      icon: <Users2 className="w-6 h-6" />,
      date: "2023-12-20",
      readTime: "5 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <br></br>
      <div className="h-[120px] md:h-[150px]"></div> 
      {/* Spacer to push content below navbar */}
      <section className="pt-24 pb-24">
        
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
            
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}

      <section className="py-12">
        
        
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col space-y-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-16">
                  <div className="w-full md:w-1/3 relative overflow-hidden">
                    <motion.div 
                      className="h-full flex items-center justify-center py-4 md:py-0"
                      animate={{ 
                        scale: [0.95, 1.05, 0.95],
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {index === 0 && (
                        <img 
                          src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                          alt="Focus companion" 
                          className="w-full h-full object-cover max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] md:max-w-[120px] md:max-h-[120px] rounded-lg mx-auto"
                        />
                      )}
                      {index === 1 && (
                        <img 
                          src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                          alt="Science of focus" 
                          className="w-full h-full object-cover max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] md:max-w-[120px] md:max-h-[120px] rounded-lg mx-auto"
                        />
                      )}
                      {index === 2 && (
                        <img 
                          src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" 
                          alt="Focus routine" 
                          className="w-full h-full object-cover max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] md:max-w-[120px] md:max-h-[120px] rounded-lg mx-auto"
                        />
                      )}
                      {index === 3 && (
                        <img 
                          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                          alt="Success stories" 
                          className="w-full h-full object-cover max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] md:max-w-[120px] md:max-h-[120px] rounded-lg mx-auto"
                        />
                      )}
                      {index === 4 && (
                        <img 
                          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                          alt="Advanced features" 
                          className="w-full h-full object-cover max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] md:max-w-[120px] md:max-h-[120px] rounded-lg mx-auto"
                        />
                      )}
                      {index === 5 && (
                        <img 
                          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                          alt="LockIn community" 
                          className="w-full h-full object-cover max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] md:max-w-[120px] md:max-h-[120px] rounded-lg mx-auto"
                        />
                      )}
                    </motion.div>
                  </div>
                  <div className="w-full md:w-2/3 p-6">
                    <div className="mb-2 flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold group-hover:text-primary transition-colors mb-2 sm:mb-3">
                      {post.title}
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground mb-2 sm:mb-4">
                      {post.excerpt}
                    </p>
                    <p className="mb-4 sm:mb-6 text-xs sm:text-sm">{post.content.substring(0, 150)}...</p>
                    <Button 
                      variant="default" 
                      className="bg-primary text-white hover:bg-primary/90 text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2"
                    >
                      Read Full Article
                    </Button>
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
