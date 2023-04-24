import React from 'react'
import videoBackground from '@/assets/video4.mp4'

export function MainSection () {
  return (
    <>
      <section className='relative w-full aspect-video px-6 py-36 lg:py-16 text-center flex items-center justify-center im max-md:bg-hero-pattern bg-center bg-no-repeat bg-cover before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-bg-opacity'>
        <video autoPlay muted loop className='absolute object-cover object-center w-full aspect-video top-0 max-md:hidden'>
          <source src={videoBackground} type='video/mp4' />
        </video>
        <div className='relative flex flex-col gap-4 text-text-color-blanco z-10'>
          <h2 className='font-extrabold lg:text-7xl md:text-5xl sm::text-3xl'>
            PREVENTA ONLINE DE ENTRADAS
          </h2>
          <p className='text-3xl'>¡Aprovecha las ofertas de Preventa!</p>
          <div className='flex flex-wrap gap-4 items-center justify-center'>
            <div className='bg-bg-main-color text-text-color-terciary py-5 px-10 text-lg hover:bg-bg-secondary-color hover:font-bold cursor-pointer transition-colors ease-linear duration-200'>
              <a className='' href='/'>
                Información de Entradas
              </a>
            </div>
            <div className='bg-bg-main-color text-text-color-terciary py-5 px-10 text-lg hover:bg-bg-secondary-color hover:font-bold cursor-pointer transition-colors ease-linear duration-200'>
              <a href='/'>
                Comprar Entradas
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
