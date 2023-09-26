

import React from 'react'
import {data} from '../data'
import heroimage from '../assets/techstack/heroimage.png'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  const { homeContent } = data;
  return (
    <div name="home" id='Home' className='h-screen  w-full bg-gradient-to-b from-black to-gray-800 via-black'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>

          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            {data.homeContent[0].h2}
          </h2>

          <p className='text-gray-500 py-4 max-w-md'>
            {data.homeContent[1].p}
          </p>

          <div>
            <Link to="portfolio" smooth duration={300} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300 '>
                <MdOutlineArrowForwardIos size={15} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img src={heroimage} alt="img my" className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  )
}

export default Home