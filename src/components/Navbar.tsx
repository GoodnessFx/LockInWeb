import { useState } from 'react'; 
 import { Link } from 'react-router-dom'; 
 import { motion, AnimatePresence } from 'framer-motion'; 
 import { Menu, X } from 'lucide-react'; 
  
 export function Navbar() { 
   const [isOpen, setIsOpen] = useState(false); 
  
   const navLinks = [ 
     { href: '#features', label: 'Features' }, 
     { href: '#about', label: 'About' }, 
     { href: '#community', label: 'Community' }, 
     { href: '/blog', label: 'Blog', isRoute: true }, 
     { href: '#contact', label: 'Contact' }, 
   ]; 
  
   return ( 
     <> 
       <motion.nav 
         initial={{ y: -100 }} 
         animate={{ y: 0 }} 
         transition={{ duration: 0.6 }} 
         style={{ 
           position: 'fixed', 
           top: 0, 
           left: 0, 
           right: 0, 
           zIndex: 50, 
           height: '64px', 
           display: 'flex', 
           alignItems: 'center', 
           justifyContent: 'space-between', 
           padding: '0 40px', 
           background: 'rgba(8,8,8,0.65)', 
           backdropFilter: 'blur(14px)', 
           WebkitBackdropFilter: 'blur(14px)', 
           borderBottom: '1px solid rgba(255,255,255,0.07)', 
         }} 
       > 
         {/* LOGO */} 
         <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}> 
           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5"> 
             <rect x="3" y="11" width="18" height="11" rx="2" /> 
             <path d="M7 11V7a5 5 0 0 1 10 0v4" /> 
           </svg> 
           <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 700, color: 'white', letterSpacing: '-0.01em' }}> 
             Locked In 
           </span> 
         </Link> 
  
         {/* DESKTOP NAV LINKS */} 
         <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden lg:flex"> 
           {navLinks.map((link) => 
             link.isRoute ? ( 
               <Link 
                 key={link.href} 
                 to={link.href} 
                 style={{ 
                   color: 'white', 
                   textDecoration: 'none', 
                   fontFamily: 'Montserrat, sans-serif', 
                   fontSize: '0.82rem', 
                   fontWeight: 700, 
                   letterSpacing: '0.12em', 
                   textTransform: 'uppercase', 
                   position: 'relative', 
                   paddingBottom: '2px', 
                 }} 
                 className="nav-link-hover" 
               > 
                 {link.label} 
               </Link> 
             ) : ( 
               <a 
                 key={link.href} 
                 href={link.href} 
                 style={{ 
                   color: 'white', 
                   textDecoration: 'none', 
                   fontFamily: 'Montserrat, sans-serif', 
                   fontSize: '0.82rem', 
                   fontWeight: 700, 
                   letterSpacing: '0.12em', 
                   textTransform: 'uppercase', 
                   position: 'relative', 
                   paddingBottom: '2px', 
                 }} 
                 className="nav-link-hover" 
               > 
                 {link.label} 
               </a> 
             ) 
           )} 
         </div> 
  
         {/* APP STORE BUTTONS */} 
         <div style={{ display: 'flex', gap: '10px' }} className="hidden lg:flex"> 
           <a 
             href="#download" 
             style={{ 
               display: 'flex', alignItems: 'center', gap: '6px', 
               border: '1px solid rgba(255,255,255,0.3)', 
               padding: '7px 16px', borderRadius: '9999px', 
               color: 'white', fontSize: '0.75rem', fontWeight: 700, 
               textDecoration: 'none', fontFamily: 'Montserrat, sans-serif', 
               letterSpacing: '0.05em', transition: 'all 0.3s', 
             }} 
             onMouseEnter={e => { 
               (e.currentTarget as HTMLElement).style.background = '#D4AF37'; 
               (e.currentTarget as HTMLElement).style.borderColor = '#D4AF37'; 
               (e.currentTarget as HTMLElement).style.color = '#0D1B2A'; 
             }} 
             onMouseLeave={e => { 
               (e.currentTarget as HTMLElement).style.background = 'transparent'; 
               (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; 
               (e.currentTarget as HTMLElement).style.color = 'white'; 
             }} 
           > 
             <svg width="13" height="13" viewBox="0 0 384 512" fill="currentColor"> 
               <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 33-17.9 64.4-17.9 31.7 0 38.3 17.9 64.6 17.4 48.3-.5 90.3-82.7 102.7-119.3-39-17.6-58.2-47.5-58.6-91.4zm-58.5-157.4c17.2-20.7 28.4-49.3 25.3-77.5-24.3 1.1-53.8 16.3-71.3 36.9-15.8 18.4-29.6 47.5-25.3 75.3 27.1 2.1 53.8-14 71.3-34.7z"/> 
             </svg> 
             App Store 
           </a> 
           <a 
             href="#download" 
             style={{ 
               display: 'flex', alignItems: 'center', gap: '6px', 
               border: '1px solid rgba(255,255,255,0.3)', 
               padding: '7px 16px', borderRadius: '9999px', 
               color: 'white', fontSize: '0.75rem', fontWeight: 700, 
               textDecoration: 'none', fontFamily: 'Montserrat, sans-serif', 
               letterSpacing: '0.05em', transition: 'all 0.3s', 
             }} 
             onMouseEnter={e => { 
               (e.currentTarget as HTMLElement).style.background = '#D4AF37'; 
               (e.currentTarget as HTMLElement).style.borderColor = '#D4AF37'; 
               (e.currentTarget as HTMLElement).style.color = '#0D1B2A'; 
             }} 
             onMouseLeave={e => { 
               (e.currentTarget as HTMLElement).style.background = 'transparent'; 
               (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; 
               (e.currentTarget as HTMLElement).style.color = 'white'; 
             }} 
           > 
             <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"> 
               <path d="M3 20.5v-17c0-.83 1.01-1.3 1.7-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.69.5-1.7.03-1.7-.8z"/> 
             </svg> 
             Google Play 
           </a> 
         </div> 
  
         {/* MOBILE HAMBURGER */} 
         <button 
           onClick={() => setIsOpen(!isOpen)} 
           className="lg:hidden" 
           style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#D4AF37' }} 
         > 
           {isOpen ? <X size={28} /> : <Menu size={28} />} 
         </button> 
       </motion.nav> 
  
       {/* MOBILE MENU - slides in from right */} 
       <AnimatePresence> 
         {isOpen && ( 
           <> 
             <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               exit={{ opacity: 0 }} 
               onClick={() => setIsOpen(false)} 
               style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 55 }} 
             /> 
             <motion.div 
               initial={{ x: '100%' }} 
               animate={{ x: 0 }} 
               exit={{ x: '100%' }} 
               transition={{ type: 'tween', duration: 0.3 }} 
               style={{ 
                 position: 'fixed', top: 0, right: 0, bottom: 0, 
                 width: '75vw', maxWidth: '320px', 
                 background: 'rgba(8,8,8,0.97)', 
                 backdropFilter: 'blur(20px)', 
                 zIndex: 60, 
                 padding: '40px 32px', 
                 display: 'flex', 
                 flexDirection: 'column', 
               }} 
             > 
               <button 
                 onClick={() => setIsOpen(false)} 
                 style={{ alignSelf: 'flex-end', background: 'none', border: 'none', cursor: 'pointer', color: '#D4AF37', marginBottom: '32px' }} 
               > 
                 <X size={28} /> 
               </button> 
               <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}> 
                 {navLinks.map((link) => ( 
                   <div key={link.href} style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}> 
                     {link.isRoute ? ( 
                       <Link 
                         to={link.href} 
                         onClick={() => setIsOpen(false)} 
                         style={{ 
                           display: 'block', padding: '18px 0', 
                           color: 'white', textDecoration: 'none', 
                           fontFamily: 'Montserrat, sans-serif', 
                           fontSize: '1.2rem', fontWeight: 800, 
                           letterSpacing: '0.15em', textTransform: 'uppercase', 
                         }} 
                       > 
                         {link.label} 
                       </Link> 
                     ) : ( 
                       <a 
                         href={link.href} 
                         onClick={() => setIsOpen(false)} 
                         style={{ 
                           display: 'block', padding: '18px 0', 
                           color: 'white', textDecoration: 'none', 
                           fontFamily: 'Montserrat, sans-serif', 
                           fontSize: '1.2rem', fontWeight: 800, 
                           letterSpacing: '0.15em', textTransform: 'uppercase', 
                         }} 
                       > 
                         {link.label} 
                       </a> 
                     )} 
                   </div> 
                 ))} 
               </div> 
               <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}> 
                 <a href="#download" style={{ 
                   display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', 
                   background: '#D4AF37', color: '#0D1B2A', padding: '14px', 
                   borderRadius: '9999px', fontWeight: 800, fontSize: '0.85rem', 
                   textDecoration: 'none', fontFamily: 'Montserrat, sans-serif', 
                   letterSpacing: '0.1em', textTransform: 'uppercase', 
                 }}> 
                   <svg width="14" height="14" viewBox="0 0 384 512" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 33-17.9 64.4-17.9 31.7 0 38.3 17.9 64.6 17.4 48.3-.5 90.3-82.7 102.7-119.3-39-17.6-58.2-47.5-58.6-91.4zm-58.5-157.4c17.2-20.7 28.4-49.3 25.3-77.5-24.3 1.1-53.8 16.3-71.3 36.9-15.8 18.4-29.6 47.5-25.3 75.3 27.1 2.1 53.8-14 71.3-34.7z"/></svg> 
                   App Store 
                 </a> 
                 <a href="#download" style={{ 
                   display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', 
                   border: '2px solid #D4AF37', color: '#D4AF37', padding: '14px', 
                   borderRadius: '9999px', fontWeight: 800, fontSize: '0.85rem', 
                   textDecoration: 'none', fontFamily: 'Montserrat, sans-serif', 
                   letterSpacing: '0.1em', textTransform: 'uppercase', 
                 }}> 
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5v-17c0-.83 1.01-1.3 1.7-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.69.5-1.7.03-1.7-.8z"/></svg> 
                   Google Play 
                 </a> 
               </div> 
             </motion.div> 
           </> 
         )} 
       </AnimatePresence> 
  
       <style>{` 
         .nav-link-hover { transition: color 0.3s; } 
         .nav-link-hover:hover { color: #D4AF37 !important; } 
         .nav-link-hover::after { 
           content: ''; position: absolute; bottom: 0; left: 0; 
           width: 0; height: 1px; background: #D4AF37; transition: width 0.3s; 
         } 
         .nav-link-hover:hover::after { width: 100%; } 
       `}</style> 
     </> 
   ); 
 }