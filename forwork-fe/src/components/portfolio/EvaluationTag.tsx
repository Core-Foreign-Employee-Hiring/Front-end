import {JSX} from "react";

interface Props {
    leftElement: () => JSX.Element;
    children: React.ReactNode;
    count: number | undefined;
}

const EvaluationTag = (props: Props) => {
    const {leftElement, children, count} = props;
    return (
        <div className={"flex items-center gap-x-2 py-3 px-4 bg-gray1 rounded-[16px] w-fit"}>
            {leftElement()}
            <span className={"body-sm"}>{children}</span>
            <span className={"subtitle-sm"}>{count}</span>
        </div>
    )
}
export default EvaluationTag
