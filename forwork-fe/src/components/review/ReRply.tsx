import ReRplyIcon from "@/src/assets/review/ReRplyIcon"
import Button from "../common/Button"

interface ReRplyProps {
  id:string;
  date:string;
  content:string;
}

const ReRply = ({...props}:ReRplyProps) => {
  const{id, date, content} = props

  return(
    <div className="py-[20px] px-[24px] bg-gray1 border-b-[1px] border-b-gray2 w-full">
      <div className="flex justify-between">
        <div className="flex gap-[4px] h-[36px]">
          <div className="w-[32px] h-[32px] flex justify-center translate-y-1">
            <ReRplyIcon className="w-[12px] h-[12px]" />
          </div>
          <div className="text-main badge-md pr-[4px]">{id}</div>
          <div className="text-gray4 badge-sm translate-y-1 px-[4px]">{date}</div>
        </div>
        {/* 삭제 버튼 */}
        <Button type="submit" className="bg-gray2-button h-[36px] px-[16px]" secondClassName="py-[8px] rounded-[12px]">
          삭제하기
        </Button>
      </div>
      <p className="body-md mb-[20px]">{content}</p>
      <Button type="submit" className="px-[12px] border-gray5-button">답글쓰기</Button>
    </div>
  )
}

export default ReRply