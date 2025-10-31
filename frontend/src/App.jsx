import { useState } from 'react'
import LandingPage from './pages/landingPage'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import NexusPage from './pages/nexusPage'
import ScrollToTop from './components/ScrollToTop'
import NexusInfo from './pages/nexusInfo'
import LorePage from './pages/lorePage'
import LoreInfo from './pages/loreInfo'
import AboutPage from './pages/AboutPage'
import DetectMobile from './components/detectMobile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <ScrollToTop />
        <DetectMobile />
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/lore" element={<LorePage />} />
            <Route path="/nexus" element={<NexusPage />} />
            <Route path="/nexus/info" element={<NexusInfo />} />
            <Route path="/lore/info" element={<LoreInfo />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
