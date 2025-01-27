import ArrowForwardIcon from "@/src/assets/common/ArrowForwardIcon";
import Button from "../common/Button";

interface SortButtonProps {
  sortBy:string;
}
const SortButton = ({...props}:SortButtonProps) => {
  const {sortBy} = props;
  return (
    <Button className="flex items-center text-gray5 font-[14px] subtitle-sm border-[1px] border-gray3 rounded-[12px] h-[40px] px-4 gap-[16px]">
      <div>{sortBy}</div>
      <div className="h-[36px] py-3 flex justify-center items-center gap-[8px]">
        <ArrowForwardIcon direction="up" />
      </div>
    </Button>
  );
};

export default SortButton
