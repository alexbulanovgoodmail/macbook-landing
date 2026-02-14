import { HeaderRoot } from './components/HeaderRoot'
import { HomeHero } from './components/HomeHero'
import { ProductViewer } from './components/ProductViewer'
import { FooterRoot } from './components/FooterRoot'

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
