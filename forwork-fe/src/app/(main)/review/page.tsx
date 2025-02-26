"use client";

import Footer from "@/src/components/common/Footer";
import Input from "@/src/components/common/Input";
import NavBar from "@/src/components/common/NavBar";
import Post from "@/src/components/review/Post";
import SearchIcon from "@/src/assets/common/SearchIcon";
import {useEffect, useState} from "react";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import useFilter from "@/src/hooks/useFilter";
import Filter from "@/src/components/common/Filter";
import {SortContentType} from "@/src/types/review";
import {sortContents, sortContentToEnum} from "@/src/utils/review";
import Button from "@/src/components/common/Button";
import Pagination from "@/src/components/common/Pagination";
import {useRouter} from "next/navigation";
import useReview from "@/src/lib/hooks/useReview";

const ReviewPage = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const [sortContent, setSortContent, isSortFilterFocused, setIsSortFilterFocused] = useFilter<SortContentType>("날짜순");
    const {reviewData} = useReview(pageNumber, sortContentToEnum(sortContent))
    const router = useRouter();
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        console.log("reviewData", reviewData)
    }, [reviewData]);

    // 정렬 필터 내용
    const sortFilterContents = () => (
        <div>
            {sortContents.map((sortContent) => {
                return (
                    <Button
                        onClick={() => {
                            setSortContent(sortContent);
                            setIsSortFilterFocused(false);
                        }}
                        key={sortContent}
                        className="w-full py-[20px] px-4 body-sm hover:bg-gray1">
                        {sortContent}
                    </Button>
                )
            })}
        </div>
    );

    if (!reviewData) return ;

    return (
      <div>
          <NavBar/>
          <div className="h-60"/>
          <main className={"px-[360px]"}>
              <header className={"flex flex-col gap-y-4"}>
                  <div className={"flex justify-between"}>
                      <h1 className={"title-lg"}>알바 이야기</h1>
                      <div className={"subtitle-lg"}>총 <span className={"text-main"}>34,231</span> 건</div>
                  </div>
                  <div className={"flex justify-between"}>
                      <div className={"flex gap-x-2"}>
                          <Input
                              inputValue={searchValue}
                              setInputValue={setSearchValue}
                              placeholder={"본문 + 제목을 검색해주세요"}
                              leftElement={() => <SearchIcon fill="#999BA5"/>}
                              className={"py-3 border-gray3 w-[344px]"}/>
                          <div className={"relative"}>
                              <SelectedFilterContent
                                  selectedContent={sortContent}
                                  className={"py-3 w-fit border-gray3"}
                                  textStyle={"button-md text-gray4"}
                                  isFocused={isSortFilterFocused}
                                  setIsFocused={setIsSortFilterFocused}/>
                              {isSortFilterFocused && <Filter filterContents={sortFilterContents}
                                                              className={"absolute bg-white h-fit w-full z-10"}/>}
                          </div>
                      </div>
                      <Button
                          onClick={() => {
                              router.push("/review/write")
                          }}
                          className={"bg-main-button"}
                          secondClassName={"flex justify-center w-[120px] py-[13.5px]"}>글쓰기</Button>
                  </div>
              </header>

              <section className={"grid grid-cols-2 gap-6 mt-4"}>
                  {reviewData.data?.content.map((reviewContent) => (
                      <Post key={reviewContent.id} {...reviewContent} />
                  ))}
              </section>

              <Pagination className={"mt-[65px] mb-[115px]"} pageNumber={pageNumber} setPageNumber={setPageNumber}
                          totalPageNumber={reviewData.data?.totalPages}/>
          </main>
          <Footer/>
      </div>
    );
};
export default ReviewPage;
