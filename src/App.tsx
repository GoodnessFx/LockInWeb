import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { LogoStrip } from './components/LogoStrip';
import { About } from './components/About';
import { Features } from './components/Features';
import { Preview } from './components/Preview';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { BlogPage } from './pages/BlogPage';
import { EarlyBelieverPerks } from './components/EarlyBelieverPerks';
import { FoundingMembersWall } from './components/FoundingMembersWall';
import { CommunitySection } from './components/CommunitySection';
import { PrivateRoster } from './components/PrivateRoster';
import { WaitlistBeta } from './components/WaitlistBeta';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';

function HomePage() {
  return (
    <div className="bg-background text-foreground dark">
      <Navbar />
      <HeroSlider />
      <About />
      <LogoStrip />
      <Features />
      <Preview />
      <EarlyBelieverPerks />
      <FoundingMembersWall />
      <PrivateRoster />
      <CommunitySection />
      <WaitlistBeta />
      <CTA />
      <Contact />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}
