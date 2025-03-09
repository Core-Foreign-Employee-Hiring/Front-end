"use client";

import NavBar from "@/src/components/common/NavBar";
import Image from "next/image";
import ArrowForwardIcon from "@/src/assets/common/ArrowForwardIcon";
import StarIcon from "@/src/assets/home/StarIcon";
import Button from "@/src/components/common/Button";
import PremiumCard from "@/src/components/home/PremiumCard";
import LOGOIcon from "@/src/assets/common/LOGOIcon";
import GeneralCard from "@/src/components/home/GeneralCard";
import ReviewCard from "@/src/components/home/ReviewCard";
import Footer from "@/src/components/common/Footer";
import {useEffect, useState} from "react";

const MainPage = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div>
            {isClient && (
                <main>
                    <NavBar/>
                    <div className={"h-[158px]"}/>
                    {/* 서비스 소개*/}
                    <section
                        className={"flex flex-col justify-center items-center gap-y-6 px-[264px] mt-[32px] mb-[56px]"}>
                        <div className={"flex gap-x-[7px] p-3 rounded-[16px] bg-gray1 subtitle-md w-fit items-center"}>
                            <Image src={"/image 55.png"} width={33} height={33} alt={"/image 55.png"}/>
                            <span>이력서와 포트폴리오를 등록하고 <span className={"text-[#1c6cff]"}>시급 UP!</span></span>
                            <div className={"flex items-center w-[20px] h-[20px]"}>
                                <ArrowForwardIcon/>
                            </div>
                        </div>
                        <div className={"flex justify-center items-center bg-gray3 rounded-[16px] w-full h-[160px]"}>서비스
                            소개
                            배너
                        </div>
                    </section>
                    {/* 프리미엄 공고 */}
                    <section className={"flex flex-col gap-y-4 bg-gray1 px-[264px] pt-[56px] pb-[63px]"}>
                        <div className={"flex justify-between items-center"}>
                            <div className={"flex items-center gap-x-1"}>
                                <div className={"flex w-[28px] h-[28px] items-center"}>
                                    <StarIcon/>
                                </div>
                                <div className={"title-lg"}>프리미엄 공고</div>
                            </div>
                            <Button className={"text-gray5 button-md"}>더보기</Button>
                        </div>
                        <div className={"grid grid-cols-3 gap-6"}>
                            {/*<PremiumCard/>*/}
                            {/*<PremiumCard/>*/}
                            {/*<PremiumCard/>*/}
                            {/*<PremiumCard/>*/}
                            {/*<PremiumCard/>*/}
                            {/*<PremiumCard/>*/}
                        </div>
                    </section>

                    {/* 일반 상단공고 */}
                    <section className={"flex flex-col gap-y-4 px-[264px] pt-[96.86px]"}>
                        <div className={"flex justify-between items-center"}>
                            <div className={"flex items-start gap-x-1"}>
                                <LOGOIcon width={110} height={29}/>
                                <div className={"title-lg"}>추천 공고</div>
                            </div>
                            <Button className={"text-gray5 button-md"}>더보기</Button>
                        </div>
                        <div className={"grid grid-cols-4 gap-6"}>
                            <GeneralCard/>
                            <GeneralCard/>
                            <GeneralCard/>
                            <GeneralCard/>
                            <GeneralCard/>
                            <GeneralCard/>
                            <GeneralCard/>
                            <GeneralCard/>
                        </div>
                    </section>

                    {/* 알바 후기 */}
                    <section className={"flex flex-col gap-y-4 px-[264px] pt-[96.86px] pb-[74.28px]"}>
                        <div className={"flex justify-between items-center"}>
                            <div className={"title-lg"}>알바 리뷰</div>
                            <Button className={"text-gray5 button-md"}>더보기</Button>
                        </div>
                        <div className={"grid grid-cols-4 gap-6"}>
                            <ReviewCard/>
                            <ReviewCard/>
                            <ReviewCard/>
                            <ReviewCard/>
                        </div>
                    </section>

                    <Footer/>
                </main>
            )}

        </div>
    );
}
export default MainPage;
