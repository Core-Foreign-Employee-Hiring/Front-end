import {JSX} from "react";

import Title from "@/src/components/common/Title";
import {twMerge} from "tailwind-merge";

interface Props {
    content: JSX.Element;
    title: string;
    titleRequired?: boolean;
    className?: string;
}

const Item = (props: Props) => {
    const {title, content, titleRequired, className} = props;
    return (
        <div className={twMerge("flex gap-x-3 items-center", className)}>
            {/* title */}
            <Title required={titleRequired} className={"w-[200px]"}>{title}</Title>
            <div className="flex-1">{content}</div>
        </div>
    )
}
export default Item;
