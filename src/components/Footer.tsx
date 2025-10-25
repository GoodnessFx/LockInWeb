import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: <Github className="h-5 w-5" />
    },
    {
      name: 'X',
      href: 'https://x.com',
      icon: <span className="h-5 w-5 flex items-center justify-center font-bold text-lg">𝕏</span>
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: 'Email',
      href: 'mailto:hello@lockin.app',
      icon: <Mail className="h-5 w-5" />
    }
  ];

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Security', href: '#security' },
        { name: 'Roadmap', href: '#roadmap' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '#careers' },
        { name: 'Press', href: '#press' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '#help' },
        { name: 'Contact', href: '#contact' },
        { name: 'API Docs', href: '#docs' },
        { name: 'Status', href: '#status' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '#privacy' },
        { name: 'Terms', href: '#terms' },
        { name: 'Cookies', href: '#cookies' },
        { name: 'Licenses', href: '#licenses' }
      ]
    }
  ];

  return (
    <footer className="bg-secondary/10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-6">
                <span className="text-2xl font-bold text-primary">LockIn</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Focus and grow with discipline. Build consistent habits and master your niche in tech, photography, and beyond.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-muted/50 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-200 group"
                  >
                    {link.icon}
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-sm font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 group"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1 group"
                        >
                          {link.name}
                          {link.href.startsWith('http') && (
                            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-6 border-t border-border"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
              <span>© 2025 LockIn. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span>Made For anyone who wants to up their game No Bs!!!</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#contact" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}