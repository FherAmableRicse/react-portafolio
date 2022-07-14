import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navBar from '../assets/portfolio/navBar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            code:"http://google.com",
            demo:"http://google.com"
        },
        {
            id: 2,
            src: reactParallax,
            code:"https://www.youtube.com",
            demo:"https://www.youtube.com"
        },
        {
            id: 3,
            src: navBar,
            code:"https://github.com",
            demo:"https://github.com"
        },
        {
            id: 4,
            src: reactSmooth,
            code:"https://www.linkedin.com",
            demo:"https://www.linkedin.com"
        },
        {
            id: 5,
            src: installNode,
            code:"https://twitter.com/home?lang=es",
            demo:"https://twitter.com/home?lang=es"
        },
        {
            id: 6,
            src: reactWeather,
            code:"http://google.com",
            demo:"https://github.com"
        }
    ];
    
    

  return (
    <div name='portfolio' className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
         
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8'>
            {portfolios.map(({id,src,code,demo}) =>(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'> 
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' /> 
                    <div className='flex items-center justify-center'>
                        <a href={demo} target="_blank" rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                        Demo</a>
                        <a href={code} target="_blank" rel="noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</a>
                    </div>
                </div>
            ))}
              
            </div>
        </div>
    </div>
  )
}

export default Portfolio;