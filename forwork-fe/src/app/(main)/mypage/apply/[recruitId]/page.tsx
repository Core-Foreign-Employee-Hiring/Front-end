'use client'

import NavBar from "@/src/components/common/NavBar";
import SummaryAd from "@/src/components/common/SummaryAd";
import Pagination from "@/src/components/common/Pagination";
import {useEffect, useState} from "react";
import ApplicationUserProfile from "@/src/components/mypage/employer/ApplicationUserProfile";
import useResumes from "@/src/lib/hooks/useResumes";
import {useParams} from "next/navigation";
import {
    ContractStatusContentType,
    ContractStatusType,
    RecruitmentStatusContentType,
    RecruitmentStatusType
} from "@/src/types/mypage";
import Input from "@/src/components/common/Input";
import SearchIcon from "@/src/assets/common/SearchIcon";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import useFilter from "@/src/hooks/useFilter";
import Filter from "@/src/components/common/Filter";
import {portfolioContents} from "@/src/utils/register";
import {
    contractStatusContents,
    recruitmentStatusContents,
    switchContractStatusToEnum,
    switchRecruitmentStatusToEnum
} from "@/src/utils/mypage";

const ApplyDetailPage = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [selectedRecruitmentStatusContent, setSelectedRecruitmentStatusContent, isRecruitmentStatusFilterFocused, setIsRecruitmentStatusFilterFocused] = useFilter<RecruitmentStatusContentType>("전체");
    const [selectedContractStatusContent, setSelectedContractStatusContent, isContractStatusFilterFocused, setIsContractStatusFilterFocused] = useFilter<ContractStatusContentType>("전체");

    const params = useParams();

    useEffect(() => {
        console.log("params", params.recruitId);
    }, [params])


    const recruitmentStatusFilterContents = () => {
        return (
            <div>
                {recruitmentStatusContents.map((content) => {
                    return (
                        <button
                            onClick={() => {
                                setSelectedRecruitmentStatusContent(content);
                                setIsRecruitmentStatusFilterFocused(false);
                            }}
                            key={content}
                            className="w-full py-[20px] px-4 body-sm hover:bg-gray1"
                        >
                            {content}
                        </button>
                    )
                })}
            </div>)
    }

    const contractStatusFilterContents = () => {
        return (
            <div>
                {contractStatusContents.map((content) => {
                    return (
                        <button
                            onClick={() => {
                                setSelectedContractStatusContent(content);
                                setIsContractStatusFilterFocused(false);
                            }}
                            key={content}
                            className="w-full py-[20px] px-4 body-sm hover:bg-gray1"
                        >
                            {content}
                        </button>
                    )
                })}
            </div>)
    }

    // const {resumeData} = useResumes(params.recruitId, inputValue, switchRecruitmentStatusToEnum(selectedRecruitmentStatusContent), switchContractStatusToEnum(selectedContractStatusContent), pageNumber, 4);
    //
    // useEffect(() => {
    //     console.log("resumeData", resumeData);
    // }, [resumeData])

    return (
        <div>
            <NavBar/>
            <div className={"h-60"}/>
            <main className={"px-[360px]"}>
                <SummaryAd />
                <section className={"flex justify-between mt-[40px] mb-[16px]"}>
                    <div className={"flex justify-between w-full"}>
                        <Input setInputValue={setInputValue} inputValue={inputValue}
                               leftElement={() => <SearchIcon fill={"#C5C6CD"}/>} placeholder={"이름, 연락처 검색"}
                               className={"w-[200px]"}></Input>
                        <div className={"flex gap-x-3"}>
                            <div className={"relative w-fit"}>
                                <SelectedFilterContent selectedContent={selectedRecruitmentStatusContent}
                                                       setIsFocused={setIsRecruitmentStatusFilterFocused}
                                                       className={"w-fit py-3"}/>
                                {isRecruitmentStatusFilterFocused && (
                                    <Filter className={"absolute w-fit h-fit"}
                                            filterContents={recruitmentStatusFilterContents}/>
                                )}
                            </div>
                            {selectedRecruitmentStatusContent === "승인" && (
                                <div className={"relative w-fit"}>
                                    <SelectedFilterContent selectedContent={selectedContractStatusContent}
                                                           setIsFocused={setIsContractStatusFilterFocused}
                                                           className={"w-fit py-3"}/>
                                    {isContractStatusFilterFocused && (
                                        <Filter className={"absolute w-fit h-fit"}
                                                filterContents={contractStatusFilterContents}/>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                </section>
                <section className={"flex flex-col gap-y-4"}>
                    <ApplicationUserProfile/>
                    <ApplicationUserProfile/>
                    <ApplicationUserProfile/>
                    <ApplicationUserProfile/>
                </section>
            </main>
            <Pagination className={"mt-[80px]"} totalPageNumber={5} setPageNumber={setPageNumber}
                        pageNumber={pageNumber}/>
        </div>
    )
}
export default ApplyDetailPage
