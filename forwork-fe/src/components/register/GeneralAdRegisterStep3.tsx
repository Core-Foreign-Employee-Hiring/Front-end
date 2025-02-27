'use client';

import {Dispatch, SetStateAction, useMemo} from "react";
import {useAtomValue} from "jotai";

import Button from "@/src/components/common/Button";
import PortfolioForm from "@/src/components/register/PortfolioForm";
import {generalRegisterDataAtom} from "@/src/store/register/atom";

interface Props {
    setStep: Dispatch<SetStateAction<"Second" | "First" | "Third">>;
    setSubmitType: Dispatch<SetStateAction<"" | "draft" | "upload">>;
    setIsTrigger: Dispatch<SetStateAction<boolean>>;
}
const GeneralAdRegisterStep3 = (props: Props) => {
    const {setStep, setSubmitType, setIsTrigger} = props;

    const generalRegisterData = useAtomValue(generalRegisterDataAtom)

    const handleBeforeSubmit = () => {
        setStep("Second");
    }

    const handleNextSubmit = () => {
        setSubmitType("upload");
        setIsTrigger(true);
    }

    const isNextButtonDisabled = useMemo(() => {
        return (
            generalRegisterData.portfolios.some((portfolio) => portfolio.title === "") // ✅ 추가된 조건
        );
    }, [generalRegisterData.portfolios]);

    return (
        <main className={"flex flex-col"}>
            <h1 className={"title-md"}>추가로 받고 싶은 정보를 입력해보세요.</h1>
            <section className={"flex flex-col gap-y-6 mt-5"}>
                {generalRegisterData.portfolios.map((portfolio, index) => {
                    return (
                        <PortfolioForm key={index} index={index}/>
                    )
                })}
            </section>

            <section className={"flex justify-between"}>
                <Button
                    type={"button"}
                    onClick={() => handleBeforeSubmit()}
                    className={"mt-[28px] flex items-center justify-center border-gray2-button w-[200px]"}>이전</Button>
                <div className={"flex gap-x-4"}>
                    <Button
                        type={"button"}
                        onClick={() => {
                            setSubmitType("draft");
                            setIsTrigger(true);
                        }}
                        className={"mt-[28px] flex items-center justify-center border-gray2-button w-[200px]"}>임시저장</Button>
                    <Button
                        type={"button"}
                        disabled={isNextButtonDisabled}
                        onClick={() => handleNextSubmit()}
                        className={isNextButtonDisabled
                            ? "mt-[28px] flex items-center justify-center bg-gray2-button w-[200px]"
                            : "mt-[28px] flex items-center justify-center bg-main-button w-[200px]"}>
                        공고 등록하기
                    </Button>
                </div>
            </section>
        </main>
    )
}
export default GeneralAdRegisterStep3;
