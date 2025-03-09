"use client";

import NavBar from "@/src/components/common/NavBar";
import Pagination from "@/src/components/common/Pagination";
import {useEffect, useState} from "react";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import BusinessFieldFilter from "@/src/components/common/BusinessFieldFilter";
import useFilter from "@/src/hooks/useFilter";
import {
    GenderEnumType,
    JobCategoryType,
    SalaryType,
} from "@/src/types/register";
import PremiumCard from "@/src/components/home/PremiumCard";
import Footer from "@/src/components/common/Footer";
import DetailOptionFilter from "@/src/components/common/DetailOptionFilter";

const PremiumPage = () => {
    const [pageNumber, setPageNumber] = useState(0);
    {/*업직종*/}
    const [selectedJobCategories, setSelectedJobCategories] = useState<JobCategoryType[]>([]);
    const [selectedJobCategoryContent, setSelectedJobCategoryContent, isJobCategoryFilterFocused, setIsJobCategoryFilterFocused] = useFilter("업직종");
    const jobCategoryCountElement = () => {
        return (
            <div className={"flex justify-center items-center w-[20px] h-[20px] rounded-full badge-sm bg-main text-white"}>{selectedJobCategories.length}</div>
        )
    }
    {/*근무기간*/}
    const [selectedWorkDurations, setSelectedWorkDurations] = useState<WorkDurationType[]>([]);
    const [selectedWorkTimes, setSelectedWorkTimes] = useState<WorkTimeType[]>([]);
    // const [selectedWorkDays, setSelectedWorkDays] = useState<WorkDaysType[]>([]);
    const [selectedWorkDurationContent, setSelectedWorkDurationContent, isWorkDurationFilterFocused, setIsWorkDurationFilterFocused] = useFilter("근무기간");
    {/*상세조건*/}
    const [selectedSalaryTypeList, setSelectedSalaryTypeList] = useState<SalaryType[]>([])
    const [selectedGender, setSelectedGender] = useState<GenderEnumType>()
    const [selectedDetailedConditionContent, setSelectedDetailedConditionContent, isDetailedConditionFilterFocused, setIsDetailedConditionFilterFocused] = useFilter("상세조건");
    const detailOptionCountElement = () => {
        return (
            <div className={"flex justify-center items-center w-[20px] h-[20px] rounded-full badge-sm bg-main text-white"}>{selectedSalaryTypeList.length + (selectedGender !== "" ? 1 : 0)}</div>
        )
    }

    useEffect(() => {
        console.log("isJobCategoryFilterFocused", isJobCategoryFilterFocused)
    }, [isJobCategoryFilterFocused]);
    return (
        <div>
            <NavBar/>
            <div className={"h-60"} />
            <main className={"px-[360px]"}>
                {/* 필터 */}
                <section>
                    <div className={"flex flex-col gap-y-2"}>
                        <section className={"flex gap-x-3"}>
                            {/* 업직종 필터 */}
                            <div className={"flex flex-col"}>
                                <SelectedFilterContent
                                    element={jobCategoryCountElement}
                                    selectedContent={selectedJobCategoryContent}
                                    className={"w-fit h-[45px] border-gray2"}
                                    textStyle={"button-md placeholder:text-gray4"}
                                    setIsFocused={() => {
                                        setIsJobCategoryFilterFocused(!isJobCategoryFilterFocused);
                                    }}/>
                            </div>
                            <div>
                                <SelectedFilterContent
                                    selectedContent={selectedWorkDurationContent}
                                    className={"w-fit h-[45px] border-gray2"}
                                    textStyle={"button-md placeholder:text-gray4"}
                                    setIsFocused={() => {
                                        setIsWorkDurationFilterFocused(!isWorkDurationFilterFocused);
                                    }}/>
                            </div>
                            {/* 상세 조건 */}
                            <div>
                                <SelectedFilterContent
                                    element={detailOptionCountElement}
                                    selectedContent={selectedDetailedConditionContent}
                                    className={"w-fit h-[45px] border-gray2"}
                                    textStyle={"button-md placeholder:text-gray4"}
                                    setIsFocused={() => {
                                        setIsDetailedConditionFilterFocused(!isDetailedConditionFilterFocused)
                                    }}/>
                            </div>

                        </section>
                        {isJobCategoryFilterFocused && (
                            <BusinessFieldFilter
                                isJobCategoriesFilterFocused={isJobCategoryFilterFocused}
                                selectedJobCategories={selectedJobCategories}
                                setSelectedJobCategories={setSelectedJobCategories}
                                setIsJobCategoriesFilterFocused={setIsJobCategoryFilterFocused}/>
                        )}
                        {isDetailedConditionFilterFocused && (
                            <DetailOptionFilter
                                selectedGender={selectedGender}
                                setSelectedGender={setSelectedGender}
                                setSelectedSalaryTypeList={setSelectedSalaryTypeList}
                                selectedSalaryTypeList={selectedSalaryTypeList}
                                setIsDetailedConditionFilterFocused={setIsDetailedConditionFilterFocused}/>
                        )}
                    </div>
                    <div className={"grid grid-cols-3 gap-6 mt-[24px]"}>
                        <PremiumCard/>
                        <PremiumCard/>
                        <PremiumCard/>
                        <PremiumCard/>
                        <PremiumCard/>
                        <PremiumCard/>
                        <PremiumCard/>
                        <PremiumCard/>
                        <PremiumCard/>
                    </div>
                    <div></div>
                </section>

            </main>
            <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} className={"my-32"} totalPageNumber={5}/>
            <Footer/>
        </div>
    )
}
export default PremiumPage
