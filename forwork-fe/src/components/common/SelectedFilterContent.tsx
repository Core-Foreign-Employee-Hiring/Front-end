import Button from "@/src/components/common/Button";
import {twMerge} from "tailwind-merge";
import DropDownIcon from "@/src/assets/common/DropDownIcon";
import {Dispatch, JSX, SetStateAction} from "react";

interface Props {
    placeholder?: string;
    selectedContent: string;
    isFocused?: boolean;
    setIsFocused?: Dispatch<SetStateAction<boolean>>;
    disabled?: boolean;
    className?: string;
    textStyle?: string;
    element?: () => JSX.Element;
}
const SelectedFilterContent = (props: Props) => {
    const {placeholder, selectedContent, isFocused, setIsFocused, disabled=false, className, textStyle, element} = props;

    return (
        <Button
            onClick={() => {
                setIsFocused && setIsFocused(!isFocused);
            }}
            className={disabled ?
                twMerge("flex justify-between items-center w-full pl-4 pr-3 py-4 rounded-[16px] bg-gray1", className)
                : isFocused
                    ? twMerge("flex justify-between items-center w-full pl-4 pr-3 py-4 rounded-[16px] border border-main", className)
                    : twMerge("flex justify-between items-center w-full pl-4 pr-3 rounded-[16px] border border-gray2", className)}>
            <div className={selectedContent === ""
                    ? twMerge("flex gap-x-1 items-center button-md text-gray4", textStyle)
                    : twMerge("flex gap-x-1 items-center button-md", textStyle)}>
                {selectedContent === "" ? placeholder : selectedContent}
                {element && element()}
            </div>
            <div className={"flex justify-center items-center w-[36px] h-[36px]"}>
                <DropDownIcon />
            </div>
        </Button>
    )
}
export default SelectedFilterContent;
