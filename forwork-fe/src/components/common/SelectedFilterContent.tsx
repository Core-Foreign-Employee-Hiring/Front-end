import ArrowForwardIcon from "@/src/assets/common/ArrowForwardIcon";
import {Dispatch, SetStateAction} from "react";
import Button from "@/src/components/common/Button";
import {twMerge} from "tailwind-merge";

interface Props {
    placeholder?: string;
    selectedContent: string;
    isFocused?: boolean;
    setIsFocused?: () => void;
    disabled?: boolean;
    className?: string;
    textStyle?: string;
}
const SelectedFilterContent = (props: Props) => {
    const {placeholder, selectedContent, isFocused, setIsFocused, disabled=false, className, textStyle} = props;

    return (
        <Button
            onClick={() => {
                setIsFocused &&  setIsFocused();
            }}
            className={disabled ?
                twMerge("flex justify-between items-center w-full px-4 py-[16.5px] rounded-[16px] bg-gray1", className)
                : isFocused
                    ? twMerge("flex justify-between items-center w-full px-4 py-[16.5px] rounded-[16px] border border-main", className)
                    : twMerge("flex justify-between items-center w-full px-4 py-[16.5px] rounded-[16px] border border-gray4", className)}>
            <div className={selectedContent === ""
                ? twMerge("body-md text-gray4", textStyle)
                : twMerge("subtitle-lg", textStyle)}>
                {selectedContent === "" ? placeholder : selectedContent}
            </div>
            <div className={"flex justify-center items-center w-[36px] h-[36px]"}>
                <ArrowForwardIcon size={12} color={"#999BA5"} direction={isFocused ? "up" : "down"} strokeWidth={0.1}/>
            </div>
        </Button>
    )
}
export default SelectedFilterContent;
