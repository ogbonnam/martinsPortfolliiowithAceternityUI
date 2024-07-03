import React from 'react'
import { cn } from '@/utils/cn'

interface ButtonProps{
    text: string,
    color: string,
  size: string,
  radius:string,
}


export default function Button({text,color, size, radius}:ButtonProps) {
  return (
    <div>
      <button className={cn("mt-12 text-xl hover:bg-red-500", color, size, radius)}>
        {text}
      </button>
      </div>
  )
}
