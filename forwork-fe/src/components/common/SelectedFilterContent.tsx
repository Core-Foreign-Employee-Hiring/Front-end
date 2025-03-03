import Button from "@/src/components/common/Button";
import {twMerge} from "tailwind-merge";
import DropDownIcon from "@/src/assets/common/DropDownIcon";

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
                twMerge("flex justify-between items-center w-full pl-4 pr-3 py-4 rounded-[16px] bg-gray1", className)
                : isFocused
                    ? twMerge("flex justify-between items-center w-full pl-4 pr-3 py-4 rounded-[16px] border border-main", className)
                    : twMerge("flex justify-between items-center w-full pl-4 pr-3 rounded-[16px] border border-gray2", className)}>
            <div className={selectedContent === "" ? twMerge("button-md text-gray4", textStyle) : twMerge("button-md", textStyle)}>{selectedContent === "" ? placeholder : selectedContent}</div>
            <div className={"flex justify-center items-center w-[36px] h-[36px]"}>
                <DropDownIcon />
            </div>
        </Button>
    )
}
export default SelectedFilterContent;
