import React from 'react'
import '../../index.css'
import { Link } from 'react-router-dom'
import { FaLocationArrow } from "react-icons/fa";

const Home = () => {
  return (
    <div className='bg-orange-200 min-h-screen'> {/* Added min-h-screen class */}
      {/* Top Section with Images and Text */}
      <div className='flex justify-between items-center p-4'>
        <img className='' src="/Ayush mantralay hero.png" alt="hero" />
        <div>
          <h1 className='text-3xl font-semibold hover:text-[1.9rem] transition-transform duration-800 ease-in-out cursor-pointer'>
            India is a treasure trove of herbal plants, it is, in a way our Green Gold.
          </h1>
        </div>
        <img className='hero-image' src="/modi3.png" alt="hero" />
      </div>

      {/* About Us Section */}
      <div className='bg-blue-500 p-8 m-4 rounded-lg shadow-lg mt-10'>
        <div className='bg-white p-6 rounded-lg shadow-md hover:bg-blue-400 transition-all duration-300 cursor-pointer'>
          <h1 className='text-black text-2xl font-semibold mb-4'>All About us...</h1>
          <p className='text-black text-lg'>
            The Ministry of Ayush was formed on the 9th of November 2014 with a vision of reviving the profound knowledge of our ancient systems of medicine and ensuring the optimal development and propagation of the Ayush systems of healthcare. Earlier, the Department of Indian System of Medicine and Homoeopathy (ISM&H) formed in 1995, was responsible for the development of these systems. It was then renamed as the Department of Ayurveda, Yoga, and Naturopathy, Unani, Siddha and Homoeopathy (Ayush) in November 2003 with focused attention towards education and research in Ayurveda, Yoga and Naturopathy, Unani, Siddha, and Homoeopathy.
          </p>
        </div>
      </div>

      {/* Welcome to Virtual Garden Section */}
      <div className='mt-10 flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold mb-8 text-center'>
          Welcome to the Virtual Garden!
        </h1>

        <img
          className='w-full max-w-3xl transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-lg'
          src="/ayurvedicpic.avif"
          alt="hero"
        />
      </div>

      {/* Virtual Garden Button */}
      <div className='flex justify-center mt-12 mb-10'>
        <Link
          to='/garden'
          className='bg-blue-800 text-white px-6 py-4 text-2xl rounded-md hover:bg-blue-900 transition duration-300 flex items-center gap-2'
        >
          Have a tour
          <FaLocationArrow />
        </Link>
      </div>
    </div>
  )
}

export default Home;
