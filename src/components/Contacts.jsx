import React from 'react'


import github from '../assets/Contacs_svg/github.svg'
import gmail from '../assets/Contacs_svg/gmail.svg'
import linkedin from '../assets/Contacs_svg/linkedin.svg'

import { useTranslation } from 'react-i18next';

function Contacs() {
  
  const { t } = useTranslation('global');

  return (
    <div id="contacts" className='m-2 p-2 rounded-lg max-w-full'>

      <section className='p-4 lg:p-8  flex flex-col justify-center w-auto h-full rounded-lg'>

        <h2 className='tracking-widest font-alegraya m-2 text-3xl 
        text-center font-medium lg:text-5xl lg:m-4 dark:text-blue-600 
         text-blue-900 dark:text-shadow-titledark' >{t('contact.title')}</h2>



        <div className='flex flex-col justify-center items-center
        sm:flex sm:flex-row  sm:justify-around'>

          <div className='m-4 w-52 h-36 flex flex-col justify-center items-center
           bg-gray-500/10 dark:bg-transparent hover:shadow-gray-600 hover:shadow-md shadow-lg
           dark:shadow-sm dark:shadow-white dark:hover:shadow-white dark:hover:shadow-lg rounded-xl
          hover:scale-105 ease-in-out duration-300 hover:text-shadow-titledark dark:hover:text-shadow-contact-white'
            data-aos="fade-down-right"
            data-aos-duration="2000" id="contacts">
            <a className='flex flex-col items-center text-lg dark:text-cyan-50 p-2' href='https://github.com/FdR-23'>
              <img className='sm:brightness-90 hover:brightness-110  hover:scale-125 ease-in-out duration-300 w-14
              dark:brightness-90 dark:hover:brightness-110' src={github} alt="Github Logo" />
              <span className='p-2 font-alegraya text-xl text-indigo-900 dark:text-white '>github.com/FdR-23</span>
            </a>
          </div>

          <div className='m-4 w-52 h-36 flex flex-col justify-center items-center
           bg-gray-500/10 dark:bg-transparent hover:shadow-gray-600 hover:shadow-md shadow-lg
           dark:shadow-sm dark:shadow-white dark:hover:shadow-red-600 dark:hover:shadow-lg rounded-xl
          hover:scale-105 ease-in-out duration-300 hover:text-shadow-titledark dark:hover:text-shadow-contact-red'
            data-aos="fade-down-right"
            data-aos-duration="1500" id="contacts">
            <a className='flex flex-col items-center text-lg dark:text-cyan-50 ' href='mailto:federampi@gmail.com'>
              <img className='sm:brightness-90 hover:brightness-110 hover:scale-125 ease-in-out duration-300 w-14
              dark:brightness-90 dark:hover:brightness-110' src={gmail} alt="Gmail Logo" />
              <span className='p-2 font-alegraya text-xl text-indigo- dark:text-white text-indigo-900'>federampi@gmail.com</span>
            </a>
          </div>

          <div className='m-4 w-52 h-36 flex flex-col justify-center items-center
           bg-gray-500/10 dark:bg-transparent hover:shadow-gray-600 hover:shadow-md shadow-lg
           dark:shadow-sm  dark:shadow-white dark:hover:shadow-blue-600 dark:hover:shadow-lg rounded-xl
           hover:scale-105 ease-in-out duration-300 hover:text-shadow-titledark dark:hover:text-shadow-contact-blue'
            data-aos="fade-down-right"
            data-aos-duration="1000" id="contacts">
            <a className='flex flex-col items-center text-lg dark:text-cyan-50 p-2' href='https://www.linkedin.com/in/federico-rampi/'>
              <img className='sm:brightness-90 hover:brightness-110 hover:scale-125 ease-in-out duration-300 w-14
              dark:brightness-90 dark:hover:brightness-110' src={linkedin} alt="Linkedin Logo" />
              <span className='p-2 font-alegraya text-xl text-indigo-900 dark:text-white'>in/federico-rampi/</span>
            </a>
          </div>

        </div>




      </section>
    </div>
  )
}

export default Contacs