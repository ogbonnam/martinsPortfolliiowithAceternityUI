"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import Image from "next/image";
import SingleCard from "@/components/SingleCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div>
        <p>Logo</p>
      </div>
      <HeroHighlight className="items-center justify-between">
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
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
        </div>
      </div>
      <div className="flex bg-blue-900 h-64 justify-center items-center">
        <form className="flex flex-col justify-center items-center w-4/5">
          <input placeholder="Signin to our newsletter" type="text" name="name" className="w-1/2 h-10 rounded" />
          <span>You can trust that we do not send spam!</span>
        </form>
      </div>
    </main>
  );
}
