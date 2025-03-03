import {JSX} from "react";

interface Props {
    leftElement: () => JSX.Element;
    children: React.ReactNode;
    count: number | undefined;
}

const EvaluationTag = (props: Props) => {
    const {leftElement, children, count} = props;
    return (
        <div className={"flex gap-x-2 py-3 px-6 bg-gray1 rounded-[16px] w-fit"}>
            {leftElement()}
            <span className={"body-sm"}>{children}</span>
            <span className={"body-sm pl-1"}>{count}</span>
        </div>
    )
}
export default EvaluationTag
