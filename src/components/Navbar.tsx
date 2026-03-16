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
           padding: '0 20px', 
           background: 'rgba(8,8,8,0.8)', 
           backdropFilter: 'blur(16px)', 
           WebkitBackdropFilter: 'blur(16px)', 
           borderBottom: '1px solid rgba(255,255,255,0.08)', 
         }} 
       > 
         {/* LOGO */} 
         <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}> 
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5"> 
             <rect x="3" y="11" width="18" height="11" rx="2" /> 
             <path d="M7 11V7a5 5 0 0 1 10 0v4" /> 
           </svg> 
           <span style={{ 
             fontFamily: 'Cormorant Garamond, serif', 
             fontSize: 'clamp(1.2rem, 5vw, 1.6rem)', 
             fontWeight: 700, 
             color: 'white', 
             letterSpacing: '-0.01em',
             whiteSpace: 'nowrap'
           }}> 
             Locked In 
           </span> 
         </Link> 

         {/* DESKTOP NAV LINKS */} 
         <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginLeft: 'auto', marginRight: '24px' }} className="hidden lg:flex"> 
           {navLinks.map((link) => 
             link.isRoute ? ( 
               <Link 
                 key={link.href} 
                 to={link.href} 
                 style={{ 
                   color: 'white', 
                   textDecoration: 'none', 
                   fontFamily: 'Montserrat, sans-serif', 
                   fontSize: '0.75rem', 
                   fontWeight: 700, 
                   letterSpacing: '0.1em', 
                   textTransform: 'uppercase', 
                   whiteSpace: 'nowrap'
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
                   fontSize: '0.75rem', 
                   fontWeight: 700, 
                   letterSpacing: '0.1em', 
                   textTransform: 'uppercase', 
                   whiteSpace: 'nowrap'
                 }} 
                 className="nav-link-hover" 
               > 
                 {link.label} 
               </a> 
             ) 
           )} 
         </div> 
  
         {/* APP STORE BUTTONS */} 
         <div style={{ display: 'flex', gap: '8px' }} className="hidden lg:flex"> 
           <a 
             href="#download" 
             style={{ 
               display: 'flex', alignItems: 'center', gap: '6px', 
               border: '1px solid rgba(255,255,255,0.2)', 
               padding: '6px 14px', borderRadius: '9999px', 
               color: 'white', fontSize: '0.7rem', fontWeight: 700, 
               textDecoration: 'none', fontFamily: 'Montserrat, sans-serif', 
               letterSpacing: '0.02em', transition: 'all 0.3s', 
               whiteSpace: 'nowrap'
             }} 
             onMouseEnter={e => { 
               (e.currentTarget as HTMLElement).style.background = '#D4AF37'; 
               (e.currentTarget as HTMLElement).style.borderColor = '#D4AF37'; 
               (e.currentTarget as HTMLElement).style.color = '#0D1B2A'; 
             }} 
             onMouseLeave={e => { 
               (e.currentTarget as HTMLElement).style.background = 'transparent'; 
               (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'; 
               (e.currentTarget as HTMLElement).style.color = 'white'; 
             }} 
           > 
             App Store 
           </a> 
           <a 
             href="#download" 
             style={{ 
               display: 'flex', alignItems: 'center', gap: '6px', 
               border: '1px solid rgba(255,255,255,0.2)', 
               padding: '6px 14px', borderRadius: '9999px', 
               color: 'white', fontSize: '0.7rem', fontWeight: 700, 
               textDecoration: 'none', fontFamily: 'Montserrat, sans-serif', 
               letterSpacing: '0.02em', transition: 'all 0.3s', 
               whiteSpace: 'nowrap'
             }} 
             onMouseEnter={e => { 
               (e.currentTarget as HTMLElement).style.background = '#D4AF37'; 
               (e.currentTarget as HTMLElement).style.borderColor = '#D4AF37'; 
               (e.currentTarget as HTMLElement).style.color = '#0D1B2A'; 
             }} 
             onMouseLeave={e => { 
               (e.currentTarget as HTMLElement).style.background = 'transparent'; 
               (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'; 
               (e.currentTarget as HTMLElement).style.color = 'white'; 
             }} 
           > 
             Google Play 
           </a> 
         </div> 

         {/* MOBILE MENU BUTTON (Hamburger) */} 
         <div className="flex lg:hidden items-center ml-auto">
           <button 
             onClick={() => setIsOpen(!isOpen)} 
             style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#D4AF37', padding: '8px' }} 
           > 
             {isOpen ? <X size={24} /> : <Menu size={24} />} 
           </button> 
         </div> 
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
                 style={{ alignSelf: 'flex-end', background: 'none', border: 'none', cursor: 'pointer', color: '#D4AF37', marginBottom: '32px', padding: '8px' }} 
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
                           fontSize: '1rem', fontWeight: 800, 
                           letterSpacing: '0.12em', textTransform: 'uppercase', 
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
                           fontSize: '1rem', fontWeight: 800, 
                           letterSpacing: '0.12em', textTransform: 'uppercase', 
                         }} 
                       > 
                         {link.label} 
                       </a> 
                     )} 
                   </div> 
                 ))} 
               </div> 
               <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingBottom: '20px' }}> 
                 <a href="#download" style={{ 
                   display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', 
                   background: '#D4AF37', color: '#0D1B2A', padding: '14px', 
                   borderRadius: '9999px', fontWeight: 800, fontSize: '0.8rem', 
                   textDecoration: 'none', fontFamily: 'Montserrat, sans-serif', 
                   letterSpacing: '0.08em', textTransform: 'uppercase', 
                 }}> 
                   App Store 
                 </a> 
                 <a href="#download" style={{ 
                   display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', 
                   border: '2px solid #D4AF37', color: '#D4AF37', padding: '14px', 
                   borderRadius: '9999px', fontWeight: 800, fontSize: '0.8rem', 
                   textDecoration: 'none', fontFamily: 'Montserrat, sans-serif', 
                   letterSpacing: '0.08em', textTransform: 'uppercase', 
                 }}> 
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