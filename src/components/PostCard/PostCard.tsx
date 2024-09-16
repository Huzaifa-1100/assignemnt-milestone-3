import { Avatar } from "@nextui-org/avatar";

interface PropsType {
  postData: {
    body: string;
    id: number;
    title: string;
    userId: number;
  };
}
export const PostCard = (props: PropsType) => {


  const { postData } = props;

  return (
    <div>
      <div className="flex h-full w-full justify-center">
        <div className="max-w-sm rounded shadow-lg shadow-gray-700 bg-white m-4 hover:shadow-xl hover:shadow-gray-700 transition-all duration-500 hover:-translate-y-2">
          {/* Post Image */}
          <div>
            <Avatar src={`https://i.pravatar.cc/150?u=${postData.id}`} />
          </div>

          {/* Post Content */}
          <div className="px-6 py-4">
            {/* Post Title */}
            <div className="font-bold text-xl mb-2 text-black">
              {postData.title}
            </div>
            {/* Post Body */}
            <p className="text-gray-700 text-base">{postData.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
