import {
    handleSelectList,
    timeList,
    weekDaysList,
    workDaysList,
    workDurationList,
    workTimeList
} from "@/src/utils/register";
import Button from "@/src/components/common/Button";
import {
    TimeType,
    WeekDaysType,
    WorkDaysType,
    WorkDurationType,
    WorkTimeType
} from "@/src/types/register";
import {Dispatch, SetStateAction, useState} from "react";
import CancelIcon from "@/src/assets/common/CancelIcon";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import Filter from "@/src/components/common/Filter";

interface Props {
    setIsWorkDurationFilterFocused: Dispatch<SetStateAction<boolean>>
    //근무 기간
    workDuration: WorkDurationType;
    workDurations: WorkDurationType[];
    setWorkDuration: Dispatch<SetStateAction<WorkDurationType>>;
    setWorkDurations: Dispatch<SetStateAction<WorkDurationType[]>>;
    //근무 시간
    workTimes: WorkTimeType[];
    setWorkTimes: Dispatch<SetStateAction<WorkTimeType[]>>;
    startTime: TimeType;
    setStartTime: Dispatch<SetStateAction<TimeType>>;
    endTime: TimeType;
    setEndTime: Dispatch<SetStateAction<TimeType>>;
    workTimeSelectList: boolean;
    workTimeDirectList: boolean;
    setWorkTimeDirectList: Dispatch<SetStateAction<boolean>>;
    setWorkTimeSelectList: Dispatch<SetStateAction<boolean>>;
    //근무 요일
    workDays: WorkDaysType[];
    setWorkDays: Dispatch<SetStateAction<WorkDaysType[]>>
    workWeekDays: WeekDaysType[];
    setWorkWeekDays: Dispatch<SetStateAction<WeekDaysType[]>>
    workDaysSelectList: boolean;
    setWorkDaysSelectList: Dispatch<SetStateAction<boolean>>;
    workDaysDirectList: boolean;
    setWorkDaysDirectList: Dispatch<SetStateAction<boolean>>;
}

const WorkDurationFilter = (props: Props) => {
    const {
        setIsWorkDurationFilterFocused,
        workDuration,
        workDurations,
        setWorkDurations,
        workDays,
        workWeekDays,
        setWorkDays,
        setWorkWeekDays,
        workDaysSelectList,
        setWorkDaysSelectList,
        workDaysDirectList,
        setWorkDaysDirectList,
        workTimes,
        workTimeDirectList,
        startTime,
        workTimeSelectList,
        setStartTime,
        setWorkTimes,
        setWorkTimeDirectList,
        setWorkTimeSelectList,
        endTime,
        setEndTime} = props;
    const [isStartTimeFilterContentFocused, setIsStartTimeFilterContentFocused] = useState(false);
    const [isEndTimeFilterContentFocused, setIsEndTimeFilterContentFocused] = useState(false);

    const toggleWorkDurationCondition = (duration: WorkDurationType) => {
        setWorkDurations((prevState) => {
            if (prevState.includes(duration)) {
                // 이미 선택된 경우 제거
                return prevState.filter((condition) => condition !== duration);
            } else {
                // 선택되지 않은 경우 추가 (최대 5개 제한)
                return [...prevState, duration];
            }
        });
    };

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
    const toggleWorkTimes = (workTime: WorkTimeType) => {
        setWorkTimes((prevState) => {
            if (prevState.includes(workTime)) {
                // 이미 선택된 경우 제거
                return prevState.filter((time) => time !== workTime);
            } else {
                // 선택되지 않은 경우 추가 (최대 5개 제한)
                return [...prevState, workTime];
            }
        });
    };

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

    const toggleDays = (weekDay: WorkDaysType) => {
        setWorkDays((prevState) => {
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
        <section className={"flex flex-col gap-y-[32px] rounded-[24px] w-full border border-gray2 p-5"}>
            <section className={"flex flex-col gap-y-[24px]"}>
                {/* 이미 선택된 내용 */}
                <section className={"flex justify-between items-center"}>
                    <div className={"flex flex-wrap gap-2"}>
                        {/*근무 기간 선택된 내용*/}
                        {workDurations.map((workDuration) => {
                            return (
                                <div
                                    key={workDuration}
                                    className={"flex gap-x-2 border-gray3-button pr-2 bg-gray1 py-2"}>
                                    {workDuration}
                                    <CancelIcon
                                        onClick={() => {
                                            toggleWorkDurationCondition(workDuration)
                                        }}
                                        className={"cursor-pointer"}
                                        size={20}
                                        color={"#6F717C"}/>
                                </div>
                            )
                        })}
                        {/*근무 시간 직접 선택된 내용*/}
                        {startTime !== "시작시간" && endTime !== "종료시간" && (
                            <div
                                className={"flex gap-x-2 border-gray3-button pr-2 bg-gray1 py-2"}>
                                {`${startTime} - ${endTime}`}
                                <CancelIcon
                                    onClick={() => {
                                        toggleWorkDurationCondition(workDuration)
                                    }}
                                    className={"cursor-pointer"}
                                    size={20}
                                    color={"#6F717C"}/>
                            </div>
                        )}
                        {/*근무 시간 목록 선택된 내용*/}
                        {workTimes.map((workTime) => {
                            return (
                                <div
                                    key={workTime}
                                    className={"flex gap-x-2 border-gray3-button pr-2 bg-gray1 py-2"}>
                                    {workTime}
                                    <CancelIcon
                                        onClick={() => {
                                            toggleWorkTimes(workTime)
                                        }}
                                        className={"cursor-pointer"}
                                        size={20}
                                        color={"#6F717C"}/>
                                </div>
                            )
                        })}
                        {/*근무 요일 직접 선택돤 내용*/}
                        {workDays.map((workDay) => {
                            return (
                                <div
                                    key={workDay}
                                    className={"flex gap-x-2 border-gray3-button pr-2 bg-gray1 py-2"}>
                                    {workDay}
                                    <CancelIcon
                                        onClick={() => {
                                            toggleDays(workDay)
                                        }}
                                        className={"cursor-pointer"}
                                        size={20}
                                        color={"#6F717C"}/>
                                </div>
                            )
                        })}
                        {/*근무 요일 목록 선택된 내용*/}
                        {workWeekDays.map((weekDay) => {
                            return (
                                <div
                                    key={weekDay}
                                    className={"flex gap-x-2 border-gray3-button pr-2 bg-gray1 py-2"}>
                                    {weekDay}
                                    <CancelIcon
                                        onClick={() => {
                                            toggleWeekDays(weekDay)
                                        }}
                                        className={"cursor-pointer"}
                                        size={20}
                                        color={"#6F717C"}/>
                                </div>
                            )
                        })}
                    </div>
                </section>
                {/* 근무 기간 */}
                <section className={"flex gap-x-3"}>
                    <div className={"w-[100px] subtitle-sm"}>근무 기간</div>
                    <div className={"flex gap-2"}>
                        {workDurationList.map((duration) => {
                            return (
                                <Button
                                    key={duration}
                                    type={"button"}
                                    onClick={() => toggleWorkDurationCondition(duration)}
                                    className={workDurations.includes(duration)
                                        ? "border-main-bg-lightMain-button px-4"
                                        : "border-gray2-button"}>
                                    {duration}
                                </Button>
                            )
                        })}
                    </div>
                </section>
                {/* 근무 시간 */}
                <section className={"flex gap-x-3"}>
                    <div className={"w-[100px] subtitle-sm"}>근무 시간</div>
                    <div className={"flex flex-col gap-y-5"}>
                        {/* 근무 시간 직접 선택 */}
                        <section className={"flex flex-col gap-y-3"}>
                            <section className={"flex gap-x-2 items-center"}>
                                <button
                                    type={"button"}
                                    onClick={() => {
                                        handleSelectList(workTimeDirectList, setWorkTimeDirectList, setWorkTimeSelectList);
                                        setWorkTimes([])
                                    }}
                                    className={workTimeDirectList
                                        ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                                        : "flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1.6px] border-gray3"}>
                                    {workTimeDirectList && (
                                        <div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                                </button>
                                <div className={"button-md text-gray5"}>직접선택</div>
                            </section>
                            {workTimeDirectList && (
                                <div className={"flex gap-x-3"}>
                                    <div className={"w-full"}>
                                        <SelectedFilterContent selectedContent={startTime}
                                                               className={startTime === "시작시간" ? "text-gray4" : ""}
                                                               setIsFocused={setIsStartTimeFilterContentFocused}/>
                                        {isStartTimeFilterContentFocused && (
                                            <Filter filterContents={startTimeFilterContents}/>)}
                                    </div>
                                    <div className={"w-full"}>
                                        <SelectedFilterContent selectedContent={endTime}
                                                               className={endTime === "종료시간" ? " text-gray4" : ""}
                                                               setIsFocused={setIsEndTimeFilterContentFocused}/>
                                        {isEndTimeFilterContentFocused && (
                                            <Filter filterContents={endTimeFilterContents}/>)}
                                    </div>
                                </div>
                            )}
                        </section>
                        {/* 근무 시간 목록 선택 */}
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
                                    {workTimeSelectList && (
                                        <div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                                </button>
                                <div className={"button-md text-gray5"}>목록에서 선택</div>
                            </section>
                            {workTimeSelectList && (
                                <div className={"flex gap-x-2"}>
                                    {workTimeList.map((time) => {
                                        return (
                                            <Button
                                                type={"button"}
                                                onClick={() => {
                                                    toggleWorkTimes(time)
                                                }}
                                                key={time}
                                                className={workTimes.includes(time) ? "border-main-bg-lightMain-button px-4" : "border-gray2-button"}>
                                                {time}
                                            </Button>
                                        )
                                    })}
                                </div>
                            )}
                        </section>
                    </div>
                </section>
                {/* 근무 요일 */}
                <section className={"flex gap-x-3"}>
                    <div className={"w-[100px] subtitle-sm"}>근무 시간</div>
                    {/* 근무 요일 직접 선택 */}
                    <section className={"flex flex-col gap-y-5"}>
                        <section className={"flex flex-col gap-y-3"}>
                            <div className={"flex gap-x-2 items-center"}>
                                <button
                                    type={"button"}
                                    onClick={() => {
                                        handleSelectList(workDaysDirectList, setWorkDaysDirectList, setWorkDaysSelectList);
                                        setWorkDays([]);
                                    }}
                                    className={workDaysDirectList
                                        ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                                        : "flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1.6px] border-gray3"}>
                                    {workDaysDirectList && (
                                        <div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                                </button>
                                <div className={"button-md text-gray5"}>직접선택</div>
                            </div>
                            {workDaysDirectList && (
                                <div className={"flex gap-x-2"}>
                                    {weekDaysList.map((day) => {
                                        return (
                                            <Button
                                                type={"button"}
                                                onClick={() => {
                                                    toggleWeekDays(day)
                                                }}
                                                key={day}
                                                className={workWeekDays.includes(day) ? "border-main-bg-lightMain-button px-4" : "border-gray2-button"}>
                                                {day}
                                            </Button>
                                        )
                                    })}
                                </div>
                            )}
                        </section>
                        {/* 근무 요일 목록 선택 */}
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
                                    {workDaysSelectList && (
                                        <div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                                </button>
                                <div className={"button-md text-gray5"}>목록에서 선택</div>
                            </div>
                            {workDaysSelectList && (
                                <div className={"flex gap-x-2"}>
                                    {workDaysList.map((day) => {
                                        return (
                                            <Button
                                                type={"button"}
                                                onClick={() => {
                                                    toggleDays(day)
                                                }}
                                                key={day}
                                                className={workDays.includes(day) ? "border-main-bg-lightMain-button px-4" : "border-gray2-button"}>
                                                {day}
                                            </Button>
                                        )
                                    })}
                                </div>
                            )}
                        </section>
                    </section>
                </section>
            </section>
            <section className={"flex justify-end gap-x-2"}>
                <Button
                    onClick={() => {
                        setWorkDurations([])
                        setStartTime("시작시간")
                        setEndTime("종료시간")
                        setWorkTimes([])
                        setWorkDays([])
                        setWorkWeekDays([])
                    }}
                    className={"border-gray2-button"}
                    secondClassName={"flex items-center justify-center w-[120px] rounded-[16px] py-[9.5px]"}>초기화</Button>
                <Button
                    onClick={() => {
                        setIsWorkDurationFilterFocused(false)
                    }}
                    className={"bg-main-button"}
                    secondClassName={"flex items-center justify-center gap-x-2 w-[120px] rounded-[16px] py-[9.5px]"}>
                    {(workDurations.length + workTimes.length + workDays.length + workWeekDays.length + ((startTime !== "시작시간" && endTime !== "종료시간") ? 1 : 0) !== 0) && (
                        <div
                            className={"flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white text-main badge-sm"}>
                            <span>{workDurations.length + workTimes.length + workDays.length + workWeekDays.length + ((startTime !== "시작시간" && endTime !== "종료시간") ? 1 : 0)}</span>
                        </div>
                    )}
                    적용
                </Button>
            </section>
        </section>
    )
}
export default WorkDurationFilter;
