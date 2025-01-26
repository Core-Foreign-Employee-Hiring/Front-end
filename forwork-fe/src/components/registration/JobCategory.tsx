import Button from "@/src/components/common/Button";
import JobCategoryItem from "@/src/components/registration/JobCategoryItem";
import {jobCategoryList} from "@/src/utils/common";

interface Props {

}

const JobCategory = (props: Props) => {
    const {} = props;

    return (
        <div className={"flex flex-col gap-y-3"}>
            {/* title */}
            <div className={"title-md"}>업직종<span className={"text-main"}>*</span></div>
            <div className={"grid grid-cols-7 gap-3"}>
                {jobCategoryList.map((jobCategory) => {
                    return (
                        <Button className={"bg-main-button flex justify-center"}>{jobCategory}</Button>
                    )
                })}
            </div>


            {/* 업직종 items */}

        </div>
    )
}
export default JobCategory;
