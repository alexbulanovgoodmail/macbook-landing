import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import { HeaderRoot } from './components/HeaderRoot'
import { HomeHero } from './components/HomeHero'
import { ProductViewer } from './components/ProductViewer'
import { HomeShowcase } from './components/HomeShowcase'
import { HomePerformance } from './components/HomePerformance'
import { HomeFeatures } from './components/HomeFeatures'
import { HomeHighlights } from './components/HomeHighlights'
import { FooterRoot } from './components/FooterRoot'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
      <HeaderRoot />
      <main>
        <HomeHero />
        <ProductViewer />
        <HomeShowcase />
        <HomePerformance />
        <HomeFeatures />
        <HomeHighlights />
      </main>
      <FooterRoot />
    </>
  )
}

export default App
