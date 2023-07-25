import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/93ba5c3d-5edf-4433-b7cf-079ae9beac40" className='flex flex-col max-w-[600px] w-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500'>Contact</p>
          <p className='py-4'>Submit form or email me: trattanasoontorn@gmail.com</p>
        </div>
        <input className='bg-slate-200 p-2'type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-slate-200'type="text" placeholder='Email' name='email' />
        <textarea className='bg-slate-200 p-2'name="message" rows="10" placeholder='Message'></textarea>
        <button className='border-2 hover:bg-blue-500 hover:border-blue-500 hover:text-white px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
      </form>
    </div>
    
  )
}

export default Contact