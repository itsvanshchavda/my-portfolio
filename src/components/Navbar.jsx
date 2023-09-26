import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { data } from '../data'

// React icons
import { FaBars, FaTimes } from 'react-icons/fa'
import SocialLinks from './SocialLinks';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    return (
        <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4'>

            <div>
                <h1 className='text-5xl ml-2 font-signature cursor-pointer' >Vansh</h1>
            </div>

            <ul className='hidden md:flex'>

                {data.links.map(({ id, link }) => (
                    <li className='px-4  cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-white' key={id} >
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}

            </ul>

            <div className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden' onClick={() => setNav(!nav)}>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            { /* If the nav is true than show the md navbar */}

            {nav && (
                <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                    {data.links.map(({ id, link }) => (
                        <li className='px-4 cursor-pointer capitalize py-6 text-3xl hover:text-white duration-150' key={id} >
                            <Link to={link}  onClick={()=> setNav(!nav)} smooth duration={500}>
                                {link}
                            </Link>
                        </li>



                    ))}
                </ul>
            )}




        </div>
    )
}

export default Navbar
