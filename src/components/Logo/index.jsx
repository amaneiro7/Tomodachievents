import React from 'react'
import logo from '@/assets/logo.jpg'
export function Logo () {
  return (
    <>
      <div className='flex flex-row gap-2 items-center ml-0 mr-auto'>
        <figure className='ml-0 mr-auto'>
          <img
            className='w-16 h-16 rounded-full'
            src={logo}
            alt='Logo de Tomodachi'
          />
        </figure>
        <h1
          className='max-sm:hidden text-text-color-terciary text-lg font-bold font-sans'
        >
          TomodachiEvents
        </h1>
      </div>
    </>
  )
}
