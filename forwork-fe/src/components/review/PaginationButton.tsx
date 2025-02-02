import ArrowForwardIcon from "@/src/assets/common/ArrowForwardIcon"

const PaginationButton = () => {
  return(
    <div className="flex justify-center">
        <div className="flex justify-center translate-y-0.5 w-[36px] h-[36px] px-[5px] py-[3px] self-start fill-gray3"><ArrowForwardIcon direction="right"/></div>
        <div className="flex gap-[8px] justify-center items-center text-gray4 text-[18px]">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        </div>
        <div className="flex justify-center translate-y-1.5 w-[36px] h-[36px] px-[5px] py-[3px] fill-main"><ArrowForwardIcon/></div>
      </div>
  )
}

export default PaginationButton