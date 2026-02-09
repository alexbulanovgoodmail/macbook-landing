import type { FC } from 'react'
import { navLinks } from '~/constants'

export const HeaderNavigation: FC = () => {
  return (
    <nav className='header-navigation'>
      <ul className='header-navigation__list'>
        {navLinks.map(({ label }) => (
          <li className='header-navigation__item' key={label}>
            <a className='header-navigation__link' href='#'>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
