import { HeaderRoot } from './components/HeaderRoot'
import { HomeHero } from './components/HomeHero'
import { FooterRoot } from './components/FooterRoot'

function App() {
  return (
    <>
      <HeaderRoot />
      <main>
        <HomeHero />
      </main>
      <FooterRoot />
    </>
  )
}

export default App
