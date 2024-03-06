import React from 'react'


const Contact = () => {
    const config = {
        email: 'muruganmanoj590@gmail.com',
        phone: '+91-7358047810'
    }
  return (
    <div>
    <section className='flex flex-col  bg-black text-white  px-5 py-35' id='contact'>
   
    <div className=' flex flex-col items-center py-9'>
 
  <h1 className='text-4xl font-bold underline'>Contact</h1>
  <p className='text-1xl pt-5 pb-5'>Connect me if you wanna hire me, Please Contact</p>
  <p className='py-2'><span className='font-bold'>Email : </span>{config.email}</p>
  <p className='py-2'><span className='font-bold'>Contact Num : </span>{config.phone}</p>
  <p className=''>&copy; MURUGAN25 2024</p>
  
 
    </div>
    </section>
    </div>
  )
}

export default Contact
