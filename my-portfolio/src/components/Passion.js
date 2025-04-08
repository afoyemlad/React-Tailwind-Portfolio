import React from 'react'
import Football from '../assets/football.mp4'

const Passion = () => {
  return (
    <div name="passion" className="w-full min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-black dark:via-gray-700 dark:to-gray-700 flex items-center dark:text-gray-200 text-gray-800">
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4'>My Passions</p>
          <p className='py-6'>Here are a couple of things I enjoy doing!</p>
        </div>

        {/* Split into two sections */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Left side - Football video */}
          <div className='flex justify-center items-center'>
            <div className='w-full bg-gray-200 dark:bg-gray-800 p-4 rounded-md'>
              <h2 className='text-2xl font-semibold text-center mb-4'>Football</h2>
              <div className="bg-gray-300 dark:bg-gray-700 h-64 w-full rounded-md flex justify-center items-center">
                <iframe
                  className="w-full h-full rounded-md"
                  src={Football}
                  title="Bass Guitar Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe></div>
            </div>
          </div>

          {/* Right side - Bass guitar video */}
          <div className='flex justify-center items-center'>
            <div className='w-full bg-gray-200 dark:bg-gray-800 p-4 rounded-md'>
              <h2 className='text-2xl font-semibold text-center mb-4'>Bass Guitar</h2>
              <div className="bg-gray-300 dark:bg-gray-700 h-64 w-full rounded-md flex justify-center items-center overflow-hidden">
                <iframe
                  className="w-full h-full rounded-md"
                  src="https://www.youtube.com/embed/eFi2PkVeNRw"
                  title="Bass Guitar Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Passion

