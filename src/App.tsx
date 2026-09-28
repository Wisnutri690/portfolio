import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F2]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </main>
    </div>
  )
}

export default App
