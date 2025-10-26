import Navigationbar from './components/Navigationbar';
import Home from './components/Home'
import About from './components/About';
import Services from './components/Services';
import ReviewsCarousel from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={{ overflowX: 'hidden', width: '100%', position: 'relative' }}>
      <Navigationbar />
      <Home />
      <About />
      <Services />
      <ReviewsCarousel />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
