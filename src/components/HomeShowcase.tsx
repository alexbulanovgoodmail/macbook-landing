import type { FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const HomeShowcase: FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  useGSAP(() => {
    if (!isMobile) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#home-showcase',
          start: 'top top',
          end: 'bottom center',
          scrub: true,
          pin: true,
        },
      })

      timeline
        .to('#home-showcase-logo', {
          transform: 'scale(1.1)',
        })
        .to('#home-showcase-content', { opacity: 1, y: 0, ease: 'power1.in' })
    }
  }, [isMobile])

  return (
    <section id='home-showcase' className='home-showcase'>
      <div className='home-showcase__media'>
        <video className='home-showcase__video' src='/videos/game.mp4' loop muted autoPlay playsInline />
        <div className='home-showcase__mask'>
          <img id='home-showcase-logo' className='home-showcase__logo' src='/images/mask-logo.svg' />
        </div>
      </div>
      <div id='home-showcase-content' className='home-showcase__content'>
        <div className='container'>
          <div className='home-showcase__wrapper'>
            <div className='home-showcase__info'>
              <h2 className='home-showcase__title'>Rocket Chip</h2>

              <div className='home-showcase__text'>
                <p>
                  Introducing <span>M4, the next generation of Apple silicon</span>. M4 powers
                </p>
                <p>
                  It drives Apple Intelligence on iPad Pro, so you can write, create, and accomplish more with ease. All
                  in a design that’s unbelievably thin, light, and powerful.
                </p>
                <p>
                  A brand-new display engine delivers breathtaking precision, color accuracy, and brightness. And a
                  next-gen GPU with hardware-accelerated ray tracing brings console-level graphics to your fingertips.
                </p>
                <p>
                  <a>Learn more about Apple Intelligence</a>
                </p>
              </div>
            </div>

            <div className='home-showcase__features'>
              <div className='home-showcase__feature'>
                <p>Up to</p>
                <h3>4x faster</h3>
                <p>pro rendering performance than M2</p>
              </div>

              <div className='home-showcase__feature'>
                <p>Up to</p>
                <h3>1.5x faster</h3>
                <p>CPU performance than M2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
