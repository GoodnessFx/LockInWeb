import { useState, useEffect } from 'react'; 
 import { motion, AnimatePresence } from 'framer-motion'; 
   
 const IMAGES = [ 
   'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920', 
   'https://images.pexels.com/photos/3755440/pexels-photo-3755440.jpeg?auto=compress&cs=tinysrgb&w=1920', 
   'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1920', 
   'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920', 
   'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920', 
   'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg?auto=compress&cs=tinysrgb&w=1920', 
 ]; 
   
 const PHRASES = [ 
   'Rent is due everyday.', 
   'Discipline is the rent you pay for greatness.', 
   'Most people rest. You grind.', 
   "The clock doesn't stop. Neither should you.", 
   'Obsession is a gift. Use it.', 
   'Average is the enemy. Lock in.', 
   "Your future self is watching. Don't disappoint.", 
 ]; 
   
 export function HeroSlider() { 
   const [currentSlide, setCurrentSlide] = useState(0); 
   const [phraseIndex, setPhraseIndex] = useState(0); 
   const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(IMAGES.length).fill(false)); 
   
   useEffect(() => { 
     IMAGES.forEach((src, index) => { 
       const img = new Image(); 
       img.onload = () => setIsLoaded(prev => { const n = [...prev]; n[index] = true; return n; }); 
       img.src = src; 
       setTimeout(() => setIsLoaded(prev => { const n = [...prev]; n[index] = true; return n; }), 1500); 
     }); 
   }, []); 
   
   useEffect(() => { 
     const slideTimer = setInterval(() => setCurrentSlide(p => (p + 1) % IMAGES.length), 5500); 
     const phraseTimer = setInterval(() => setPhraseIndex(p => (p + 1) % PHRASES.length), 3500); 
     return () => { clearInterval(slideTimer); clearInterval(phraseTimer); }; 
   }, []); 
   
   return ( 
     <div style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: '#0D1B2A' }}> 
   
       {/* BACKGROUND SLIDES */} 
       <AnimatePresence mode="wait"> 
         <motion.div 
           key={currentSlide} 
           initial={{ opacity: 0 }} 
           animate={{ opacity: isLoaded[currentSlide] ? 1 : 0 }} 
           exit={{ opacity: 0 }} 
           transition={{ duration: 1.5 }} 
           style={{ 
             position: 'absolute', inset: 0, 
             backgroundImage: `url(${IMAGES[currentSlide]})`, 
             backgroundSize: 'cover', 
             backgroundPosition: 'center', 
             backgroundRepeat: 'no-repeat', 
           }} 
         /> 
       </AnimatePresence> 
   
       {/* SINGLE DARK OVERLAY */} 
       <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.48)', zIndex: 1, pointerEvents: 'none' }} /> 
   
       {/* MARQUEE STRIP - sits just below navbar */} 
       <div style={{ 
         position: 'absolute', top: '64px', left: 0, right: 0, 
         zIndex: 5, overflow: 'hidden', 
         background: 'rgba(0,0,0,0.3)', 
         backdropFilter: 'blur(4px)', 
         padding: '10px 0', 
         borderBottom: '1px solid rgba(255,255,255,0.05)', 
       }}> 
         <style>{` 
           @keyframes marquee-scroll { 
             from { transform: translateX(100vw) } 
             to { transform: translateX(-100%) } 
           } 
           @keyframes phrase-slide { 
             from { opacity: 0; transform: translateY(10px) } 
             to { opacity: 1; transform: translateY(0) } 
           } 
           @keyframes scroll-line { 
             0%, 100% { transform: scaleY(1); opacity: 0.6 } 
             50% { transform: scaleY(0.5); opacity: 1 } 
           } 
           @keyframes wa-pulse { 
             0% { transform: scale(1); opacity: 0.6 } 
             100% { transform: scale(1.7); opacity: 0 } 
           } 
         `}</style> 
         <div style={{ display: 'inline-block', whiteSpace: 'nowrap', animation: 'marquee-scroll 35s linear infinite' }}> 
           <span style={{ 
             fontFamily: 'Montserrat, sans-serif', 
             fontSize: '0.75rem', fontWeight: 600, 
             letterSpacing: '0.18em', textTransform: 'uppercase', 
             color: '#D4AF37', 
           }}> 
             Rent is due everyday — Discipline is the rent you pay for greatness — Most people rest. You grind. — The clock doesn't stop. Neither should you. — Obsession is a gift. Use it. — Average is the enemy. Lock in. — Your future self is watching. Don't disappoint. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
           </span> 
           <span style={{ 
             fontFamily: 'Montserrat, sans-serif', 
             fontSize: '0.75rem', fontWeight: 600, 
             letterSpacing: '0.18em', textTransform: 'uppercase', 
             color: '#D4AF37', 
           }}> 
             Rent is due everyday — Discipline is the rent you pay for greatness — Most people rest. You grind. — The clock doesn't stop. Neither should you. — Obsession is a gift. Use it. — Average is the enemy. Lock in. — Your future self is watching. Don't disappoint. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
           </span> 
         </div> 
       </div> 
   
       {/* HERO CONTENT */} 
       <div style={{ position: 'absolute', inset: 0, zIndex: 3, display: 'flex', alignItems: 'center' }}> 
         <div style={{ maxWidth: '1280px', width: '100%', margin: '0 auto', padding: '0 48px', paddingTop: '80px' }}> 
           <motion.div 
             initial={{ opacity: 0, y: 30 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ delay: 0.5, duration: 1 }} 
           > 
             <h1 style={{ 
               fontFamily: 'Cormorant Garamond, serif', 
               fontSize: 'clamp(2.8rem, 6vw, 5.2rem)', 
               fontWeight: 700, 
               color: 'white', 
               lineHeight: 1.1, 
               marginBottom: '20px', 
               textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(212,175,55,0.15)', 
             }}> 
               The World Rewards<br />the Ones Who Don't Quit 
             </h1> 
             <p style={{ 
               fontFamily: 'Nunito Sans, sans-serif', 
               fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', 
               color: 'rgba(255,255,255,0.88)', 
               lineHeight: 1.85, 
               maxWidth: '540px', 
               marginBottom: '36px', 
               fontWeight: 300, 
             }}> 
               In silent rooms, in early mornings, in the grind nobody sees — Locked In shows up. We believe focus is never scarce. Only the tools are. 
             </p> 
             <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}> 
               <a 
                 href="#download" 
                 style={{ 
                   padding: '14px 36px', 
                   background: 'linear-gradient(135deg, #D4AF37, #f0c040)', 
                   color: '#0D1B2A', 
                   borderRadius: '9999px', 
                   fontWeight: 800, 
                   fontSize: '1rem', 
                   fontFamily: 'Montserrat, sans-serif', 
                   textDecoration: 'none', 
                   boxShadow: '0 8px 24px rgba(212,175,55,0.35)', 
                   transition: 'all 0.3s', 
                   display: 'inline-flex', 
                   alignItems: 'center', 
                 }} 
                 onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'} 
                 onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'} 
               > 
                 Start Locking In → 
               </a> 
               <a 
                 href="#features" 
                 style={{ 
                   padding: '14px 36px', 
                   border: '2px solid rgba(255,255,255,0.35)', 
                   color: 'white', 
                   borderRadius: '9999px', 
                   fontWeight: 700, 
                   fontSize: '1rem', 
                   fontFamily: 'Montserrat, sans-serif', 
                   textDecoration: 'none', 
                   transition: 'all 0.3s', 
                   display: 'inline-flex', 
                   alignItems: 'center', 
                 }} 
                 onMouseEnter={e => { 
                   (e.currentTarget as HTMLElement).style.background = 'white'; 
                   (e.currentTarget as HTMLElement).style.color = '#0D1B2A'; 
                 }} 
                 onMouseLeave={e => { 
                   (e.currentTarget as HTMLElement).style.background = 'transparent'; 
                   (e.currentTarget as HTMLElement).style.color = 'white'; 
                 }} 
               > 
                 See How It Works 
               </a> 
             </div> 
           </motion.div> 
         </div> 
       </div> 
   
       {/* ROTATING PHRASE - bottom right */} 
       <div style={{ position: 'absolute', bottom: '96px', right: '32px', zIndex: 5, textAlign: 'right', maxWidth: '280px' }}> 
         <AnimatePresence mode="wait"> 
           <motion.span 
             key={phraseIndex} 
             initial={{ opacity: 0, y: 10 }} 
             animate={{ opacity: 1, y: 0 }} 
             exit={{ opacity: 0, y: -10 }} 
             transition={{ duration: 0.5 }} 
             style={{ 
               display: 'block', 
               fontFamily: 'Montserrat, sans-serif', 
               fontSize: '0.75rem', 
               fontWeight: 600, 
               letterSpacing: '0.14em', 
               textTransform: 'uppercase', 
               color: '#D4AF37', 
               textShadow: '0 2px 8px rgba(0,0,0,0.8)', 
               borderRight: '2px solid #D4AF37', 
               paddingRight: '12px', 
             }} 
           > 
             {PHRASES[phraseIndex]} 
           </motion.span> 
         </AnimatePresence> 
       </div> 
   
       {/* SLIDE INDICATORS */} 
       <div style={{ position: 'absolute', bottom: '28px', left: '50%', transform: 'translateX(-50%)', zIndex: 5, display: 'flex', gap: '8px', alignItems: 'center' }}> 
         {IMAGES.map((_, index) => ( 
           <button 
             key={index} 
             onClick={() => setCurrentSlide(index)} 
             style={{ 
               height: '8px', 
               width: index === currentSlide ? '32px' : '8px', 
               borderRadius: '9999px', 
               background: index === currentSlide ? '#D4AF37' : 'rgba(255,255,255,0.3)', 
               border: 'none', 
               cursor: 'pointer', 
               transition: 'all 0.4s', 
               boxShadow: index === currentSlide ? '0 0 12px rgba(212,175,55,0.5)' : 'none', 
             }} 
             aria-label={`Slide ${index + 1}`} 
           /> 
         ))} 
       </div> 
   
       {/* SLIDE COUNTER */} 
       <div style={{ 
         position: 'absolute', bottom: '32px', right: '32px', zIndex: 5, 
         fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', 
         letterSpacing: '0.3em', color: 'white', 
       }}> 
         <span style={{ color: '#D4AF37', fontWeight: 700 }}>{String(currentSlide + 1).padStart(2, '0')}</span> 
         <span style={{ opacity: 0.4, margin: '0 8px' }}>/</span> 
         <span style={{ opacity: 0.6 }}>{String(IMAGES.length).padStart(2, '0')}</span> 
       </div> 
   
       {/* SCROLL INDICATOR */} 
       <div style={{ 
         position: 'absolute', bottom: '32px', left: '50%', 
         transform: 'translateX(-50%) translateX(-80px)', 
         zIndex: 5, display: 'flex', flexDirection: 'column', 
         alignItems: 'center', gap: '6px', opacity: 0.6, 
       }}> 
         <span style={{ fontSize: '9px', letterSpacing: '0.5em', color: 'white', textTransform: 'uppercase', fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>Scroll</span> 
         <motion.div 
           animate={{ y: [0, 10, 0] }} 
           transition={{ duration: 2, repeat: Infinity }} 
           style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #D4AF37, transparent)' }} 
         /> 
       </div> 
   
       {/* WHATSAPP BUTTON */} 
       <a 
         href="https://wa.me/2349033333333" 
         target="_blank" 
         rel="noopener noreferrer" 
         style={{ 
           position: 'fixed', bottom: '28px', right: '28px', zIndex: 100, 
           width: '58px', height: '58px', 
           background: '#25D366', borderRadius: '50%', 
           display: 'flex', alignItems: 'center', justifyContent: 'center', 
           textDecoration: 'none', 
           boxShadow: '0 4px 20px rgba(37,211,102,0.4)', 
         }} 
       > 
         <div style={{ 
           position: 'absolute', inset: '-4px', borderRadius: '50%', 
           background: '#25D366', opacity: 0.4, 
           animation: 'wa-pulse 2s ease-out infinite', 
         }} /> 
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" style={{ width: '28px', height: '28px', position: 'relative', zIndex: 1 }}> 
           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/> 
         </svg> 
       </a> 
     </div> 
   ); 
 }