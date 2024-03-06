import React from 'react'
import Resu from '../img/resume.png'

const Resume = () => {
    const config = {
        link :'Resume.pdf'
    }
  return (
    <div>
    <section className='flex flex-col md:flex-row bg-gray-200  px-5' id='resume'>
    <div className=' py-5 md:w-1/2  '>
    <img  src={Resu}  alt="" />
  
    </div>
    <div className='md:w-1/2 flex justify-center py-9'>
  <div className='flex flex-col justify-center'>
  <h1 className='text-4xl font-bold underline'>Resume</h1>
  <p className='text-1xl pt-5'>Download and view my CV <a className='btn' href={config.link} download="Murugan Resume.pdf">Download</a></p>
  
  </div>
    </div>
    </section>
    </div>
  )
}

export default Resume
