import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, eum quia tempora sunt mollitia aliquid quisquam fugiat dolore commodi ipsa sint error? Aut animi ipsam neque libero dicta rem sequi debitis, culpa eum quae officiis accusantium doloribus sunt molestias odio assumenda reiciendis molestiae. Voluptatum aliquid mollitia nulla libero aspernatur natus?
            </p>
            <br />
            <p className='text-xl'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, eum quia tempora sunt mollitia aliquid quisquam fugiat dolore commodi ipsa sint error? Aut animi ipsam neque libero dicta rem sequi debitis, culpa eum quae officiis accusantium doloribus sunt molestias odio assumenda reiciendis molestiae. Voluptatum aliquid mollitia nulla libero aspernatur natus? 
            </p>
        </div>
    </div>
  );
} 

export default About;