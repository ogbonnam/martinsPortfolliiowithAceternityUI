import React from 'react'
import { PostCard } from '@/components/ui/postcard'
import { compareDesc, format, parseISO } from 'date-fns'

import { cn, sortPosts } from "@/utils/extras";
import { posts } from "#site/data";

export default function postPage() {
  const latestPosts = sortPosts(posts).slice(0, 6);
  return (
      <div className="flex dark:bg-black dark:text-white bg-white w-full text-black text-center justify-between pt-28 pb-28">
      <div className='flex flex-row mx-auto max-w-7xl flex-wrap  py-4 gap-20'>
       {latestPosts.map((post, idx) => (
         post.featured && (
           <PostCard
              key={idx}
              slug={post.slug}
              title={post.title}
              summary={post.summary}
              date={post.date}
             tags={post.tags}
             author={post.author}
           />
             
            )
          ))}
          
        
        
         
          
        </div>  
      </div>
  )
}
