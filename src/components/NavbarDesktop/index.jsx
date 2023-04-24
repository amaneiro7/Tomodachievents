import React from 'react'
import { MenuRoutes } from '@/routes'

export function NavbarDesktop () {
  return (
    <ul className='lg:flex flex-1 flex-row justify-center items-center gap-3 hidden'>
      <MenuRoutes style='text-text-color-secondary hover:underline hover:underline-offset-4' isActiveStyle='text-text-color-terciary' />
    </ul>
  )
}
