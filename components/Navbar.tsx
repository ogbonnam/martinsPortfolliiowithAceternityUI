"use client"

import React, {useState} from 'react'
import NavLinks from './ui/NavLinks'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from "next-themes"

export default function Navbar() {
  const { setTheme } = useTheme()
  const [navbarOpen, setnavbarOpen] = useState(false)
  return (
      <nav className='shadow-md w-full  top-0 fixed z-50 md:z-50'>
          <div className='flex bg-white py-3 px-8 text-black justify-between'>
            <div className='flex flex-col lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col'>

              <div className='flex ml-16 items-center justify-start font-bold text-black cursor-pointer text-3xl  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
                <Link href="/">
                <span className='text-red-700'>OGB</span>&nbsp;
                          Martins
                </Link> 
                
              </div>
              <div className='flex md:static bg-white md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'> 
                  
                      
                        <div className={`lg:block md:pb-0 md:mt-0 ${navbarOpen ? 'block' : 'hidden'}`}>
                       

                        <NavLinks />
                       
                        {/* <div className='flex justify-center items-center'>   
                          <input type="text" name="search" placeholder="Search"  className='w-96 h-10 outline p-5'/>
                        </div> */}
                        
                        {/* <button onClick={() => setTheme("light")}>
                        Dark Mode
                        </button> */}
                      </div> 
                          
                 
              </div>
            </div>

              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden justify-between">
                      <button
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                        onClick={() => setnavbarOpen(!navbarOpen)}
                      >
                        {navbarOpen ? (
                          <Image src="navbar/close.svg" width={30} height={30} alt="logo" />
                        ) : (
                          <Image
                            src="navbar/hamburger.svg"
                            width={30}
                            height={30}
                            alt="logo"
                            className="focus:border-none active:border-none"
                          />
                        )}
                      </button>
                    </div>    
          </div>
    </nav>
  )
}
