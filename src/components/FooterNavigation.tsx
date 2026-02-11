import type { FC } from 'react'
import { footerLinks } from '~/constants'

export const FooterNavigation: FC = () => {
  return (
    <div className='footer-navigation'>
      <ul className='footer-navigation__list'>
        {footerLinks.map(({ label }) => (
          <li className='footer-navigation__item' key={label}>
            <a className='footer-navigation__link' href='#'>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
