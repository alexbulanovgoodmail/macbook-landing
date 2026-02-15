import { HeaderRoot } from './components/HeaderRoot'
import { HomeHero } from './components/HomeHero'
import { ProductViewer } from './components/ProductViewer'
import { FooterRoot } from './components/FooterRoot'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
      <HeaderRoot />
      <main>
        <HomeHero />
        <ProductViewer />
      </main>
      <FooterRoot />
    </>
  )
}

export default App
