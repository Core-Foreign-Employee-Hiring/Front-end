"use client";

import {useState} from "react";
import CompanyInfo from "@/src/components/register/CompanyInfo";
import JobCategory from "@/src/components/register/JobCategory";
import NavBar from "@/src/components/common/NavBar";
import GeneralAdRegisterPage from "@/src/components/register/GeneralAdRegisterPage";
import ApplyGeneralAd from "@/src/components/register/ApplyGeneralAd";

const RegistrationPage = () => {
    const [] = useState();
    return (
        <>
            <NavBar/>
            <div className={"h-[158px]"}/>
            <GeneralAdRegisterPage />
            {/*<ApplyGeneralAd />*/}
        </>

    )
}
export default RegistrationPage
