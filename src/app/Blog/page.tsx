"use client";
import { PostCard } from "@/components/PostCard/PostCard";
import { UseLimit } from "@/hooks/limits";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts per page

  // Use the modified hook to fetch the current page's posts
  const { data, loading, error, hasMore } = UseLimit(postsPerPage, currentPage);

  interface PostDataType {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  // Function to handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div >
      <main className="flex flex-col items-center justify-center h-[50vh] p-8">
        <div className="absolute -z-10 w-full h-1/2">
          <Image
            className="w-full bg-size:cover h-72 py-2"
            alt="Background image"
            src={
              "https://i.pinimg.com/originals/87/2c/ab/872cab564cb7eaf7cb9535da24eb2c6d.gif"
            }
            height={1000}
            width={1000}
          />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">Blog Posts</h1>
        <p className="text-xl font-bold text-white mb-4">Click on the post to see comments</p>
      </main>

      {loading && (
        <div className="mt-4 text-gray-500 text-5xl text-center">
          Loading... please wait
        </div>
      )}
      {error && <div className="mt-4 text-red-500 text-lg">Error: {error}</div>}

      {!loading && !error && data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item: PostDataType, index: number) => (
            <Link key={index} href={`/Blog/${item.id}`}>
              <PostCard postData={item} />
            </Link>
          ))}
        </div>
      )}

      {/* Pagination controls */}
      <div className="flex justify-center mt-6 space-x-4 py-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 bg-gray-300 rounded hover:bg-gray-600 hover:text-white ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>

        <span className="px-4 py-2">Page {currentPage}</span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={!hasMore}
          className={`px-4 py-2 bg-gray-300 rounded hover:bg-gray-600 hover:text-white ${
            !hasMore ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
