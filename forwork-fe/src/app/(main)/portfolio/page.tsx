"use client";

import NavBar from "@/src/components/common/NavBar";
import Footer from "@/src/components/common/Footer";
import RatingReviewBox from "@/src/components/portfolio/RatingReviewBox";
import Pagination from "@/src/components/common/Pagination";
import {useState} from "react";
import Button from "@/src/components/common/Button";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import useFilter from "@/src/hooks/useFilter";
import Filter from "@/src/components/common/Filter";

const PortfolioPage = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [selectedContent, setSelectedContent, isFocused, setIsFocused] = useFilter("업종별");

    return (
        <div>
            <NavBar/>
            <div className={"h-60"} />
            <main className={"px-[360px]"}>
                <section>
                    <header className={"flex flex-col gap-y-6"}>
                        <h1 className={"title-lg"}>포트폴리오</h1>
                        <div className={"flex flex-col gap-y-2"}>
                            <div className={"flex justify-between items-center"}>
                                <div className={"flex items-center justify-center gap-x-2"}>
                                    <Button className={"border-gray2-button"}
                                            secondClassName={"flex justify-center items-center w-[80px] h-[36px] button-md"}>기본</Button>
                                    <Button className={"border-main-button"}
                                            secondClassName={"flex justify-center items-center w-[80px] h-[36px]"}>실제
                                        지원</Button>
                                </div>
                                <SelectedFilterContent
                                    selectedContent={selectedContent}
                                    className={"w-[235px] h-[45px] border-gray2"}
                                    textStyle={"button-md placeholder:text-gray4"}
                                    setIsFocused={setIsFocused}/>
                            </div>
                            {isFocused && (<Filter type={"BusinessField"}/>)}
                        </div>
                    </header>
                </section>
                <div className={"grid grid-cols-3 gap-x-4 gap-y-5 mt-[32px]"}>
                    <RatingReviewBox type={"apply"}/>
                    <RatingReviewBox type={"apply"}/>
                    <RatingReviewBox type={"apply"}/>
                    <RatingReviewBox type={"apply"}/>
                    <RatingReviewBox type={"apply"}/>
                    <RatingReviewBox type={"apply"}/>
                    <RatingReviewBox type={"apply"}/>
                    <RatingReviewBox type={"apply"}/>
                    <RatingReviewBox type={"apply"}/>
                </div>
            </main>

            <Pagination className={"pt-[56px] pb-[132px]"} totalPageNumber={5} setPageNumber={setPageNumber}
                        pageNumber={pageNumber}/>
            <Footer/>
        </div>
    )
}
export default PortfolioPage;
