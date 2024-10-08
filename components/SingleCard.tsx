import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { compareDesc, format, parseISO } from 'date-fns'
import { cn, formatDate } from "@/utils/extras";
import Link from 'next/link'
import { Image } from "velite";

interface PostItemProps {
  slug: string;
  title: string;
  summary?: string;
  date: string;
  tags?: Array<string>;
  coverImage?: Image,
}

export default function SingleCard({slug,title,summary,date,tags,coverImage}: PostItemProps) {

  return (
    <>
    
        <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-gray-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-red-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-xl text-white mb-4 relative z-20">
            {title}
          </h1>

          <p className="font-normal text-white  mb-4 relative z-20">
            {summary}
          </p>

          <Link href={"/" + slug}>
            <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300 hover:bg-white hover:text-black">
              Read More
            </button>
          </Link>

          {/* Meaty part - Meteor effect */}
            <Meteors number={5} />
        </div>
      </div>
    </div>
    
    
    </>
  );
}
