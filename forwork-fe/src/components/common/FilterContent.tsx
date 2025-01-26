import ArrowForwardIcon from "@/src/assets/common/ArrowForwardIcon";
import {useState} from "react";

interface Props {
    selectedContent: string;
}
const FilterContent = (props: Props) => {
    const {selectedContent} = props;
    const [isFocused, setIsFocused] = useState(false); // focus 상태 관리

    return (
        <button
            onFocus={() => {setIsFocused(true)}}
            onBlur={() => {setIsFocused(false)}}
            className={isFocused
                ? "flex justify-between items-center w-full px-4 py-[16.5px] rounded-[16px] border border-main"
                : "flex justify-between items-center w-full px-4 py-[16.5px] rounded-[16px] border border-gray4"}>
            <div className={"subtitle-lg text-gray4"}>{selectedContent}</div>
            <div className={"flex justify-center items-center w-[36px] h-[36px]"}>
                <ArrowForwardIcon size={12} color={"#999BA5"} direction={isFocused ? "up" : "down"} strokeWidth={0.1}/>
            </div>
        </button>
    )
}
export default FilterContent;
