"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import SingleCard from "@/components/SingleCard";
import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'


function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0">{ post.summary }</div>
    </div>
  )
}

export default function Home() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <main className="flex min-h-screen flex-col">
      <div>
        <p>Logo</p>
      </div>
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
          {posts.map((post, idx) => (
             <SingleCard key={idx} {...post} />
      ))}
        </div>
      </div>
      <div className="flex bg-gray-dark h-64 justify-center items-center">
        <form className="flex flex-col justify-center items-center w-4/5">
          <input placeholder="Signin to our newsletter" type="text" name="name" className="w-1/2 h-10 rounded" />
          <span>You can trust that we do not send spam!</span>
        </form>
      </div>

       <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
     
    </div>
    </main>

    
  );
}
