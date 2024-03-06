import React from 'react'
import Img2 from '../img/Img2.png'

const About = () => {
  const config= {
    line1 : 'Hi, My name Murugan Dhanasekaran. I am a Frontend web developer. I built beautiful Websites using React js Libraries and Modern CSS.',
    line2 : 'I am proficient in Frontend skils like HTML 5, CSS 3, Java Script, Boot Strap and React js.. ',
    line3 : 'Right now learning Backend Technology Node js, Express Js and Mongodb '
  }
  return (
    <div>
    
    <section className='flex flex-col md:flex-row bg-gray-200  px-5' id='about'>
    <div className=' py-5 md:w-1/2  '>
    <img  src={Img2}  alt="" />
  
    </div>
    <div className='md:w-1/2 flex justify-center py-9'>
  <div className='flex flex-col justify-center'>
  <h1 className='text-4xl font-bold underline'>About Me</h1>
  <p className='text-1xl pt-5'>{config.line1}</p>
  <p className='pt-5'>{config.line2}</p>
  <p className='pt-5'>{config.line3} </p>
  </div>
    </div>
    </section>
    </div>
  )
}

export default About
