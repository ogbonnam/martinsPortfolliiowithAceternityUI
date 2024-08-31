import React from 'react'
import Link from 'next/link'



export default function NavLinks() {
    const navLinks = [
        // {
        //     "id": 1,
        //     "title": "Home",
        //     "path": "/"
        // },
        {
            "id": 2,
            "title": "About",
            "path": "/about"
        },
        {
            "id": 1,
            "title": "Projects",
            "path": "/projects"
        },
        {
            "id": 3,
            "title": "Posts",
            "path": "/blog"
        },
        {
            "id": 4,
            "title": "Contact",
            "path": "/contact"
        }
    ]
  return (
    <>
    <div className='lg:h-16 lg:m-0 md:flex md:justify-center md:items-center md:h-screen md:mx-80 md:no-visible-scrollbar sm:flex sm:justify-center sm:items-center sm:h-screen sm:mx-40 flex justify-center items-center h-screen mx-28'>
        <div className="lg:flex-row lg:h-16 lg:m-0 md:flex md:flex-col  md:h-80 md:justify-center md:items-center sm:flex sm:flex-col  sm:h-80 sm:justify-center sm:items-center flex flex-col  h-80 items-center justify-center">
            {navLinks.map((navLink =>(
                <Link href={navLink.path} key={navLink.id} className='m-2 p-3 text-gray-800 hover:text-gray-400 duration-500 lg:text-xl lg:font-bold md:text-3xl md:font-extrabold sm:text-3xl sm:font-extrabold text-3xl font-extrabold'>
                    
                    {navLink.title}
                    
                </Link>
            )))}
        </div>
    </div>
    </>
  )
}
