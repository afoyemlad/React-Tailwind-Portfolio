import React from 'react'

const About = () => {
  return (
    <div
        name="about"
        className="w-full min-h-screen bg-gradient-to-b from-gray-200 via-gray-100 to-white dark:from-gray-700 dark:via-gray-700 dark:to-black flex items-center dark:text-gray-200 text-gray-800"
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>

            <p className='text-xl mt-6'>
                I am a passionate <strong>Data Analyst</strong> and <strong>Full Stack Developer</strong> with a strong background in <strong>electrical engineering</strong> and <strong>data analytics</strong>. With expertise in <strong>Python, R, JavaScript, MySQL</strong>, and various data visualization tools, I thrive on solving complex problems and leveraging technology to drive innovation.
            </p>

            <br />

            <p className='text-xl'>
                Beyond my technical skills, I have experience in <strong>IT support</strong>, including <strong>SCCM, Active Directory, and MDS</strong>, ensuring smooth system management and deployment processes. I am also deeply passionate about <strong>music</strong>, especially playing the <strong>bass guitar</strong>, where I find creativity and rhythm that inspire my problem-solving mindset. Additionally, I have a strong interest in <strong>sports</strong>, enjoying the discipline and teamwork that comes with it. My goal is to collaborate with like-minded professionals and continuously expand my knowledge while making a meaningful impact through technology.
            </p>
        </div>
    </div>
  )
}

export default About
