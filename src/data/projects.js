import PokemonApp_img from '../img/proyects/PiPokemon.webp';
import MeliClone from '../img/proyects/Meli_clone.webp';
import SmartInvest from '../img/proyects/SmartInvest.webp';
import UnderGraff from '../img/proyects/UnderGraff.webp';
import GitHubApp from '../img/proyects/GItApp.webp';
import WeatherApp_img from '../img/proyects/WeatherApp.webp';
import HenryBank from '../img/proyects/HenryBank1.webp';
import ChallengeLogin from '../img/proyects/LoginChallenge.webp';

import css from '../assets/Skills_svg/css.svg';
import js from '../assets/Skills_svg/js.svg';
import html from '../assets/Skills_svg/html.svg';
import tailwind from '../assets/Skills_svg/tailwind.svg';
import react from '../assets/Skills_svg/react.svg';
import redux from '../assets/Skills_svg/redux.svg';
import nextjs from '../assets/Skills_svg/nextjs.svg';
import node from '../assets/Skills_svg/node.svg';
import express from '../assets/Skills_svg/express.svg';
import postgresql from '../assets/Skills_svg/postgresql.svg';
import sequelize from '../assets/Skills_svg/sequelize.svg';
import mongoose from '../assets/Skills_svg/mongoose.svg';
import mongodb from '../assets/Skills_svg/mongodb.svg';
import reactnative from '../assets/Skills_svg/react_native.svg';

const projects = [
  {
    id: 'pokemon',
    image: PokemonApp_img,
    title: 'Pokemon App',
    introKey: 'projects.pokeintro',
    intro2Key: 'projects.pokeintro2',
    techs: [html, css, js, react, redux, node, express, postgresql, sequelize],
    deployUrl: 'https://pi-pokemon-khaki.vercel.app/',
    repoUrl: 'https://github.com/FdR-23/Pi-Pokemon',
  },
  {
    id: 'meliclone',
    image: MeliClone,
    title: 'Mercado Libre Clon',
    introKey: 'projects.MeliCLoneIntro',
    intro2Key: 'projects.MeliCLone2',
    techs: [js, css, html, react, tailwind],
    deployUrl: 'https://meli-challenge-fdr-23.vercel.app/',
    repoUrl: 'https://github.com/FdR-23/Clon-Meli',
  },
  {
    id: 'smartinvest',
    image: SmartInvest,
    title: 'SmartInvest',
    introKey: 'projects.SmartInvestIntro',
    intro2Key: 'projects.SmartInvestIntro2',
    techs: [html, js, react, tailwind, express, sequelize, postgresql],
    deployUrl: 'https://smart-invest-nu.vercel.app/',
    repoUrl: 'https://github.com/FdR-23/SmartInvest',
  },
  {
    id: 'undergraff',
    image: UnderGraff,
    title: 'Under Graff',
    introKey: 'projects.UnderGraffIntro',
    intro2Key: 'projects.UnderGraffIntro2',
    techs: [html, css, js, tailwind, react],
    deployUrl: 'https://under-graff-proyect.vercel.app/',
    repoUrl: 'https://github.com/FdR-23/under_graff-proyect',
  },
  {
    id: 'githubapp',
    image: GitHubApp,
    title: 'Git Hub App',
    introKey: 'projects.GitAppIntro',
    intro2Key: 'projects.GitAppIntro2',
    techs: [js, html, tailwind, react, express],
    deployUrl: 'https://git-hub-app.onrender.com/',
    repoUrl: 'https://github.com/FdR-23/Git-Hub-App',
  },
  {
    id: 'weather',
    image: WeatherApp_img,
    title: 'Weather App',
    introKey: 'projects.weatherAppintro',
    intro2Key: 'projects.weatherAppintro2',
    techs: [html, css, nextjs, redux],
    deployUrl: 'https://weather-app-topaz-one.vercel.app/',
    repoUrl: 'https://github.com/FdR-23/Weather-app',
  },
  {
    id: 'henrybank',
    image: HenryBank,
    title: 'HenryBank App',
    introKey: 'projects.heanrybankintro',
    intro2Key: 'projects.heanrybankintro2',
    techs: [js, css, reactnative, redux, node, express, postgresql, sequelize],
    deployUrl: 'https://www.youtube.com/watch?v=Dzi2UyKrlMo',
    repoUrl: 'https://github.com/SantiagoGomez1/client-HenryBank',
    hasDemo: true,
    repoBackUrl: 'https://github.com/iverial/Api-Henry-Bank',
  },
  {
    id: 'challengelogin',
    image: ChallengeLogin,
    title: 'Challenge Rappi',
    introKey: 'projects.ChallengeLogin',
    intro2Key: 'projects.ChallengeLogin2',
    techs: [react, redux, tailwind, express, mongodb, mongoose],
    deployUrl: 'https://challenge-login-eight.vercel.app/',
    repoUrl: 'https://github.com/FdR-23/Login-Challenge',
  },
];

export default projects;
