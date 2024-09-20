"use client";

import { PostCard } from "@/components/PostCard/PostCard";
import { UseLimit } from "@/hooks/limits";
import Image from "next/image";
import Link from "next/link";

// Defining interface for postcards
interface PostDataType {
  body: string;
  id: number;
  title: string;
  userId: number;
}
// define main function
export default function Home() {
  const { data, loading, error } = UseLimit(3);
  return (
    <div>
      {/* text section */}
      <main className="flex flex-col items-center justify-center h-[50vh] p-8">
        <div className="absolute -z-10 w-full h-72 ">
          <Image
            className="w-full bg-size:cover h-full bg-red-500"
            alt="Background image"
            src={"https://i.pinimg.com/originals/87/2c/ab/872cab564cb7eaf7cb9535da24eb2c6d.gif"}
            height={1000}
            width={1000}
          />
        </div>
        <h1 className="sm:text-4xl text-3xl text-center font-bold text-white mb-4 ">
          Welcome to Blogging Website
        </h1>
        <p className="text-lg text-gray-100  text-center">
          This is a simple home page built with Next.js and Tailwind CSS.
          Explore our website to learn more about our services and offerings.
        </p>
      </main>
      {/* Blog Posts */}
      <div>
        {loading && (
          <div className="mt-4 text-gray-500 text-5xl text-center">Loading... please wait</div>
        )}

        {error && (
          <div className="mt-4 text-red-500 text-lg">Error: {error}</div>
        )}

        {!loading && !error && data && (
          <div className="grid grid-cols-1 py-3 md:grid-cols-3 h-full w-full ">
            {data.map((item: PostDataType, index) => {
              return (
                <Link key={index} href={`/Blog/${item.id}`}>
                  <PostCard postData={item} />
                </Link>
              );
            })}
          </div>
        )}
        <div className=" bg-gray-800 text-white font-bold my-3 cursor-pointer max-w-sm rounded text-center transition-colors duration-500 mx-auto p-2 hover:bg-gray-300 hover:text-black">
          <Link href={"/Blog"}>See More</Link>
      </div>
        </div>
    </div>
  );
}
