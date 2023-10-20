import React from 'react'
// import imglogo from '../assets/loboamarillo.png'

import Iam1 from '../img/Hero/Me_1.png'
import Iam2 from '../img/Hero/Me_2.png'


import { useTranslation } from 'react-i18next';



function Intro() {

    const { t } = useTranslation('global');


    return (
        <div className='flex flex-col justify-center h-screen max-w-full p-2 m-2 rounded-lg'>

            <section className='relative p-2 rounded-lg bottom-20 sm:bottom-0'>

                {/* <div className='max-w-full p-2 m-2 rounded-xl hue-rotate-80 '>
      <section className='flex flex-col justify-center max-w-full p-4 rounded-lg '> */}

                <div>
                    <div className="flex flex-col items-center sm:grid sm:grid-cols-2">

                        <div className='flex justify-center sm:justify-end'>
                            <img
                                src={Iam2}
                                className="hidden w-5/12 sm:w-7/12 lg:w-6/12 lg:h-96 dark:block rounded-logo"
                                alt="Me_dark"
                            />
                            <img
                                src={Iam1}
                                className="block w-5/12 sm:w-7/12 lg:w-6/12 lg:h-96 dark:hidden rounded-logo"
                                alt="Me_day"
                            //data-aos="fade-right"
                            //data-aos-delay="500"
                            // data-aos-duration="2000"
                            />
                        </div>

                        <div className="flex flex-col px-8 py-3 m-2 text-center rounded-lg shadow-lg
                         shadow-black dark:shadow-gray-800 dark:shadow-sm font-ubuntu bg-gray-500/10 backdrop-blur-md
                          sm:mr-auto sm:px-10 sm:py-2 sm:relative sm:right-12 sm:top-28 md:mr-auto md:px-12 md:py-6 md:relative
                           md:right-14 md:top-32 lg:mr-auto lg:px-16 lg:py-8 lg:relative lg:right-16 lg:top-36"
                            data-aos="fade-up-left"
                            data-aos-delay="500"
                            data-aos-duration="2000">

                            <h2 className="text-xl font-medium tracking-widest dark:text-white dark:text-shadow-titledark font-alegraya lg:text-2xl">{t('intro.title')}</h2>
                            <p className='text-2xl font-bold tracking-wider text-blue-800 dark:text-shadow-name md:text-2xl xl:text-3xl '>FeDe!</p>
                            <p className="mt-2 text-lg font-medium tracking-tighter dark:text-white dark:text-shadow-titledark font-alegraya md:tracking-wide md:text-lg xl:text-xl">
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