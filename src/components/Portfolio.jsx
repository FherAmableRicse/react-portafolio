import React from 'react'
import citasReact from '../assets/portfolio/citasReact.png'
import pokemons from '../assets/portfolio/pokemons.png'
import controlPresupuestario from '../assets/portfolio/controlPresupuestario.png'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: citasReact,
            code:"https://github.com/FherAmableRicse/citas-r",
            demo:"https://citas-r.netlify.app"
        },
        {
            id: 2,
            src: pokemons,
            code:"https://github.com/FherAmableRicse/pokemons-crud-redux-react",
            demo:"https://pokemons-r.netlify.app"
        },
        {
            id: 3,
            src: controlPresupuestario,
            code:"https://github.com/FherAmableRicse/control-presupuestario-r",
            demo:"https://control-presupuestario-r.netlify.app"
        },
        {
            id: 4,
            src: citasReact,
            code:"https://github.com/FherAmableRicse/citas-r",
            demo:"https://citas-r.netlify.app"
        },
        {
            id: 5,
            src: pokemons,
            code:"https://github.com/FherAmableRicse/pokemons-crud-redux-react",
            demo:"https://pokemons-r.netlify.app"
        },
        {
            id: 6,
            src: controlPresupuestario,
            code:"https://github.com/FherAmableRicse/control-presupuestario-r",
            demo:"https://control-presupuestario-r.netlify.app"
        }
    ];
    
    

  return (
    <div id='portafolio' className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4'>Portafolio</p>
                <p className='py-6'>Mira algunos de mis trabajos aquí.</p>
            </div>
         
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-8'>
            {portfolios.map(({id,src,code,demo}) =>(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'> 
                    <img src={src} alt="project" className='rounded-md duration-200 hover:scale-105' /> 
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