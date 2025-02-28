'use client';

import NavBar from "@/src/components/common/NavBar";
import Footer from "@/src/components/common/Footer";
import {useState} from "react";
import {MyPageStepType} from "@/src/types/mypage";
import EmployerMyPageMenu from "@/src/components/mypage/employer/EmployerMyPageMenu";
import EmployerProfile from "@/src/components/mypage/employer/EmployerProfile";
import MyAds from "@/src/components/mypage/employer/MyAds";
import ApplicationStatus from "@/src/components/mypage/employer/ApplicationStatus";

const Mypage = () => {
    const [step, setStep] = useState<MyPageStepType>("프로필 설정");
    return (
        <div>
            <NavBar/>
            <div className={"h-60"}/>
            <main className={"flex px-[360px]"}>
                <EmployerMyPageMenu setStep={setStep} step={step}/>
                {step === "프로필 설정" && (<EmployerProfile />)}
                {step === "내 공고" && (<MyAds />)}
                {step === "지원 현황" && (<ApplicationStatus />)}
            </main>
        </div>
    )
}
export default Mypage;
