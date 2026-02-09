import type { FC } from 'react'
import { HeaderLogo } from './HeaderLogo'
import { HeaderNavigation } from './HeaderNavigation'
import { HeaderActions } from './HeaderActions'

export const HeaderRoot: FC = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__logo'>
            <HeaderLogo />
          </div>

          <div className='header__navigation'>
            <HeaderNavigation />
          </div>

          <div className='header__actions'>
            <HeaderActions />
          </div>
        </div>
      </div>
    </header>
  )
}
