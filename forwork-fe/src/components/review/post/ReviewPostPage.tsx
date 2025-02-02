import ReplyIcon from "@/src/assets/review/ReplyIcon";
import ViewIcon from "@/src/assets/review/ViewIcon";
import Input from "../../common/Input";
import { useState } from "react";
import Button from "../../common/Button";
import Reply from "./Reply";
import ReRply from "./ReRply";

const ReviewPostPage = () => {
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
          <div className="title-md">이게 맞는 걸까요?</div>
          <Button
            type="submit"
            className="bg-gray2 h-[36px] px-[16px] py-[8px] rounded-[12px] text-gray5"
          >
            삭제하기
          </Button>
        </div>
        </div>
        {/* 닉네임, 작성 날짜, 조회수, 댓글 수 */}
        <div className="flex justify-between border-b-[1px] border-b-gray3">
          <div className="flex gap-[10px]">
            <div className="text-main badge-sm">albanoye**</div>
            <div className="text-gray4 badge-sm">2025.01.15</div>
          </div>
          <div className="flex">
            <div className="flex">
              <div className="w-[32px] h-[32px] p-[10px]">
                <ViewIcon className="w-[18px] h-[12px]" />
              </div>
              <div className="badge-sm text-gray5 px-[4px] flex items-center">
                100
              </div>
            </div>
            <div className="flex">
              <div className="w-[32px] h-[32px] p-[10px]">
                <ReplyIcon className="w-[18px] h-[16px]" />
              </div>
              <div className="badge-sm text-gray5 px-[4px] flex items-center">
                5
              </div>
            </div>
          </div>
        </div>
        {/* 게시물 내용 */}
        <p className="py-[40px] body-md">
          오전 11시부터 오후 8시까지 종일알바를 하고있습니다!지금 이틀째인데
          하는 업무가 음식점에서 하는 알바라서 여러 일들을 하고 최저시급을
          받고있는데 제가 하는 일에 비해 적당하게 받고 있는지 모르겠어서 글
          남겨요ㅠㅠ <br></br>
          우선 서빙, 상 치우기, 단무지/물 전달, 각 식탁에 숫가락 젓가락 개수
          맞춰서 세팅, 설거지, 음식 고명하기, 화장실청소, 대걸레질, 청소기,
          셀프바 음식 채우기, 음식 나갈때 주방에 들어가서 받기 입니다. <br></br>
          이 일을 다 혼자 해요. 이 정도로 최저시급인 10030원 적당한 건가요?
        </p>
        {/* 댓글 수 */}
        <div className="flex">
          <div className="w-[32px] h-[32px] p-[10px]">
            <ReplyIcon className="w-[18px] h-[16px]" />
          </div>
          <div className="flex items-center h-[32px] px-[4px] gap-[4px]">
            <div className="badge-sm text-gray5">댓글</div>
            <div className="text-main badge-md -translate-y-0.5">5</div>
            <div className="badge-sm text-gray5">개</div>
          </div>
        </div>
        {/* 댓글 입력 창 */}
        <Input
          inputValue={inputValue}
          setInputValue={setInputValue}
          leftElement={() => <Button className="absolute right-5 h-[34px] bg-main px-[16px] py-[12px] rounded-[12px] text-white">등록</Button>}
          placeholder="댓글을 입력해주세요."
          className="w-full px-[20px] py-[10px] relative"
        />
        {/* 댓글 */}
        <div>
          <Reply></Reply>
          <ReRply></ReRply>
          <Reply></Reply>
          <Reply></Reply>
          <ReRply></ReRply>
        </div>
      </div>

      <div className="h-[36px]" />
      {/* 글 목록 보는 버튼 */}
      <Button className="bg-main text-white w-[120px] h-[40px] px-[16px] py-[12px] rounded-[16px] flex justify-center">목록보기</Button>
    </div>
  );
};

export default ReviewPostPage;
