import React from 'react'

//import Navbar from './Navbar/Navbar.jsx'
import About from './About.jsx'
import Contacts from './Contacts.jsx'
import Skills from './Skills.jsx'
import Footer from './Footer.jsx'
import Proyects from './Proyects.jsx'
import Intro from './Intro.jsx'



function Home() {
  return (
    <div >
      <section>
        <Intro/>
        <About/>
        <Skills/>
        <Proyects/>
        <Contacts/>
        <Footer/>
      </section>
      </div>
   
  )
}


export default Home