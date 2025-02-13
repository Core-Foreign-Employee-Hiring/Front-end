import {JSX, ReactNode} from "react";

interface Props {
    children: ReactNode;
    rightElement?: () => JSX.Element;
    required?: boolean;
}
const Title = (props: Props) => {
    const {children, rightElement, required=true} = props;

    return (
        <div className={"flex justify-between"}>
            <div className={"title-md"}>{children}{required && <span className={"text-main"}>*</span>}</div>
            {rightElement && rightElement()}
        </div>
    )
}
export default Title;
