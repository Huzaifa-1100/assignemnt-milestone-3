"use client";
import Comments from "@/components/Comments";
import { Avatar } from "@nextui-org/avatar";
import React, { useEffect, useState } from "react";

// interface for post
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function BlogId({ params }: { params: { blogId: string } }) {
  const [postData, setPostData] = useState<Post | null>(null);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    currentPost();
  }, []);

  const currentPost = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
    );
    if (response.ok) {
      const currentData = await response.json();
      setPostData(currentData);
      const commentRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.blogId}/comments`
      );
      const commentData = await commentRes.json();
      setComments(commentData);
    }
  };
  return (
    <div className="bg-gray-200">
      <div className="p-2 lg:px-40 py-4">
        {/* Post Image */}
        <div>
          <Avatar
            src={`https://i.pravatar.cc/150?u=${(postData || {}).id}`}
            className="w-full h-80 place-content-center "
          />
        </div>
        {/* Post Content */}
        <div className="text-center md:mx-32 p-2">
          {/* Post Title */}
          <div className="font-bold text-4xl mb-2">
            {(postData || {}).title}
          </div>
          {/* Post Body */}
          <p className=" text-base">{(postData || {}).body}</p>
        </div>
        <div className="bg-gray-500 text-white font-bold text-2xl p-3 rounded-lg px-6">COMMENTS SECTION</div>
        {/* Comments Section */}
        {comments &&
          comments.map((com, index) => {
            return <Comments commentData={com} key={index}  />;
          })}
      </div>
    </div>
  );
}
