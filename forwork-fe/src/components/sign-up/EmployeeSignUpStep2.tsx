import Input from "@/src/components/common/Input";
import Button from "@/src/components/common/Button";
import {sendEmailCode, verifyEmail} from "@/src/lib/api/sign-up";
import {useState} from "react";
import {ResponseType} from "@/src/types/common";
import {AxiosError} from "axios";

const EmployeeSignUpStep2 = () => {
    const [email, setEmail] = useState("");
    const [emailCode, setEmailCode] = useState("");
    {/* Availability */}
    const [isEmailAvailability, setIsEmailAvailability] = useState<undefined | boolean>(undefined);
    const [isEmailCodeAvailability, setIsEmailCodeAvailability] = useState<undefined | boolean>(undefined);

    /**
     * 이메일 인증번호 발송 후 이메일 인증 / 문구 띄우기 함수
     * @param emailCode 이메일로 받은 인증 코드
     */
    const handleEmailVerification = async (emailCode: string ) => {
        try {
            const response: ResponseType = await verifyEmail(emailCode)
            if (response && response.status && response.status === 200) {
                setIsEmailCodeAvailability(true);
            }
        } catch (error: any) {
            const axiosError = error as AxiosError<ResponseType>; // AxiosError로 캐스팅
            if (axiosError.response?.status === 400) {
                setIsEmailCodeAvailability(false);
            }
        }
    };

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
                                onClick={() => handleEmailVerification(emailCode)}
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

        </section>

    )
}
export default EmployeeSignUpStep2;
