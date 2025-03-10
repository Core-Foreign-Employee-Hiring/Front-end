"use client";

import NavBar from "@/src/components/common/NavBar";
import SummaryAd from "@/src/components/common/SummaryAd";
import SideAdInfo from "@/src/components/recruit-ad/SideAdInfo";
import OfficeInfo from "@/src/components/recruit-ad/OfficeInfo";
import RecruitPoster from "@/src/components/recruit-ad/RecruitPoster";
import ApplyMethod from "@/src/components/recruit-ad/ApplyMethod";
import Evaluation from "@/src/components/portfolio/Evaluation";
import useRecruitAdDetail from "@/src/lib/hooks/useRecruitAdDetail";
import {useParams} from "next/navigation";
import {useEffect} from "react";
import {RecruitAdDetailData} from "@/src/types/recruit-ad";

const RecruitAdDetail = () => {
    const params = useParams();
    const {recruitAdDetailData} = useRecruitAdDetail(params.recruitId);

    useEffect(() => {
        console.log("recruitAdDetailData", recruitAdDetailData);
    }, [recruitAdDetailData])

    return (
        <div>
            <NavBar/>
            <div className={"h-[158px]"}/>
            <main className={"flex gap-x-[40px] justify-center mt-[80px]"}>
                <section className={"flex flex-col gap-y-[40px] w-[770px]"}>
                    <SummaryAd
                        workTime={recruitAdDetailData ? recruitAdDetailData.workTime : []}
                        workDuration={recruitAdDetailData ? recruitAdDetailData.workDuration : []}
                        workDays={recruitAdDetailData ? recruitAdDetailData.workDays : []}
                        companyIconImage={recruitAdDetailData ? recruitAdDetailData.companyIconImage : ""}
                        title={recruitAdDetailData ? recruitAdDetailData.title : ""}
                        companyName={recruitAdDetailData ? recruitAdDetailData.companyName : ""}
                        employerReliability={recruitAdDetailData ? recruitAdDetailData.employerReliability : 0}
                        recruitEndDate={recruitAdDetailData ? recruitAdDetailData.recruitEndDate : ""}
                        recruitStartDate={recruitAdDetailData ? recruitAdDetailData.recruitStartDate : ""}/>
                    <OfficeInfo
                        businessRegistrationNumber={recruitAdDetailData ? recruitAdDetailData.businessRegistrationNumber : ""}
                        companyName={recruitAdDetailData ? recruitAdDetailData.companyName : ""}
                        address1={recruitAdDetailData ? recruitAdDetailData.address.address1 : ""}
                        address2={recruitAdDetailData ? recruitAdDetailData.address.address2 : ""}
                        employerContact={recruitAdDetailData ? recruitAdDetailData.employerContact : ""}
                        employerEmail={recruitAdDetailData ? recruitAdDetailData.employerEmail : ""}
                        representative={recruitAdDetailData ? recruitAdDetailData.representative : ""}
                        zipcode={recruitAdDetailData ? recruitAdDetailData.address.zipcode : ""}/>
                    <RecruitPoster posterImageUrl={recruitAdDetailData ? recruitAdDetailData.posterImageUrl : ""}/>
                    <ApplyMethod
                        applicationMethods={recruitAdDetailData ? recruitAdDetailData.applicationMethods : []}/>
                    <Evaluation
                        type={"employer"}
                        name={recruitAdDetailData ? recruitAdDetailData.companyName : ""}
                        employerReliability={recruitAdDetailData ? recruitAdDetailData.employerReliability : 0}
                        paysOnTime={recruitAdDetailData ? recruitAdDetailData.employerEvaluationCountDTO.paysOnTime : 0}
                        keepsContractDates={recruitAdDetailData ? recruitAdDetailData.employerEvaluationCountDTO.keepsContractDates : 0}
                        respectsEmployees={recruitAdDetailData ? recruitAdDetailData.employerEvaluationCountDTO.respectsEmployees : 0}
                        friendlyBoss={recruitAdDetailData ? recruitAdDetailData.employerEvaluationCountDTO.friendlyBoss : 0}
                        fairWorkload={recruitAdDetailData ? recruitAdDetailData.employerEvaluationCountDTO.fairWorkload : 0}
                        joinCount={recruitAdDetailData ? recruitAdDetailData.employerEvaluationCountDTO.joinCount : 0}/>
                </section>
                <aside className={"w-[411px] h-fit sticky top-[100px]"}>
                    <SideAdInfo {...recruitAdDetailData as RecruitAdDetailData} />
                </aside>
            </main>
        </div>
    )
}
export default RecruitAdDetail
