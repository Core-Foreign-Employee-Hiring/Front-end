import {JSX} from "react";

interface Props {
    leftElement: () => JSX.Element;
    children: React.ReactNode;
    count: number;
}

const EvaluationTag = (props: Props) => {
    const {leftElement, children, count} = props;
    return (
        <div className={"flex gap-x-2 py-3 px-6 bg-gray1"}>
            {leftElement()}
            {children}
            <span>{count}</span>
        </div>
    )
}
export default EvaluationTag
