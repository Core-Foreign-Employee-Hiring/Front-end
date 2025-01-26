"use client";

import {useState} from "react";
import CompanyInfo from "@/src/components/registration/CompanyInfo";
import JobCategory from "@/src/components/registration/JobCategory";

const RegistrationPage = () => {
    const [] = useState();
    return (
        <div className={"px-[350px]"}>
            <CompanyInfo
                companyAddress={"대구 중구 동성로4길 29 (상덕동 1가) 1층 PIZZA MOB"}
                companyName={"우리는 쿠팡쿠파앙"}
                businessRegistrationNumber={"110-81-34859"}
                CEO={"남가을"}
                email={"hske3602@naver.com"}
                logoUrl={"/image 55.png"}
                phoneNumber={"010-7557-9217"}/>
            <JobCategory />
        </div>
    )
}
export default RegistrationPage
