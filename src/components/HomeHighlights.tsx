import type { FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const HomeHighlights: FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  useGSAP(() => {
    gsap.fromTo(
      ['#left-column', '#right-column'],
      {
        opacity: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: '#home-highlights',
          start: isMobile ? 'bottom bottom' : 'top center',
        },
        y: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 1,
        ease: 'power1.inOut',
      },
    )
  })

  return (
    <section id='home-highlights' className='home-highlights'>
      <div className='container'>
        <h2 className='home-highlights__title'>There’s never been a better time to upgrade.</h2>
        <p className='home-highlights__subtitle'>Here’s what you get with the new MacBook Pro.</p>

        <div className='home-highlights__wrapper'>
          <div id='left-column' className='home-highlights__left-column'>
            <div>
              <img src='/images/laptop.png' alt='Laptop' />
              <p>Fly through demanding tasks up to 9.8x faster.</p>
            </div>
            <div>
              <img src='/images/sun.png' alt='Sun' />
              <p>
                A stunning <br />
                Liquid Retina XDR <br />
                display.
              </p>
            </div>
          </div>
          <div id='right-column' className='home-highlights__right-column'>
            <div className='apple-gradient'>
              <img src='/images/ai.png' alt='AI' />
              <p>
                Built for <br />
                <span>Apple Intelligence.</span>
              </p>
            </div>
            <div>
              <img src='/images/battery.png' alt='Battery' />
              <p>
                Up to
                <span> 14 more hours </span>
                battery life.
                <span> (Up to 24 hours total.)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
