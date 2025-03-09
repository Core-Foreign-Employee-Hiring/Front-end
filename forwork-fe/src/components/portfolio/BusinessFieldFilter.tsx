import Button from "@/src/components/common/Button";
import CancelIcon from "@/src/assets/common/CancelIcon";
import {JobCategoryType} from "@/src/types/register";
import {Dispatch, SetStateAction, useEffect} from "react";
import {jobCategoryList} from "@/src/utils/common";

interface Props {
    selectedJobCategories: JobCategoryType[]
    setSelectedJobCategories: Dispatch<SetStateAction<JobCategoryType[]>>
    isJobCategoriesFilterFocused: boolean;
    setIsJobCategoriesFilterFocused: Dispatch<SetStateAction<boolean>>
    jobCategoriesSelectedContent: string;
    setJobCategoriesSelectedContent: Dispatch<SetStateAction<string>>;

}
const BusinessFieldFilter = (props: Props) => {
    const {selectedJobCategories, setSelectedJobCategories, isJobCategoriesFilterFocused, setIsJobCategoriesFilterFocused, jobCategoriesSelectedContent, setJobCategoriesSelectedContent} = props;

    const togglePreferredCondition = (selectedJobCategory: JobCategoryType) => {
        setSelectedJobCategories((prevState) => {
            if (prevState.includes(selectedJobCategory)) {
                // 이미 선택된 경우 제거
                return prevState.filter((condition) => condition !== selectedJobCategory);
            } else {
                // 선택되지 않은 경우 추가 (최대 5개 제한)
                return prevState.length < 5 ? [...prevState, selectedJobCategory] : prevState;
            }
        });
    };

    useEffect(() => {
        setJobCategoriesSelectedContent(selectedJobCategories.join(", "))
    }, [selectedJobCategories]);

    return (
        <div>
            {isJobCategoriesFilterFocused && (
                <section className={"flex flex-col gap-y-[32px] rounded-[24px] w-full border border-gray2 p-5"}>
                    <section className={"flex flex-col gap-y-4"}>
                        <section className={"flex justify-between items-center"}>
                            <div className={"flex flex-wrap gap-2"}>
                                {selectedJobCategories.map((selectedJobCategory) => {
                                    return (
                                        <div
                                            key={selectedJobCategory}
                                            className={"flex gap-x-2 border-gray3-button pr-2 bg-gray1 py-2"}>
                                            {selectedJobCategory}
                                            <CancelIcon
                                                onClick={() => {
                                                    togglePreferredCondition(selectedJobCategory)
                                                }}
                                                className={"cursor-pointer"}
                                                size={20}
                                                color={"#6F717C"}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                        <section className={"flex flex-wrap gap-2"}>
                            {jobCategoryList.map((jobCategory) => {
                                return (
                                    <div key={jobCategory}>
                                        <Button
                                            type={"button"}
                                            onClick={() => togglePreferredCondition(jobCategory)}
                                            className={selectedJobCategories.includes(jobCategory)
                                                ? "border-main-bg-lightMain-button px-4"
                                                : "border-gray2-button"}>
                                            {jobCategory}
                                        </Button>
                                    </div>
                                )
                            })}
                        </section>
                    </section>

                    <section className={"flex justify-end gap-x-2"}>
                        <Button
                            onClick={() => {
                                setSelectedJobCategories([])
                            }}
                            className={"border-gray2-button"}
                            secondClassName={"flex items-center justify-center w-[120px] py-3"}>초기화</Button>
                        <Button
                            onClick={() => {
                                setJobCategoriesSelectedContent(selectedJobCategories.join(", "))
                                setIsJobCategoriesFilterFocused(false)
                            }}
                            className={"bg-main-button"}
                            secondClassName={"flex items-center justify-center w-[120px] py-3"}>
                            {selectedJobCategories.length} / 5 적용
                        </Button>
                    </section>
                </section>
            )}
        </div>
    )
}
export default BusinessFieldFilter;
