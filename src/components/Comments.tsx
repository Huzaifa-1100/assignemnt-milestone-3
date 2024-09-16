import React from "react";

import { Avatar } from "@nextui-org/avatar";

// interface for commentData
interface CommentDataType {
  commentData: {
    body: string;
    email: string;
    id: number;
    name: string;
    postId: number;
  };
}

export default function Comments({ commentData }: CommentDataType) {
  return (
    <div>
      <div className=" bg-gray-300 p-4 rounded-xl my-2 hover:border-4 hover:border-gray-500 ">
        <div className=" max-full mx-auto bg-white shadow-gray-900 shadow-md hover:shadow-lg hover:shadow-gray-900 rounded-lg my-4 p-6">
          {/* Commenter Information */}
          <div >
            <div className="flex gap-4 items-center w-24 h-24" >
              <Avatar className="rounded-full" isBordered radius="full"
                src={`https://i.pravatar.cc/150?u=${commentData.name}`} size="sm"
              />
              <Avatar className="text-xl font-bold ml-4" name={commentData.name} />
            </div>
            <div>
              <p className="text-lg font-semibold mt-">{commentData.email}</p>
            </div>
          </div>

          {/* Comment Body */}
          <p className="text-gray-700 text-base ">{commentData.body}</p>
        </div>
      </div>
    </div>
  );
}
