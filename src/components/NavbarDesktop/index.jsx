import React from 'react'
import { MenuRoutes } from '@/routes'

export function NavbarDesktop () {
  return (
    <ul className='lg:flex flex-1 flex-row justify-center items-center gap-3 hidden'>
      <MenuRoutes />
    </ul>
  )
}
