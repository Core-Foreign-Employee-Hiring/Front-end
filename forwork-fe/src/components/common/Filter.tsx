import { JSX } from "react";

interface Props {
    filterContents: () => JSX.Element;
}

const Filter = (props: Props) => {
    const {filterContents} = props;

    return (
        <div className={"rounded-[20px] border border-gray5 h-[302px] overflow-y-scroll"}>
            {filterContents()}
        </div>
    )
}
export default Filter;
