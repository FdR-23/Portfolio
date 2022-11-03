import React from 'react'

import css from '../assets/Skills_svg/css.svg'
import js from '../assets/Skills_svg/js.svg'
import html from '../assets/Skills_svg/html.svg'
import tailwind from '../assets/Skills_svg/tailwind.svg'

import react from '../assets/Skills_svg/react.svg'
import redux from '../assets/Skills_svg/redux.svg'
import nextjs from '../assets/Skills_svg/nextjs.svg'

import node from '../assets/Skills_svg/node.svg'
import express from '../assets/Skills_svg/express.svg'
import postgresql from '../assets/Skills_svg/postgresql.svg'
import sequelize from '../assets/Skills_svg/sequelize.svg'

import git from '../assets/Skills_svg/git.svg'
import github1 from '../assets/Skills_svg/github1.svg'
import trello from '../assets/Skills_svg/trello.svg'
import postman from '../assets/Skills_svg/postman.svg'



function Skills() {
  return (
    <div id="skills" className='m-2 p-2 rounded-lg max-w-full'>

      <section className='p-4 lg:p-8 max-w-full h-full rounded-lg '>

        
      <h2 className='tracking-widest font-alegraya m-2 text-3xl text-center font-medium 
      dark:text-blue-600 lg:text-5xl lg:m-4 text-blue-900 dark:text-shadow-titledark' >SKILLS</h2>

        <div className="flex flex-col justify-center items-center align-middle " >

          <h3 className='font-alegraya text-2xl m-2 dark:text-white sm:m-4 lg:text-3xl 
          text-indigo-700 dark:text-shadow-titledark'>Frontend</h3>
          <section className='flex flex-wrap justify-center items-center align-middle'>
            <a data-aos="flip-left" data-aos-duration="1000"
            className='w-28 h-24 lg:w-32 lg:h-28 m-2 mx-2 lg:m-4 lg:mx-4  flex flex-col items-center justify-center
            bg-gray-500/10 dark:bg-transparent 
            text-lg shadow-sm hover:shadow-lg  rounded-3xl 
            md:dark:hover:shadow-md md:dark:hover:shadow-yellow-400 
            lg:dark:hover:shadow-lg lg:dark:hover:shadow-yellow-400 
            dark:shadow-sm dark:shadow-white dark:rounded-3xl dark:text-cyan-50 
            hover:scale-105 ease-in-out duration-300
            sm:m-2 sm:mx-4' 
            href='https://www.javascript.com/' target='_blank' rel="noreferrer">
              <img className='w-10 md:w-12 lg:w-14' src={js} alt="Javascript" />
              <span className='dark:text-white'>Javascript</span>
            </a>
            <a data-aos="flip-left" data-aos-duration="1200"
            className='w-28 h-24 lg:w-32 lg:h-28 m-2 mx-2 lg:m-4 lg:mx-4  flex flex-col items-center justify-center
            bg-gray-500/10 dark:bg-transparent 
            text-lg shadow-sm hover:shadow-lg  rounded-3xl 
            md:dark:hover:shadow-md md:dark:hover:shadow-cyan-400 
            lg:dark:hover:shadow-lg lg:dark:hover:shadow-cyan-400 
            dark:shadow-sm dark:shadow-white dark:rounded-3xl dark:text-cyan-50 
            hover:scale-105 ease-in-out duration-300
            sm:m-2 sm:mx-4' 
            href='https://developer.mozilla.org/es/docs/Web/CSS' target='_blank' rel="noreferrer">
              <img className='w-10 md:w-12  lg:w-14' src={css} alt="Css" />
              <span className='dark:text-white'>Css</span>
            </a>
            <a data-aos="flip-left" data-aos-duration="1400"
            className='w-28 h-24 lg:w-32 lg:h-28 m-2 mx-2 lg:m-4 lg:mx-4  flex flex-col items-center justify-center
            bg-gray-500/10 dark:bg-transparent 
            text-lg shadow-sm hover:shadow-lg  rounded-3xl 
            md:dark:hover:shadow-md md:dark:hover:shadow-amber-600  
            lg:dark:hover:shadow-lg lg:dark:hover:shadow-amber-600 
            dark:shadow-sm dark:shadow-white dark:rounded-3xl dark:text-cyan-50 
            hover:scale-105 ease-in-out duration-300
            sm:m-2 sm:mx-4'
            href='https://developer.mozilla.org/es/docs/Web/HTML' target='_blank' rel="noreferrer">
              <img className='w-10 md:w-12  lg:w-14' src={html} alt="Html " />
              <span className='dark:text-white'>Html</span>
            </a>
            <a data-aos="flip-left" data-aos-duration="1800"
            className='w-28 h-24 lg:w-32 lg:h-28 m-2 mx-2 lg:m-4 lg:mx-4  flex flex-col items-center justify-center
            bg-gray-500/10 dark:bg-transparent 
            text-lg shadow-sm hover:shadow-lg  rounded-3xl 
            md:dark:hover:shadow-md md:dark:hover:shadow-cyan-600 
            lg:dark:hover:shadow-lg lg:dark:hover:shadow-cyan-600 
            dark:shadow-sm dark:shadow-white dark:rounded-3xl dark:text-cyan-50 
            hover:scale-105 ease-in-out duration-300
            sm:m-2 sm:mx-4' 
            href='https://tailwindcss.com/' target='_blank' rel="noreferrer">
              <img className='w-10 md:w-12  lg:w-14' src={tailwind} alt="Tailwind" />
              <span className='dark:text-white'>Tailwind</span>
            </a>

            <a data-aos="flip-left" data-aos-duration="2000"
            className='w-28 h-24 lg:w-32 lg:h-28 m-2 mx-2 lg:m-4 lg:mx-4  flex flex-col items-center justify-center
            bg-gray-500/10 dark:bg-transparent 
            text-lg shadow-sm hover:shadow-lg  rounded-3xl 
            md:dark:hover:shadow-md md:dark:hover:shadow-cyan-300 
            lg:dark:hover:shadow-lg lg:dark:hover:shadow-cyan-300 
            dark:shadow-sm dark:shadow-white dark:rounded-3xl dark:text-cyan-50 
            hover:scale-105 ease-in-out duration-300
            sm:m-2 sm:mx-4' 
            href='https://es.reactjs.org/' target='_blank' rel="noreferrer">
              <img className='w-10 md:w-12  lg:w-14' src={react} alt="React" />
              <span className='dark:text-white'>React</span>
            </a>
           <a data-aos="flip-left" data-aos-duration="2200"
           className='w-28 h-24 lg:w-32 lg:h-28 m-2 mx-2 lg:m-4 lg:mx-4  flex flex-col items-center justify-center
           bg-gray-500/10 dark:bg-transparent 
            text-lg shadow-sm hover:shadow-lg  rounded-3xl 
            md:dark:hover:shadow-md md:dark:hover:shadow-violet-600 
            lg:dark:hover:shadow-lg lg:dark:hover:shadow-violet-600  
            dark:shadow-sm dark:shadow-white dark:rounded-3xl dark:text-cyan-50 
            hover:scale-105 ease-in-out duration-300
            sm:m-2 sm:mx-4' 
            href='https://es.redux.js.org/' target='_blank' rel="noreferrer">
              <img className='w-10 md:w-12  lg:w-14' src={redux} alt="Redux" />
              <span className='dark:text-white'>Redux</span>
            </a>
            <a data-aos="flip-left" data-aos-duration="2400"
            className='w-28 h-24 lg:w-32 lg:h-28 m-2 mx-2 lg:m-4 lg:mx-4  flex flex-col items-center justify-center
            bg-gray-500/10 dark:bg-transparent
            text-lg shadow-sm hover:shadow-lg  rounded-3xl 
            md:dark:hover:shadow-md md:dark:hover:shadow-white 
            lg:dark:hover:shadow-lg lg:dark:hover:shadow-white 
            dark:shadow-sm dark:shadow-white dark:rounded-3xl dark:text-cyan-50 
            hover:scale-105 ease-in-out duration-300
            sm:m-2 sm:mx-4' 
            href='https://nextjs.org/' target='_blank' rel="noreferrer">
              <img className='w-10 md:w-12  lg:w-14' src={nextjs} alt="Nextjs" />
              <span className='dark:text-white'>Nextjs</span>
            </a>




          </section>
          <h3 className='font-alegraya text-2xl m-2 dark:text-white sm:m-4 lg:text-3xl
          text-indigo-700 dark:text-shadow-titledark'>Backend</h3>
          <section className='flex flex-wrap justify-center items-center  align-middle'>
            <a data-aos="flip-right" data-aos-duration="1000"
            className='w-28 h-24 lg:w-32 lg:h-28 m-2 mx-2  flex flex-col items-center justify-center 
            bg-gray-500/10 dark:bg-transparent
            text-lg shadow-sm hover:shadow-lg  rounded-3xl 
            md:dark:hover:shadow-md md:dark:hover:shadow-green-700
            lg:dark:hover:shadow-lg lg:dark:hover:shadow-green-700
            dark:shadow-sm dark:shadow-white dark:rounded-3xl dark:text-cyan-50 
            hover:scale-105 ease-in-out duration-300
            sm:m-2 sm:mx-4' 
            href='https://nodejs.org/es/' target='_blank' rel="noreferrer">
              <img className='w-10 md:w-12 lg:w-14' src={node} alt="Nodejs" />
              <span className='dark:text-white'>Nodejs</span>
            </a>
            <a data-aos="flip-right" data-aos-duration="1200"
            className='w-28 h-24 lg:w-32 lg:h-28 m-2 mx-2  flex flex-col items-center justify-center 
            bg-gray-500/10 dark:bg-transparent
            text-lg shadow-sm hover:shadow-lg  rounded-3xl 
            md:dark:hover:shadow-md md:dark:hover:shadow-white 
            lg:dark:hover:shadow-lg lg:dark:hover:shadow-white 
            dark:shadow-sm dark:shadow-white dark:rounded-3xl dark:text-cyan-50 
            hover:scale-105 ease-in-out duration-300
            sm:m-2 sm:mx-4' 
            href='https://expressjs.com/' target='_blank' rel="noreferrer">
              <img className='w-10 md:w-12 lg:w-14' src={express} alt="Express" />
              <span className='dark:text-white'>Express</span>
            </a>
            <a data-aos="flip-right" data-aos-duration="1400"
            className='w-28 h-24 lg:w-32 lg:h-28 m-2 mx-2  flex flex-col items-center justify-center 
            bg-gray-500/10 dark:bg-transparent
            text-lg shadow-sm hover:shadow-lg  rounded-3xl 
            md:dark:hover:shadow-md md:dark:hover:shadow-cyan-700 
            lg:dark:hover:shadow-lg lg:dark:hover:shadow-cyan-700 
            dark:shadow-sm dark:shadow-white dark:rounded-3xl dark:text-cyan-50 
            hover:scale-105 ease-in-out duration-300
            sm:m-2 sm:mx-4' 
            href='https://www.postgresql.org/' target='_blank' rel="noreferrer">
              <img className='w-10 md:w-12 lg:w-14' src={postgresql} alt="Postgresql" />
              <span className='dark:text-white'>Postgresql</span>
            </a>
            <a data-aos="flip-right" data-aos-duration="1800"
            className='w-28 h-24 lg:w-32 lg:h-28 m-2 mx-2  flex flex-col items-center justify-center 
            bg-gray-500/10 dark:bg-transparent
            text-lg shadow-sm hover:shadow-lg  rounded-3xl 
            md:dark:hover:shadow-md md:dark:hover:shadow-cyan-900 
            lg:dark:hover:shadow-lg lg:dark:hover:shadow-cyan-900 
            dark:shadow-sm dark:shadow-white dark:rounded-3xl dark:text-cyan-50 
            hover:scale-105 ease-in-out duration-300
            sm:m-2 sm:mx-4' 
            href='https://sequelize.org/' target='_blank' rel="noreferrer">
              <img className='w-10 md:w-12 lg:w-14' src={sequelize} alt="Sequelize" />
              <span className='dark:text-white'>Sequelize</span>
            </a>
          </section>


          <h3 className='font-alegraya text-2xl m-2 dark:text-white sm:m-4 lg:text-3xl
          text-indigo-700 dark:text-shadow-titledark'>Tools</h3>
          <section className='flex flex-wrap justify-center items-center align-middle'>

            <a data-aos="flip-down" data-aos-duration="1000"
            className='w-28 h-24 lg:w-32 lg:h-28 m-2 mx-2  flex flex-col items-center justify-center 
            bg-gray-500/10 dark:bg-transparent
            text-lg shadow-sm hover:shadow-lg  rounded-3xl 
            md:dark:hover:shadow-md md:dark:hover:shadow-amber-700
            lg:dark:hover:shadow-lg lg:dark:hover:shadow-amber-700 
            dark:shadow-sm dark:shadow-white dark:rounded-3xl dark:text-cyan-50 
            hover:scale-105 ease-in-out duration-300
            sm:m-2 sm:mx-4' 
            href='mailto:https://git-scm.com/' target='_blank' rel="noreferrer">
              <img className='w-10 md:w-12 lg:w-14' src={git} alt="Git" />
              <span className='dark:text-white'>Git</span>
            </a>
            <a data-aos="flip-down" data-aos-duration="1200"
            className='w-28 h-24 lg:w-32 lg:h-28 m-2 mx-2  flex flex-col items-center justify-center 
            bg-gray-500/10 dark:bg-transparent
            text-lg shadow-sm hover:shadow-lg  rounded-3xl 
            md:dark:hover:shadow-md md:dark:hover:shadow-white 
            lg:dark:hover:shadow-lg lg:dark:hover:shadow-white 
            dark:shadow-sm dark:shadow-white dark:rounded-3xl dark:text-cyan-50 
            hover:scale-105 ease-in-out duration-300
            sm:m-2 sm:mx-4'
            href='https://github.com/' target='_blank' rel="noreferrer">
              <img className='w-10 md:w-12 lg:w-14' src={github1} alt="Github" />
              <span className='dark:text-white'>GitHub</span>
            </a>
            <a data-aos="flip-down" data-aos-duration="1400"
            className='w-28 h-24 lg:w-32 lg:h-28 m-2 mx-2  flex flex-col items-center justify-center 
            bg-gray-500/10 dark:bg-transparent
            text-lg shadow-sm hover:shadow-lg  rounded-3xl 
            md:dark:hover:shadow-md md:dark:hover:shadow-blue-400 
            lg:dark:hover:shadow-lg lg:dark:hover:shadow-blue-400  
            dark:shadow-sm dark:shadow-white dark:rounded-3xl dark:text-cyan-50 
            hover:scale-105 ease-in-out duration-300
            sm:m-2 sm:mx-4' 
            href='https://trello.com/' target='_blank' rel="noreferrer">
              <img className='w-10 md:w-12 lg:w-14' src={trello} alt="Trello" />
              <span className='dark:text-white'>Trello</span>
            </a>
            <a data-aos="flip-down" data-aos-duration="1800"
            className='w-28 h-24 lg:w-32 lg:h-28 m-2 mx-2  flex flex-col items-center justify-center 
            bg-gray-500/10 dark:bg-transparent
            text-lg shadow-sm hover:shadow-lg  rounded-3xl 
            md:dark:hover:shadow-md md:dark:hover:shadow-amber-600 
            lg:dark:hover:shadow-lg lg:dark:hover:shadow-amber-600 
            dark:shadow-sm dark:shadow-white dark:rounded-3xl dark:text-cyan-50 
            hover:scale-105 ease-in-out duration-300
            sm:m-2 sm:mx-4' 
            href='https://www.postman.com/' target='_blank' rel="noreferrer">
              <img className='w-10 md:w-12 lg:w-14' src={postman} alt="Postman" />
              <span className='dark:text-white'>Postman</span>
            </a>


          </section>
        </div>
      </section>
    </div>
  )
}

export default Skills