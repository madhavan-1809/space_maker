import { LoadingScreen } from './components/LoadingScreen';
import { CustomCursor } from './components/CustomCursor';
import { ThemeToggle } from './components/ThemeToggle';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Process } from './components/process';
import { Services_Core } from './components/Technical_Services';

export default function App() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ThemeToggle />
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Process />
        <Services_Core />
        <Projects />
        {/* <Interactive3D /> */}
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}