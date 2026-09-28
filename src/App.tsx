import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F2]">
      <Navbar />
      <main className="min-h-[160vh] flex flex-col items-center justify-center p-6 pt-32">
        <div className="text-center space-y-3">
          <span className="section-label">Step 3 Completed</span>
          <h1 className="hero-headline text-[#F5F5F2]">Navbar Ready</h1>
          <p className="text-sm text-[#A1A1A1] max-w-sm mx-auto">
            Scroll down to test sticky translucent effect and borders.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
