import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import DylansCV from '../../public/Dylan_CV.pdf';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Dylan &nbsp; 
            <span className="sm:block hidden">| Full Stack Software Engineer</span>
          </p>
        </Link>
        
        <div className="flex items-center gap-10">
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
                <a href={`#${link.id}`}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              const url = DylansCV;
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', 'cv.pdf');
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="hidden sm:block bg-secondary text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-tertiary transition duration-300"
          >
            Download CV
          </button>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`} onClick={() => { setToggle(!toggle); setActive(link.title); }}>
                  <a href={`#${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
