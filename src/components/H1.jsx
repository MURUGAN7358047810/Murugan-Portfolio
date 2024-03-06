import React from 'react'
import Img1 from '../img/Img1.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";


function H1() {
  const config ={
    subtitle :'Im a React Js Developer',
    social : {
      twitter: 'https://github.com/MURUGAN7358047810',
      facebook: 'https://github.com/MURUGAN7358047810',
      github: 'https://github.com/MURUGAN7358047810',
      linkedin: 'https://www.linkedin.com/in/manoj-murugan-280644204/'

    }
  }
  return (
    
    
      <section className='flex flex-col md:flex-row px-5 py-32 justify-center'>
      <div className='md:w-1/2 flex flex-col'>
      <h1 className=' text-6xl font-hero-font'>Hi, <br/> Im Murugan Dhanasekaran
      <p className='text-2xl pt-3'>{config.subtitle}</p></h1>
      <div className='flex py-8'>
      <a href={config.social.twitter}  target="_blank" className='pr-5 hover:text-gray-700'><AiOutlineTwitter size={40}/></a>
      <a href={config.social.facebook}  target="_blank" className='pr-5  hover:text-gray-700'><AiOutlineFacebook size={40}/></a>
      <a href={config.social.linkedin}  target="_blank" className='pr-5  hover:text-gray-700'><AiOutlineLinkedin size={40}/></a>
      <a href={config.social.github}  target="_blank" className='pr-5  hover:text-gray-700'><AiOutlineGithub size={40}/></a>
      </div>
      </div>
      <img className='md:w-1/3' src={Img1} alt="" />
      </section>
   
  )
}

export default H1
