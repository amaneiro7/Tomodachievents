import React from 'react'
import HeroFoto from '@/assets/bunkasai.jpg'

export function Hero () {
  return (
    <section className='flex flex-col items-center py-10 gap-5 text-text-color-terciary text-center'>
      <h2 className='text-4xl '>Próximo Evento:</h2>
      <figure>
        <img className='w-11/12 object-cover mx-auto my-0' src={HeroFoto} alt='Información acerca del evento anime bunkasai 2023' />
      </figure>
      <h2 className='md:text-5xl text-4xl font-semibold'>TOMODACHI EVENTS - BUNKASAI II 2023</h2>
      <p className='text-lg '>10 de Junio 2023 Hotel Tibisay</p>
    </section>
  )
}
