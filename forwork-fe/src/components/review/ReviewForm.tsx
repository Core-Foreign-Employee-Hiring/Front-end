import { useState } from "react";
import Input from "../common/Input";
import SelectedFilterContent from "../common/SelectedFilterContent";
import Button from "../common/Button";

const ReviewForm = () => {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  return (
    <div className="px-60">
      {/* 헤드라인 */}
      <div className="title-lg pb-[20px] border-b-[1px] border-b-gray5">
        알바 이야기
      </div>
      <div className="py-[80px] flex flex-col gap-[48px]">
        {/* 가게 위치 */}
        <div className="flex justify-between w-[588px]">
          <div className="flex w-[100px] py-[8px] gap-[4px]">
            <div className="title-md">가게 위치</div>
            <span className="text-main title-md">*</span>
          </div>
          <div className="flex gap-[24px]">
            <SelectedFilterContent
              selectedContent="시/도"
              className="w-[180px] h-[52px] px-[16px] py-0 text-gray4 border-[1.2px] border-gray2"
            />
            <SelectedFilterContent
              selectedContent="시/구/군"
              className="w-[180px] h-[52px] px-[16px] py-0 text-gray4 border-[1.2px] border-gray2"
            />
          </div>
        </div>
        {/* 업직종 */}
        <div className="flex justify-between w-[384px]">
          <div className="flex w-[100px] py-[8px] gap-[4px]">
            <div className="title-md">업직종</div>
            <span className="text-main title-md">*</span>
          </div>
          <SelectedFilterContent
            selectedContent="업직종"
            className="w-[180px] h-[52px] px-[16px] py-0 text-gray4 border-[1.2px] border-gray2"
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          {/* 글 제목 */}
          <div className="flex justify-between w-full">
            <div className="flex w-[100px] py-[8px] gap-[4px] mr-[115px]">
              <div className="title-md">제목</div>
              <span className="text-main title-md">*</span>
            </div>
            <Input
              inputValue={titleValue}
              setInputValue={setTitleValue}
              placeholder="제목을 입력하세요."
              className="w-full h-[52px] px-[16px] py-0 text-gray4 border-[1.2px] border-gray2"
            />
          </div>
          {/* 글자 수 */}
          <div className="badge-md text-right text-gray5">0/30</div>
        </div>
        <div className="flex flex-col gap-[8px]">
          {/* 글 제목 */}
          <div className="flex justify-between w-full">
            <div className="flex w-[100px] py-[8px] gap-[4px] mr-[115px]">
              <div className="title-md">내용</div>
              <span className="text-main title-md">*</span>
            </div>
            <Input
              inputValue={contentValue}
              setInputValue={setContentValue}
              placeholder="내용을 입력하세요."
              className="w-full h-[420px] p-[16px] text-gray4 border-[1.2px] flex items-start border-gray2"
            />
          </div>
          {/* 글자 수 */}
          <div className="badge-md text-right text-gray5">0/5000</div>
        </div>
      </div>
      <div className="flex justify-center mt-[64px] gap-[24px]">
        <Button type="submit" className="subtitle-md bg-gray2-button p-[24px] justify-center w-[180px] rounded-[8px] h-[24px]">취소</Button>
        <Button type="submit" className="subtitle-md bg-main-button p-[24px] justify-center w-[180px] rounded-[8px] h-[24px]">작성</Button>
      </div>
    </div>
  );
};
export default ReviewForm;
