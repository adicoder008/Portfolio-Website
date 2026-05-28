import React from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import ProjectsSection from './components/ProjectsSection'
import Experience from './components/Experience'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="relative min-h-screen text-[#f1f0f5]">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-[1]">
        <Hero />
        <About />
        <TechStack />
        <ProjectsSection />
        <Experience />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
