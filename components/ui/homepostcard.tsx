"use client";

import { cn } from '@/utils/cn';
import Link from 'next/link';
import React from 'react'


interface PostItemProps {
  slug: string;
  title: string;
  summary?: string;
  date?: string;
  author?: string;
  tags?: Array<string>;
  
}

const Homepostcard = ({slug,title,summary,date,tags,author}: PostItemProps) => {
  return (
    <div className="max-w-sm w-1/2">
  <div className={cn(
    "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)]",
    "h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
  )}>
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">
        <Link href={slug}>{title}</Link>
        </div>
      <p className="text-gray-700 text-base">{summary}</p>
    </div>
    <div className="flex items-center">
      {/* <Image className="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink"> */}
      <div className="text-sm">
        <p className="text-gray-900 leading-none">{author}</p>
        <p className="text-gray-600">{date}</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Homepostcard

