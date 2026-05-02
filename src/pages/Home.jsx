import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Services from '../components/Services'
import MisionVision from '../components/MisionVision'
import Process from '../components/Process'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

export default function Home() {
  const location = useLocation()

  // Handle scroll to section when navigating from another page with hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  return (
    <>
      <Hero />
      <Services />
      <MisionVision />
      <Process />
      <Portfolio />
      <Contact />
    </>
  )
}
