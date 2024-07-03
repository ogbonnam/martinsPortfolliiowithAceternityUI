"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import SingleCard from "@/components/SingleCard";
import Button from "@/components/Button";
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'

import { cn, sortPosts } from "@/utils/extras";
import { posts } from "#site/data";

// import getPostData from "@/utils/getPostMetaData"




export default function Home() {
    // const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  // const postData = getPostData('data/blog')
  // console.log(postData)
  const latestPosts = sortPosts(posts).slice(0, 6);
  console.log(latestPosts)
  return (
    
    <main className="flex min-h-screen flex-col">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Building Modern Web Applications should'nt be hard!. Turn your ideas
          into {" "}
          <Highlight className="text-black dark:text-white">
            stunning websites using latest technologies.
          </Highlight>
        </motion.h1>
      </HeroHighlight>
      <div className="bg-white text-black text-center justify-between pt-28 pb-28">
        <div className="flex flex-wrap w-4/5 mx-auto gap-8">
          {latestPosts.map((post, idx) => (
            post.featured && (
              <SingleCard
                  key={idx}
                  slug={post.slug}
                  title={post.title}
                  summary={post.summary}
                  date={post.date}
                tags={post.tags}
              />
            )
          ))}
        </div>
      </div>
      <div className="flex dark:bg-black bg-white min-h-96 justify-center items-center w-full">
        <form className="flex flex-col justify-center items-center w-1/2">
          <input placeholder="SignIn to our newsletter" type="text" name="name" className="h-10 w-full rounded outline p-5" />
          <Button
              text="Subscribe"
              color='bg-red-600 text-white'
              size="h-14 w-full"
              radius="rounded"
          />
          <span className="italic">You can trust that we do not send spam!</span>
        </form>
      </div>

       <div className="bg-white text-black text-center justify-between pt-28 pb-28">
        <div className="flex flex-wrap w-4/5 mx-auto gap-8">
         shdjdjsdhldh
        </div>
      </div>

      <div className="mx-auto max-w-xl py-8">


          <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
 
       </div>
    </main>

    
  );
}
