import React from 'react';

import Pdf from '../../img/Cv.pdf';

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul className={active ? 'flex-col flex items-center fixed top-0 left-0 uppercase bg-black/70 backdrop-blur-lg gap-6 justify-center p-8 sm:hidden' : 'hidden'}>
      <button onClick={showMenu} className='cursor-pointer' >X</button>
      <li><a onClick={showMenu} className='text-xs p-1' href="#skills">Skills</a></li>
      <li><a onClick={showMenu} className='text-xs p-1' href="#about">About</a></li>
      <li><a onClick={showMenu} className='text-xs p-1' href="#proyects">Proyects</a></li>
      <li><a onClick={showMenu} className='text-xs p-1' href="#contacs">Contacs</a></li>
      <li><a onClick={showMenu} className='text-xs p-1' href = {Pdf} rel="noopener noreferrer" target = "_blank">Cv.</a></li>
    </ul>
  );
};

export default MenuItems;