import { JSX } from "react";
import {twMerge} from "tailwind-merge";

interface Props {
    className?: string;
    filterContents: () => JSX.Element;
}

const Filter = (props: Props) => {
    const {className, filterContents} = props;

    return (
        <div className={twMerge("rounded-[20px] border border-gray5 h-[302px] overflow-y-scroll", className)}>
            {filterContents()}
        </div>
    )
}
export default Filter;
