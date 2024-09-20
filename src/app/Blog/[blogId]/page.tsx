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

// interface for commentData
interface CommentDataType {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export default function BlogId({ params }: { params: { blogId: string } }) {
  const [postData, setPostData] = useState<Post | null>(null);
  const [eachComment, setEachComment] = useState<string>("");
  const [comments, setComments] = useState<CommentDataType[]>([]);

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
  // function to add a new comment
  const addComment = (comment: string) => {
    const newComment: CommentDataType = {
      body: comment,
      email: "user@example.com",
      id: Math.floor(Math.random() * 1000),
      name: "User",
      postId: postData?.id || 0,
    };
    setComments([newComment, ...comments]);
  };
  return (
    <div className="bg-gray-200">
      <div className="p-2 lg:px-40 py-4">
        {/* Post Image */}
        <div className="flex items-center justify-center w-full">
          <Avatar
            isBordered
            color="primary"
            src={`https://i.pravatar.cc/150?u=${(postData || {}).id}`}
            className="w-80 h-80 cursor-pointer hover:scale-110 transition-all duration-500"
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
        <div className=" font-bold text-4xl p-2">COMMENTS SECTION</div>
        {/* Adding comment on the post */}
        <div className="flex max-sm:flex-col sm:justify-center sm:items-center gap-5">
          <input
            onChange={(e) => setEachComment(e.target.value)}
            type="text"
            placeholder="Share your thoughts..."
            className="border-b-2 border-b-gray-400 outline-gray-400 transition-all duration-500 bg-gray-200 w-full p-4 focus:rounded-xl"
          />
          <button
            onClick={() => addComment(eachComment)}
            className="bg-black text-white hover:bg-white px-8 py-2 text-xl rounded-full transition-all duration-500 hover:text-black"
          >
            Post
          </button>
        </div>

        {/* Comments Section */}
        {comments &&
          comments.map((com: CommentDataType, index: number) => {
            return <Comments commentData={com} key={index} />;
          })}
      </div>
    </div>
  );
}