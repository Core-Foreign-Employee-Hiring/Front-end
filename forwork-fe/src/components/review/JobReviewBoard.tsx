"use client";

import SearchIcon from "@/src/assets/common/SearchIcon";
import Button from "../common/Button";
import Input from "../common/Input";
import { useState } from "react";
import ReviewPost from "./ReviewPost";
import SortButton from "./SortButton";
import PaginationButton from "./PaginationButton";


const JobReviewBoard = () => {
  const [inputValue, setInputValue] = useState("");

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
          총 <span className="text-main subtitle-lg">34,231</span> 건
        </div>
        <div className="flex gap-[8px]">
          {/* 정렬 버튼 */}
          <SortButton sortBy="날짜 순" />
          {/* 게시물 검색 */}
          <Input
            className="w-[288px] h-[40px] px-[16px] flex items-center subtitle-sm border-[1px] border-gray3"
            placeholder="본문 + 제목을 검색해주세요"
            inputValue={inputValue}
            setInputValue={() => setInputValue(inputValue)}
            leftElement={() => <SearchIcon fill="#5551f5" />}
          />
        </div>
      </div>
      {/* 후기 게시물 */}
      <ReviewPost
        regionTag="충북 청주시"
        jobTag="외식/음료"
        title="이게 맞는 걸까요?"
        content="오전 11시부터 오후 8시까지 종일알바를 하고있습니다! 지금 이틀째인데 하는 업무가 음식점에서 하는 알바라서 여러 일들을 하고 최저시급을 받고있어요.그런데 사장님이 쉬는시간도 주시지않고 틈틈이 알아서 쉬라네요.. 인기많은 가게라 사실 사람이 쉬지 않고 들어옵니다ㅠ 그래서 사실 틈을 내어 쉴 수 없습니다.. 이게 맞는걸까요?"
        views="100"
        replies="5"
        relativeTimestamp="4분 전 작성"
      />
      <ReviewPost
        regionTag="충북 청주시"
        jobTag="외식/음료"
        title="이게 맞는 걸까요?"
        content="오전 11시부터 오후 8시까지 종일알바를 하고있습니다! 지금 이틀째인데 하는 업무가 음식점에서 하는 알바라서 여러 일들을 하고 최저시급을 받고있어요.그런데 사장님이 쉬는시간도 주시지않고 틈틈이 알아서 쉬라네요.. 인기많은 가게라 사실 사람이 쉬지 않고 들어옵니다ㅠ 그래서 사실 틈을 내어 쉴 수 없습니다.. 이게 맞는걸까요?"
        views="100"
        replies="5"
        relativeTimestamp="4분 전 작성"
      />
      <ReviewPost
        regionTag="충북 청주시"
        jobTag="외식/음료"
        title="이게 맞는 걸까요?"
        content="오전 11시부터 오후 8시까지 종일알바를 하고있습니다! 지금 이틀째인데 하는 업무가 음식점에서 하는 알바라서 여러 일들을 하고 최저시급을 받고있어요.그런데 사장님이 쉬는시간도 주시지않고 틈틈이 알아서 쉬라네요.. 인기많은 가게라 사실 사람이 쉬지 않고 들어옵니다ㅠ 그래서 사실 틈을 내어 쉴 수 없습니다.. 이게 맞는걸까요?"
        views="100"
        replies="5"
        relativeTimestamp="4분 전 작성"
      />
      <div className="h-[36px]" />
      {/* 페이지네이션 버튼 */}
      <PaginationButton />
    </div>
  );
};

export default JobReviewBoard;
