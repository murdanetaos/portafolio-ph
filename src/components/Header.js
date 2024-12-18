import React from 'react';
import Socials from './Socials'
import Logo from '../img/header/Logo.svg'
import MobileNav from './MobileNav'

import {Link} from 'react-router-dom'


const Header = () => {
  return <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={'/'} className='max-w-[200px]'>
        <img src={Logo} alt='Logo img'/>
        </Link>

        <nav className='hidden lg:flex gap-x-12 font-semibold'>
          <Link to={'/'} className='text-[#252525] hover:text-[white] transition'>Home</Link>
          <Link to={'/About'} className='text-[#252525] hover:text-[white] transition'>About</Link>
          <Link to={'/Portfolio'} className='text-[#252525] hover:text-[white] transition'>Portfolio</Link>
          <Link to={'/Contact'} className='text-[#252525] hover:text-[white] transition'>Contact</Link>
        </nav>
      </div>
        <Socials/>
        <MobileNav/>



  </header>;

};

export default Header;