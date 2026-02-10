import type { FC } from 'react'
import { useRef, useEffect } from 'react'

export const HomeHero: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2
  }, [])

  return (
    <section className='home-hero'>
      <div className='container'>
        <h1 className='home-hero__title'>MacBook Pro</h1>
        <img className='home-hero__image' src='/images/title.png' alt='MacBook Title' />
      </div>

      <video ref={videoRef} className='home-hero__video' src='/videos/hero.mp4' autoPlay muted playsInline />

      <button className='home-hero__button button'>Buy</button>

      <p className='home-hero__text'>From $1599 or $133/mo for 12 months</p>
    </section>
  )
}
