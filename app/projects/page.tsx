import React from 'react'
import Image from 'next/image';
import { Tabs } from '@/components/ui/tabs';

const Projects = () => {
  const tabs = [
    {
      title: "Education Projects",
      value: "school",
      content: (
        <>
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>School Projects</p>
          <DummyContent />
        </div>
        
        </>
      ),
    },
    {
      title: "Medical Projects",
      value: "hospitals",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
   
  ];

  return (
    <div className="dark:bg-black dark:text-white bg-white text-black pt-28 pb-60">
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] mx-auto max-w-7xl relative b flex flex-col  w-full  items-start justify-start">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/project.jpg"
      alt="dummy image"
      width="1000"
      height="2000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

export default Projects
