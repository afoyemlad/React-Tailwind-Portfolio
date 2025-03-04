import React from 'react'

const Contact = () => {
  return (
      <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-gray-200 via-gray-100 to-white dark:from-gray-700 dark:via-gray-700 dark:to-black flex items-center dark:text-gray-200 text-gray-800" >

          <div className='flex flex-col p-4 max-w-screen-lg mx-auto h-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Contact</p>
                  <p className='py-6'>Submit the form below to get in touch with me</p>
              </div>

              <div className='flex justify-center item-center'>
                  <form name='contactForm' action="https://getform.io/f/azywglvb" method='POST' netlify className='flex flex-col w-full md:1/2'>
                      <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md dark:text-white text-gray-800  border-gray-900 dark:border-gray-100' />
                      <input type="text" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md dark:text-white text-gray-800  border-gray-900 dark:border-gray-100' />
                      <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md dark:text-gray-50 text-gray-950 focus:outline-none  border-gray-900 dark:border-gray-100'></textarea>
                      <button className='text-gray-900 dark:text-gray-100 bg-gradient-to-b from-cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-125 duration-500 border-2 border-gray-900 dark:border-gray-100' >Let's talk</button>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default Contact