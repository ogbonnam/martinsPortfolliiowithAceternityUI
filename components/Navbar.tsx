"use client"

import React from 'react'
import NavLinks from './ui/NavLinks'
import Link from 'next/link'
import { useTheme } from "next-themes"

export default function Navbar() {
  const { setTheme } = useTheme()
  return (
      <div className='shadow-md w-full  top-0 fixed z-50 md:z-50'>
          <div className='md:flex flex bg-white py-3 px-8 text-black justify-between'>
              <div className='flex ml-16 items-center justify-start font-bold text-black cursor-pointer text-3xl  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'>
                <Link href="/">
                <span className='text-red-700'>OGB</span>&nbsp;
                          Martins
                </Link>          
              </div>
              <div className='flex flex-row mr-16 items-center justify-center md:flex-col md:items-center md:pb-0 pb-12 absolute md:static bg-white md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in'> 
                  <div className='flex space-x-6'> 
                      <NavLinks />
                      <div className='flex justify-center items-center'>   
                        <input type="text" name="search" placeholder="Search"  className='w-96 h-10 outline p-5'/>
                      </div>
                      <button>Dashboard</button>
                      <button onClick={() => setTheme("dark")}>
                       Dark Mode
                      </button>
                  </div>
              </div>
          </div>
    </div>
  )
}
