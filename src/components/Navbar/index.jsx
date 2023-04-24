import React, { Suspense, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { NavbarDesktop } from '@/components/NavbarDesktop'
import { NavbarMobile } from '@/components/NavbarMobile'
import { Outlet } from 'react-router-dom'
import { Logo } from '@/components/Logo'

export function Navbar () {
  const [openMenu, setOpenMenu] = useState(false)
  const onHandleOpenMenu = () => setOpenMenu(!openMenu)
  return (
    <>
      <NavbarMobile onHandleOpenMenu={onHandleOpenMenu} setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <header className='w-full h-28 py-4 px-6 bg-bg-main-color'>
        <nav className='flex flex-row justify-center'>
          <Logo />
          <NavbarDesktop />
          <button
            className='lg:hidden rounded-full py-2 px-4'
            onClick={onHandleOpenMenu}
          >
            <MenuIcon fontSize='large' sx={{ color: 'white' }} />
          </button>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  )
}
