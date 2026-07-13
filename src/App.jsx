import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ScrollToLocation from './components/ScrollToLocation'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import PortfolioPage from './components/Portfolio/PortfolioPage'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollToLocation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<><Navbar /><PortfolioPage /><Footer /></>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
