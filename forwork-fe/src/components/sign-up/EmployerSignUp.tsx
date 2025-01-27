import {Dispatch, SetStateAction, useState} from "react";
import {useAtom, useSetAtom} from "jotai";

import SearchAddress from "@/src/components/sign-up/SearchAddress";
import {address1Atom, openAddrModalAtom, zipcodeAtom} from "@/src/store/sign-up/atom";
import LOGOIcon from "@/src/assets/common/LOGOIcon";
import ArrowForwardIcon from "@/src/assets/common/ArrowForwardIcon";
import EmployerSignUpStep1 from "@/src/components/sign-up/EmployerSignUpStep1";
import EmployerSignUpStep2 from "@/src/components/sign-up/EmployerSignUpStep2";

interface Props {
    setType: Dispatch<SetStateAction<"Employee" | "Employer">>
}
const EmployerSignUp = (props: Props) => {
    const {} = props;
    const [step, setStep] = useState<"First" | "Second">("First");
    const [openAddrModal, setOpenAddrModal] = useAtom(openAddrModalAtom);
    const setZipcode = useSetAtom(zipcodeAtom);
    const setAddress1 = useSetAtom(address1Atom);

    return (
        <div>
            {openAddrModal && (
                <SearchAddress
                    setAddress1={setAddress1}
                    setOpenAddrModal={setOpenAddrModal}
                    openAddrModal={openAddrModal}
                    setZipcode={setZipcode}/>
            )}
            <div className={"flex flex-col items-center justify-center min-h-screen gap-y-[80px]"}>
                <LOGOIcon width={267} height={68}/>
                <div className={"flex flex-col gap-y-[60px]"}>
                    {/* 진행바 */}
                    <section className={"flex flex-col gap-y-3"}>
                        <div className={"flex gap-x-2 items-center"}>
                            {step === "Second" ?
                                <div
                                    onClick={() => {
                                        setStep("First")
                                    }}
                                    className={"w-[24px] h-[24px] flex justify-center items-center"}>
                                    <ArrowForwardIcon
                                        size={10}
                                        direction={"right"}
                                        color={"#2D2D2D"}/>
                                </div>
                                : null}
                            <div className={"title-lg items-start"}>회원가입(고용인)</div>
                        </div>
                        <div className={"flex gap-x-3 items-center"}>
                            <div className={"h-[4px] rounded-full bg-main w-full"}/>
                            {step === "Second"
                                ? <div className={"h-[4px] rounded-full bg-main w-full"}/>
                                : <div className={"h-[4px] rounded-full bg-gray2 w-full"}/>
                            }
                            <div className={"small text-gray5 w-[55px]"}>{step === "First" ? "1 / 2" : "2 / 2"}</div>
                        </div>
                    </section>
                    {step === "First" ? <EmployerSignUpStep1 setStep={setStep}/> : <EmployerSignUpStep2/>}
                </div>
            </div>
        </div>
    )
}
export default EmployerSignUp;
