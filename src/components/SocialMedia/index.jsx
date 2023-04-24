import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import { SvgIcon } from '@mui/material'
export function SocialMedia () {
  return (
    <section className='w-screen h-20 flex flex-col gap-8 px-5 py-28 items-center justify-center text-xl font-bold bg-bg-secondary-color text-center'>
      <h3>Siguenos en nuestras redes sociales</h3>
      <ul className='flex flex-row items-center justify-evenly gap-7'>
        <li className='transition-all duration-200 ease-in hover:scale-125'>
          <a href='https://www.instagram.com/tomodachifamily/' target='_blank' rel='noreferrer'>
            <InstagramIcon />
          </a>
        </li>
        <li className='transition-all duration-200 ease-in hover:scale-125'>
          <a href='https://www.facebook.com/TomodachiEvents' target='_blank' rel='noreferrer'>
            <FacebookOutlinedIcon />
          </a>
        </li>
        <li className='transition-all duration-200 ease-in hover:scale-125'>
          <a href='https://www.tiktok.com/@tomodachievents' target='_blank' rel='noreferrer'>
            <TikTokIcon />
          </a>
        </li>
        <li className='transition-all duration-200 ease-in hover:scale-125'>
          <a href='https://www.youtube.com/c/TomodachiEventsofficial' target='_blank' rel='noreferrer'>
            <YouTubeIcon />
          </a>
        </li>
      </ul>
    </section>
  )
}

function TikTokIcon (props) {
  return (
    <SvgIcon {...props}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z' /></svg>
    </SvgIcon>
  )
}
