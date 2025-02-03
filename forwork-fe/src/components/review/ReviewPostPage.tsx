import ReplyIcon from "@/src/assets/review/ReplyIcon";
import ViewIcon from "@/src/assets/review/ViewIcon";
import Input from "../common/Input";
import { useState } from "react";
import Button from "../common/Button";
import Reply from "./Reply";
import ReRply from "./ReRply";

interface ReviewPostPageProps {
  title:string;
  id:string;
  date:string;
  views:string;
  replies:string;
  content:string
}

const ReviewPostPage = ({...props}:ReviewPostPageProps) => {
  const {title, id, date, views, replies, content } = props;
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="px-60 flex flex-col items-center">
      <div className="title-lg self-start">알바 이야기</div>
      <div className="h-[24px]" />
      <div className="flex flex-col w-full py-[40px] px-[80px] gap-[12px] border-[1px] border-gray2 rounded-[20px]">
        {/* 지역, 직종 태그 */}
        <div>
          <div className="flex gap-[10px]">
            <Button className="bg-gray2 px-[8px] py-[4px] rounded-[12px] flex justify-center items-center text-gray5">
              충북 청주시
            </Button>
            <Button className="px-[8px] py-[4px] rounded-[12px] border-[1px] border-gray3 flex justify-center items-center text-gray5">
              외식/음료
            </Button>
          </div>
          <div className="h-[16px]" />
          {/* 제목, 삭제 버튼 */}
          <div className="flex justify-between">
            <div className="title-md">{title}</div>
            <Button
              type="submit"
              className="bg-gray2-button h-[36px] px-[16px]"
              secondClassName="py-[8px] rounded-[12px]"
            >
              삭제하기
            </Button>
          </div>
        </div>
        {/* 닉네임, 작성 날짜, 조회수, 댓글 수 */}
        <div className="flex justify-between border-b-[1px] border-b-gray3 pb-[16px]">
          <div className="flex gap-[10px]">
            <div className="text-main badge-sm">{id}</div>
            <div className="text-gray4 badge-sm">{date}</div>
          </div>
          <div className="flex gap-[4px]">
            <div className="flex items-center">
              <ViewIcon className="w-[18px] h-[18px] m-[10px]" />
              <div className="badge-sm h-[32px] text-gray5 px-[4px] flex items-center">
                {views}
              </div>
            </div>
            <div className="flex">
                <ReplyIcon className="w-[18px] h-[18px] m-[10px]" />
              <div className="badge-sm text-gray5 px-[4px] flex items-center">
                {replies}
              </div>
            </div>
          </div>
        </div>
        {/* 게시물 내용 */}
        <p className="py-[40px] body-md">
          {content}
        </p>
        {/* 댓글 수 */}
        <div className="flex">
          <div className="w-[32px] h-[32px] p-[10px]">
            <ReplyIcon className="w-[18px] h-[18px] -translate-y-1" />
          </div>
          <div className="flex items-center h-[32px] px-[4px] gap-[4px]">
            <div className="badge-sm text-gray5">댓글</div>
            <div className="text-main badge-md translate-y-0.8">{replies}</div>
            <div className="badge-sm text-gray5">개</div>
          </div>
        </div>
        {/* 댓글 입력 창 */}
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          leftElement={() => (
            <Button
              type="submit"
              className="bg-main-button absolute right-5 h-[34px] px-[16px]"
              secondClassName="py-[12px] rounded-[12px]"
            >
              등록
            </Button>
          )}
          placeholder="댓글을 입력해주세요."
          className="w-full px-[20px] py-[10px] relative"
        />
        {/* 댓글 */}
        <div>
          <Reply id="albago**" date="2025.01.15" content="남의 돈 받는 일이라는게 쉬울 리가 없죠... 아쉽게도ㅠ"></Reply>
          <ReRply id="albago**" date="2025.01.15" content="너 T야?"></ReRply>
          <Reply id="albago**" date="2025.01.15" content="남의 돈 받는 일이라는게 쉬울 리가 없죠... 아쉽게도ㅠ"></Reply>
          <Reply id="albago**" date="2025.01.15" content="남의 돈 받는 일이라는게 쉬울 리가 없죠... 아쉽게도ㅠ"></Reply>
          <ReRply id="albago**" date="2025.01.15" content="너 T야?"></ReRply>
        </div>
      </div>

      <div className="h-[36px]" />
      {/* 글 목록 보는 버튼 */}
      <Button
        type="submit"
        className="bg-main-button w-[120px] h-[40px] px-[16px] justify-center"
        secondClassName="py-[12px]"
      >
        목록보기
      </Button>
    </div>
  );
};

export default ReviewPostPage;
