"use client";

import SearchIcon from "@/src/assets/common/SearchIcon";
import Button from "../common/Button";
import Input from "../common/Input";
import { useState } from "react";
import ReviewPost from "./ReviewPost";
import SortButton from "./SortButton";
import useReviewBoard from "@/src/lib/hooks/useReviewBoard";

const JobReviewBoard = () => {
  const [inputValue, setInputValue] = useState("");
  const { reviewBoardData } = useReviewBoard()
  return (
    <div className="px-60">
      <div className="flex justify-between">
        {/* 헤드라인 */}
        <div className="title-lg mb-[24px]">알바 이야기</div>
        {/* 글쓰기 버튼 */}
        <Button
          type="submit"
          secondClassName="py-[12px] rounded-[12px]"
          className="h-[36px] px-[16px] bg-main-button"
        >
          글쓰기
        </Button>
      </div>

      <div className="flex justify-between h-[68px]">
        {/* 총 게시물 수*/}
        <div className="subtitle-lg">
          총
          <span className="text-main subtitle-lg">{`${reviewBoardData?.data.totalElements}`}
          </span>
          건
        </div>
        <div className="flex gap-[8px]">
          {/* 정렬 버튼 */}
          <SortButton sortBy="날짜 순" />
          {/* 게시물 검색 */}
          <Input
            className="w-[288px] h-[40px] px-[16px] flex items-center subtitle-sm border-[1px] border-gray3"
            placeholder="본문 + 제목을 검색해주세요"
            inputValue={inputValue}
            setInputValue={(newValue) => setInputValue(newValue)}
            leftElement={() => <SearchIcon fill="#5551f5" />}
          />
        </div>
      </div>
      {/* 후기 게시물 */}
        <ReviewPost
        regionTag={`${reviewBoardData?.data.content[0].region1}`}
        jobTag={`${reviewBoardData?.data.content[0].businessField}`}
        title={`${reviewBoardData?.data.content[0].title}`}
        content={`${reviewBoardData?.data.content[0].content}`}
        views={`${reviewBoardData?.data.content[0].readCount}`}
        replies={`${reviewBoardData?.data.content[0].commentCount}`}
        relativeTimestamp={`${reviewBoardData?.data.content[0].createdAt}`}
      />
      
      <div className="h-[36px]" />
      {/* 페이지네이션 버튼 */}
    </div>
  );
};

export default JobReviewBoard;
