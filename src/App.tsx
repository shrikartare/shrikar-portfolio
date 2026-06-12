import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import FeaturedWork from './components/FeaturedWork';
import Metrics from './components/Metrics';
import WhyHireMe from './components/WhyHireMe';
import SystemDesign from './components/SystemDesign';
import TechnicalLeadership from './components/TechnicalLeadership';
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
        <Clients />
        <FeaturedWork />
        <Metrics />
        <WhyHireMe />
        <SystemDesign />
        <TechnicalLeadership />
        <Education />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
