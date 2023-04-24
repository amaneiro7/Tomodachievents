import React from 'react'
import { Logo } from '../Logo'
import { MenuRoutes } from '../../routes'

export function Footer () {
  return (
    <footer className='w-screen h-auto flex flex-col gap-5 pt-8 px-6 bg-black text-text-color-blanco'>
      <div className='flex flex-col lg:flex-row gap-5 items-start justify-start font-semibold'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-lg font-semibold'>TOMODACHI EVENTS</h2>
          <p>Megaevento de ánime y cultura japonesa</p>
          <p>Convención/Expoferia de Cómics, Anime, Juegos, Fantasía y Ciencia Ficción.</p>
        </div>
        <div>
          <h2 className='text-lg font-semibold'>Evento</h2>
          <MenuRoutes style='flex flex-col text-text-color-blanco' />
        </div>
        <div>
          <Logo />
        </div>
      </div>
      <small className='my-0 mx-auto'>© 2023 TOMODACHI EVENTS CONVENTION • All rights reserved.</small>
    </footer>
  )
}
