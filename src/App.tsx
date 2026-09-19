import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Stack from './components/Stack'
import { useReveal } from './hooks/useReveal'
import styles from './App.module.css'

export default function App() {
  useReveal()

  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Stack />
      <Projects />
      <Footer />
    </div>
  )
}
