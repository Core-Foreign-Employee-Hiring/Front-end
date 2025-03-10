import {JSX, useState} from "react";

interface Props {
    leftElement: () => JSX.Element;
    rightElement?: () => JSX.Element;
    hoverContent?: string;
    children: React.ReactNode;
    count: number | undefined;
}

const EvaluationTag = (props: Props) => {
    const {leftElement, rightElement, children, count, hoverContent} = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={"relative"}>
            <div className={"flex items-center gap-x-2 py-3 px-4 bg-gray1 rounded-[16px] w-fit"}>
                {leftElement()}
                <span className={"body-sm"}>{children}</span>
                <div className={"subtitle-sm"}>{count}</div>
                {rightElement && (
                    <div
                        className="cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {rightElement()}

                    </div>
                )}
            </div>
            {isHovered && hoverContent && (
                <div className={"absolute z-10 left-60 w-full py-4 px-6 rounded-[16px] bg-gray1 body-sm shadow-lg"}>
                    {hoverContent}
                </div>
            )}
        </div>
    )
}
export default EvaluationTag
