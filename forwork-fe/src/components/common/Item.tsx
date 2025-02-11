import {JSX} from "react";

import Title from "@/src/components/common/Title";

interface Props {
    content: JSX.Element;
    title: string;
    titleRightElement?: () => JSX.Element;
    titleRequired?: boolean;
}

const Item = (props: Props) => {
    const {title, content, titleRightElement, titleRequired} = props;
    return (
        <div className={"flex flex-col gap-y-3"}>
            {/* title */}
            <Title rightElement={titleRightElement} required={titleRequired}>{title}</Title>
            {content}
        </div>
    )
}
export default Item;
