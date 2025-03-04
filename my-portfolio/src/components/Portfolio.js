import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Portfolio = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const sliderRef = useRef(null) // Reference for scrolling

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/afoyemlad/repos')
        const sortedRepos = response.data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        setRepos(sortedRepos)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching GitHub repositories', error)
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  // Scroll Function
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300 // Adjust for smooth scrolling
    }
  }

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300
    }
  }

  return (
    <div name="portfolio" className="w-full min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-gray-700 flex items-center dark:text-gray-200 text-gray-800">
      <div className='max-w-screen-lg mx-auto p-8 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4'>My Portfolio</p>
          <p className='py-6 text-lg'>Explore some of my public repositories on GitHub!</p>
        </div>

        {/* Repositories Slider */}
        <div className="relative"> {/* Added padding for arrows */}
          {/* Left Arrow */}
          <button onClick={scrollLeft} className="absolute -left-20 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white  dark:bg-gray-300 dark:text-black p-3 rounded-full shadow-lg hover:bg-gray-600 z-10">
            <FaArrowLeft size={24} />
          </button>

          {/* Scrollable Repositories */}
          <div ref={sliderRef} className="flex overflow-x-auto scrollbar-hide space-x-6 p-4">
            {loading ? (
              <div className='text-center text-xl text-gray-600 dark:text-gray-400'>Loading repositories...</div>
            ) : (
              repos.slice(0, 20).map((repo) => ( // Display only up to 10, but scrollable
                <div key={repo.id} className='bg-gray-200 dark:bg-gray-800 min-w-[250px] md:min-w-[300px] p-6 rounded-lg shadow-lg flex flex-col justify-between hover:scale-105 transform transition-all duration-300'>
                  <div>
                    <h3 className='text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4'>{repo.name}</h3>
                    <p className='text-gray-600 dark:text-gray-300 text-sm mb-4'>{repo.description || 'No description available.'}</p>
                    <p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>
                      <strong>Technologies used:</strong> {repo.language || 'Not specified'}
                    </p>
                  </div>

                  {/* Button */}
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <button className="w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-black py-2 rounded-md mt-4 hover:opacity-80 transition">
                      View Repository
                    </button>
                  </a>
                </div>
              ))
            )}
          </div>

          {/* Right Arrow */}
          <button onClick={scrollRight} className="absolute  -right-20 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white dark:bg-gray-300 dark:text-black p-3 rounded-full shadow-lg hover:bg-gray-600 z-10">
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
