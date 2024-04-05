
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';



function App() {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>     
        <Projects/> 
        {/* <Resume/> */}
        <Contact/>
        <Footer/>
    </>
  );
}

export default App;
