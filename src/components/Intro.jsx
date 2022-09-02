import React from 'react'
// import imglogo from '../assets/loboamarillo.png'

import Iam1 from '../img/Hero/Me_1.png'
import Iam2 from '../img/Hero/Me_2.png'



import { useTranslation } from 'react-i18next';



function Intro() {

  const { t } = useTranslation('global');


  return (
    <div className='m-2 p-2 rounded-lg max-w-full h-screen flex flex-col justify-center'>

      <section className='p-2 rounded-lg relative bottom-20 sm:bottom-0'>

        {/* <div className='m-2 p-2 rounded-xl max-w-full hue-rotate-80 '>
      <section className='p-4 flex flex-col justify-center max-w-full rounded-lg  '> */}





        <div>
          <div className="sm:grid sm:grid-cols-2  flex flex-col items-center">

            <div className='flex justify-center sm:justify-end'>
              <img
                src={Iam2}
                className="w-5/12 sm:w-7/12 lg:w-6/12  hidden dark:block rounded-logo"
                alt="Me_dark"
              />
              <img
                src={Iam1}
                className="w-5/12 sm:w-7/12 lg:w-6/12  block dark:hidden rounded-logo"
                alt="Me_day"
                data-aos="fade-right"
                data-aos-delay="500"
                data-aos-duration="2000"
              />
            </div>


            <div className="flex flex-col font-ubuntu rounded-lg shadow-sm bg-gray-500/10
               px-8 py-3 m-2 text-center  backdrop-blur-md 
               sm:mr-auto  sm:px-10 sm:py-2 sm:relative sm:right-12 sm:top-28   
               md:mr-auto md:px-12 md:py-6 md:relative md:right-14 md:top-32 
               lg:mr-auto lg:px-16 lg:py-8 lg:relative lg:right-16 lg:top-36"              
              data-aos="fade-up-left"
              data-aos-delay="500"
              data-aos-duration="2000">


              <h2 className=" dark:text-white dark:text-shadow-titledark font-medium font-alegraya  tracking-widest
              text-xl
              lg:text-2xl
             ">{t('intro.title')}</h2>
              <p className='text-2xl font-bold tracking-wider  text-blue-800 dark:text-shadow-name
              md:text-2xl
              xl:text-3xl '>FeDe!</p>
              <p className=" dark:text-white dark:text-shadow-titledark
              text-lg tracking-tighter font-medium font-alegraya  mt-2
              md:tracking-wide 
              md:text-lg
              xl:text-xl">
                {t('intro.welcome')}
              </p>

            </div>

            {/* 
            px-12 py-12 mt-36 md:-ml-36     */}

          </div>

        </div>


      </section>
    </div>
  )
}

export default Intro