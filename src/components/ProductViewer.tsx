import type { FC } from 'react'
import useMacbookStore from '~/store'
import { Canvas } from '@react-three/fiber'
import { StudioLights } from './three/StudioLights'
import { ModelSwitcher } from './three/ModelSwitcher'
import { useMediaQuery } from 'react-responsive'

export const ProductViewer: FC = () => {
  const { color, scale, setColor, setScale } = useMacbookStore()

  const isMobile = useMediaQuery({ query: '(max-width: 1024)' })

  return (
    <section className='product-viewer'>
      <div className='container'>
        <div className='product-viewer__wrapper'>
          <h2 className='product-viewer__title'>Take a closer look.</h2>

          <div className='product-viewer__controls'>
            <p className='product-viewer__info'>Macbook Pro | Available in 14" & 16" in Space Gray & Dark colors</p>
            <div className='viewer-controls'>
              <div className='viewer-controls__wrapper'>
                <div className='viewer-controls__control'>
                  <div className='color-control'>
                    <div
                      className={`color-control__item ${color === '#adb5bd' ? 'is-active' : ''}`}
                      onClick={() => {
                        setColor('#adb5bd')
                      }}></div>
                    <div
                      className={`color-control__item ${color === '#2e2c2e' ? 'is-active' : ''}`}
                      onClick={() => {
                        setColor('#2e2c2e')
                      }}></div>
                  </div>
                </div>
                <div className='viewer-controls__control'>
                  <div className='size-control'>
                    <div
                      className={`size-control__item ${scale === 0.06 ? 'is-active' : ''}`}
                      onClick={() => {
                        setScale(0.06)
                      }}>
                      14"
                    </div>
                    <div
                      className={`size-control__item ${scale === 0.08 ? 'is-active' : ''}`}
                      onClick={() => {
                        setScale(0.08)
                      }}>
                      16"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='product-viewer__canvas'>
            <Canvas id='canvas' camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
              <StudioLights />
              <ModelSwitcher scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}
