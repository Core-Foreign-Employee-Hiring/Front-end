import Button from "../common/Button";

interface ReplyProps {
  id:string;
  date:string;
  content:string;
}

const Reply = ({...props}:ReplyProps) => {
  const{id, date, content} = props
  return (
    <div className="py-[20px] border-b-[1px] border-b-gray2 w-full">
      <div className="flex justify-between">
        <div className="flex gap-[10px]">
          <div className="text-main badge-md">{id}</div>
          <div className="text-gray4 badge-sm translate-y-1">{date}</div>
        </div>
        {/* 삭제 버튼 */}
        <Button type="submit" className="bg-gray2-button h-[36px] px-[16px]" secondClassName="py-[8px] rounded-[12px]">
          삭제하기
        </Button>
      </div>
      <p className="body-md mb-[20px]">{content}</p>
      <Button type="submit" className="px-[12px] border-gray5-button">답글쓰기</Button>
    </div>
  );
};
export default Reply;

