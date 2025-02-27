import {twMerge} from "tailwind-merge";
import {JSX} from "react";

interface Props {
    children: React.ReactNode;
    className: string;
    LeftIcon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

const Tag = (props: Props) => {
    const {children, className, LeftIcon} = props;
    return (
        <div className={twMerge("flex gap-x-1 px-2 py-1 rounded-[8px] badge-md w-fit",className)}>
            {LeftIcon ? <LeftIcon /> : null}
            {children}
        </div>
    )
}
export default Tag
