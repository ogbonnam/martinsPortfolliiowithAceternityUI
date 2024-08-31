import React from 'react'
import Image from 'next/image';
import { posts } from "#site/data";
import { MDXContent } from '@/components/mdx-components';
import { Metadata } from "next";


interface PostPageProps {
    params: {
      slug: string[];
    };
  }


  async function getPostFromParams(params: PostPageProps["params"]) {
    const slug = params?.slug?.join("/");
    const post = posts.find((post) => post.slugAsParams === slug);
  
    return post;
  }
  

//   export async function generateMetadata({
//     params,
//   }: PostPageProps): Promise<Metadata> {
//     const post = await getPostFromParams(params);
  
//     if (!post) {
//       return {};
//     }
  
//     const ogSearchParams = new URLSearchParams();
//     ogSearchParams.set("title", post.title);
  
//     return {
//       title: post.title,
//       summary: post.summary,
      
//     //   openGraph: {
//     //     title: post.title,
//     //     summary: post.summary,
//     //     type: "article",
//     //     url: post.slug,
//     //     images: [
//     //       {
//     //         url: `/api/og?${ogSearchParams.toString()}`,
//     //         width: 1200,
//     //         height: 630,
//     //         alt: post.title,
//     //       },
//     //     ],
//     //   },
//     //   twitter: {
//     //     card: "summary_large_image",
//     //     title: post.title,
//     //     summary: post.summary,
//     //     images: [`/api/og?${ogSearchParams.toString()}`],
//     //   },
//     };
//   }
  
  export async function generateStaticParams(): Promise<
    PostPageProps["params"][]
  > {
    return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
  }

export default async function PostPage({ params }: PostPageProps) {
    const post = await getPostFromParams(params);

  if (!post || !post.draft) {
    // notFound();
  }
  return (
    <div className='flex dark:bg-black dark:text-white bg-white text-black pt-28 pb-28 w-full'>
<div className='flex max-w-7xl mx-auto gap-5'>
  <div className='w-4/5'>

      <article className="flex flex-col prose !max-w-none dark:prose-invert w-full  prose-h1:text-red-800 prose-h1:text-5xl prose-p:text-bold prose-p:text-3xl prose-ul:text-3xl prose-ol:text-3xl ">
        <Image src={post?.coverImage} height={0} width={0} sizes="100vw" style={{width:"100%", height:"450px"}} />
            <h1 className="mb-2 w-full">{post?.title}</h1>
            {/* <div className="flex gap-2 mb-2">
              {post.tags?.map((tag) => (
                <Tag tag={tag} key={tag} />
              ))}
            </div> */}
            {/* {post?.summary ? (
              <p className="text-xl mt-0 text-muted-foreground">{post?.summary}</p>
            ) : null} */}
            <hr className="my-4" />
            

            <MDXContent code={post?.body} />
            
      </article>
  </div>
    <div className='w-1/5'>
      <h3>This is a Next.js, Tailwind CSS blogging starter template. Probably the most feature-rich Next.js markdown blogging template out there. Comes out of the box configured with the latest technologies to make technical writing a breeze. Easily configurable and customizable. Perfect as a replacement to existing Jekyll and Hugo individual blogs.</h3>
    </div>
</div>
    
    </div>
  )
}
