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
    SalaryType, TimeType, WeekDaysType,
    WorkDaysType,
    WorkDurationType,
    WorkTimeType
} from "@/src/types/register";
import PremiumCard from "@/src/components/home/PremiumCard";
import Footer from "@/src/components/common/Footer";
import DetailOptionFilter from "@/src/components/common/DetailOptionFilter";
import WorkDurationFilter from "@/src/components/common/WorkDurationFilter";
import useRecruitPremiumSearch from "@/src/lib/hooks/useRecruitPremiumSearch";
import Star1Icon from "@/src/assets/premium/Star1Icon";

const PremiumPage = () => {
    const [isClient, setIsClient] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
    {/*업직종*/}
    const [selectedJobCategories, setSelectedJobCategories] = useState<JobCategoryType[]>([]);
    const [selectedJobCategoryContent, setSelectedJobCategoryContent, isJobCategoryFilterFocused, setIsJobCategoryFilterFocused] = useFilter("업직종");
    const jobCategoryCountElement = () => {
        return (
            selectedJobCategories.length !== 0 && (
                <div
                    className={"flex justify-center items-center w-[20px] h-[20px] rounded-full badge-sm bg-main text-white"}>{selectedJobCategories.length}</div>
            )
        )
    }
    {/*근무기간*/}
    const [workDuration, setWorkDuration] = useState<WorkDurationType>("");
    const [workDurations, setWorkDurations] = useState<WorkDurationType[]>([]);
    //근무 시간
    const [workTimes, setWorkTimes] = useState<WorkTimeType[]>([]);
    const [startTime, setStartTime] = useState<TimeType>("시작시간");
    const [endTime, setEndTime] = useState<TimeType>("종료시간");
    const [workTimeSelectList, setWorkTimeSelectList] = useState<boolean>(false); //목록 선택
    const [workTimeDirectList, setWorkTimeDirectList] = useState<boolean>(true); //직접 선택
    //근무 요일 선택
    const [workDays, setWorkDays] = useState<WorkDaysType[]>([]); //목록선택 항목
    const [workWeekDays, setWorkWeekDays] = useState<WeekDaysType[]>([]); //직접선택 항목
    const [workDaysSelectList, setWorkDaysSelectList] = useState<boolean>(false); //목록 선택
    const [workDaysDirectList, setWorkDaysDirectList] = useState<boolean>(true); //직접 선택
    const [selectedWorkDurationContent, setSelectedWorkDurationContent, isWorkDurationFilterFocused, setIsWorkDurationFilterFocused] = useFilter("근무기간");
    const workDurationCountElement = () => {
        return (
            (workDurations.length + workTimes.length + workDays.length + workWeekDays.length + ((startTime !== "시작시간" && endTime !== "종료시간") ? 1 : 0) !== 0) && (
                <div
                    className={"flex justify-center items-center w-[20px] h-[20px] rounded-full badge-sm bg-main text-white"}>
                    {workDurations.length + workTimes.length + workDays.length + workWeekDays.length + ((startTime !== "시작시간" && endTime !== "종료시간") ? 1 : 0)}
                </div>
            )
        )
    }
    {/*상세조건*/}
    const [selectedSalaryTypeList, setSelectedSalaryTypeList] = useState<SalaryType[]>([])
    const [selectedGender, setSelectedGender] = useState<GenderEnumType>("")
    const [selectedDetailedConditionContent, setSelectedDetailedConditionContent, isDetailedConditionFilterFocused, setIsDetailedConditionFilterFocused] = useFilter("상세조건");
    const detailOptionCountElement = () => {
        return (
            ((selectedSalaryTypeList.length + (selectedGender !== "" ? 1 : 0 ))!== 0) && (
                <div className={"flex justify-center items-center w-[20px] h-[20px] rounded-full badge-sm bg-main text-white"}>{selectedSalaryTypeList.length + (selectedGender !== "" ? 1 : 0)}</div>
            )
        )
    }

    const {premiumRecruitData} = useRecruitPremiumSearch(pageNumber, selectedJobCategories, workDurations, workDays, workWeekDays, workTimes, startTime, endTime);


    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        console.log("premiumRecruitData", premiumRecruitData)
    }, [premiumRecruitData])

    return (
        isClient && (
            <div>
                <NavBar/>
                <div className={"h-48"}/>
                <main className={"px-[360px]"}>
                    <h1 className={"flex gap-x-1 title-lg items-center"}>
                        <div className={"flex justify-center items-center w-[28px] h-[28px]"}>
                            <Star1Icon />
                        </div>
                        프리미엄 채용공고
                    </h1>
                    {/* 필터 */}
                    <section className={"mt-[16px]"}>
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
                                {/*근무 기간*/}
                                <div>
                                    <SelectedFilterContent
                                        element={workDurationCountElement}
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
                            {isWorkDurationFilterFocused && (
                                <WorkDurationFilter
                                    setIsWorkDurationFilterFocused={setIsWorkDurationFilterFocused}
                                    //근무요일
                                    workDays={workDays}
                                    setWorkDays={setWorkDays}
                                    workWeekDays={workWeekDays}
                                    setWorkWeekDays={setWorkWeekDays}
                                    workDaysSelectList={workDaysSelectList}
                                    setWorkDaysSelectList={setWorkDaysSelectList}
                                    workDaysDirectList={workDaysDirectList}
                                    setWorkDaysDirectList={setWorkDaysDirectList}
                                    //근무 시간
                                    workTimes={workTimes}
                                    setWorkTimes={setWorkTimes}
                                    startTime={startTime}
                                    setStartTime={setStartTime}
                                    endTime={endTime}
                                    setEndTime={setEndTime}
                                    workTimeSelectList={workTimeSelectList}
                                    workTimeDirectList={workTimeDirectList}
                                    setWorkTimeDirectList={setWorkTimeDirectList}
                                    setWorkTimeSelectList={setWorkTimeSelectList}
                                    //근무 기간
                                    setWorkDurations={setWorkDurations}
                                    workDurations={workDurations}
                                    workDuration={workDuration}
                                    setWorkDuration={setWorkDuration}/>
                            )}
                        </div>
                        <div className={"grid grid-cols-3 gap-6 mt-[24px]"}>
                            {premiumRecruitData && premiumRecruitData.data?.content.map((premiumRecruit) => {
                                return (
                                    <PremiumCard key={premiumRecruit.recruitId} {...premiumRecruit} />
                                )
                            })}
                        </div>
                    </section>
                </main>
                <Pagination setPageNumber={setPageNumber} pageNumber={pageNumber} className={"my-32"}
                            totalPageNumber={premiumRecruitData && premiumRecruitData.data?.totalPages}/>
                <Footer/>
            </div>
        )
    )
}
export default PremiumPage
