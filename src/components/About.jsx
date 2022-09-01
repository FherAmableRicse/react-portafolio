import React from 'react'

const About = () => {
  return (
    <div id="sobre mi" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Acerca de mi</p>
            </div>
            <p className='text-xl mt-20'>
               Hola, soy Fher y tengo 24 años. Bachiller en Ingenería de Sistemas Computaciones buscando mi primer trabajo como desarollador Web FrontEnd.
               Soy una persona perservante, que adora los retos y no me doy por vencido con facilidad cuando se trata de cumplir objetivos. Actualmente estoy aprendiendo constantemente
               tecnologías relacionadas con la programación y el desarrollo web.
               
            </p>
            <br />
            <p className='text-xl'>
              Vivo en la ciudad de Lima - Perú. En mis tiempos libres me gusta escuchar música, jugar fútbol y disfrutar con mi familia.
            </p>
        </div>
    </div>
  );
} 

export default About;