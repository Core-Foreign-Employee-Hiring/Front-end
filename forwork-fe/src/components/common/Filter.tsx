import { JSX } from "react";
import {twMerge} from "tailwind-merge";
import {jobCategoryList} from "@/src/utils/common";
import Button from "@/src/components/common/Button";

interface Props {
    className?: string;
    filterContents?: () => JSX.Element;
}

const Filter = (props: Props) => {
    const {className, filterContents} = props;

    return (
        <div
            className={twMerge("rounded-[20px] border border-gray2 h-[302px] overflow-y-scroll bg-white", className)}>
            {filterContents && filterContents()}
        </div>
    )
}
export default Filter;
