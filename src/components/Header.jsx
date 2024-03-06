import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
  const [togglemenu, setToggleMenu] = useState(false);
  return (
    <div>
      
    <header className='flex justify-between px-5 py-7 bg-primary'>
    <a className='font-bold text-2xl' href='#'>Murugan Dhanasekaran</a>
    <nav className='hidden md:block'>
    <ul className='flex'>
    <li><a className='hover:underline' href='/'>Home</a></li>
    <li><a className='hover:underline' href='#about'>About Us</a></li>
    <li><a className='hover:underline' href='#projects'>Project</a></li>
    <li><a className='hover:underline' href='#resume'>Resume</a></li>
    <li><a className='hover:underline' href='#contact'>Contact</a></li>
    </ul>
    </nav>
   {togglemenu && <nav className='block md:hidden '>
    <ul onClick={ () => setToggleMenu(!togglemenu)} className='flex flex-col text-black mobile-nav'>
    <li><a className='hover:underline' href='/'>Home</a></li>
    <li><a className='hover:underline' href='#about'>About Us</a></li>
    <li><a className='hover:underline' href='#projects'>Project</a></li>
    <li><a className='hover:underline' href='#resume'>Resume</a></li>
    <li><a className='hover:underline' href='#contact'>Contact</a></li>
    </ul>
    </nav>}
    <button onClick={ () => setToggleMenu(!togglemenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'></Bars3Icon></button>
    </header>
    </div>
  )
}

export default Header
