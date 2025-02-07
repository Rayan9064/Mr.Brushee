import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Mark from './components/Mark';
import CustomerCount from './components/CustomerCount';
import Testimonials from './components/Testimonials';
import ProductCard from './components/ProductCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/intro';

function App() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Features />
      <Intro />
      <Benefits />
      <Mark />
      <CustomerCount />
      <ProductCard />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;