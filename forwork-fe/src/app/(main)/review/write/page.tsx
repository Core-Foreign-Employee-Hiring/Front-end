"use client";

import * as React from "react";

import Input from "@/src/components/common/Input";
import NavBar from "@/src/components/common/NavBar";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import Button from "@/src/components/common/Button";
import Filter from "@/src/components/common/Filter";
import useReviewForm from "@/src/hooks/useReviewForm";

const ReviewWrite = () => {
    const {
        title,
        setTitle,
        setContent,
        businessField,
        isBusinessFieldFilterContentFocused,
        setIsBusinessFieldFilterContentFocused,
        province,
        isProvinceFilterContentFocused,
        setIsProvinceFilterContentFocused,
        district,
        isDistrictFilterContentFocused,
        setIsDistrictFilterContentFocused,
        businessFieldFilterContents,
        provinceFilterContents,
        districtFilterContents,
        handleSubmit,
    } = useReviewForm();

    return (
        <main>
            <NavBar/>
            <div className="h-[157px]"/>
            <div className={"flex flex-col gap-y-8 mt-[80px] px-[320px]"}>
                <h1 className={"title-lg"}>알바 이야기 작성</h1>
                {/* 가게위치 */}
                {/*TODO: 변경해야함.*/}
                <section className={"flex gap-x-[138px] items-center"}>
                    <div className={"title-md w-fit"}>가게 위치<span className={"text-main"}>*</span></div>
                    <div className={"flex gap-x-6"}>
                        <div className={"flex flex-col gap-y-3"}>
                            <SelectedFilterContent setIsFocused={setIsProvinceFilterContentFocused}
                                                   selectedContent={province}
                                                   className={"border-gray2 py-3 px-4 w-[266px]"}/>
                            {isProvinceFilterContentFocused && <Filter filterContents={provinceFilterContents}/>}
                        </div>
                        <div className={"flex flex-col gap-y-3"}>
                            <SelectedFilterContent setIsFocused={setIsDistrictFilterContentFocused}
                                                   selectedContent={district}
                                                   className={"border-gray2 py-3 px-4 w-[266px]"}/>
                            {isDistrictFilterContentFocused && <Filter filterContents={districtFilterContents}/>}
                        </div>
                    </div>
                </section>
                {/* 업직종 */}
                <section className={"flex gap-x-[158px] items-center"}>
                    <div className={"title-md w-fit"}>업직종<span className={"text-main"}>*</span></div>
                    <div className={"flex flex-col gap-y-3"}>
                        <SelectedFilterContent
                            className={"border-gray2 py-3 px-4 w-[266px]"}
                            selectedContent={businessField}
                            placeholder={"선택"}
                            isFocused={isBusinessFieldFilterContentFocused}
                            setIsFocused={setIsBusinessFieldFilterContentFocused}/>
                        {isBusinessFieldFilterContentFocused ? (
                            <Filter className={"border-gray2"} filterContents={businessFieldFilterContents}/>) : null}
                    </div>
                </section>
                {/* 제목 */}
                <section className={"flex gap-x-[158px] items-center"}>
                    <div className={"title-md w-[84px]"}>제목<span className={"text-main"}>*</span></div>
                    <Input inputValue={title} setInputValue={setTitle} className={"w-full border-gray2"}
                           placeholder={"제목을 입력해주세요."}/>
                </section>
                {/* 내용 */}
                <section className={"flex gap-x-[158px] items-start"}>
                    <div className={"title-md w-[84px]"}>내용<span className={"text-main"}>*</span></div>
                    <div
                        className={"flex flex-col items-end border border-gray2 rounded-[16px] body-md w-full h-[420px] p-4"}>
                        <textarea
                            onChange={(e) => {
                                setContent(e.target.value)
                            }}
                            placeholder={"내용을 입력해주세요."}
                            className={"w-full h-full outline-none subtitle-lg"}/>
                        <div className={"badge-lg text-gray3"}>0/5000</div>
                    </div>
                </section>
                {/* 버튼 */}
                <section className={"flex justify-between"}>
                    <Button className={"border-gray2-button"}
                            secondClassName={"flex justify-center w-[200px]"}>이전</Button>
                    <div className={"flex gap-x-3"}>
                        <Button
                            onClick={() => {
                                handleSubmit()
                            }}
                            className={"border-gray2-button w-[200px]"}
                            secondClassName={"flex justify-center w-[200px]"}>저장</Button>
                        <Button className={"bg-gray2-button w-[200px]"}
                                secondClassName={"flex justify-center w-[200px]"}>다음</Button>
                    </div>
                </section>
            </div>
        </main>
    )
}
export default ReviewWrite;
