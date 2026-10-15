import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Stack from './components/Stack'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
