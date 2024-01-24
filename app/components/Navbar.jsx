import Link from 'next/link'
import React from 'react'
import ProfileIcon from './ProfileIcon'

const Navbar = () => {
  return (
    <nav className=' flex items-center justify-between fixed left-0 right-0 px-8 h-14 bg-blue-500 text-white '>
        <Link className=' font-bold' href={'/'}>GTCoding.</Link>
        <ProfileIcon />
    </nav>
  )
}

export default Navbar