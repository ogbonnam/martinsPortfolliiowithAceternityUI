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

import { companyLogos } from "@/constants";
import { ExpandableCardDemo } from "@/components/ui/expandableTestimonialCard";
import { PostCard } from "@/components/ui/postcard";
// import getPostData from "@/utils/getPostMetaData"




export default function Home() {
  
    // const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  // const postData = getPostData('data/blog')
  // console.log(postData)
  const latestPosts = sortPosts(posts).slice(0, 6);
 
  return (
    
    <main className="flex min-h-screen flex-col overflow-hidden">
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
          className="text-3xl pt-[100px] md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          Building Modern Web Applications should'nt be hard!. Turn your ideas
          into {" "}
          <Highlight className="text-white dark:text-white">
            stunning websites, applications using latest technologies.
           
          </Highlight>
        </motion.h1>
      </HeroHighlight>
      {/* <div className="flex mx-auto py-12 justify-center items-center overflow-hidden space-x-16 w-[80%] group">
        <div className="flex gap-8 space-x-16  animate-infinite-scroll group-hover:paused">
          {companyLogos.map((item) => (
            <Image src={item} alt={"images"} width={80} height={80}  className="max-w-none" key={item}/>
          ))}
        </div>
        <div className="flex gap-8 space-x-16  animate-infinite-scroll group-hover:paused" aria-hidden="true">
          {companyLogos.map((item) => (
            <Image src={item} alt={"images"} width={80} height={80}  className="max-w-none" key={item} />
          ))}
        </div>
        
     
      </div> */}
      <div className="dark:bg-black dark:text-white bg-white text-black ">

      <div className="flex mx-auto py-12 justify-center items-center overflow-hidden space-x-16 w-[80%] group">

        <div className="flex gap-8 space-x-16  animate-infinite-scroll1 group-hover:paused">
            {companyLogos.map((item) => (
              <Image src={item} alt={"images"} width={80} height={80}  className="max-w-none" key={item}/>
            ))}
          </div>
          <div className="flex gap-8 space-x-16  animate-infinite-scroll1 group-hover:paused" aria-hidden="true">
            {companyLogos.map((item) => (
              <Image src={item} alt={"images"} width={80} height={80}  className="max-w-none" key={item} />
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex dark:bg-black dark:text-white bg-white text-black w-full text-center justify-between pt-28 pb-28">
        <div className="flex flex-row max-w-7xl flex-wrap mx-auto gap-20">
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
              // <SingleCard
              //     key={idx}
              //     slug={post.slug}
              //     title={post.title}
              //     summary={post.summary}
              //     date={post.date}
              //   tags={post.tags}
              //   coverImage={post.coverImage}
              // />
            )
          ))}
        </div>
       
      </div>
      
      <div className="flex  dark:bg-white bg-black min-h-96 justify-center items-center w-full">
        <form className="flex flex-col justify-center items-center w-3/4 lg:w-1/2">
          <input placeholder="SignIn to our newsletter" type="text" name="name" className="h-10 sm:w-full md:w-full w-full rounded outline border-black p-5 mb-5" />
          {/* <Button
              text="Subscribe"
              color='bg-red-600 text-white'
              size="h-14"
              radius="rounded"
          /> */}
          <button className="h-14 w-full rounded bg-red-500 hover:bg-red-300 text-white">SUBSCRIBE</button>
          <span className="italic">You can trust that we do not send spam!</span>
        </form>
      </div>

       {/* <div className="bg-white text-black text-center justify-between pt-28 pb-28">
        <div className="flex flex-wrap w-4/5 mx-auto gap-8">
         shdjdjsdhldh
        </div>
      </div> */}

      <div className="py-32 flex flex-col dark:bg-white bg-white">
        <h2 className="text-center text-4xl font-extrabold text-black pb-12">What My Clients Have To Say..</h2>
        <ExpandableCardDemo />
      </div>

      {/* <div className="mx-auto max-w-xl py-8">


          <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
 
       </div> */}
    </main>

    
  );
}
