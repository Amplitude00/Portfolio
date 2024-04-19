import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

const NavBar = () => {
    const [nav, setNav] = useState(false);   
    const links = [
           {
            id: 1,
            link: 'home'
           },
           {
            id: 2,
            link: 'about'
           },
           {
            id: 3,
            link: 'contact'
           },
    ]
       
    
  return (
        <div className="flex justify-between items-center w-full h-20 px-5 text-white bg-black fixed">
            <div>
                <h1 className="text-5xl font-Signature ml-2">Chaitanya Singh</h1>
            </div>
         <ul className="hidden md:flex">
            {links.map(({id, link}) => (
                <li 
                key={id} 
                className='px-4 cursor-pointer capitalize font-semibold text-gray-500 hover:scale-125 duration-300'>
                {link}
                </li>
            ))}
            </ul>
        <div onClick={() => setNav(!nav)} 
            className='cursor-pointer pr-4 z-10 text-gray-500 hover:scale-105 duration-200 md:hidden'>
                {nav  ? <FaTimes size={22.5} /> : <FaBars size={22.5} /> }
        </div>
                
            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    {links.map(({id, link}) => (
                <li 
                key={id} 
                className='px-4 py-6 cursor-pointer capitalize text-4xl '>
                {link}
                </li>
                ))}
                </ul>
            )}


                
        </div>

  );
};
export default NavBar;