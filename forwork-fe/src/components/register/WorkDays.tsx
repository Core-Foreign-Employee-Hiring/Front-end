import {handleSelectList, weekDaysList, workDaysList} from "@/src/utils/register";
import Button from "@/src/components/common/Button";
import {Dispatch, SetStateAction} from "react";
import {WeekDaysType, WorkDaysType} from "@/src/types/register";
import {toggleData} from "@/src/utils/common";
import Input from "@/src/components/common/Input";
import CheckIcon from "@/src/assets/common/CheckIcon";
import UnCheckIcon from "@/src/assets/common/UnCheckIcon";

interface Props {
    workDay: string;
    workWeekDays: WeekDaysType[];
    setWorkDay: Dispatch<SetStateAction<WorkDaysType>>
    setWorkWeekDays: Dispatch<SetStateAction<WeekDaysType[]>>
    workDaysSelectList: boolean;
    setWorkDaysSelectList: Dispatch<SetStateAction<boolean>>;
    workDaysDirectList: boolean;
    setWorkDaysDirectList: Dispatch<SetStateAction<boolean>>;
    workDaysOther: string;
    setWorkDaysOther: Dispatch<SetStateAction<string>>;
    workDaysAgreement: boolean;
    setWorkDaysAgreement: Dispatch<SetStateAction<boolean>>;
}

const WorkDays = (props: Props) => {
    const {workDay, workWeekDays, setWorkDay, setWorkWeekDays, workDaysSelectList, setWorkDaysSelectList, workDaysDirectList, setWorkDaysDirectList, workDaysOther, setWorkDaysOther, workDaysAgreement, setWorkDaysAgreement} = props;

    const toggleWeekDays = (weekDay: WeekDaysType) => {
        setWorkWeekDays((prevState) => {
            if (prevState.includes(weekDay)) {
                // 이미 선택된 경우 제거
                return prevState.filter((day) => day !== weekDay);
            } else {
                // 선택되지 않은 경우 추가 (최대 5개 제한)
                return [...prevState, weekDay];
            }
        });
    };

    return (
        <div className={"flex flex-col gap-y-4"}>
            <section className={"flex flex-col gap-y-5"}>
                <section className={"flex flex-col gap-y-3"}>
                    <div className={"flex gap-x-2 items-center"}>
                        <button
                            type={"button"}
                            onClick={() => {
                                handleSelectList(workDaysDirectList, setWorkDaysDirectList, setWorkDaysSelectList);
                                setWorkDay("");
                            }}
                            className={workDaysDirectList
                                ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                                : "flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1.6px] border-gray3"}>
                            {workDaysDirectList && (<div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                        </button>
                        <div className={"subtitle-lg"}>직접선택</div>
                    </div>
                    {workDaysDirectList && (
                        <div className={"flex gap-x-3"}>
                            {weekDaysList.map((day) => {
                                return (
                                    <Button
                                        type={"button"}
                                        onClick={() => {
                                            toggleWeekDays(day)
                                        }}
                                        key={day}
                                        className={workWeekDays.includes(day) ? "bg-main-button" : "border-gray2-button"}
                                        secondClassName={"flex justify-center items-center w-full py-4 px-6"}>
                                        {day}
                                    </Button>
                                )
                            })}
                        </div>
                    )}
                </section>
                <section className={"flex flex-col gap-y-3"}>
                    <div className={"flex gap-x-2 items-center"}>
                        <button
                            type={"button"}
                            onClick={() => {
                                handleSelectList(workDaysSelectList, setWorkDaysSelectList, setWorkDaysDirectList);
                                setWorkWeekDays([]);
                            }}
                            className={workDaysSelectList
                                ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                                : "flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1.6px] border-gray3"}>
                            {workDaysSelectList && (<div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                        </button>
                        <div className={"subtitle-lg"}>목록에서 선택</div>
                    </div>
                    {workDaysSelectList && (
                        <div className={"flex gap-x-3"}>
                            {workDaysList.map((day) => {
                                return (
                                    <Button
                                        type={"button"}
                                        onClick={() => {
                                            toggleData(day, setWorkDay);
                                        }}
                                        key={day}
                                        className={workDay === day ? "bg-main-button" : "border-gray2-button"}
                                        secondClassName={"flex justify-center items-center w-full py-4 px-6"}>
                                        {day}
                                    </Button>
                                )
                            })}
                        </div>
                    )}
                </section>
            </section>

            <section className={"flex gap-x-3 items-center"}>
                <div className={"subtitle-sm"}>기타사항</div>
                <Input
                    setInputValue={setWorkDaysOther}
                    inputValue={workDaysOther}
                    placeholder={"추가 사항이 있다면 입력해주세요."}
                    className={"flex-1"}/>
            </section>
            <section className={"flex gap-x-2 items-center"}>
                <button
                    type={"button"}
                    onClick={() => {
                        setWorkDaysAgreement(!workDaysAgreement);
                    }}
                    className={workDaysAgreement
                        ? "flex justify-center items-center w-[24px] h-[24px] rounded-full bg-main"
                        : "flex justify-center items-center w-[24px] h-[24px] rounded-full border-[1.6px] border-gray3"}>
                    {workDaysAgreement ? <CheckIcon/> : <UnCheckIcon/>}
                </button>
                <div className={"button-md text-gray5"}>요일 협의</div>
            </section>
        </div>
    )
}
export default WorkDays;
