import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F2]">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  )
}

export default App
