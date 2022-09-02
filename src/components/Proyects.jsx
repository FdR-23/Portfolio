import React from 'react'
import WeatherApp_img from '../img/proyects/WeatherApp.png'
import PokemonApp_img from '../img/proyects/PiPokemon.png'
import HenryBank from '../img/proyects/HenryBank1.png'

import css from '../assets/Skills_svg/css.svg'
import js from '../assets/Skills_svg/js.svg'
import html from '../assets/Skills_svg/html.svg'
//import tailwind from '../assets/Skills_svg/tailwind.svg'

import react from '../assets/Skills_svg/react.svg'
import redux from '../assets/Skills_svg/redux.svg'
import nextjs from '../assets/Skills_svg/nextjs.svg'

import node from '../assets/Skills_svg/node.svg'
import express from '../assets/Skills_svg/express.svg'
import postgresql from '../assets/Skills_svg/postgresql.svg'
import sequelize from '../assets/Skills_svg/sequelize.svg'

import reactnative from '../assets/Skills_svg/react_native.svg'


import { useTranslation } from 'react-i18next';

function Proyects() {

   const { t } = useTranslation('global');
  return (
    <div id="proyects" className='m-2 p-2 rounded-lg max-w-full  '>

      <section className='p-4 lg:p-8 max-w-full h-full rounded-lg sm:h-full'>


        <h2 className='tracking-widest font-alegraya m-2 text-3xl text-center font-medium 
      dark:text-blue-600 lg:text-5xl lg:m-4 text-blue-900 dark:text-shadow-titledark' >{t('projects.title')}</h2>


        <div className='m-2 flex flex-col items-center justify-center'>

          <div data-aos="zoom-in-right" data-aos-duration="1000"
            className="m-4 flex flex-col md:flex-row rounded-lg items-center
            bg-gray-500/20 dark:bg-transparent dark:md:hover:shadow-white/20 md:w-11/12  md:h-72 md:hover:shadow-lg shadow-md">
            <img className=" rounded-t-lg object-fit  md:shadow-md md:shadow-black
            md:m-4 md:h-auto md:w-80  md:rounded-lg
            dark:md:shadow-md dark:md:shadow-white/50"
              src={PokemonApp_img} alt="PokemonApp_img" />
            <div data-aos="fade-up" data-aos-duration="2000"
              className="p-6 flex flex-col flex-grow justify-start">
              <h3 className="text-xl font-medium mb-2
               text-yellow-600 dark:text-shadow-titledark">Pokemon App</h3>
              <p className="text-gray-700 text-base mb-4
              dark:text-white">
                {t('projects.pokeintro')}.<br />
                {t('projects.pokeintro2')}
              </p>
              <div className='flex flex-row  justify-end'>
                <label htmlFor="my-modal" className="btn btn-outline btn-xs w-20
                 dark:hover:bg-black/30  dark:shadow-inner dark:shadow-white dark:text-white dark:hover:shadow-sm
                  dark:hover:shadow-white">{t('projects.bnb_vermas')}</label>
              </div>
            </div>
          </div>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-gray-700 dark:text-white">
              <label htmlFor="my-modal" className="btn btn-xs btn-circle hover:bg-white absolute right-2 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                  <path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M358.625,313.375  c12.5,12.492,12.5,32.758,0,45.25C352.383,364.875,344.188,368,336,368s-16.383-3.125-22.625-9.375L256,301.25l-57.375,57.375  C192.383,364.875,184.188,368,176,368s-16.383-3.125-22.625-9.375c-12.5-12.492-12.5-32.758,0-45.25L210.75,256l-57.375-57.375  c-12.5-12.492-12.5-32.758,0-45.25c12.484-12.5,32.766-12.5,45.25,0L256,210.75l57.375-57.375c12.484-12.5,32.766-12.5,45.25,0  c12.5,12.492,12.5,32.758,0,45.25L301.25,256L358.625,313.375z" />
                </svg>
              </label>
              <h3 className="font-semibold text-xl">Pokemon App</h3>
              <p className="py-4">
              {t('projects.modalpoke')}</p>
              <h3 className="font-bold text-lg">{t('projects.modal_tecnologia')}</h3>
              <div className='flex flex-row flex-wrap justify-center'>
                <img className='w-8 m-1 mx-2' src={html} alt="html_logo" />
                <img className='w-8 m-1 mx-2' src={css} alt="css_logo" />
                <img className='w-8 m-1 mx-2' src={js} alt="js_logo" />
                <img className='w-8 m-1 mx-2' src={react} alt="react_logo" />
                <img className='w-8 m-1 mx-2' src={redux} alt="redux_logo" />
                <img className='w-8 m-1 mx-2' src={node} alt="node_logo" />
                <img className='w-8 m-1 mx-2' src={express} alt="express_logo" />
                <img className='w-8 m-1 mx-2' src={postgresql} alt="postgresql_logo" />
                <img className='w-8 m-1 mx-2' src={sequelize} alt="sequelize_logo" />
              </div>
              <div className="modal-action">
                <label className="btn btn-sm shadow-white shadow-inner dark:bg-white/10 dark:hover:shadow-md dark:hover:shadow-white"><a
                  className='flex flex-row justify-center items-center' target='_black' href="https://pi-pokemon-khaki.vercel.app/" rel="noopener noreferrer" >
                  <svg className=" mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5,2 C5.55228,2 6,2.44772 6,3 C6,3.55228 5.55228,4 5,4 L4,4 L4,12 L12,12 L12,11 C12,10.4477 12.4477,10 13,10 C13.5523,10 14,10.4477 14,11 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L5,2 Z M15,1 L15,5.99814453 C15,6.55043453 14.5523,6.99814453 14,6.99814453 C13.4477,6.99814453 13,6.55043453 13,5.99814453 L13,4.41419 L8.71571,8.69846 C8.32519,9.08899 7.69202,9.08899 7.3015,8.69846 C6.91097,8.30794 6.91097,7.67477 7.3015,7.28425 L11.5858,3 L9.99619141,3 C9.44391141,3 8.99619141,2.55228 8.99619141,2 C8.99619141,1.44772 9.44391141,1 9.99619141,1 L15,1 Z" />
                  </svg>
                  Deploy</a></label>
                <label className="btn btn-sm shadow-white shadow-inner  dark:bg-white/10 dark:hover:shadow-md dark:hover:shadow-white"><a
                  className='flex flex-row justify-center items-center' target='_black' href="https://github.com/FdR-23/Pi-Pokemon" rel="noopener noreferrer" >
                  <svg className=" mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" width="20"
                    shapeRendering="geometricPrecision" textRendering="geometricPrecision"
                    imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"
                    viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" /></svg>
                 {t('projects.bnb_codigo')}</a></label>
              </div>
            </div>
          </div>



          <div data-aos="zoom-in-right" data-aos-duration="1000"
            className="m-4 flex flex-col md:flex-row rounded-lg items-center
             bg-gray-500/20 dark:bg-transparent dark:md:hover:shadow-white/20 md:w-11/12 md:h-72 md:hover:shadow-lg shadow-md">
            <img className=" rounded-t-lg object-fit  md:shadow-md md:shadow-black
            md:m-4 md:h-auto md:w-80  md:rounded-lg
           dark:md:shadow-md dark:md:shadow-white/50"
              src={WeatherApp_img} alt="WeatherApp_img" />
            <div data-aos="fade-up" data-aos-duration="2000"
              className="p-6 flex flex-col flex-grow justify-start">
              <header className="text-xl font-medium mb-2
               text-cyan-600 dark:text-shadow-titledark">Weather App</header>
              <p className="text-gray-700 text-base mb-4
              dark:text-white">
                {t('projects.weatherAppintro')}<br />
                {t('projects.weatherAppintro2')}
              </p>
              <div className='flex flex-row justify-end'>
                <label htmlFor="my2-modal" className="btn btn-outline btn-xs w-20
                  dark:hover:bg-black/30  dark:shadow-inner dark:shadow-white dark:text-white dark:hover:shadow-sm dark:hover:shadow-white">{t('projects.bnb_vermas')}</label>
              </div>
            </div>
          </div>
          <input type="checkbox" id="my2-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-gray-700 dark:text-white">
              <label htmlFor="my2-modal" className="btn btn-xs btn-circle  hover:bg-white absolute right-2 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                  <path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M358.625,313.375  c12.5,12.492,12.5,32.758,0,45.25C352.383,364.875,344.188,368,336,368s-16.383-3.125-22.625-9.375L256,301.25l-57.375,57.375  C192.383,364.875,184.188,368,176,368s-16.383-3.125-22.625-9.375c-12.5-12.492-12.5-32.758,0-45.25L210.75,256l-57.375-57.375  c-12.5-12.492-12.5-32.758,0-45.25c12.484-12.5,32.766-12.5,45.25,0L256,210.75l57.375-57.375c12.484-12.5,32.766-12.5,45.25,0  c12.5,12.492,12.5,32.758,0,45.25L301.25,256L358.625,313.375z" />
                </svg>
              </label>
              <h3 className="font-semibold text-xl">Weather App</h3>
              <p className="py-4">{t('projects.modalweatherApp')}
              </p>
              <h3 className="font-bold text-lg">{t('projects.modal_tecnologia')}</h3>
              <div className='flex flex-row flex-wrap justify-center'>
                <img className='w-8 m-1 mx-2' src={html} alt="html" />
                <img className='w-8 m-1 mx-2' src={css} alt="css" />
                <img className='w-12 m-1 mx-2' src={nextjs} alt="nextjs" />
                <img className='w-8 m-1 mx-2' src={redux} alt="redux_logo" />
              </div>
              <div className="modal-action">
                <label className="shadow-white shadow-inner btn btn-sm dark:bg-white/10 dark:hover:shadow-md dark:hover:shadow-white"><a
                  className='flex flex-row justify-center items-center' target='_black' href="https://weather-app-topaz-one.vercel.app/" rel="noopener noreferrer" >
                  <svg className=" mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M5,2 C5.55228,2 6,2.44772 6,3 C6,3.55228 5.55228,4 5,4 L4,4 L4,12 L12,12 L12,11 C12,10.4477 12.4477,10 13,10 C13.5523,10 14,10.4477 14,11 L14,12 C14,13.1046 13.1046,14 12,14 L4,14 C2.89543,14 2,13.1046 2,12 L2,4 C2,2.89543 2.89543,2 4,2 L5,2 Z M15,1 L15,5.99814453 C15,6.55043453 14.5523,6.99814453 14,6.99814453 C13.4477,6.99814453 13,6.55043453 13,5.99814453 L13,4.41419 L8.71571,8.69846 C8.32519,9.08899 7.69202,9.08899 7.3015,8.69846 C6.91097,8.30794 6.91097,7.67477 7.3015,7.28425 L11.5858,3 L9.99619141,3 C9.44391141,3 8.99619141,2.55228 8.99619141,2 C8.99619141,1.44772 9.44391141,1 9.99619141,1 L15,1 Z" />
                  </svg>
                  Deploy</a></label>
                <label className="shadow-white shadow-inner btn btn-sm dark:bg-white/10 dark:hover:shadow-md dark:hover:shadow-white"><a
                  className='flex flex-row justify-center items-center ' target='_black' href="https://github.com/FdR-23/Weather-app" rel="noopener noreferrer" >
                  <svg className=" mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" width="20"
                    shapeRendering="geometricPrecision" textRendering="geometricPrecision"
                    imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"
                    viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" /></svg>
                   {t('projects.bnb_codigo')}</a></label>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in-right" data-aos-duration="1000"
            className="m-4 flex flex-col md:flex-row rounded-lg items-center
           bg-gray-500/20 dark:bg-transparent dark:md:hover:shadow-white/20 md:w-11/12 md:h-72 md:hover:shadow-lg shadow-md">
            <img className=" rounded-t-lg object-fit  md:shadow-md md:shadow-black
            md:m-4 md:h-auto md:w-80  md:rounded-lg
            dark:md:shadow-md dark:md:shadow-white/50"
              src={HenryBank} alt="HenryBank_img" />
            <div data-aos="fade-up" data-aos-duration="2000"
              className="p-6 flex flex-col flex-growjustify-start">
              <h3 className="text-xl font-medium mb-2
               text-indigo-600 dark:text-shadow-titledark">HenryBank App</h3>
              <p className="text-gray-700 text-base mb-4
              dark:text-white">{t('projects.heanrybankintro')}<br />
                {t('projects.heanrybankintro2')}
              </p>

              <div className='flex flex-row justify-end'>
                <label htmlFor="my3-modal" className="btn btn-outline btn-xs w-20
                  dark:hover:bg-black/30  dark:shadow-inner dark:shadow-white dark:text-white 
                  dark:hover:shadow-sm dark:hover:shadow-white">{t('projects.bnb_vermas')}</label>
              </div>
            </div>
          </div>
          <input type="checkbox" id="my3-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box dark:bg-gray-700 dark:text-white">
              <label htmlFor="my3-modal" className="btn btn-xs btn-circle  hover:bg-white absolute right-2 top-2">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                  <path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M358.625,313.375  c12.5,12.492,12.5,32.758,0,45.25C352.383,364.875,344.188,368,336,368s-16.383-3.125-22.625-9.375L256,301.25l-57.375,57.375  C192.383,364.875,184.188,368,176,368s-16.383-3.125-22.625-9.375c-12.5-12.492-12.5-32.758,0-45.25L210.75,256l-57.375-57.375  c-12.5-12.492-12.5-32.758,0-45.25c12.484-12.5,32.766-12.5,45.25,0L256,210.75l57.375-57.375c12.484-12.5,32.766-12.5,45.25,0  c12.5,12.492,12.5,32.758,0,45.25L301.25,256L358.625,313.375z" />
                </svg>
              </label>
              <h3 className="font-semibold text-xl">HenryBank App</h3>
              <p className="py-4">{t('projects.modalhenrybank')}
              </p>
              <h3 className="font-bold text-lg">{t('projects.modal_tecnologia')}</h3>
              <div className='flex flex-row flex-wrap justify-center'>
                <img className='w-8 m-1 mx-2' src={js} alt="js_logo" />
                <img className='w-8 m-1 mx-2' src={css} alt="css_logo" />
                <img className='w-6 m-1 mx-2' src={reactnative} alt="reactnative_logo" />
                <img className='w-8 m-1 mx-2' src={redux} alt="redux_logo" />
                <img className='w-8 m-1 mx-2' src={node} alt="node_logo" />
                <img className='w-8 m-1 mx-2' src={express} alt="express_logo" />
                <img className='w-8 m-1 mx-2' src={postgresql} alt="postgresql_logo" />
                <img className='w-8 m-1 mx-2' src={sequelize} alt="sequelize_logo" />
              </div>
              <div className="modal-action flex justify-center items-center flex-wrap">
                <label className="m-1 btn btn-sm shadow-white shadow-inner dark:bg-white/10  dark:hover:shadow-md dark:hover:shadow-white"><a
                  className='flex flex-row justify-center items-center' target='_black' href="https://www.youtube.com/watch?v=Dzi2UyKrlMo&ab_channel=HenryBank" rel="noopener noreferrer" >
                  <svg className=" mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M23,11.9972 C23,15.0688707 22.7080514,16.9571365 22.0247481,18.1281724 C21.3347709,19.3777602 20.5269977,19.7708297 18.8782989,19.8862992 C17.7148693,19.9542414 14.794638,20 12.0026667,20 C9.2044172,20 6.28275714,19.9542562 5.10860514,19.8855427 C3.47493151,19.7708031 2.66701263,19.37838 1.97791182,18.142374 C1.29279472,16.9480084 1,15.052042 1,12.0084 C1,8.94737365 1.29138368,7.06090428 1.97193166,5.86259947 C2.67010997,4.61046509 3.49111627,4.21325835 5.11100471,4.1184917 C6.23144506,4.04250638 8.99660854,4 12.0026667,4 C15.002263,4 17.766208,4.04252223 18.8782989,4.11790083 C20.5073007,4.21303163 21.3281267,4.60936303 22.020213,5.8580297 C22.7108012,7.06048454 23,8.93778123 23,11.9972 Z M20.283329,6.84963647 C19.9603324,6.26505017 19.7713697,6.17346202 18.752413,6.11391338 C17.6926261,6.04212137 14.954737,6 12.0026667,6 C9.04424331,6 6.3050775,6.04210674 5.2370951,6.1144916 C4.22844212,6.17352647 4.03674592,6.26627 3.71489655,6.84342165 C3.2475376,7.66638709 3,9.26898917 3,11.9972 C3,14.7270394 3.24886149,16.33852 3.71873501,17.1577995 C4.03565111,17.7261665 4.22600958,17.8186276 5.23703026,17.8897046 C6.34874254,17.9546989 9.24212825,18 12.0026667,18 C14.7569983,18 17.6489264,17.9546849 18.7500936,17.8904464 C19.7737637,17.8187098 19.961409,17.7274 20.2855157,17.1409953 C20.752236,16.3407623 21,14.7382734 21,12.0084 C21,9.25771396 20.7535449,7.66399511 20.283329,6.84963647 Z M10,9 L15,12 L10,15 L10,9 Z" />
                  </svg>
                  DEMO</a></label>
                <label className="m-1 btn btn-sm shadow-white shadow-inner dark:bg-white/10 dark:hover:shadow-md dark:hover:shadow-white"><a
                  className='flex flex-row justify-center items-center' target='_black' href="https://github.com/SantiagoGomez1/client-HenryBank" rel="noopener noreferrer" >
                  <svg className=" mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" width="20"
                    shapeRendering="geometricPrecision" textRendering="geometricPrecision"
                    imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"
                    viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" /></svg>
                   {t('projects.bnb_code_front')}</a></label>
                <label className="m-1 btn btn-sm shadow-white shadow-inner dark:bg-white/10 dark:hover:shadow-md dark:hover:shadow-white"><a
                  className='flex flex-row justify-center items-center' target='_black' href="https://github.com/iverial/Api-Henry-Bank" rel="noopener noreferrer" >
                  <svg className=" mr-2 fill-white" xmlns="http://www.w3.org/2000/svg" width="20"
                    shapeRendering="geometricPrecision" textRendering="geometricPrecision"
                    imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"
                    viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z" /></svg>
                   {t('projects.bnb_code_back')}</a></label>
              </div>
            </div>

          </div>




        </div>
      </section >
    </div >
  )
}

export default Proyects