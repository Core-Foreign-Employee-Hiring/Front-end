import * as React from "react";
import {useEffect, useState} from "react";
import {useAtom, useAtomValue, useSetAtom} from "jotai";

import Input from "@/src/components/common/Input";
import Button from "@/src/components/common/Button";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import Filter from "@/src/components/common/Filter";
import {changeKorToBusinessFieldEnumType, dayList, jobCategoryList, monthList, yearList} from "@/src/utils/common";
import TermsAgreement from "@/src/components/sign-up/TermsAgreement";
import {
    address1Atom,
    address2Atom,
    adInfoAgreementEmailAtom,
    adInfoAgreementSnsMmsAtom,
    employerSignUpInfoAtom,
    openAddrModalAtom,
    over15Atom,
    personalInfoAgreementAtom,
    termsOfServiceAgreementAtom,
    zipcodeAtom
} from "@/src/store/sign-up/atom";
import {JobCategoryType} from "@/src/types/register";
import {employerRegister} from "@/src/lib/api/sign-up";
import {handleBusinessRegistrationNumberIdVerification} from "@/src/utils/sign-up";
import {EmployerSignUpInfoType} from "@/src/types/sign-up";

const EmployerSignUpStep2 = () => {
    {/* 필드 데이터 */}
    const [name, setName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [businessRegistrationNumber, setBusinessRegistrationNumber] = useState("")
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [businessField, setBusinessField] = useState<JobCategoryType>("");
    const [zipcode, setZipcode] = useAtom(zipcodeAtom);
    const [address1, setAddress1] = useAtom(address1Atom);
    const [address2, setAddress2] = useAtom(address2Atom);
    const termsOfServiceAgreement = useAtomValue(termsOfServiceAgreementAtom);
    const personalInfoAgreement = useAtomValue(personalInfoAgreementAtom);
    const over15 = useAtomValue(over15Atom);
    const adInfoAgreementSnsMms = useAtomValue(adInfoAgreementSnsMmsAtom);
    const adInfoAgreementEmail = useAtomValue(adInfoAgreementEmailAtom);
    {/* Availability */}
    const [isBusinessRegistrationNumberIdAvailability, setIsBusinessRegistrationNumberIdAvailability] = useState<undefined | boolean>(true);
    {/* 필터 focus */}
    const [isYearFilterContentFocused, setIsYearFilterContentFocused] = useState(false);
    const [isMonthFilterContentFocused, setIsMonthFilterContentFocused] = useState(false);
    const [isDayFilterContentFocused, setIsDayFilterContentFocused] = useState(false);
    const [isBusinessFieldFilterContentFocused, setIsBusinessFieldFilterContentFocused] = useState(false);
    {/* 주소찾기 모달창 관리 state */}
    const setOpenAddrModal = useSetAtom(openAddrModalAtom);
    {/* 회원가입 api 전송 데이터 */}
    const [signUpInfo, setSignUpInfo] = useAtom(employerSignUpInfoAtom);
    {/* 데이터 api 전송시 비동기 처리에 필요한 trigger */}
    const [isTrigger, setIsTrigger] = useState(false);

    /**
     * 년도 필터 내용
     */
    const yearFilterContents = () => {
        return (
            <div>
                {yearList.map((year) => {
                    return (
                        <Button
                            onClick={() => {
                                setYear(year)
                                setIsYearFilterContentFocused(false)
                            }}
                            key={year} className={"w-full py-[16.5px] px-4 subtitle-lg hover:bg-gray1"}>
                            {year}
                        </Button>
                    )
                })}
            </div>
        )
    }

    /**
     * 월 필터 내용
     */
    const monthFilterContents = () => {
        return (
            <div>
                {monthList.map((month) => {
                    return (
                        <Button
                            onClick={() => {
                                setMonth(month)
                                setIsMonthFilterContentFocused(false)
                            }}
                            key={month} className={"w-full py-[16.5px] px-4 subtitle-lg hover:bg-gray1"}>
                            {month}
                        </Button>
                    )
                })}
            </div>
        )
    }

    /**
     * 일 필터 내용
     */
    const dayFilterContents = () => {
        return (
            <div>
                {dayList.map((day) => {
                    return (
                        <Button
                            onClick={() => {
                                setDay(day)
                                setIsDayFilterContentFocused(false)
                            }}
                            key={day} className={"w-full py-[16.5px] px-4 subtitle-lg hover:bg-gray1"}>
                            {day}
                        </Button>
                    )
                })}
            </div>
        )
    }

    /**
     * 업직종 내용
     */
    const businessFieldFilterContents = () => {
        return (
            <div>
                {jobCategoryList.map((jobCategory) => {
                    return (
                        <Button
                            onClick={() => {
                                setBusinessField(jobCategory)
                                setIsBusinessFieldFilterContentFocused(false)
                            }}
                            key={jobCategory} className={"w-full py-[16.5px] px-4 subtitle-lg hover:bg-gray1"}>
                            {jobCategory}
                        </Button>
                    )
                })}
            </div>
        )
    }

    /**
     * 제출 버튼 활성화 조건
     */
    const isFormValid = () => {
        return (
            name !== "" &&
            companyName !== "" &&
            businessRegistrationNumber !== "" &&
            year !== "" &&
            month !== "" &&
            day !== "" &&
            businessField !== "" &&
            zipcode !== "" &&
            address1 !== "" &&
            address2 !== "" &&
            termsOfServiceAgreement &&
            personalInfoAgreement &&
            over15
        );
    };

    const handleSubmit = () => {
        setSignUpInfo((prev: EmployerSignUpInfoType) => ({...prev,
            name: name,
            companyName: companyName,
            businessRegistrationNumber: businessRegistrationNumber,
            establishedDate: `${year}-${month}-${day}`,
            representativeName: name,
            businessField: changeKorToBusinessFieldEnumType(businessField) || '',
            zipcode: zipcode,
            address1: address1,
            address2: address2,
            termsOfServiceAgreement: termsOfServiceAgreement,
            personalInfoAgreement: personalInfoAgreement,
            adInfoAgreementSnsMms: adInfoAgreementSnsMms,
            adInfoAgreementEmail: adInfoAgreementEmail,
            over15: over15,
            birthDate:"2001-04-07",//TODO: 디자인 나오면 추가
            male: true,//TODO: 디자인 나오면 추가
        }))
        setIsTrigger(true);
    }

    useEffect(() => {
        if (isTrigger && signUpInfo.name !== "") {
            employerRegister(signUpInfo).then((res) => {
                console.log("res", res)
                setIsTrigger(false);
                setSignUpInfo((prev: EmployerSignUpInfoType) => ({...prev,
                    userId: "",
                    email: "",
                    password: "",
                    name: "",
                    representativeName: "",
                    phoneNumber: "",
                    birthDate: "",
                    zipcode: "",
                    address1: "",
                    address2: "",
                    businessRegistrationNumber: "",
                    companyName: "",
                    establishedDate: "",
                    businessField: "",
                    termsOfServiceAgreement: false,
                    personalInfoAgreement: false,
                    adInfoAgreementSnsMms: false,
                    adInfoAgreementEmail: false,
                    male: false,
                    over15: false,
                }))
            })
        }
    }, [isTrigger, signUpInfo]);

    return (
        <section className={"flex flex-col gap-y-[40px]"}>
            {/* 회사/점포 명 */}
            <section className={"flex flex-col gap-y-3"}>
                <div className={"title-md"}>회사/점포명<span className={"text-main"}>*</span></div>
                <div className={"flex gap-x-3"}>
                    <Input
                        setInputValue={setCompanyName}
                        inputValue={companyName}
                        placeholder={"회사/점포명 입력"}
                        maxLength={15}/>
                </div>
            </section>

            {/* 대표자 명 */}
            <section className={"flex flex-col gap-y-3"}>
                <div className={"title-md"}>대표자명<span className={"text-main"}>*</span></div>
                <div className={"flex gap-x-3"}>
                    <Input
                        setInputValue={setName}
                        inputValue={name}
                        placeholder={"대표자명 입력"}
                        maxLength={15}/>
                </div>
            </section>

            {/* 설립일 */}
            <div className={"flex flex-col gap-y-3"}>
                <div className={"title-md"}>설립일<span className={"text-main"}>*</span></div>
                <div className={"flex gap-x-3"}>
                    <div>
                        <SelectedFilterContent
                            className={"w-[210px]"}
                            placeholder={"년도"}
                            selectedContent={year}
                            setIsFocused={() => setIsYearFilterContentFocused(!isYearFilterContentFocused)}
                            isFocused={isYearFilterContentFocused}/>
                        {isYearFilterContentFocused ? (
                            <Filter filterContents={yearFilterContents}/>) : null}
                    </div>
                    <div>
                        <SelectedFilterContent
                            className={"w-[143px]"}
                            placeholder={"월"}
                            selectedContent={month}
                            setIsFocused={() => setIsMonthFilterContentFocused(!isMonthFilterContentFocused)}
                            isFocused={isMonthFilterContentFocused}/>
                        {isMonthFilterContentFocused ? (
                            <Filter filterContents={monthFilterContents}/>) : null}
                    </div>
                    <div>
                        <SelectedFilterContent
                            className={"w-[143px]"}
                            placeholder={"일"}
                            selectedContent={day}
                            setIsFocused={() => setIsDayFilterContentFocused(!isDayFilterContentFocused)}
                            isFocused={isDayFilterContentFocused}/>
                        {isDayFilterContentFocused ? (
                            <Filter filterContents={dayFilterContents}/>) : null}
                    </div>
                </div>
            </div>

            {/* 사업자 등록 번호 */}
            <section className={"flex flex-col gap-y-3"}>
                <div className={"title-md"}>사업자 등록번호<span className={"text-main"}>*</span></div>
                <div className={"flex gap-x-3"}>
                    <Input
                        setIsAvailability={setIsBusinessRegistrationNumberIdAvailability}
                        setInputValue={setBusinessRegistrationNumber}
                        inputValue={businessRegistrationNumber}
                        placeholder={"‘-’ 제외하고 번호 입력"}
                        className={"w-[350px]"}
                        maxLength={15}/>
                    <Button
                        onClick={() =>
                            handleBusinessRegistrationNumberIdVerification(
                                businessRegistrationNumber,
                                `${year}${month}${day}`,
                                name,
                                setIsBusinessRegistrationNumberIdAvailability)}
                        className={"bg-gray2-button"}
                        secondClassName={"flex items-center w-[157px] justify-center"}>인증하기</Button>
                </div>
                {isBusinessRegistrationNumberIdAvailability !== undefined ?
                    <div className={isBusinessRegistrationNumberIdAvailability
                        ? "body-md text-main"
                        : "body-md text-error"}>
                        {isBusinessRegistrationNumberIdAvailability
                            ? "인증되었습니다."
                            : "인증에 실패했습니다. 사업자번호를 다시 확인해주세요."}
                    </div> : null}
            </section>

            {/* 업직종 */}
            <div className={"flex flex-col gap-y-3 w-full"}>
                <div className={"title-md"}>업직종<span className={"text-main"}>*</span></div>
                <SelectedFilterContent
                    selectedContent={businessField}
                    placeholder={"선택"}
                    isFocused={isBusinessFieldFilterContentFocused}
                    setIsFocused={() => setIsBusinessFieldFilterContentFocused(!isBusinessFieldFilterContentFocused)}/>
                {isBusinessFieldFilterContentFocused ? (
                    <Filter filterContents={businessFieldFilterContents}/>) : null}
            </div>

            {/* 주소 인증 */}
            <div className={"flex flex-col gap-y-3"}>
                <section className={"flex flex-col gap-y-3"}>
                    <div className={"title-md"}>주소<span className={"text-main"}>*</span></div>
                    {/* 우편번호 */}
                    <div className={"flex gap-x-3"}>
                        <Input
                            setInputValue={setZipcode}
                            inputValue={zipcode}
                            placeholder={"우편번호 입력"}
                            className={"w-[350px]"}/>
                        {/* 주소찾기 버튼 */}
                        <Button
                            onClick={() => {setOpenAddrModal(true)}}
                            className={"bg-gray2-button"}
                            secondClassName={"flex items-center w-[157px] justify-center button"}>주소 찾기</Button>
                    </div>
                </section>

                {/* 주소 */}
                <Input
                    setInputValue={setAddress1}
                    placeholder={"주소"}
                    inputValue={address1}/>

                {/* 상세 주소 */}
                <Input
                    setInputValue={setAddress2}
                    placeholder={"상세주소"}
                    inputValue={address2}/>
            </div>

            {/* 약관 동의 */}
            <TermsAgreement />

            {/* 제출 버튼 */}
            <Button
                disabled={!isFormValid()}
                onClick={() => {
                    handleSubmit();
                }}
                className={isFormValid()
                        ? "flex justify-center items-center title-md bg-main-button w-[520px]"
                        : "flex justify-center items-center title-md bg-gray2-button w-[520px]"}>
                다음
            </Button>
        </section>
    )
}
export default EmployerSignUpStep2
