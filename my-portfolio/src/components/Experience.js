import React from 'react'
import Html from "../assets/experience/html.png";
import CSharp from "../assets/experience/c-sharp.png";
import Css from "../assets/experience/css.png";
import Javascript from "../assets/experience/javascript.png";
import Php from "../assets/experience/php.png";
import Sql from "../assets/experience/pl-sql.png";
import Python from "../assets/experience/python.png";
import ReactImage from "../assets/experience/react-image.png";
import Swift from "../assets/experience/swift.png";
import Tablaeu from "../assets/experience/tablaeu.png";
import TailwindImage from "../assets/experience/tailwind.png";
import Blockchain from "../assets/experience/blockchain.png";


const Experience = () => {

    const technologies = [
        {
            id: 1,
            src: Html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: Css,
            title: "CSS",
            style: "shadow-blue-500"
        },        {
            id: 3,
            src: CSharp,
            title: "C Sharp",
            style: "shadow-purple-500"
        },        {
            id: 4,
            src: Javascript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },        {
            id: 5,
            src: Php,
            title: "PHP",
            style: "shadow-purple-300"
        },        {
            id: 6,
            src: Sql,
            title: "SQL",
            style: "shadow-red-700"
        },        {
            id: 7,
            src: Python,
            title: "Python",
            style: "shadow-yellow-700"
        },        {
            id: 8,
            src: ReactImage,
            title: "React",
            style: "shadow-blue-600"
        },        {
            id: 9,
            src: Swift,
            title: "Swift",
            style: "shadow-orange-700"
        },        {
            id: 10,
            src: Tablaeu,
            title: "Tablaeu",
            style: "shadow-orange-600"
        },        {
            id: 11,
            src: TailwindImage,
            title: "Tailwind",
            style: "shadow-sky-500"
        },
        {
            id: 12,
            src: Blockchain,
            title: "Blockchain Technology",
            style: "shadow-blue-500"
        }
    ]

  return (
    <div name="experience" 
    className="w-full min-h-screen bg-gradient-to-b from-gray-200 via-gray-100 to-white dark:from-gray-700 dark:via-gray-900 dark:to-black flex items-center dark:text-gray-200 text-gray-800"

    >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                <p className="py-6">Technologies I've worked with in different projects.</p>
            </div>

            <div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 sm:px-0">
                    
                      {
                          technologies.map(({ id, src, title, style }) => (
                              <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}>
                                  <img src={src} alt={title} className="w-20 mx-auto" />
                                  <p className="mt-4">
                                    <strong>{title}</strong>
                                    </p>
                              </div>
                          ))
                      }

                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience