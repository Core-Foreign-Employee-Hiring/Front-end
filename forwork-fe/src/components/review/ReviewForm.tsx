import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { createReview } from "@/src/lib/api/review";
import useLocation from "@/src/lib/hooks/useLocation";
import DropdownMenu from "./dropdownMenu";
import { JobCategoryType } from "@/src/types/register";

const ReviewForm = () => {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const { locationData } = useLocation()
  const [region1, setRegion1 ] = useState("")
  const [region2, setRegion2 ] = useState("")
  const [jobFields, setjobFields ] = useState<JobCategoryType>("")
  const businessFields = ["전체", "외식/음료", "매장/판매", "생산-건설", "생산-기술", "사무/영업", "문화/여가/생활", "농어촌/선원", "모델/쇼핑몰", "교육", "기타/서비스" ]
  const handleSubmit = () => {
    createReview({title: titleValue, content: contentValue, region1:region1, region2:region2, businessFields:jobFields})
  }
  return (
    <form onSubmit={() => handleSubmit} className="px-60">
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
              <DropdownMenu data={locationData?.result.resultdata.map(item=> item.sido_nm)} onSelect={(item) => setRegion1(item)}>시/도</DropdownMenu>
              <DropdownMenu data={locationData?.result.resultdata.map(item=> item.sgg_nm)} onSelect={(item) => setRegion2(item)}>시/구/군</DropdownMenu>
          </div>
        </div>
        {/* 업직종 */}
        <div className="flex justify-between w-[384px]">
          <div className="flex w-[100px] py-[8px] gap-[4px]">
            <div className="title-md">업직종</div>
            <span className="text-main title-md">*</span>
          </div>
          <DropdownMenu data={businessFields} onSelect={(item) => setjobFields(item)}>업직종</DropdownMenu>
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
    </form>
  );
};
export default ReviewForm;
