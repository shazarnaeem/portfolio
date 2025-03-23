import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProjectDetails from './components/ProjectDetails'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background text-text">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Experience />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/project/:projectId" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 