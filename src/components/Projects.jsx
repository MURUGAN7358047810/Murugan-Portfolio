import React from 'react'
import I1 from '../img/currency.png'
import I2 from '../img/qr.png'
import I3 from '../img/weather.png'
import I4 from '../img/password.png'
import I5 from '../img/advice.png'
import I6 from '../img/bmi.png'

const Projects = () => {
  const config = {
    projects: [
      {
        image: I1,
        description: 'Currency convertor web app designed by react js libraries and integrated API in this project',
        link: ''
      },
      {
        image: I2,
        description: ' A qr app can generate qr code for the browser link in a seconds and it will use as qr code generator integrated APIs  ',
        link: ''
      },
      {
        image: I3,
        description: 'Weather app is one of the main using web apps in today world integrated weather API',
        link: ''
      }
      
    ]
  }

  return (
   
      <section className='flex flex-col  py-20 px-5 justify-center  bg-gray-200' id='projects'>
      <div className='w-1/2'>
      <div className='flex justify-center'>
      <p className='text-4xl  font-bold underline'>Projects</p>
      </div>
      </div>
      <div className='w-full'>
      <div className='flex flex-col md:flex-row py-10 gap-5'>
      {config.projects.map( (project) => (
        <a href={project.link}>
        <div className='relative'>
        <img  className='h-[350px] w-[550px] rounded-lg' src={project.image} alt="" />
        <div className='project-desc'>
        <p className='text-center px-5 py-5'>{project.description}</p>
        </div>
        </div>
        </a>
      ))}
     
     

      </div>
      </div> 


      <div className='w-full'>
      <div className='flex flex-col md:flex-row py-10 gap-5'>
      <div className='relative'>
      <img  className='h-[350px] w-[550px] rounded-lg' src={I4} alt="" />
      <div className='project-desc'>
      <p className='text-center px-5 py-5'>In this project you can generate strong password randomly </p>
      </div>
      </div>
      <div className='relative'>
      <img  className='h-[350px]  w-[550px] rounded-lg' src={I5} alt="" />
      <div  className='project-desc'>
      <p className='text-center px-5 py-5'>
      A advice web app can generate random advice and integrated advice API in this project  
      
      </p>
      </div>
      </div>
      <div className='relative'>
      <img  className='h-[350px]  w-[550px] rounded-lg' src={I6} alt="" />
      <div  className='project-desc'>
      <p className='text-center px-5 py-5'>BMI calculator is an find is your body is overweight or normal in this calculator </p>
      </div>
      </div>


      
     
      </div>
      </div>
      </section>
   
  )
}

export default Projects
