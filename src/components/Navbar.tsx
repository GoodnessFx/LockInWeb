import { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import { motion, AnimatePresence } from 'framer-motion'; 
import { Menu, X } from 'lucide-react'; 

export function Navbar() { 
  const [isOpen, setIsOpen] = useState(false); 
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024); 

  useEffect(() => { 
    const handleResize = () => setIsMobile(window.innerWidth < 1024); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize); 
  }, []); 

  const navLinks = [ 
    { href: '#features', label: 'Features' }, 
    { href: '#about', label: 'About' }, 
    { href: '#community', label: 'Community' }, 
    { href: '/blog', label: 'Blog', isRoute: true }, 
    { href: '#contact', label: 'Contact' }, 
  ]; 

  const renderLogo = () => ( 
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}> 
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2.5"> 
        <rect x="3" y="11" width="18" height="11" rx="2" /> 
        <path d="M7 11V7a5 5 0 0 1 10 0v4" /> 
      </svg> 
      <span style={{ 
        fontFamily: 'Cormorant Garamond, serif', 
        fontWeight: 700, 
        color: 'white', 
        letterSpacing: '-0.01em',
        whiteSpace: 'nowrap',
        fontSize: isMobile ? '1.3rem' : '1.5rem',
      }}> 
        LOCKED IN 
      </span> 
    </Link> 
  ); 

  const renderHamburger = () => ( 
    <button 
      onClick={() => setIsOpen(!isOpen)} 
      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#D4AF37', padding: '6px' }} 
      aria-label="Toggle menu"
    > 
      {isOpen ? <X size={28} /> : <Menu size={28} />} 
    </button> 
  ); 

  return ( 
    <> 
      {isMobile ? ( 
        <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:50, height:'52px', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 20px', background:'rgba(8,8,8,0.92)', borderBottom:'1px solid rgba(255,255,255,0.07)' }}> 
          {renderLogo()} 
          {renderHamburger()} 
        </nav> 
      ) : ( 
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
            background: 'rgba(8,8,8,0.8)',
            backdropFilter: 'blur(16px)', 
            WebkitBackdropFilter: 'blur(16px)', 
            borderBottom: '1px solid rgba(255,255,255,0.08)', 
          }} 
        > 
          {renderLogo()} 
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginLeft: 'auto', marginRight: '20px' }}> 
            {navLinks.map((link) => 
              link.isRoute ? ( 
                <Link 
                  key={link.href} 
                  to={link.href} 
                  style={{ 
                    color: 'white', 
                    textDecoration: 'none', 
                    fontFamily: 'Montserrat, sans-serif', 
                    fontSize: '0.72rem', 
                    fontWeight: 700, 
                    letterSpacing: '0.08em', 
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
                    fontSize: '0.72rem', 
                    fontWeight: 700, 
                    letterSpacing: '0.08em', 
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
          <div style={{ display: 'flex', gap: '6px' }}> 
            <a 
              href="#download" 
              style={{ 
                display: 'flex', alignItems: 'center', gap: '4px', 
                border: '1px solid rgba(255,255,255,0.15)', 
                padding: '5px 12px', borderRadius: '9999px', 
                color: 'white', fontSize: '0.65rem', fontWeight: 700, 
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
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; 
                (e.currentTarget as HTMLElement).style.color = 'white'; 
              }} 
            > 
              App Store 
            </a> 
            <a 
              href="#download" 
              style={{ 
                display: 'flex', alignItems: 'center', gap: '4px', 
                border: '1px solid rgba(255,255,255,0.15)', 
                padding: '5px 12px', borderRadius: '9999px', 
                color: 'white', fontSize: '0.65rem', fontWeight: 700, 
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
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.15)'; 
                (e.currentTarget as HTMLElement).style.color = 'white'; 
              }} 
            > 
              Google Play 
            </a> 
          </div> 
        </motion.nav> 
      )} 
 
      {/* MOBILE MENU - slides in from right */} 
      <AnimatePresence> 
        {isOpen && isMobile && ( 
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
    </> 
  ); 
} 
