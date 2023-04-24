import React from 'react'
import { Hero } from '@/components/Hero'
import { MainSection } from '@/components/MainSection'
import { SocialMedia } from '@/components/SocialMedia'
import { Footer } from '../components/Footer/inde'

export function Inicio () {
  return (
    <>
      <main className='bg-bg-main-color text-text-color-main flex flex-col justify-center items-center'>
        <Hero />
        <MainSection />
        <SocialMedia />
      </main>
      <Footer />
    </>
  )
}
