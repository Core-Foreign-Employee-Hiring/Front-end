import {handleSelectList, timeList, workTimeList} from "@/src/utils/register";
import Button from "@/src/components/common/Button";
import {TimeType, WorkTimeType} from "@/src/types/register";
import {Dispatch, SetStateAction, useState} from "react";
import Filter from "@/src/components/common/Filter";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import {toggleData} from "@/src/utils/common";

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
}

const WorkTime = (props: Props) => {
    const {workTime, startTime, setStartTime, endTime, setEndTime, setWorkTime, workTimeSelectList, workTimeDirectList, setWorkTimeDirectList, setWorkTimeSelectList} = props;
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
                            key={time} className={"w-full py-[16.5px] px-4 subtitle-lg hover:bg-gray1"}>
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
                            key={time} className={"w-full py-[16.5px] px-4 subtitle-lg hover:bg-gray1"}>
                            {time}
                        </Button>
                    )
                })}
            </div>
        )
    }

    return (
        <div className={"flex flex-col gap-y-4"}>
            <div className={"flex gap-x-2 items-center"}>
                <button
                    type={"button"}
                    onClick={() => {
                        handleSelectList(workTimeSelectList, setWorkTimeSelectList, setWorkTimeDirectList);
                        setStartTime("시작시간");
                        setEndTime("종료시간");
                    }}
                    className={workTimeSelectList
                        ? "flex justify-center items-center w-[24px] h-[24px] rounded-full bg-main"
                        : "flex justify-center items-center w-[24px] h-[24px] rounded-full border border-gray4"}>
                    {workTimeSelectList && (<div className={"w-[12px] h-[12px] rounded-full bg-white"}/>)}
                </button>
                <div className={"subtitle-lg"}>목록에서 선택</div>
            </div>
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
                                className={workTime === time ? "bg-main-button" : "border-gray3-button"}
                                secondClassName={"subtitle-lg flex justify-center items-center w-full"}>
                                {time}
                            </Button>
                        )
                    })}
                </div>
            )}
            <div className={"flex gap-x-2 items-center"}>
                <button
                    type={"button"}
                    onClick={() => {
                        handleSelectList(workTimeDirectList, setWorkTimeDirectList, setWorkTimeSelectList);
                        setWorkTime("")
                    }}
                    className={workTimeDirectList
                        ? "flex justify-center items-center w-[24px] h-[24px] rounded-full bg-main"
                        : "flex justify-center items-center w-[24px] h-[24px] rounded-full border border-gray4"}>
                    {workTimeDirectList && (<div className={"w-[12px] h-[12px] rounded-full bg-white"}/>)}
                </button>
                <div className={"subtitle-lg"}>직접선택</div>
            </div>
            {workTimeDirectList && (
                <div className={"flex gap-x-3"}>
                    <div className={"w-full"}>
                        <SelectedFilterContent selectedContent={startTime} className={startTime === "시작시간" ? "subtitle-lg text-gray4": "subtitle-lg"} setIsFocused={setIsStartTimeFilterContentFocused} />
                        {isStartTimeFilterContentFocused && (<Filter filterContents={startTimeFilterContents} />)}
                    </div>
                    <div className={"w-full"}>
                        <SelectedFilterContent selectedContent={endTime} className={endTime === "종료시간" ? "subtitle-lg text-gray4": "subtitle-lg"} setIsFocused={setIsEndTimeFilterContentFocused} />
                        {isEndTimeFilterContentFocused && (<Filter filterContents={endTimeFilterContents} />)}
                    </div>
                </div>
            )}
        </div>
    )
}
export default WorkTime;
