import type { FC } from 'react'
import { FooterLogo } from './FooterLogo'
import { FooterNavigation } from './FooterNavigation'

export const FooterRoot: FC = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <div className='footer__info'>
            More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.
          </div>
          <div className='footer__logo'>
            <FooterLogo />
          </div>
        </div>

        <hr />

        <div className='footer__navigation'>
          <div className='footer__copyright'>Copyright © 2024 Apple Inc. All rights reserved.</div>
          <FooterNavigation />
        </div>
      </div>
    </footer>
  )
}
