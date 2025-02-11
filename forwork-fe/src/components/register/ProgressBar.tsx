import ArrowForwardIcon from "@/src/assets/common/ArrowForwardIcon";
import {Dispatch, SetStateAction} from "react";
import Button from "@/src/components/common/Button";

interface Props {
    step: "First" | "Second" | "Third";
    setStep: Dispatch<SetStateAction<"First" | "Second" | "Third">>
}
const ProgressBar = (props: Props) => {
    const {step, setStep} = props;

    return (
        <section className={"flex flex-col gap-y-3"}>
            <div className={"flex justify-between items-center"}>
                <div className={"flex gap-x-2 items-center"}>
                    {/* 뒤로가기 버튼 */}
                    {step !== "First" ?
                        <div
                            onClick={() => {
                                if (step === "Second") {
                                    setStep("First")
                                } else {
                                    setStep("Second")
                                }
                            }}
                            className={"w-[24px] h-[24px] flex justify-center items-center"}>
                            <ArrowForwardIcon
                                size={10}
                                direction={"right"}
                                color={"#2D2D2D"}/>
                        </div>
                        : null}
                    <div className={"title-lg items-start"}>공고 등록</div>
                </div>
                <Button className={"border-gray2-button"}>임시저장</Button>
            </div>

            <div className={"flex gap-x-3 items-center"}>
                <div className={"h-[4px] rounded-full bg-main w-full"}/>
                {step === "Second" || "Third"
                    ? <div className={"h-[4px] rounded-full bg-main w-full"}/>
                    : <div className={"h-[4px] rounded-full bg-gray2 w-full"}/>
                }
                {step === "Third"
                    ? <div className={"h-[4px] rounded-full bg-main w-full"}/>
                    : <div className={"h-[4px] rounded-full bg-gray2 w-full"}/>
                }
                <div className={"small text-gray5 w-[78px]"}>{
                    step === "First"
                        ? "1 / 3"
                        : step === "Second"
                            ? "2 / 3"
                            : "3 / 3"}
                </div>
            </div>
        </section>
    )
}
export default ProgressBar;
