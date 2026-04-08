import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/home/Hero'
import { About } from './components/home/About'
import { Services } from './components/home/Services'
import { Gallery } from './components/home/Gallery'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <About />
        <Services />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
