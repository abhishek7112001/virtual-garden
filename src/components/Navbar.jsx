import React from 'react'
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <nav>  
        <div className='flex flex-col md:flex-row justify-between items-center p-2 bg-orange-200 shadow-lg border-b border-gray-400 rounded-none '>
    <Link to='/' className='flex items-center ml-4'>
        <img className='h-8 mr-2' src="/up-logo.jpg" alt='logo' />
    </Link>

    <div className='flex flex-col md:flex-row gap-4 md:gap-8 items-center text-center md:text-left'>
        <h3 className='flex items-center text-gray-800 font-medium'>
            <IoCall className='mr-2 text-gray-600' />
            011 24648354
        </h3>
        <h3 className='flex items-center text-gray-800 font-medium'>
            <MdEmail className='mr-2 text-gray-600' />
            support-moayush@nic.in
        </h3>
    </div>
</div>

<div className='flex flex-col md:flex-row justify-between items-center p-4 bg-gradient-to-r from-blue-950 via-blue-400 to-blue-100 shadow-xl border border-gray-500 rounded-none'>
    <Link to='/' className='flex items-center mb-4 md:mb-0'>
        <img className='h-12 mr-2 shadow-md' src="/ministry of Ayush.jpg" alt='logo' />
    </Link>

    <div className='flex flex-col md:flex-row gap-4 md:gap-10 font-semibold text-blue-950'>
        <Link to="/" className='hover:text-blue-700 transform hover:scale-105 transition-all duration-200 text-xl'>Home</Link>
        <Link to="/about" className='hover:text-blue-700 transform hover:scale-105 transition-all duration-200 text-xl'>About</Link>
        <Link to="/garden" className='hover:text-blue-700 transform hover:scale-105 transition-all duration-200 text-xl'>Garden</Link>
        <Link to="/contact" className='hover:text-blue-700 transform hover:scale-105 transition-all duration-200 text-xl'>Contact Us</Link>
    </div>
</div>

    </nav>
  )
}

export default Navbar