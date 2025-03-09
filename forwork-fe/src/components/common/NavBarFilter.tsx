import {JSX} from "react";
import {twMerge} from "tailwind-merge";

interface Props {
    className?: string;
    content: () => JSX.Element;
}
const NavBarFilter = (props: Props) => {
    const {className, content} = props;

    return (
        <section className={twMerge("rounded-[8px] bg-white w-[160px] shadow-md", className)}>
            {content()}
        </section>
    )
}
export default NavBarFilter;
