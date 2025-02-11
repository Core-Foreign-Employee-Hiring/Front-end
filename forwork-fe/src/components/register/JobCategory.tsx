import Button from "@/src/components/common/Button";
import {changeBusinessFieldEnumType, jobCategoryList} from "@/src/utils/common";
import {BusinessFieldEnumType} from "@/src/types/register";

interface Props {
    businessFields: BusinessFieldEnumType[];
}

const JobCategory = (props: Props) => {
    const {businessFields} = props;

    if (!businessFields)
        return ;

    return (
        <div className={"grid grid-cols-7 gap-3"}>
            {jobCategoryList.map((jobCategory) => {
                return (
                    <Button
                        key={jobCategory}
                        className={
                        businessFields.includes(changeBusinessFieldEnumType(jobCategory))
                            ? "bg-main-button flex justify-center"
                            : "border-gray4-button flex justify-center"}>
                        {jobCategory}
                    </Button>
                )
            })}
        </div>
    )
}
export default JobCategory;
