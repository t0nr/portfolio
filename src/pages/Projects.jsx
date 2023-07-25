import React from 'react'
import Kardsimg from '../assets/kards.JPG'
import Portfolioimg from '../assets/portfolio.jpg'
import Loadingimg from '../assets/loading.jpg'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-black'>
      <div className='max-w-[1500px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-400 py-2'>Projects</p>
        </div>

        <div 
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div style={{backgroundImage: `url(${Kardsimg})`}} className='shadow-lg shadow-grey group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider pl-5'>
                Kards Store
              </span>
              <p className='pl-5 pr-5'>
                - Fully interactive website to sell K-pop merchandise using HTML, CSS, and JavaScript
              </p>
              <p className='pl-5 pr-5'>
               - The website is functional and responsive on all devices: Laptop, Tablet, Phone
              </p>
              <div className='pt-8 text-center'>
                <a href="https://t0nr.github.io/KardsStore/" target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-500 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/t0nr/KardsStore.git" target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-500 font-bold text-lg'>Github</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Portfolioimg})`}} className='shadow-lg shadow-grey group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider pl-5'>
                Personal Portfolio
              </span>
              <p className='pl-5 pr-5'>
                - Used React to build a website to further showcase skills, projects, and background information
              </p>
              <p className='pl-5 pr-5'>
               - Designed portfolio on Figma and used knowledge of JSX and Tailwind to create and style the design into React
              </p>
              <div className='pt-8 text-center'>
                <a href="https://t0nr.github.io/portfolio/" target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-500 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/t0nr/portfolio" target="_blank">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-grey-500 font-bold text-lg'>Github</button>
                </a>
              </div>
            </div>
          </div>
          <div style={{backgroundImage: `url(${Loadingimg})`}} className='shadow-lg shadow-grey group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                More to Come
              </span>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Projects