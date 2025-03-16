"use client";

import {useEffect, useState} from "react";
import {useParams, useRouter} from "next/navigation";
import {useSetAtom} from "jotai";

import {recruitIdAtom, recruitTypeAtom} from "@/src/store/recruit-ad/atom";
import {RecruitAdDetailData} from "@/src/types/recruit-ad";
import NavBar from "@/src/components/common/NavBar";
import Modal from "@/src/components/common/Modal";
import SummaryAd from "@/src/components/common/SummaryAd";
import SideAdInfo from "@/src/components/recruit-ad/SideAdInfo";
import OfficeInfo from "@/src/components/recruit-ad/OfficeInfo";
import RecruitPoster from "@/src/components/recruit-ad/RecruitPoster";
import ApplyMethod from "@/src/components/recruit-ad/ApplyMethod";
import Evaluation from "@/src/components/portfolio/Evaluation";
import useRecruitAdDetail from "@/src/lib/hooks/useRecruitAdDetail";

const RecruitAdDetail = () => {
    const router = useRouter();
    const params = useParams();
    const {recruitAdDetailData} = useRecruitAdDetail(params.recruitId);
    const [isWarningApplyEmployerModalOpen, setIsWarningApplyEmployerModalOpen] = useState(false);
    const [isEmployeeApplyModalOpen, setEmployeeApplyModalOpen] = useState(false);
    {/* 이후 지원페이지에서 어떤 공고였는지 확인하기 위함 */}
    const setRecruitId = useSetAtom(recruitIdAtom)
    {/* 공고 타입이 프리미엄인지 일반인지 확인하기 위함 */}
    const setRecruitType = useSetAtom(recruitTypeAtom)

    useEffect(() => {
        if (recruitAdDetailData) {
            setRecruitId(recruitAdDetailData.recruitId)
            setRecruitType(recruitAdDetailData.recruitType)
        }
        console.log("recruitAdDetailData", recruitAdDetailData);
    }, [recruitAdDetailData])

    const modalContent = () => {
        return (
            <div className={"subtitle-lg"}>
                고용주는 지원할 수 없어요.
            </div>
        )
    }

    const modalEmployeeContent = () => {
        return (
            <div className={"grid-cols-2 w-full gap-2"}>
                <button
                    onClick={() => {
                        router.push(`/apply/${params.recruitId}`)
                    }}
                    className={"flex justify-center items-center py-[40px] subtitle-md bg-white rounded-[16px] w-full"}
                    key={"온라인 지원"}>
                    온라인 지원
                </button>
            </div>
        )
    }

    return (
        <div>
            {/* 고용주는 지원 못하게 */}
            {isWarningApplyEmployerModalOpen && (
                <Modal setIsModalOpen={setIsWarningApplyEmployerModalOpen} content={modalContent} isClosable={false}/>)}
            {/* 고용인은 지원 방법 선택하도록 */}
            {isEmployeeApplyModalOpen && (
                <Modal setIsModalOpen={setEmployeeApplyModalOpen} content={modalEmployeeContent} />)}
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
                    <SideAdInfo
                        setEmployeeApplyModalOpen={setEmployeeApplyModalOpen}
                        setIsApplyModalOpen={setIsWarningApplyEmployerModalOpen}
                        {...recruitAdDetailData as RecruitAdDetailData} />
                </aside>
            </main>
        </div>
    )
}
export default RecruitAdDetail
