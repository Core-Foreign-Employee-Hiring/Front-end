"use client";

import {useState} from "react";
import CompanyInfo from "@/src/components/register/CompanyInfo";
import JobCategory from "@/src/components/register/JobCategory";
import NavBar from "@/src/components/common/NavBar";
import GeneralAdRegisterPage from "@/src/components/register/GeneralAdRegisterPage";
import ApplyGeneralAd from "@/src/components/register/ApplyGeneralAd";
import PremiumRegisterPage from "@/src/components/register/PremiumRegisterPage";
import PortfolioFormatCreator from "@/src/components/register/PortfolioFormatCreator";

const RegistrationPage = () => {
    const [] = useState();
    return (
        <>
            <NavBar/>
            <div className={"h-[158px]"}/>
            <GeneralAdRegisterPage />
            {/*<PortfolioFormatCreator />*/}
            {/*<ApplyGeneralAd />*/}
        </>

    )
}
export default RegistrationPage
