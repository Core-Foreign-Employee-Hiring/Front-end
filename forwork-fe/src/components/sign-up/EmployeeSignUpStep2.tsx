import * as React from "react";
import {useEffect, useState} from "react";
import {useAtom, useAtomValue, useSetAtom} from "jotai";

import Input from "@/src/components/common/Input";
import Button from "@/src/components/common/Button";
import {
    employeeRegister,
    sendEmailCode,
    sendPhoneNumberCode,
} from "@/src/lib/api/sign-up";
import TermsAgreement from "@/src/components/sign-up/TermsAgreement";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import {
    address1Atom,
    address2Atom, adInfoAgreementEmailAtom, adInfoAgreementSnsMmsAtom,
    openAddrModalAtom, over15Atom, personalInfoAgreementAtom, employeeSignUpInfoAtom,
    termsOfServiceAgreementAtom,
    zipcodeAtom
} from "@/src/store/sign-up/atom";
import {handleEmailVerification, handlePhoneNumberVerification} from "@/src/utils/sign-up";

const EmployeeSignUpStep2 = () => {
    {/* 데이터 필드 */}
    const [email, setEmail] = useState("");
    const [emailCode, setEmailCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberCode, setPhoneNumberCode] = useState("");
    const [zipcode, setZipcode] = useAtom(zipcodeAtom);
    const [address1, setAddress1] = useAtom(address1Atom);
    const [address2, setAddress2] = useAtom(address2Atom);
    const termsOfServiceAgreement = useAtomValue(termsOfServiceAgreementAtom);
    const personalInfoAgreement = useAtomValue(personalInfoAgreementAtom);
    const over15 = useAtomValue(over15Atom);
    const adInfoAgreementSnsMms = useAtomValue(adInfoAgreementSnsMmsAtom);
    const adInfoAgreementEmail = useAtomValue(adInfoAgreementEmailAtom);
    {/* 주소찾기 모달창 관리 state */}
    const setOpenAddrModal = useSetAtom(openAddrModalAtom);
    {/* Availability */}
    const [isEmailAvailability, setIsEmailAvailability] = useState<undefined | boolean>(undefined);
    const [isEmailCodeAvailability, setIsEmailCodeAvailability] = useState<undefined | boolean>(undefined);
    const [isPhoneNumberAvailability, setIsPhoneNumberAvailability] = useState<undefined | boolean>(undefined);
    const [isPhoneNumberCodeAvailability, setIsPhoneNumberCodeAvailability] = useState<undefined | boolean>(undefined);
    {/* 회원가입 api 전송 데이터 */}
    const [signUpInfo, setSignUpInfo] = useAtom(employeeSignUpInfoAtom);
    {/* 데이터 api 전송시 비동기 처리에 필요한 trigger */}
    const [isTrigger, setIsTrigger] = useState(false);

    const handleSubmit = () => {
        setSignUpInfo((prev) => ({...prev,
            email: email,
            phoneNumber: phoneNumber,
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
        if (isTrigger && signUpInfo.email !== "") {
            employeeRegister(signUpInfo).then((res) => {
                setIsTrigger(false);
                setSignUpInfo((prev) => ({...prev,
                    userId: "",
                    email: "",
                    password: "",
                    name: "",
                    phoneNumber: "",
                    zipcode: "",
                    address1: "",
                    address2: "",
                    birthDate: "",
                    nationality: "",
                    education: "",
                    visa: "",
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
            {/* 이메일 */}
            <div className={"flex flex-col gap-y-3"}>
                <section className={"flex flex-col gap-y-3"}>
                    <div className={"title-md"}>이메일<span className={"text-main"}>*</span></div>
                    <div className={"flex gap-x-3"}>
                        <Input
                            type={"email"}
                            setIsAvailability={setIsEmailAvailability}
                            setInputValue={setEmail}
                            inputValue={email}
                            className={"w-[350px]"}/>
                        <Button
                            onClick={() => sendEmailCode(email).then((response) => {
                                if (response.status === 200) {
                                    setIsEmailAvailability(true);
                                }
                            })}
                            className={"bg-gray2-button"}
                            secondClassName={"flex items-center w-[157px] justify-center button"}>인증번호</Button>
                    </div>
                    {isEmailAvailability !== undefined ?
                        <div className={isEmailAvailability
                            ? "body-md text-main"
                            : "body-md text-error"}>
                            {isEmailAvailability
                                ? "해당 이메일로 인증코드가 발송됩니다"
                                : "이메일 전송 실패하였습니다. 이메일을 확인해주세요"}
                        </div> : null}
                </section>

                {/* 이메일 인증 코드 */}
                {isEmailAvailability ? (
                    <section className={"flex flex-col gap-y-3"}>
                        <div className={"flex gap-x-3"}>
                            <Input
                                setIsAvailability={setIsEmailCodeAvailability}
                                setInputValue={setEmailCode}
                                placeholder={"인증번호를 입력해주세요"}
                                inputValue={emailCode}
                                className={"w-[350px]"}/>
                            <Button
                                onClick={() => handleEmailVerification(emailCode, setIsEmailCodeAvailability)}
                                className={"bg-gray2-button"}
                                secondClassName={"flex items-center w-[157px] justify-center button"}>인증하기</Button>
                        </div>
                        {isEmailCodeAvailability !== undefined ?
                            <div className={isEmailCodeAvailability
                                ? "body-md text-main"
                                : "body-md text-error"}>
                                {isEmailCodeAvailability
                                    ? "인증되었습니다."
                                    : "인증 실패하였습니다. 인증번호를 확인해주세요"}
                            </div> : null}
                    </section>
                ) : null}
            </div>

            <div className={"flex flex-col gap-y-3"}>
                {/* 연락처 */}
                <section className={"flex flex-col gap-y-3"}>
                    <div className={"title-md"}>연락처<span className={"text-main"}>*</span></div>
                    <SelectedFilterContent selectedContent={"South Korea +82"} disabled={true}/>
                    <div className={"flex gap-x-3"}>
                        <Input
                            type={"number"}
                            setIsAvailability={setIsPhoneNumberAvailability}
                            setInputValue={setPhoneNumber}
                            inputValue={phoneNumber}
                            placeholder={"\'-\'제외하고 휴대폰번호 입력"}
                            className={"w-[350px]"}/>
                        <Button
                            onClick={() => sendPhoneNumberCode(phoneNumber).then((response) => {
                                console.log("response", response)
                                if (response.status === 200) {
                                    setIsPhoneNumberAvailability(true);
                                }
                            })}
                            className={"bg-gray2-button"}
                            secondClassName={"flex items-center w-[157px] justify-center button"}>인증번호</Button>
                    </div>
                    {isPhoneNumberAvailability !== undefined ?
                        <div className={isPhoneNumberAvailability
                            ? "body-md text-main"
                            : "body-md text-error"}>
                            {isPhoneNumberAvailability
                                ? "해당 연락처로 인증코드가 발송됩니다"
                                : "인증 번호 전송 실패하였습니다. 연락처를 확인해주세요"}
                        </div> : null}
                </section>

                {/* 연락처 인증 코드 */}
                {isPhoneNumberAvailability ? (
                    <section className={"flex flex-col gap-y-3"}>
                        <div className={"flex gap-x-3"}>
                            <Input
                                setIsAvailability={setIsPhoneNumberCodeAvailability}
                                setInputValue={setPhoneNumberCode}
                                placeholder={"인증번호 입력"}
                                inputValue={phoneNumberCode}
                                className={"w-[350px]"}/>
                            <Button
                                onClick={() => handlePhoneNumberVerification(phoneNumberCode, setIsPhoneNumberCodeAvailability)}
                                className={"bg-gray2-button"}
                                secondClassName={"flex items-center w-[157px] justify-center button"}>인증하기</Button>
                        </div>
                        {isPhoneNumberCodeAvailability !== undefined ?
                            <div className={isPhoneNumberCodeAvailability
                                ? "body-md text-main"
                                : "body-md text-error"}>
                                {isPhoneNumberCodeAvailability
                                    ? "인증되었습니다."
                                    : "인증 실패하였습니다. 인증번호를 확인해주세요"}
                            </div> : null}
                    </section>
                ) : null}
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
                disabled={email === "" || phoneNumber === "" || zipcode === "" || address1 === "" || address2 === "" || !termsOfServiceAgreement || !personalInfoAgreement || !over15}
                onClick={() => {
                    handleSubmit();
                }}
                className={email === "" || phoneNumber === "" || zipcode === "" || address1 === "" || address2 === "" || !termsOfServiceAgreement || !personalInfoAgreement || !over15
                    ? "flex justify-center items-center title-md bg-gray2-button w-[520px]"
                    : "flex justify-center items-center title-md bg-main-button w-[520px]"}>
                다음
            </Button>
        </section>
    )
}
export default EmployeeSignUpStep2;
