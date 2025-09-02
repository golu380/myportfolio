import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import AboutMe from './components/Aboutme.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <Navbar />
            
            <AboutMe/>
            <Projects/>
            <Experience/>
            <Contact />
            <Footer />
            {/* <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer /> */}
        </>
  )
}

export default App
