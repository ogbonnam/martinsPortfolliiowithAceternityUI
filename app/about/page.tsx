import React from 'react'
import Image from 'next/image'
import { LargeImage1 } from '../constant'
import Button from '@/components/Button'


export default function page() {
  return (
      <div className="dark:bg-black dark:text-white bg-white text-black text-center justify-between pt-28 pb-28">
          <div className='flex gap-14'>    
              <div className="flex pl-12">
                <Image className='rounded-sm' src={LargeImage1} alt="image" width={0} height={0} style={{width:"100%", height:"auto"}} />
              </div>
              <div className='flex flex-col w-4/5 mx-auto pr-12'>
                  <h1 className='text-5xl font-bold text-left pt-28 pb-8'>OGBONNA MARTINS</h1>
                  <h3 className='text-3xl text-left pb-11'>I'm <span className='text-red-700'>Ogbonna Martins:</span> a web developer, mobile application developer, networks operations engineer and cloud engineer cum architech.
                       
                  </h3>
                  <h3 className='text-3xl text-left pb-11'>
                      I have a knack for learning new technologies.
                      My well rounded knowledge of the information technology sphere has culminating
                      in me being a DevOps Engineer (Developer/Operations Enginner).
                  </h3>
                  <h3 className='text-3xl text-left'>
                      I love information technology and spend my
                      time trying to make things...(work)
                  </h3>
                  <Button
                      text="Contact Me"
                      color='bg-red-600 text-white'
                      size="h-14 w-full"
                      radius="rounded"
                  />
              </div>
          </div>
      </div>
  )
}
