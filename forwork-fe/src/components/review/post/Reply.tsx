import Button from "../../common/Button";

const Reply = () => {
  return (
    <div className="py-[20px] border-b-[1px] border-b-gray2 w-full">
      <div className="flex justify-between">
        <div className="flex gap-[10px]">
          <div className="text-main badge-md">albago**</div>
          <div className="text-gray4 badge-sm translate-y-1">2025.01.15</div>
        </div>
        {/* 삭제 버튼 */}
        <Button className="h-[36px] px-[16px] py-[8px] rounded-[12px] bg-gray2 gray5 text-gray5">
          삭제하기
        </Button>
      </div>
      <p className="body-md mb-[20px]">남의 돈 받는 일이라는게 쉬울 리가 없죠... 아쉽게도ㅠ</p>
      <Button className="px-[12px] py-[8px] border-[1px] border-gray5 rounded-[12px] text-gray5">답글쓰기</Button>
    </div>
  );
};
export default Reply;
