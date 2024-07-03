import React from 'react'
import Link from 'next/link'



export default function NavLinks() {
    const navLinks = [
        {
            "id": 1,
            "title": "Home",
            "path": "/"
        },
        {
            "id": 2,
            "title": "About",
            "path": "/about"
        },
        {
            "id": 3,
            "title": "Posts",
            "path": "/posts"
        },
        {
            "id": 4,
            "title": "Contact",
            "path": "/contact"
        }
    ]
  return (
    <div className="flex space-x-3 justify-end">
        {navLinks.map((navLink =>(
            <Link href={navLink.path} key={navLink.id} className='m-2 p-3 text-gray-800 hover:text-gray-400 duration-500 font-bold'>
                <div className='flex-row'>
                  {navLink.title}
                </div>
            </Link>
        )))}
    </div>
  )
}
