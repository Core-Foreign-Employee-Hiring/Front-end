import {handleSelectList, timeList, workTimeList} from "@/src/utils/register";
import Button from "@/src/components/common/Button";
import {TimeType, WorkTimeType} from "@/src/types/register";
import {Dispatch, SetStateAction, useState} from "react";
import Filter from "@/src/components/common/Filter";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import {toggleData} from "@/src/utils/common";
import Input from "@/src/components/common/Input";
import CheckIcon from "@/src/assets/common/CheckIcon";
import UnCheckIcon from "@/src/assets/common/UnCheckIcon";

interface Props {
    workTime: WorkTimeType;
    startTime: TimeType;
    setStartTime: Dispatch<SetStateAction<TimeType>>;
    endTime: TimeType;
    setEndTime: Dispatch<SetStateAction<TimeType>>;
    setWorkTime: Dispatch<SetStateAction<WorkTimeType>>;
    workTimeSelectList: boolean;
    workTimeDirectList: boolean;
    setWorkTimeDirectList: Dispatch<SetStateAction<boolean>>;
    setWorkTimeSelectList: Dispatch<SetStateAction<boolean>>;
    workTimeOther: string;
    setWorkTimeOther: Dispatch<SetStateAction<string>>;
    workTimeAgreement: boolean;
    setWorkTimeAgreement: Dispatch<SetStateAction<boolean>>;
}

const WorkTime = (props: Props) => {
    const {workTimeOther, setWorkTimeOther, workTime, startTime, setStartTime, endTime, setEndTime, setWorkTime, workTimeSelectList, workTimeDirectList, setWorkTimeDirectList, setWorkTimeSelectList, workTimeAgreement, setWorkTimeAgreement} = props;
    const [isStartTimeFilterContentFocused, setIsStartTimeFilterContentFocused] = useState(false);
    const [isEndTimeFilterContentFocused, setIsEndTimeFilterContentFocused] = useState(false);

    const startTimeFilterContents = () => {
        return (
            <div>
                {timeList.map((time) => {
                    return (
                        <Button
                            type={"button"}
                            onClick={() => {
                                setStartTime(time)
                                setIsStartTimeFilterContentFocused(false)
                            }}
                            key={time} className={"w-full py-[16.5px] px-4 hover:bg-gray1"}>
                            {time}
                        </Button>
                    )
                })}
            </div>
        )
    }

    const endTimeFilterContents = () => {
        return (
            <div>
                {timeList.map((time) => {
                    return (
                        <Button
                            type={"button"}
                            onClick={() => {
                                setEndTime(time)
                                setIsEndTimeFilterContentFocused(false)
                            }}
                            key={time} className={"w-full py-[16.5px] px-4 hover:bg-gray1"}>
                            {time}
                        </Button>
                    )
                })}
            </div>
        )
    }

    return (
        <section className={"flex flex-col gap-y-5"}>
            <section className={"flex flex-col gap-y-3"}>
                <section className={"flex gap-x-2 items-center"}>
                    <button
                        type={"button"}
                        onClick={() => {
                            handleSelectList(workTimeDirectList, setWorkTimeDirectList, setWorkTimeSelectList);
                            setWorkTime("")
                        }}
                        className={workTimeDirectList
                            ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                            : "flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1.6px] border-gray3"}>
                        {workTimeDirectList && (<div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                    </button>
                    <div className={"button-md text-gray5"}>직접선택</div>
                </section>
                {workTimeDirectList && (
                    <div className={"flex gap-x-3"}>
                        <div className={"w-full"}>
                            <SelectedFilterContent selectedContent={startTime}
                                                   className={startTime === "시작시간" ? "py-3 text-gray4" : "py-3 "}
                                                   setIsFocused={setIsStartTimeFilterContentFocused}/>
                            {isStartTimeFilterContentFocused && (<Filter filterContents={startTimeFilterContents}/>)}
                        </div>
                        <div className={"w-full"}>
                            <SelectedFilterContent selectedContent={endTime}
                                                   className={endTime === "종료시간" ? "py-3 text-gray4" : "py-3"}
                                                   setIsFocused={setIsEndTimeFilterContentFocused}/>
                            {isEndTimeFilterContentFocused && (<Filter filterContents={endTimeFilterContents}/>)}
                        </div>
                    </div>
                )}
            </section>
            <section className={"flex flex-col gap-y-3"}>
                <section className={"flex gap-x-2 items-center"}>
                    <button
                        type={"button"}
                        onClick={() => {
                            handleSelectList(workTimeSelectList, setWorkTimeSelectList, setWorkTimeDirectList);
                            setStartTime("시작시간");
                            setEndTime("종료시간");
                        }}
                        className={workTimeSelectList
                            ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                            : "flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1.6px] border-gray3"}>
                        {workTimeSelectList && (<div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                    </button>
                    <div className={"button-md text-gray5"}>목록에서 선택</div>
                </section>
                {workTimeSelectList && (
                    <div className={"grid grid-cols-[repeat(auto-fill,minmax(20%,1fr))] gap-3"}>
                        {workTimeList.map((time) => {
                            return (
                                <Button
                                    type={"button"}
                                    onClick={() => {
                                        toggleData(time, setWorkTime)
                                    }}
                                    key={time}
                                    className={workTime === time ? "bg-main-button" : "border-gray2-button"}
                                    secondClassName={"flex justify-center items-center w-full py-4 px-5"}>
                                    {time}
                                </Button>
                            )
                        })}
                    </div>
                )}
            </section>
            <section className={"flex gap-x-3 items-center"}>
                <div className={"subtitle-sm"}>기타사항</div>
                <Input
                    setInputValue={setWorkTimeOther}
                    inputValue={workTimeOther}
                    placeholder={"추가사항이 있다면 입력해주세요."}
                    className={"flex-1"}/>
            </section>

            <section className={"flex gap-x-2 items-center"}>
                <button
                    type={"button"}
                    onClick={() => {
                        setWorkTimeAgreement(!workTimeAgreement);
                    }}
                    className={workTimeAgreement
                        ? "flex justify-center items-center w-[24px] h-[24px] rounded-full bg-main"
                        : "flex justify-center items-center w-[24px] h-[24px] rounded-full border-[1.6px] border-gray3"}>
                    {workTimeAgreement ? <CheckIcon/> : <UnCheckIcon/>}
                </button>
                <div className={"button-md text-gray5"}>시간 협의</div>
            </section>
        </section>

    )
}
export default WorkTime;
