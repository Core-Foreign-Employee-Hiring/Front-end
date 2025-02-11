import {handleSelectList, weekDaysList, workDaysList} from "@/src/utils/register";
import Button from "@/src/components/common/Button";
import {Dispatch, SetStateAction} from "react";
import {WeekDaysType, WorkDaysType} from "@/src/types/register";
import {toggleData} from "@/src/utils/common";

interface Props {
    workDay: string;
    workWeekDays: WeekDaysType[];
    setWorkDay: Dispatch<SetStateAction<WorkDaysType>>
    setWorkWeekDays: Dispatch<SetStateAction<WeekDaysType[]>>
    workDaysSelectList: boolean;
    setWorkDaysSelectList: Dispatch<SetStateAction<boolean>>;
    workDaysDirectList: boolean;
    setWorkDaysDirectList: Dispatch<SetStateAction<boolean>>;
}

const WorkDays = (props: Props) => {
    const {workDay, workWeekDays, setWorkDay, setWorkWeekDays, workDaysSelectList, setWorkDaysSelectList, workDaysDirectList, setWorkDaysDirectList} = props;

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
            <div className={"flex flex-col gap-y-3"}>
                <div className={"flex gap-x-2 items-center"}>
                   <button
                       type={"button"}
                       onClick={() => {
                           handleSelectList(workDaysSelectList, setWorkDaysSelectList, setWorkDaysDirectList);
                           setWorkWeekDays([]);
                       }}
                       className={workDaysSelectList
                           ? "flex justify-center items-center w-[24px] h-[24px] rounded-full bg-main"
                           : "flex justify-center items-center w-[24px] h-[24px] rounded-full border border-gray4"}>
                       {workDaysSelectList && (<div className={"w-[12px] h-[12px] rounded-full bg-white"}/>)}
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
                                    className={workDay === day ? "bg-main-button" : "border-gray3-button"}
                                    secondClassName={"subtitle-lg flex justify-center items-center w-full"}>
                                    {day}
                                </Button>
                            )
                        })}
                    </div>
                )}
            </div>

            <div className={"flex flex-col gap-y-3"}>
                <div className={"flex gap-x-2 items-center"}>
                    <button
                        type={"button"}
                        onClick={() => {
                            handleSelectList(workDaysDirectList, setWorkDaysDirectList, setWorkDaysSelectList);
                            setWorkDay("");
                        }}
                        className={workDaysDirectList
                            ? "flex justify-center items-center w-[24px] h-[24px] rounded-full bg-main"
                            : "flex justify-center items-center w-[24px] h-[24px] rounded-full border border-gray4"}>
                        {workDaysDirectList && (<div className={"w-[12px] h-[12px] rounded-full bg-white"}/>)}
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
                                    className={workWeekDays.includes(day) ? "bg-main-button" : "border-gray3-button"}
                                    secondClassName={"subtitle-lg flex justify-center items-center w-full"}>
                                    {day}
                                </Button>
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}
export default WorkDays;
