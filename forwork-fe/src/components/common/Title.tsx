import {JSX, ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface Props {
    className?: string;
    children: ReactNode;
    required?: boolean;
}
const Title = (props: Props) => {
    const {className, children, required=true} = props;

    return (
        <div className={twMerge("flex justify-between", className)}>
            <div className={"title-md"}>{children}{required && <span className={"text-main"}>*</span>}</div>
        </div>
    )
}
export default Title;
