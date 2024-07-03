import Button from '@/components/Button'
import React from 'react'

export default function contact() {
  return (
      <div className='flex bg-white text-black text-center justify-center pt-28 pb-28 items-center'>
          <form className='w-1/2'>
              <div className='flex flex-col pt-10'>
                  <label className='text-start mb-5'>Full Name</label>
                  <input className='p-5 h-10 outline-none outline-slate-800' placeholder='Enter full name' name="fullname" type='text' />
              </div>
              <div className='flex flex-col pt-10'>
                  <label className='text-start mb-5'>Email Address</label>
                  <input className='p-5 h-10 outline-none outline-slate-800' placeholder='Enter email' name="fullname" type='email' />
              </div>
              <div className='flex flex-col pt-10'>
                  <label className='text-start mb-5'>Message</label>
                  <textarea className='p-5 h-50 outline-none outline-slate-800' name="message"></textarea>
              </div>
              <Button text='Submit'
                  color='bg-red-900 text-white'
                  size='h-12 w-full'
                  radius='rounded' />
          </form>
      </div>
  )
}
