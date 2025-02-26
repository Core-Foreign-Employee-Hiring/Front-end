import {SVGProps} from "react";

interface Props {
    step: "First" | "Second" | "Third";
}
const ProgressBar = (props: Props) => {
    const {step} = props;

    return (
        <section className={"flex flex-col gap-y-2"}>
            <div className={"flex gap-x-2 items-center"}>
                <h1 className={"title-lg items-start"}>공고 등록</h1>
            </div>
            <section className={"relative flex justify-between items-center mt-[12px]"}>
                <section className={"relative flex w-full items-center"}>
                    <div className={"flex flex-col items-center"}>
                        <div
                            className={"flex justify-center items-center w-[40px] h-[40px] rounded-full bg-main z-10"}>
                            {(step === "Second" || step === "Third") ? <CheckIcon/> : <div className={"text-white subtitle-md"}>1</div>}
                        </div>
                    </div>
                    <div className={step === "Second" || step === "Third" ? "absolute h-[4px] w-full bg-main" : "absolute h-[4px] w-full bg-gray2"}/>
                </section>
                <section className={"relative flex w-full items-center"}>
                    <div className={"flex flex-col items-center"}>
                        <div
                            className={step === "Second" || step === "Third"
                                ? "flex justify-center items-center w-[40px] h-[40px] rounded-full bg-main z-10"
                                : "flex justify-center items-center w-[40px] h-[40px] rounded-full bg-gray2 z-10"}>
                            {(step === "Third")
                                ? <CheckIcon/>
                                : (<div className={(step === "Second") ? "text-white subtitle-md" : "text-gray3 subtitle-md"}>2</div>
                            )}

                        </div>
                    </div>
                    <div className={step === "Third" ? "absolute h-[4px] w-full bg-main" : "absolute h-[4px] w-full bg-gray2" }/>
                </section>
                <section className={"flex flex-col items-center"}>
                    <div
                        className={step === "Third"
                            ? "flex justify-center items-center w-[40px] h-[40px] rounded-full bg-main z-10"
                            : "flex justify-center items-center w-[40px] h-[40px] rounded-full bg-gray2 z-10"}>
                        <span className={step === "Third" ? "text-white subtitle-md" : "text-gray3 subtitle-md"}>3</span>
                    </div>
                </section>
            </section>
            <div className={"flex justify-between"}>
                <span className={"text-main subtitle-md"}>기본 정보</span>
                <span className={step === "Second" || step === "Third" ? "text-main subtitle-md" : "text-gray3 subtitle-md"}>근무 및 지원 조건</span>
                <span className={step === "Third" ? "text-main subtitle-md" : "text-gray3 subtitle-md"}>추가 입력</span>
            </div>
        </section>
    )
}
export default ProgressBar;

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={11}
        fill="none"
        {...props}
    >
        <path
            stroke="#C5C6CD"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1.75 4.598 4.5 4.5 7.5-7.5"
        />
    </svg>
);
