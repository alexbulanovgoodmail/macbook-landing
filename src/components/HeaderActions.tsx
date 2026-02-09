import type { FC } from 'react'

export const HeaderActions: FC = () => {
  return (
    <div className='header-actions'>
      <div className='header-actions__wrapper'>
        <button className='header-actions__button'>
          <img src='/images/search.svg' width='24' height='24' alt='Search' />
        </button>
        <button className='header-actions__button'>
          <img src='/images/cart.svg' width='24' height='24' alt='Cart' />
        </button>
      </div>
    </div>
  )
}
