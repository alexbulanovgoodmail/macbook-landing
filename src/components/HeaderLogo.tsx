import type { FC } from 'react'

export const HeaderLogo: FC = () => {
  return (
    <div className='header-logo'>
      <img className='header-logo__image' src='/images/logo.svg' width='24' height='24' alt='Apple logo' />
    </div>
  )
}
