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
      date: "2024-01-10",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Building Your Focus Routine: A Complete Guide",
      excerpt: "Learn how to create and maintain effective focus routines using LockIn's powerful features and customization options.",
      content: "Creating a successful focus routine starts with understanding your peak performance times and setting realistic goals. LockIn's intelligent scheduling system adapts to your lifestyle, suggesting optimal focus sessions based on your energy levels and commitments. The app's progress tracking helps you identify patterns and optimize your approach for maximum productivity.",
      icon: <Settings className="w-6 h-6" />,
      date: "2024-01-05",
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
      excerpt: "Deep dive into LockIn's powerful features including analytics, integrations, and customization options.",
      content: "LockIn offers advanced features like detailed analytics, third-party integrations, and customizable focus modes. The app's AI-powered insights help you understand your productivity patterns and suggest improvements. Integration with calendar apps, project management tools, and other productivity software ensures LockIn fits seamlessly into your existing workflow.",
      icon: <Target className="w-6 h-6" />,
      date: "2023-12-28",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "The LockIn Community: Building Focus Together",
      excerpt: "Discover how the LockIn community supports and motivates users to maintain consistent focus and achieve their goals.",
      content: "The LockIn community is a vibrant ecosystem of focused individuals supporting each other's growth. Through challenges, leaderboards, and collaborative features, users can connect with like-minded people, share strategies, and maintain motivation. The community aspect transforms individual productivity into a collective journey toward excellence.",
      icon: <Users2 className="w-6 h-6" />,
      date: "2023-12-25",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            {/* Back to Home removed per request (was non-functional) */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Learn How to <span className="text-primary">Lock In</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the science behind focus, productivity techniques, and real success stories from our community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-xl text-primary border border-primary/20">
                          {post.icon}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {post.date} • {post.readTime}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {post.content}
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:shadow-md"
                    >
                      Read Full Article
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Focus Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of users who have already transformed their productivity with LockIn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg">
                Download LockIn
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
