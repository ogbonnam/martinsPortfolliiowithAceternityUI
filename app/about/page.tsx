import React from 'react'
import Image from 'next/image'
import { LargeImage1 } from '../constant'
import Button from '@/components/Button'


export default function page() {
  return (
    <>
      <div className="dark:bg-black dark:text-white bg-white text-black text-center justify-between pt-28">
          <div className='lg:flex lg:flex-row lg:gap-14 md:flex md:flex-col md:pb-32 flex flex-col pb-32'>    
              <div className="lg:flex pl-12 md:hidden hidden">
                <Image className='rounded-sm' src={LargeImage1} alt="image" width={0} height={0} style={{width:"100%", height:"80%"}} />
              </div>
              <div className='flex flex-col w-4/5 mx-auto pr-12'>
                  <h1 className='text-5xl font-bold text-left pt-10 pb-8'>OGBONNA MARTINS</h1>
                  <h3 className='text-2xl text-left pb-11'>
                    I'm <span className='text-red-700'>Ogbonna Martins:</span> a full stack software 
                    engineer. I take designs from ideas and turn them into fully fledged working applications.<br/>
                    <p className='font-bold mt-4'>
                    But wait! How am I able to do this?
                    </p>

                    <span className="mt-3 font-serif">I have a strong foundation (over 14 years) in computer systems and network administration. Copled with my web and mobile 
    development skills, I am able to more easily build fully functional applications in a matter of days and host them online seamlessly.</span>
                       
                  </h3>
                  <h3 className='text-2xl text-left pb-11'>
                      I have a knack for learning new technologies.
                      My well rounded knowledge of the information technology sphere has culminating
                      in me being a DevOps Engineer (Developer/Operations Enginner).
                  </h3>
                  <h3 className='text-2xl text-left'>
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
      <div className='flex flex-col text-left mb-10 dark:bg-black dark:text-white bg-white text-black'>
      <h3 className='text-3xl font-bold mb-11 text-center'>My Technology Stack</h3>
      <div className="max-w-lg rounded overflow-hidden shadow-lg mx-auto">
          {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Frontend Stack</div>
              <p className="text-gray-700 text-base">
              I haved used a lot of frontend programming languages, framework and libraries. But I have listed my current favorites to build modern web applications
              </p>
          </div>
          <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  HTML
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  CSS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  VANILA JAVASCRIPT
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  BOOTSTRAP
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  TAILWINDCSS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  REACT
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  NEXTJS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  ASTRO
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  REACT NATIVE FOR MOBILE
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  SVELTE
              </span>
          </div>
      </div>
      <div className='lg:flex lg:justify-between md:flex md:flex-col md:mx-auto mb-20'>
      <div className="lg:max-w-lg rounded overflow-hidden shadow-lg ml-10 mt-10">
          {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Backend Stack</div>
              <p className="text-gray-700 text-base">
              I haved also used a few backend programming languages, framework and libraries. But I have listed my current favorites to build modern web applications
              </p>
          </div>
          <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  MYSQL
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  POSTGRESQL
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  APPWRITE
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  SUPABASE
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  MONGODB
              </span>
              
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  NODEJS/EXPRESS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  DJANGO
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  FAST API
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  POCKETBASE
              </span>
          </div>
      </div>
      <div className="max-w-lg rounded overflow-hidden shadow-lg mr-10 mt-10">
          {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
          <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">DevOps</div>
              <p className="text-gray-700 text-base">
              I started my career in comouter systems and network administration. The skill I learned there was easily 😂 transferable to the Devops world
              </p>
          </div>
          <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  LINUX/WINDOWS SERVER FOR HOSTING WEBSITES
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  KUBERNETES
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  DOCKER
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  TRAEFIK/NGINX
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  AWS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  AZURE
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  JENKINS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  GRAFANA/PROMETHEUS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  SERVERLESS
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  GITHUB
              </span>
          </div>
      </div>
      </div>
    </div>
    </>

  )
}
