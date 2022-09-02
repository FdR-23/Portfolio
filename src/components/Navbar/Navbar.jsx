import React from 'react'

import Cv_spanish from '../../assets/Cv/Cv_Spanish.pdf';
import Cv_english from '../../assets/Cv/Cv_English.pdf';

import Toggle from './Toggle';
import ScrollBack from './ScrollBack'

import es from '../../img/flags/es.png'
import uk from '../../img/flags/uk.png'

import { useTranslation } from 'react-i18next'

//import MenuItems from './MenuItems'


function Navbar() {

  // const showMenu = () => {
  //   setActive(!active)
  // }

  //  const [active, setActive] = useState(false)
  const { t, i18n } = useTranslation('global');


  return (

    <div className='p-2 sm:p-4 lg:p-8 items-center max-w-full text-black
    shadow-nav1 shadow-black    bg-gray-600/20
    dark:hover:shadow-3xl dark:shadow-white  dark:text-white
    sm:flex sm:justify-between'>


      <div className='font-alegraya  tracking-tighter font-bold text-center '>
        <h1 className=" text-xl relative top-3 sm:hidden 
        text-shadow-titleday dark:text-shadow-titledark" >Federico D. Rampi
          <span className='block text-sm'>Full Stack Developer</span>
        </h1>

        <h1 className=' hidden sm:block relative left-4 sm:text-lg md:text-2xl lg:text-3xl text-indigo-900
         dark:text-white text-shadow-titleday dark:text-shadow-titledark'>Federico Daniel Rampi
          <span className='block  text-base  md:text-xl lg:text-2xl 
          '>Full Stack Developer</span>
        </h1>
      </div>



      {/* buttom day or dark */}
      <Toggle />

      {/* Buttom Scroll to top */}
      <ScrollBack />

      <nav >
        <ul className='hidden sm:flex uppercase bg-white/10 rounded-lg shadow-xl 
          sm:gap-4 sm:p-3 sm:relative sm:-right-8  
         md:gap-6 md:p-4  md:relative md:-right-4 
          lg:right-0 '>
          <li className='hover:scale-125 duration-300 brightness-90 hover:brightness-200 
          hover:text-shadow-titledark dark:hover:text-shadow-white'>
            <a className='text-xs md:text-sm p-1 lg:p-2' href="#about">{t("navbar.nav1")}</a></li>
          <li className='hover:scale-125 duration-300 brightness-90 hover:brightness-200 
          hover:text-shadow-titledark dark:hover:text-shadow-white'>
            <a className='text-xs md:text-sm p-1 lg:p-2' href="#skills">{t("navbar.nav2")}</a></li>
          <li className='hover:scale-125 duration-300 brightness-90 hover:brightness-200 
          hover:text-shadow-titledark dark:hover:text-shadow-white'>
            <a className='text-xs md:text-sm p-1 lg:p-2' href="#proyects">{t("navbar.nav3")}</a></li>
          <li className='hover:scale-125 duration-300 brightness-90 hover:brightness-200 
          hover:text-shadow-titledark dark:hover:text-shadow-white'>
            <a className='text-xs md:text-sm p-1 lg:p-2' href="#contacts">{t("navbar.nav4")}</a></li>
          <li className='hover:scale-125 duration-300 brightness-90 hover:brightness-200 
          hover:text-shadow-titledark dark:hover:text-shadow-white'>{i18n.language === "es" ?
              <a className='text-xs md:text-sm p-1 lg:p-2' href={Cv_spanish} rel="noopener noreferrer" target="_blank">Cv.</a> :
              <a className='text-xs md:text-sm p-1 lg:p-2' href={Cv_english} rel="noopener noreferrer" target="_blank">Cv.</a>
            }</li>
        </ul>
      </nav>
      <nav className='mt-6 sm:hidden'>
        <ul className='sm:hidden flex flex-row uppercase justify-around
          bg-black/10 max-w-full p-1 rounded-lg'>
          <li><a className='dark:text-shadow-titledark text-xs p-1' href="#about">{t("navbar.nav1")}</a></li>
          <li><a className='dark:text-shadow-titledark text-xs p-1 ' href="#skills">{t("navbar.nav2")}</a></li>
          <li><a className='dark:text-shadow-titledark text-xs p-1' href="#proyects">{t("navbar.nav3")}</a></li>
          <li><a className='dark:text-shadow-titledark text-xs p-1' href="#contacts">{t("navbar.nav4")}</a></li>
          <li>{i18n.language === "es" ?
            <a className='dark:text-shadow-titledark text-xs p-1'
              href={Cv_spanish} rel="noopener noreferrer" target="_blank">
              Cv.</a> :
            <a className='dark:text-shadow-titledark text-xs p-1'
              href={Cv_english} rel="noopener noreferrer" target="_blank">
              Cv.</a>
          }
          </li>
        </ul>
      </nav>


      <div className='flex justify-end sm:relative sm:top-8 sm:-right-4
      lg:top-12 lg:-right-6' >


        <button
          onClick={() => i18n.changeLanguage("es")}
          className={`w-6 m-1 md:w-8 ${i18n.language === "es"?'brightness-125':'brightness-75'}`}><img src={es} alt="flag_es" /></button>
        <button 
          onClick={() => i18n.changeLanguage("en")}
          className={`w-6 m-1 md:w-8 ${i18n.language === "en"?'brightness-125':'brightness-75'}`}><img src={uk} alt="flag_uk" /></button>

      </div>


    </div>

  );
}

export default Navbar 