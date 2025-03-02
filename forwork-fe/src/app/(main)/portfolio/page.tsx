"use client";

import NavBar from "@/src/components/common/NavBar";
import Footer from "@/src/components/common/Footer";
import RatingReviewBox from "@/src/components/portfolio/RatingReviewBox";
import Pagination from "@/src/components/common/Pagination";
import {useEffect, useState} from "react";
import Button from "@/src/components/common/Button";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import useFilter from "@/src/hooks/useFilter";
import useBasicPortfolios from "@/src/lib/hooks/useBasicPortfolios";
import useApplyPortfolios from "@/src/lib/hooks/useApplyPortfolios";
import BusinessFieldFilter from "@/src/components/portfolio/BusinessFieldFilter";
import {JobCategoryType} from "@/src/types/register";
import {useAtom} from "jotai";
import {portfolioTypeAtom} from "@/src/store/portpolio/atom";

const PortfolioPage = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [selectedContent, setSelectedContent, isFocused, setIsFocused] = useFilter("업종별");
    const [type, setType] = useAtom(portfolioTypeAtom);
    const [selectedJobCategories, setSelectedJobCategories] = useState<JobCategoryType[]>([]);

    const {basicPortfolioData} = useBasicPortfolios(pageNumber, 9)
    const {applyPortfolioData} = useApplyPortfolios(pageNumber, 9, selectedJobCategories)

    useEffect(() => {
        console.log("portfolioData", basicPortfolioData)
    }, [basicPortfolioData])

    useEffect(() => {
        console.log("portfolioData", applyPortfolioData)
    }, [applyPortfolioData])

    return (
        <div>
            <NavBar/>
            <div className={"h-60"} />
            <main className={"px-[360px]"}>
                <section>
                    <header className={"flex flex-col gap-y-6"}>
                        <h1 className={"title-lg"}>포트폴리오</h1>
                        <div className={"flex flex-col gap-y-2"}>
                            <section className={"flex justify-between items-center"}>
                                <div className={"flex items-center justify-center gap-x-2"}>
                                    <Button
                                        onClick={() => {
                                            setType("basic");
                                        }}
                                        className={type === "basic" ? "border-main-button" : "border-gray2-button"}
                                        secondClassName={"flex justify-center items-center w-[85px] h-[36px] button-md"}>
                                        기본
                                    </Button>
                                    <Button
                                        onClick={() => {
                                            setType("apply");
                                        }}
                                        className={type === "apply" ? "border-main-button" : "border-gray2-button"}
                                        secondClassName={"flex justify-center items-center w-[85px] h-[36px]"}>
                                        실제 지원
                                    </Button>
                                </div>
                                {type === "apply" && (
                                    <SelectedFilterContent
                                        selectedContent={selectedContent}
                                        className={"w-fit h-[45px] border-gray2"}
                                        textStyle={"button-md placeholder:text-gray4"}
                                        setIsFocused={setIsFocused}/>
                                )}
                            </section>
                            {type === "apply" && (
                                <div>
                                    {isFocused && (
                                        <BusinessFieldFilter
                                            isJobCategoriesFilterFocused={isFocused}
                                            jobCategoriesSelectedContent={selectedContent}
                                            setJobCategoriesSelectedContent={setSelectedContent}
                                            selectedJobCategories={selectedJobCategories}
                                            setSelectedJobCategories={setSelectedJobCategories}
                                            setIsJobCategoriesFilterFocused={setIsFocused}/>
                                    )}
                                </div>
                            )}
                        </div>
                    </header>
                </section>
                {type === "basic" ? (
                    <section className={"grid grid-cols-3 gap-x-4 gap-y-5 mt-[32px]"}>
                        {basicPortfolioData && basicPortfolioData.data?.content.map((portfolio) => {
                            return (
                                <RatingReviewBox key={portfolio.employeeId} {...portfolio}/>
                            )
                        })}
                    </section>
                ) : (
                    <section className={"grid grid-cols-3 gap-x-4 gap-y-5 mt-[32px]"}>
                        {applyPortfolioData && applyPortfolioData.data?.content.map((portfolio) => {
                            return (
                                <RatingReviewBox key={portfolio.resumeId} type={"apply"} {...portfolio}/>
                            )
                        })}
                    </section>
                )}
            </main>
            {type === "basic" ? (
                <Pagination className={"pt-[56px] pb-[132px]"} totalPageNumber={basicPortfolioData?.data?.totalPages}
                            setPageNumber={setPageNumber}
                            pageNumber={pageNumber}/>
            ) : (
                <Pagination className={"pt-[56px] pb-[132px]"} totalPageNumber={applyPortfolioData?.data?.totalPages}
                            setPageNumber={setPageNumber}
                            pageNumber={pageNumber}/>
            )}
            <Footer/>
        </div>
    )
}
export default PortfolioPage;
