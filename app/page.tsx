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
