import React from 'react'
import { useTranslation } from 'react-i18next';

function About() {

  const { t } = useTranslation('global');

  return (

    <div id="about" className='m-2 p-2 rounded-xl flex flex-col justify-center max-w-full h-scree'>

      <section className='p-2 lg:p-8 max-w-full  rounded-lg 
       bg-gray-500/10 dark:bg-transparent shadow-md hover:shadow-lg'>


        <h2 className='tracking-widest font-alegraya m-2  text-3xl text-center font-medium 
      dark:text-blue-600 lg:text-5xl lg:m-4 text-blue-900 dark:text-shadow-titledark' >{t('about.title')}</h2>

        <div className='flex flex-col justify-center items-center align-middle'>


          <div className='p-4'>

            <p className='font-ubuntu text-base text-justify md:leading-relaxed md:tracking-wider
             dark:text-white 
             sm:p-4  sm:m-2 md:text-xl'
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500">
              {t('about.intro1')}
              <br /> <br />
              {t('about.intro2')}
              <br /> <br />
              {t('about.intro3')}
            </p>
          </div>

        </div>


      </section>
    </div>
  )
}

export default About