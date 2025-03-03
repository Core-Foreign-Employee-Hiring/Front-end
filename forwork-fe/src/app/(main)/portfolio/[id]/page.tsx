"use client";

import {useParams} from "next/navigation";
import {useMemo} from "react";
import {useAtomValue} from "jotai";

import useBasicPortfolioDetail from "@/src/lib/hooks/useBasicPortfolioDetail";
import NavBar from "@/src/components/common/NavBar";
import ViewIcon from "@/src/assets/review/ViewIcon";
import EmployeeInfo from "@/src/components/portfolio/EmployeeInfo";
import CareerInfo from "@/src/components/portfolio/CareerInfo";
import Evaluation from "@/src/components/portfolio/Evaluation";
import useApplyPortfolioDetail from "@/src/lib/hooks/useApplyPortfolioDetail";
import Button from "@/src/components/common/Button";
import LikeIcon from "@/src/assets/portfolio/LikeIcon";
import Footer from "@/src/components/common/Footer";
import {portfolioTypeAtom} from "@/src/store/portpolio/atom";
import {likePortfolioBasicPost, likePortfolioApplyPost} from "@/src/lib/api/portfolio";
import PortfolioFormInfo from "@/src/components/portfolio/PortfolioFormInfo";
import FullLikeIcon from "@/src/assets/portfolio/FullLikeIcon";

const PortfolioDetailPage = () => {
    const params = useParams();
    const type = useAtomValue(portfolioTypeAtom);
    // ✅ Correct way: Call Hooks conditionally at the top level
    const basicPortfolioDetail = type === "basic" ? useBasicPortfolioDetail(params.id) : null;
    const applyPortfolioDetail = type === "apply" ? useApplyPortfolioDetail(params.id) : null;

    // Extracting data safely
    const portfolioData = type === "basic" ? basicPortfolioDetail?.basicPortfolioDetailData?.data : applyPortfolioDetail?.applyPortfolioDetailData?.data;

    // Mutate function (refresh data)
    const mutatePortfolioData = type === "basic"
        ? basicPortfolioDetail?.basicPortfolioDetailDataMutate
        : applyPortfolioDetail?.applyPortfolioDetailDataMutate;

    return (
        <div>
            <NavBar />
            <div className={"h-60"}></div>
            <main className={"flex flex-col gap-y-[36px] px-[360px]"}>
                <header className={"flex items-center justify-between"}>
                    <h1 className={"title-lg"}>{portfolioData?.name}의 포트폴리오</h1>
                    <div className={"flex items-center"}>
                        <div className={"flex justify-center items-center w-[32px] h-[32px]"}>
                            <ViewIcon size={18} fill={"#6F717C"}/>
                        </div>
                        <span className={"badge-sm text-gray4 px-1"}>{portfolioData?.viewCount}</span>
                    </div>
                </header>

                <EmployeeInfo
                    name={portfolioData?.name}
                    birthday={portfolioData?.birthday}
                    education={portfolioData?.education}
                    email={portfolioData?.email}
                    nationality={portfolioData?.nationality}
                    visa={portfolioData?.visa}/>

                {portfolioData?.employeePortfolioDTO && (
                    <CareerInfo {...portfolioData.employeePortfolioDTO}/>
                )}

                {!portfolioData?.employeeEvaluationCountDTO ? null : (
                    <Evaluation
                        name={portfolioData?.name}
                        noLatenessOrAbsence={portfolioData?.employeeEvaluationCountDTO?.noLatenessOrAbsence ?? 0}
                        politeAndFriendly={portfolioData?.employeeEvaluationCountDTO?.politeAndFriendly ?? 0}
                        goodCustomerService={portfolioData?.employeeEvaluationCountDTO?.goodCustomerService ?? 0}
                        skilledAtWork={portfolioData?.employeeEvaluationCountDTO?.skilledAtWork ?? 0}
                        joinCount={portfolioData?.employeeEvaluationCountDTO?.joinCount ?? 0}
                        worksDiligently={portfolioData?.employeeEvaluationCountDTO?.worksDiligently ?? 0}
                    />
                )}

                <PortfolioFormInfo texts={applyPortfolioDetail?.applyPortfolioDetailData?.data?.texts} files={applyPortfolioDetail?.applyPortfolioDetailData?.data?.files}/>

                {portfolioData?.liked ? (
                    <Button
                        className={"border-main-bg-white-button"}
                        secondClassName={"flex items-center justify-center gap-x-2 mb-[200px]"}
                        onClick={() => {
                            type === "basic" ? likePortfolioBasicPost(params.id).then(mutatePortfolioData) : likePortfolioApplyPost(params.id).then(mutatePortfolioData)
                        }}>

                        <div className={"flex items-center justify-center"}>
                            <div className={"flex items-center justify-center w-[24px] h-[24px]"}>
                                <FullLikeIcon />
                            </div>
                        </div>
                        <div>찜 했어요</div>
                    </Button>
                ) : (
                    <Button
                        className={"bg-gray1-button"}
                        secondClassName={"flex items-center justify-center gap-x-2 mb-[200px]"}
                        onClick={() => {
                            type === "basic" ? likePortfolioBasicPost(params.id).then(mutatePortfolioData) : likePortfolioApplyPost(params.id).then(mutatePortfolioData)
                        }}>

                        <div className={"flex items-center justify-center"}>
                            <LikeIcon width={24} height={24}/>
                        </div>
                        <div>찜 할래요</div>
                    </Button>
                )}
            </main>
            <Footer />
        </div>
    )
}
export default PortfolioDetailPage;
