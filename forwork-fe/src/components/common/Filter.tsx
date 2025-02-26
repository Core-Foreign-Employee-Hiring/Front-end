import { JSX } from "react";
import {twMerge} from "tailwind-merge";
import {jobCategoryList} from "@/src/utils/common";
import Button from "@/src/components/common/Button";

interface Props {
    type?: "default" | "BusinessField" | "preferentialConditions";
    className?: string;
    filterContents?: () => JSX.Element;
}

const Filter = (props: Props) => {
    const {type = "default", className, filterContents} = props;

    const renderFilter = (type: "default" | "BusinessField" | "preferentialConditions") => {
        switch (type) {
            case "BusinessField":
                return (
                    <section className={"flex flex-col gap-y-8 p-5 rounded-[24px] border border-gray2"}>
                        <div className={"flex flex-col gap-y-4"}>
                            <div>

                            </div>
                            <div className={"grid grid-cols-6 gap-2"}>
                                {jobCategoryList.map((jobCategory) => {
                                    return (
                                        <Button className={"border-gray2-button"}
                                                secondClassName={"flex justify-center items-center"}>{jobCategory}</Button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={"flex gap-x-2 w-full justify-end"}>
                            <Button className={"border-gray2-button"} secondClassName={"flex justify-center items-center w-[120px] h-[40px] rounded-[16px]"}>초기화</Button>
                            <Button className={"bg-main-button"} secondClassName={"flex justify-center items-center w-[120px] h-[40px] rounded-[16px]"}>적용</Button>
                        </div>
                    </section>
                )
            case "preferentialConditions":
                return (
                    <section>

                    </section>
                )
            default:
                return (
                    <div
                        className={twMerge("rounded-[20px] border border-gray5 h-[302px] overflow-y-scroll", className)}>
                        {filterContents && filterContents()}
                    </div>
                )
        }
    }

    return (
        <>
            {renderFilter(type)}
        </>
    )
}
export default Filter;
