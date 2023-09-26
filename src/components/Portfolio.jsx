

import React from 'react'
import { portfolio } from '../data'
import { Link } from 'react-router-dom'

const Portfolio = () => {



  const demoBtn = () => {
    console.log("Demo Clickedd");
  }

  const codeBtn = () => {
    console.log("Code btn");
  }



  return (
    <div name="portfolio" id='Portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-[1200px]'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 '>
          <p className='text-4xl inline border-gray-500 border-b-4'>Portfolio</p>
          <p className='py-6'>Check out some my work right here !</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {portfolio.map(({ id, src, demo, code, alt }) => (
            <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
              <img src={src} alt={alt} className='rounded-md duration-200 hover:scale-105' />
              <div className='flex items-center justify-center gap-3'>

                <a href={demo} target='_blank' className='w-1/2 px-6 py-3 m-4 duration-105 hover:scale-105'>Demo
                  <button />
                </a>

                <a href={code} target='_blank' className='w-1/2 px-6 py-3 m-4 duration-105 hover:scale-105'>Code
                  <button />
                </a>
              </div>
            </div>
          ))}



        </div>
      </div>
    </div>
  )
}

export default Portfolio