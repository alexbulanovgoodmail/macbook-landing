import type { FC } from 'react'
import type { PresentationControlProps } from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'
import { PresentationControls } from '@react-three/drei'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import MacbookModel16 from '../models/Macbook-16.jsx'
import MacbookModel14 from '../models/Macbook-14.jsx'

interface ModelSwitcherProps {
  scale: number
  isMobile: boolean
}

const ANIMATION_DURATION = 1
const OFFSET_DISTANCE = 5

export const ModelSwitcher: FC<ModelSwitcherProps> = ({ scale, isMobile }) => {
  const SCALE_LARGE_DESKTOP = 0.08
  const SCALE_LARGE_MOBILE = 0.05

  const smallMacbookRef = useRef<THREE.Group | null>(null)
  const largeMacbookRef = useRef<THREE.Group | null>(null)
  const isFirstRender = useRef(true)

  const showLargeMacbook = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE

  const controlsConfig: PresentationControlProps = {
    snap: true,
    speed: 1,
    zoom: 1,
    azimuth: [-Infinity, Infinity],
  }

  const fadeMeshes = (group: THREE.Group | null, opacity: number) => {
    if (!group) return

    group.traverse((child: THREE.Object3D) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        const material = mesh.material

        if (Array.isArray(material)) {
          material.forEach(mat => {
            mat.transparent = true
            gsap.to(mat, { opacity, duration: ANIMATION_DURATION })
          })
        } else {
          material.transparent = true
          gsap.to(material, { opacity, duration: ANIMATION_DURATION })
        }
      }
    })
  }

  const moveGroup = (group: THREE.Group | null, x: number) => {
    if (!group) return

    gsap.to(group.position, { x, duration: ANIMATION_DURATION })
  }

  useGSAP(
    () => {
      const small = smallMacbookRef.current
      const large = largeMacbookRef.current

      if (!small || !large) return

      if (isFirstRender.current) {
        if (showLargeMacbook) {
          small.position.x = -OFFSET_DISTANCE
          large.position.x = 0

          fadeMeshes(small, 0)
          fadeMeshes(large, 1)
        } else {
          small.position.x = 0
          large.position.x = OFFSET_DISTANCE

          fadeMeshes(small, 1)
          fadeMeshes(large, 0)
        }

        isFirstRender.current = false
        return
      }

      if (showLargeMacbook) {
        moveGroup(small, -OFFSET_DISTANCE)
        moveGroup(large, 0)

        fadeMeshes(small, 0)
        fadeMeshes(large, 1)
      } else {
        moveGroup(small, 0)
        moveGroup(large, OFFSET_DISTANCE)

        fadeMeshes(small, 1)
        fadeMeshes(large, 0)
      }
    },
    { dependencies: [scale] },
  )

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  )
}
