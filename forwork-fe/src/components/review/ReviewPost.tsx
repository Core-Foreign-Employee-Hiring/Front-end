import Button from "../common/Button";
import ViewIcon from "@/src/assets/review/ViewIcon";
import LikesIcon from "@/src/assets/review/LikesIcon";
import ReplyIcon from "@/src/assets/review/ReplyIcon";

interface ReviewPostProps {
  regionTag: string;
  jobTag:string;
  title:string;
  content:string;
  views:string;
  likes:string;
  replies:string;
  relativeTimestamp:string;
}

const ReviewPost = ({...props}:ReviewPostProps) => {
  const {regionTag, jobTag, title, content, views, likes, replies, relativeTimestamp} = props
  return (
    <div className="px-20 py-10 flex flex-col gap-3 rounded-[20px] border-[1px] border-gray2 my-2">
      <div className="flex gap-[10px] font-[12px]">
        <Button className="bg-gray2 px-2 py-1 rounded-[12px] text-gray5">
          {regionTag}
        </Button>
        <Button className="border-[1px] border-gray3 px-2 py-1 text-gray5 rounded-[12px]">
          {jobTag}
        </Button>
      </div>
      <div className="title-md">{title}</div>
      <div className="body-md text-gray5">
        {content}
      </div>
      <div className="flex justify-between">
        <div className="flex font-[12px] gap-[10px]">
          <div className="flex items-center ">
            <div className="p-[10px]">
              <ViewIcon className="w-[18px] h-[12px] fill-gray5" />
            </div>
            <div className="text-gray5 px-[4px]">{views}</div>
          </div>
          <div className="flex items-center">
            <div className="p-[10px]">
              <LikesIcon className="w-[18px] h-[12px] fill-gray5" />
            </div>
            <div className="text-gray5 px-[4px]">{likes}</div>
          </div>
          <div className="flex items-center">
            <div className="p-[10px]">
              <ReplyIcon className="w-[18px] h-[12px] fill-gray5" />
            </div>
            <div className="text-gray5 px-[4px]">{replies}</div>
          </div>
        </div>
        <div className="text-gray5 font-[12px]">{relativeTimestamp}</div>
      </div>
    </div>
  );
};

export default ReviewPost;
