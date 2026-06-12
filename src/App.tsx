import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import WhyHireMe from './components/WhyHireMe';
import FeaturedWork from './components/FeaturedWork';
import Clients from './components/Clients';
import SystemDesign from './components/SystemDesign';
import TechnicalLeadership from './components/TechnicalLeadership';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <WhyHireMe />
        <FeaturedWork />
        <Clients />
        <SystemDesign />
        <TechnicalLeadership />
        <Certifications />
        <Education />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
