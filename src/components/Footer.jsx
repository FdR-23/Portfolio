import React from 'react'


import logoday2 from '../assets/Logos/log_day1.svg'
import logoday3 from '../assets/Logos/log_dark1.svg'



function Footer() {
  return (
    <footer className='p-4 items-center max-w-full text-black
    shadow-2xl shadow-black  bg-gray-600/10
     dark:hover:shadow-3xl dark:shadow-white  dark:text-white
     flex flex-col justify-center'>
      {/* day */}
      <img className='w-20 bg-white rounded-full shadow-3xl hidden dark:block' src={logoday3} alt="" />
      {/* night */}
      <img className='w-20  rounded-full shadow-3xl shadow-blue-900 dark:hidden' src={logoday2} alt="" />
      <p className='font-alegraya text-center tracking-tighter text-base lg:text-lg 
      text-indigo-900 dark:text-white text-shadow-titledark dark:text-shadow-contact-white'>© Rampi Federico Daniel</p>
    </footer>
  )
}

export default Footer