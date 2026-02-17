import type { FC } from 'react'
import { useRef } from 'react'
import { performanceImages, performanceImgPositions } from '../constants/index.js'
import { useMediaQuery } from 'react-responsive'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export const HomePerformance: FC = () => {
  const sectionRef = useRef(null)
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  useGSAP(
    () => {
      const sectionEl = sectionRef.current
      if (!sectionEl) return

      gsap.fromTo(
        '#home-performance-content p',
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '#home-performance-content p',
            start: 'top bottom',
            end: 'top center',
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      )

      if (isMobile) return

      const tl = gsap.timeline({
        defaults: { duration: 2, ease: 'power1.inOut', overwrite: 'auto' },
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      performanceImgPositions.forEach(item => {
        if (item.id === 'p5') return

        const selector = `.${item.id}`
        const vars = {
          left: '',
          right: '',
          bottom: '',
          transform: '',
        }

        if (typeof item.left === 'number') vars.left = `${item.left}%`
        if (typeof item.right === 'number') vars.right = `${item.right}%`
        if (typeof item.bottom === 'number') vars.bottom = `${item.bottom}%`

        tl.to(selector, vars, 0)
      })
    },
    { scope: sectionRef, dependencies: [isMobile] },
  )

  return (
    <section ref={sectionRef} className='home-performance'>
      <div className='container'>
        <h2 className='home-performance__title'>Next-level graphics performance. Game on.</h2>

        <div className='home-performance__wrapper'>
          {performanceImages.map((item, index) => (
            <img
              key={index}
              src={item.src}
              className={`home-performance__img ${item.id}`}
              alt={`Performance Image #${index + 1}`}
            />
          ))}
        </div>

        <div id='home-performance-content' className='home-performance__content'>
          <p>
            Run graphics-intensive workflows with a responsiveness that keeps up with your imagination. The M4 family of
            chips features a GPU with a second-generation hardware-accelerated ray tracing engine that renders images
            faster, so <span>gaming feels more immersive and realistic than ever.</span> And Dynamic Caching optimizes
            fast on-chip memory to dramatically increase average GPU utilization — driving a huge performance boost for
            the most demanding pro apps and games.
          </p>
        </div>
      </div>
    </section>
  )
}
