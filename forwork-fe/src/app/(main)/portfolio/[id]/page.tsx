"use client";

import useBasicPortfolioDetail from "@/src/lib/hooks/useBasicPortfolioDetail";
import {useEffect} from "react";
import NavBar from "@/src/components/common/NavBar";
import {useParams} from "next/navigation";
import ViewIcon from "@/src/assets/review/ViewIcon";
import EmployeeInfo from "@/src/components/portfolio/EmployeeInfo";
import CareerInfo from "@/src/components/portfolio/CareerInfo";
import Evaluation from "@/src/components/portfolio/Evaluation";
import useApplyPortfolioDetail from "@/src/lib/hooks/useApplyPortfolioDetail";
import {useAtom} from "jotai/index";
import {portfolioTypeAtom} from "@/src/store/portpolio/atom";

const PortfolioDetailPage = () => {
    const params = useParams();
    const [type, setType] = useAtom(portfolioTypeAtom);

    const {basicPortfolioDetailData} = useBasicPortfolioDetail(params.id);
    const {applyPortfolioDetailData} = useApplyPortfolioDetail(params.id);

    useEffect(() => {
        console.log("applyPortfolioDetailData", applyPortfolioDetailData)
        console.log("basicPortfolioDetailData", basicPortfolioDetailData)
    }, [basicPortfolioDetailData, applyPortfolioDetailData])

    useEffect(() => {
        console.log("params")
    }, [params]);

    return (
        <div>
            <NavBar />
            <div className={"h-60"}></div>
            <main className={"flex flex-col gap-y-[36px] px-[360px]"}>
                <header className={"flex items-center justify-between"}>
                    <h1 className={"title-lg"}>{type === "basic"
                        ? basicPortfolioDetailData?.data?.name
                        : applyPortfolioDetailData?.data?.name}의 포트폴리오</h1>
                    <div className={"flex items-center"}>
                        <div className={"flex justify-center items-center w-[32px] h-[32px]"}>
                            <ViewIcon size={18} fill={"#6F717C"}/>
                        </div>
                        <span className={"badge-sm text-gray4 px-1"}>{23}</span>
                    </div>
                </header>
                <EmployeeInfo
                    name={type === "basic" ? basicPortfolioDetailData?.data?.name : applyPortfolioDetailData?.data?.name}
                    birthday={type === "basic" ? basicPortfolioDetailData?.data?.birthday : applyPortfolioDetailData?.data?.birthday}
                    education={type === "basic" ? basicPortfolioDetailData?.data?.education : applyPortfolioDetailData?.data?.education}
                    email={type === "basic" ? basicPortfolioDetailData?.data?.email : applyPortfolioDetailData?.data?.email}
                    nationality={type === "basic" ? basicPortfolioDetailData?.data?.nationality : applyPortfolioDetailData?.data?.nationality}
                    visa={type === "basic" ? basicPortfolioDetailData?.data?.visa : applyPortfolioDetailData?.data?.visa}/>
                {type === "basic" ? basicPortfolioDetailData?.data && (
                    <CareerInfo {...basicPortfolioDetailData.data?.employeePortfolioDTO}/>
                ) : applyPortfolioDetailData?.data && (
                    <CareerInfo {...applyPortfolioDetailData.data?.employeePortfolioDTO}/>

                )}
                {basicPortfolioDetailData?.data && (
                    <Evaluation
                        name={type === "basic" ? basicPortfolioDetailData?.data?.name : applyPortfolioDetailData?.data?.name}
                        noLatenessOrAbsence={type === "basic"
                            ? basicPortfolioDetailData?.data?.employeeEvaluationCountDTO.noLatenessOrAbsence
                            : applyPortfolioDetailData?.data?.employeeEvaluationCountDTO.noLatenessOrAbsence}
                        politeAndFriendly={type === "basic"
                            ? basicPortfolioDetailData?.data?.employeeEvaluationCountDTO.politeAndFriendly
                            : applyPortfolioDetailData?.data?.employeeEvaluationCountDTO.politeAndFriendly}
                        goodCustomerService={type === "basic"
                            ? basicPortfolioDetailData?.data?.employeeEvaluationCountDTO.goodCustomerService
                            : applyPortfolioDetailData?.data?.employeeEvaluationCountDTO.goodCustomerService}
                        skilledAtWork={type === "basic"
                            ? basicPortfolioDetailData?.data?.employeeEvaluationCountDTO.skilledAtWork
                            : applyPortfolioDetailData?.data?.employeeEvaluationCountDTO.skilledAtWork}
                        joinCount={type === "basic"
                            ? basicPortfolioDetailData?.data?.employeeEvaluationCountDTO.joinCount
                            : applyPortfolioDetailData?.data?.employeeEvaluationCountDTO.joinCount}
                        worksDiligently={type === "basic"
                            ? basicPortfolioDetailData?.data?.employeeEvaluationCountDTO.worksDiligently
                            : applyPortfolioDetailData?.data?.employeeEvaluationCountDTO.worksDiligently}/>
                )}
            </main>

        </div>
    )
}
export default PortfolioDetailPage;
