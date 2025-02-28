"use client";

import NavBar from "@/src/components/common/NavBar";
import RatingReviewBox from "@/src/components/portfolio/RatingReviewBox";
import Footer from "@/src/components/common/Footer";
import Pagination from "@/src/components/common/Pagination";
import Filter from "@/src/components/common/Filter";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import Button from "@/src/components/common/Button";
import {useState} from "react";
import useFilter from "@/src/hooks/useFilter";

const RecommendPage = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [selectedContent, setSelectedContent, isFocused, setIsFocused] = useFilter("업종별");
    return (
        <div>
            <NavBar/>
            <div className={"h-60"}/>
            <main className={"px-[360px]"}>
                <header className={"flex justify-between items-center"}>
                    <h1 className={"title-lg"}>추천 받은 인재</h1>
                    <Button className={"bg-main-button"} secondClassName={"px-4 h-fit"}>인재 추천받기</Button>
                </header>
                <section className={"grid grid-cols-3 gap-x-4 gap-y-5 mt-[32px]"}>
                    <RatingReviewBox/>
                    <RatingReviewBox/>
                    <RatingReviewBox/>
                    <RatingReviewBox/>
                    <RatingReviewBox/>
                    <RatingReviewBox/>
                    <RatingReviewBox/>
                    <RatingReviewBox/>
                    <RatingReviewBox/>
                </section>
            </main>

            <Pagination className={"pt-[56px] pb-[132px]"} totalPageNumber={5} setPageNumber={setPageNumber}
                        pageNumber={pageNumber}/>
            <Footer/>
        </div>
    )
}
export default RecommendPage;
