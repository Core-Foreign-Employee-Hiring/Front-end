import { useState } from "react";
import Button from "../common/Button";
import ArrowForwardIcon from "@/src/assets/common/ArrowForwardIcon";
import { JobCategoryType } from "@/src/types/register";

interface Props {
  children: string
  data?:string[] | undefined
  onSelect?: (item: any) => void
}
const DropdownMenu = (props:Props) => {
  const [isOpen, setisOpen] = useState(false);
  const { children, data, onSelect } = props
  const [selectedItem, setSelectedItem ] = useState("")

  const handleSelect = (item: JobCategoryType | string) => {
    setSelectedItem(item)
    setisOpen(false)
    if (onSelect) {
      onSelect(item); // onSelect가 정의된 경우에만 호출
    }

  }
  return (
    <div>
      <Button
        className="w-[180px] h-[52px] px-[16px] py-0 text-gray4 border-[1.2px] border-gray2"
        onClick={() => setisOpen(!isOpen)}
        RightIcon={() => <ArrowForwardIcon direction="up" />}
      >
        {selectedItem ? selectedItem : children}
      </Button>
      {isOpen && data && (
        <ul>
          {data.map((item) => {
            return(
            <li 
            className="body-md px-[16px] py-[12px] h-[52px] bg-gray1"
            onClick={() => handleSelect(item)}
            >{item}</li>
            )
          })}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
