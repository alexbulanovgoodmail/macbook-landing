import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import { HeaderRoot } from './components/HeaderRoot'
import { HomeHero } from './components/HomeHero'
import { ProductViewer } from './components/ProductViewer'
import { HomeShowcase } from './components/HomeShowcase'
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
      </main>
      <FooterRoot />
    </>
  )
}

export default App
