"use client";

import NavBar from "@/src/components/common/NavBar";
import {useAtomValue} from "jotai/index";
import {recruitTypeAtom} from "@/src/store/recruit-ad/atom";
import GeneralApply from "@/src/components/apply/GeneralApply";
import PremiumApply from "@/src/components/apply/PremiumApply";

const ApplyDetailPage = () => {
    const recruitType = useAtomValue(recruitTypeAtom)

    return (

        <div>
            <NavBar />
            <div className={"h-[160px]"}/>
            {recruitType === "GENERAL" ? (<GeneralApply />) : (<PremiumApply />)}
        </div>
    )
}
export default ApplyDetailPage
