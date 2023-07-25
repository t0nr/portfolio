import React from 'react'

import HTML from '../assets/html (1).png';
import CSS from '../assets/css (1).png';
import JavaScript from '../assets/javascript (1).png';
import imgreact from '../assets/react (1).png';
import Tailwind from '../assets/tailwind (1).png';
import Java from '../assets/java.png';

const Skills = () => {
  return (
    <div name="skills" className='w-full h-screen'>
      {/*boxes*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-blue-400'>Skills</p>
          <p className='py-4 text-xl text-gray-500'>Languages that I have worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-col-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-grey hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'src={HTML} alt="HTML icon" />
            <p className='my-4 text-black font-bold'>HTML</p>
          </div>
          <div className='shadow-md shadow-grey hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'src={CSS} alt="CSS icon" />
            <p className='my-4 text-black font-bold'>CSS</p>
          </div>
          <div className='shadow-md shadow-grey hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'src={JavaScript} alt="HTML icon" />
            <p className='my-4 text-black font-bold'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-grey hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'src={imgreact} alt="HTML icon" />
            <p className='my-4 text-black font-bold'>React</p>
          </div>
          <div className='shadow-md shadow-grey hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'src={Tailwind} alt="HTML icon" />
            <p className='my-4 text-black font-bold'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-grey hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'src={Java} alt="HTML icon" />
            <p className='my-4 text-black font-bold'>Java</p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Skills