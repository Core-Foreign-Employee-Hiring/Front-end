import ArrowForwardIcon from "@/src/assets/common/ArrowForwardIcon";
import {Dispatch, SetStateAction} from "react";
import Button from "@/src/components/common/Button";
import {twMerge} from "tailwind-merge";

interface Props {
    placeholder?: string;
    selectedContent: string;
    isFocused?: boolean;
    setIsFocused?:  Dispatch<SetStateAction<boolean>>
    disabled?: boolean;
    className?: string;
}
const SelectedFilterContent = (props: Props) => {
    const {placeholder, selectedContent, isFocused, setIsFocused, disabled=false, className} = props;

    return (
        <Button
            onClick={() => {
                setIsFocused && setIsFocused(!isFocused);
            }}
            className={disabled ?
                twMerge("flex justify-between items-center w-full px-4 py-[16.5px] rounded-[16px] bg-gray1", className)
                : isFocused
                    ? twMerge("flex justify-between items-center w-full px-4 py-[16.5px] rounded-[16px] border border-main", className)
                    : twMerge("flex justify-between items-center w-full px-4 py-[16.5px] rounded-[16px] border border-gray4", className)}>
            <div className={selectedContent === "" ? "body-md text-gray4" : "subtitle-lg"}>{selectedContent === "" ? placeholder : selectedContent}</div>
            <div className={"flex justify-center items-center w-[36px] h-[36px]"}>
                <ArrowForwardIcon size={12} color={"#999BA5"} direction={isFocused ? "up" : "down"} strokeWidth={0.1}/>
            </div>
        </Button>
    )
}
export default SelectedFilterContent;
