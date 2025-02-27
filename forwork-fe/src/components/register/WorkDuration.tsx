import {WorkDurationType} from "@/src/types/register";
import {workDurationList} from "@/src/utils/register";
import Button from "@/src/components/common/Button";
import {Dispatch, SetStateAction} from "react";
import {toggleData} from "@/src/utils/common";
import Input from "@/src/components/common/Input";
import CheckIcon from "@/src/assets/common/CheckIcon";
import UnCheckIcon from "@/src/assets/common/UnCheckIcon";

interface Props {
    workDuration: WorkDurationType;
    setWorkDuration: Dispatch<SetStateAction<WorkDurationType>>;
    workDurationOther: string;
    setWorkDurationOther: Dispatch<SetStateAction<string>>;
    workDurationAgreement: boolean;
    setWorkDurationAgreement: Dispatch<SetStateAction<boolean>>;
}

const WorkDuration = (props: Props) => {
    const {workDuration, setWorkDuration, workDurationOther, setWorkDurationOther, workDurationAgreement, setWorkDurationAgreement} = props;

    return (
        <div className={"flex flex-col gap-y-3"}>
            <div className={"flex gap-x-3"}>
                {workDurationList.map((duration) => {
                    return (
                        <Button
                            type={"button"}
                            onClick={() => {
                                toggleData(duration, setWorkDuration);
                            }}
                            key={duration}
                            className={workDuration === duration ? "bg-main-button" : "border-gray2-button"}
                            secondClassName={"flex justify-center items-center py-4 px-5"}>
                            {duration}
                        </Button>
                    )
                })}
            </div>
            <Input
                setInputValue={setWorkDurationOther}
                inputValue={workDurationOther}
                placeholder={"직접입력"}
                className={"w-full"}
            />
            <section className={"flex gap-x-2 items-center"}>
                <button
                    type={"button"}
                    onClick={() => {
                        setWorkDurationAgreement(!workDurationAgreement);
                    }}
                    className={workDurationAgreement
                        ? "flex justify-center items-center w-[24px] h-[24px] rounded-full bg-main"
                        : "flex justify-center items-center w-[24px] h-[24px] rounded-full border-[1.6px] border-gray3"}>
                    {workDurationAgreement ? <CheckIcon /> : <UnCheckIcon />}
                </button>
                <div className={"button-md text-gray5"}>기간 협의</div>
            </section>
        </div>

    )
}
export default WorkDuration;
