import {Dispatch, SetStateAction, useEffect, useState} from "react";
import Input from "@/src/components/common/Input";
import Button from "@/src/components/common/Button";
import {sendEmailCode, sendPhoneNumberCode} from "@/src/lib/api/sign-up";
import {handleEmailVerification, handlePhoneNumberVerification, handleUserIdVerification} from "@/src/utils/sign-up";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import * as React from "react";
import {useSetAtom} from "jotai/index";
import {employeeSignUpInfoAtom} from "@/src/store/sign-up/atom";

interface Props {
    setStep: Dispatch<SetStateAction<"First" | "Second">>
}

const EmployerSignUpStep1= (props: Props) => {
    const {setStep} = props;
    {/* 필드 데이터 */}
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberCode, setPhoneNumberCode] = useState("");
    const [email, setEmail] = useState("");
    const [emailCode, setEmailCode] = useState("");
    {/* Availability */}
    const [isUserIdAvailability, setIsUserIdAvailability] = useState<undefined | boolean>(undefined);
    const [isPasswordAvailability, setIsPasswordAvailability] = useState<undefined | boolean>(undefined);
    const [isPasswordMatch, setIsPasswordMatch] = useState<undefined | boolean>(undefined);
    const [isEmailAvailability, setIsEmailAvailability] = useState<undefined | boolean>(undefined);
    const [isEmailCodeAvailability, setIsEmailCodeAvailability] = useState<undefined | boolean>(undefined);
    const [isPhoneNumberAvailability, setIsPhoneNumberAvailability] = useState<undefined | boolean>(undefined);
    const [isPhoneNumberCodeAvailability, setIsPhoneNumberCodeAvailability] = useState<undefined | boolean>(undefined);
    {/* 백엔드에 전달할 Data*/}
    const setEmployerSignUpInfo = useSetAtom(employeeSignUpInfoAtom);


    {/* 비밀번호 문구 */}
    useEffect(() => {
        if (password === '') {
            setIsPasswordAvailability(undefined);
            return;
        }
        // 정규식을 사용하여 대소문자, 숫자, 기호, 길이 검증
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

        if (!passwordRegex.test(password)) {
            setIsPasswordAvailability(false);
        } else {
            setIsPasswordAvailability(true);
        }
    }, [password]);

    {/* 비밀번호 확인 문구 */}
    useEffect(() => {
        if (confirmPassword === '' || password === '') {
            setIsPasswordMatch(undefined);
            return;
        }
        if (confirmPassword === password) {
            setIsPasswordMatch(true);
        } else {
            setIsPasswordMatch(false);
        }
    }, [confirmPassword]);

    const handleSubmit = () => {
        setEmployerSignUpInfo((prev) => ({...prev,
            userId: userId,
            password: password,
            phoneNumber: phoneNumber,
            email: email,
        }))
        setStep("Second");
    }

    return (
        <section className={"flex flex-col gap-y-[40px]"}>
            {/* 아이디 */}
            <section className={"flex flex-col gap-y-3"}>
                <div className={"title-md"}>아이디<span className={"text-main"}>*</span></div>
                <div className={"flex gap-x-3"}>
                    <Input
                        setIsAvailability={setIsUserIdAvailability}
                        setInputValue={setUserId}
                        inputValue={userId}
                        placeholder={"8~15자 입력"}
                        className={"w-[350px]"}
                        maxLength={15}/>
                    <Button
                        onClick={() => handleUserIdVerification(userId, setIsUserIdAvailability)}
                        className={"bg-gray2-button"}
                        secondClassName={"flex items-center w-[157px] justify-center"}>중복확인</Button>
                </div>
                {isUserIdAvailability !== undefined ?
                    <div className={isUserIdAvailability
                        ? "body-md text-main"
                        : "body-md text-error"}>
                        {isUserIdAvailability
                            ? "사용가능한 아이디 입니다."
                            : "사용 불가능한 아이디 입니다."}
                    </div> : null}
            </section>

            {/* 비밀번호 */}
            <section className={"flex flex-col gap-y-3"}>
                <div className={"title-md"}>비밀번호<span className={"text-main"}>*</span></div>
                <div className={"flex gap-x-3"}>
                    <Input
                        // type={"password"}
                        setIsAvailability={setIsPasswordAvailability}
                        setInputValue={setPassword}
                        inputValue={password}
                        placeholder={"대소문자, 숫자, 기호 포함 8~15자"}
                        maxLength={15}/>
                </div>
                {isPasswordAvailability !== undefined ?
                    <div className={isPasswordAvailability
                        ? "body-md text-main"
                        : "body-md text-error"}>
                        {isPasswordAvailability
                            ? "사용 가능한 비밀번호 입니다."
                            : "대소문자, 숫자, 기호 포함 8~15자"}
                    </div> : null}
            </section>

            {/* 비밀번호 확인 */}
            <section className={"flex flex-col gap-y-3"}>
                <div className={"title-md"}>비밀번호 확인<span className={"text-main"}>*</span></div>
                <div className={"flex gap-x-3"}>
                    <Input
                        // type={"password"}
                        disabled={password === ""}
                        setIsAvailability={setIsPasswordMatch}
                        setInputValue={setConfirmPassword}
                        inputValue={confirmPassword}
                        placeholder={"대소문자, 숫자, 기호 포함 8~15자"}
                        maxLength={15}/>
                </div>
                {isPasswordMatch !== undefined ?
                    <div className={isPasswordMatch
                        ? "body-md text-main"
                        : "body-md text-error"}>
                        {isPasswordMatch
                            ? "사용 가능한 비밀번호 입니다."
                            : "비밀번호가 동일하지 않습니다."}
                    </div> : null}
            </section>

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

            <Button
                disabled={userId === "" || password === "" || phoneNumber === "" || email === ""}
                onClick={() => {
                    handleSubmit();
                }}
                className={userId === "" || password === "" || phoneNumber === "" || email === ""
                    ? "flex justify-center items-center title-md bg-gray2-button w-[520px]"
                    : "flex justify-center items-center title-md bg-main-button w-[520px]"}>
                다음
            </Button>
        </section>
    )
}
export default EmployerSignUpStep1;
