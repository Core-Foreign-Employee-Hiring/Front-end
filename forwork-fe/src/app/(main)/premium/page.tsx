"use client";

import NavBar from "@/src/components/common/NavBar";
import Pagination from "@/src/components/common/Pagination";
import {useEffect, useState} from "react";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import BusinessFieldFilter from "@/src/components/portfolio/BusinessFieldFilter";
import useFilter from "@/src/hooks/useFilter";
import {JobCategoryType, WorkDaysType, WorkDurationType, WorkTimeType} from "@/src/types/register";
import PremiumCard from "@/src/components/home/PremiumCard";
import Footer from "@/src/components/common/Footer";

const PremiumPage = () => {
    const [pageNumber, setPageNumber] = useState(0);
    {/*업직종*/}
    const [selectedJobCategories, setSelectedJobCategories] = useState<JobCategoryType[]>([]);
    const [selectedJobCategoryContent, setSelectedJobCategoryContent, isJobCategoryFilterFocused, setIsJobCategoryFilterFocused] = useFilter("업직종");
    {/*근무기간*/}
    const [selectedWorkDurations, setSelectedWorkDurations] = useState<WorkDurationType[]>([]);
    const [selectedWorkTimes, setSelectedWorkTimes] = useState<WorkTimeType[]>([]);
    // const [selectedWorkDays, setSelectedWorkDays] = useState<WorkDaysType[]>([]);
    const [selectedWorkDurationContent, setSelectedWorkDurationContent, isWorkDurationFilterFocused, setIsWorkDurationFilterFocused] = useFilter("근무기간");
    {/*상세조건*/}
    // const [selectedWorkDays, setSelectedWorkDays] = useState<WorkDaysType[]>([]);

    const [selectedDetailedConditionContent, setSelectedDetailedConditionContent, isDetailedConditionFilterFocused, setIsDetailedConditionFilterFocused] = useFilter("상세조건");

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
                            <div className={"flex flex-col"}>
                                <SelectedFilterContent
                                    selectedContent={selectedJobCategoryContent}
                                    className={"w-fit h-[45px] border-gray2"}
                                    textStyle={"button-md placeholder:text-gray4"}
                                    setIsFocused={setIsJobCategoryFilterFocused}/>
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
                            <div>
                                <SelectedFilterContent
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
                                jobCategoriesSelectedContent={selectedJobCategoryContent}
                                setJobCategoriesSelectedContent={setSelectedJobCategoryContent}
                                selectedJobCategories={selectedJobCategories}
                                setSelectedJobCategories={setSelectedJobCategories}
                                setIsJobCategoriesFilterFocused={setIsJobCategoryFilterFocused}/>
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
