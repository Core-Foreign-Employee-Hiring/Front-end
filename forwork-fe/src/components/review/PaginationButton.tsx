import ArrowForwardIcon from "@/src/assets/common/ArrowForwardIcon";

interface PaginationButtonProps {
  
}
const PaginationButton = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-center translate-y-0.5 w-[36px] h-[36px] px-[5px] py-[3px] self-start">
        <ArrowForwardIcon direction="right" color="#c5c6cd" strokeWidth={0.1} />
      </div>
      <div className="flex gap-[18px] justify-center items-center text-gray4 subtitle-lg ">
        <div className="text-main">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
      <div className="flex justify-center translate-y-1.5 w-[36px] h-[36px] px-[5px] py-[3px]">
        <ArrowForwardIcon color="#5551f5" strokeWidth={0.1}/>
      </div>
    </div>
  );
};

export default PaginationButton;
