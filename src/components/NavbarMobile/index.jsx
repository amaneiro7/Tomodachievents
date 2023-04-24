import React from 'react'
import { MenuRoutes } from '@/routes'
import CloseIcon from '@mui/icons-material/Close'

export function NavbarMobile ({ openMenu, onHandleOpenMenu }) {
  return (
    <div className={`lg:hidden flex flex-col gap-4 p-4 m-0 w-80 h-full fixed z-20 top-0 ${!openMenu ? '-left-80' : 'left-0'} z-1 bg-black text-white transition-all delay-200 duration-300 ease-in overflow-hidden`}>
      <div className='ml-auto mr-o'>
        <button
          type='button'
          aria-label='Menú de naegación'
          className='py-2 px-4'
          onClick={onHandleOpenMenu}
        >
          <CloseIcon />
        </button>
      </div>
      <div>
        <ul className='flex flex-col gap-6 mt-4 text-lg'>
          <MenuRoutes />
        </ul>
      </div>
    </div>
  )
}
