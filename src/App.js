import React from 'react';


import Navbar from './components/Navbar/Navbar';

import About from './components/About.jsx'
import Contacts from './components/Contacts.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'
import Proyects from './components/Proyects.jsx'
import Intro from './components/Intro.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Proyects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
