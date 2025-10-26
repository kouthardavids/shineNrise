import Navigationbar from './components/Navigationbar';
import Home from './components/Home'
import About from './components/About';
import Services from './components/Services';
import ReviewsCarousel from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navigationbar />
      <Home />
      <About />
      <Services />
      <ReviewsCarousel />
      <Contact />
      <Footer />
    </>
  )
}

export default App