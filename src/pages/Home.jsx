import React from 'react'
import ton from '../assets/ton.jpg'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-white'>

      {/*box*/}
      <div className='max-w-[1000] mx-auto h-full flex flex-row justify-center'>
        <div class="box" className='pl-[20px] my-auto'>
          <img src={ton} alt='tonimg' style={{alignSelf: 'center'}}/> 
        </div>
        <div className='px-8 flex flex-col justify-center'>
          <p className='text-2xl text-blue-400'>hi, i'm</p>
          <p className='text-4xl sm:text-7xl font-bold'>Ton Rattanasoontrn</p>
          <p className='text-4xxl sm:text-7xl font-bold text-gray-500'>Front-End Developer</p>
        </div>
        
      </div>
    </div>
  )
}

export default Home