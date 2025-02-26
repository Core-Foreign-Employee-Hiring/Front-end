import dayjs from "dayjs";
import {format} from "date-fns";
import CalendarIcon from "@/src/assets/register/CalendarIcon";
import Calendar from "@/src/components/register/Calendar";
import {Dispatch, SetStateAction, useState} from "react";

interface Props {
    regularRecruit: boolean; //상시모집이 true일 경우에 모집종료날짜 설정 X
    setRegularRecruit: Dispatch<SetStateAction<boolean>>;
    recruitEndDate: string;
    setRecruitEndDate: Dispatch<SetStateAction<string>>;
}

const RecruitDate = (props: Props) => {
    const {regularRecruit, setRegularRecruit, recruitEndDate, setRecruitEndDate} = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    /**
     * 시작 날짜(or 오늘 날짜) 이전 날짜는 눌리지 않도록 disabled 제어하는 함수
     * @param date 날짜
     * @param usage 캘린더가 사용된 용도 (Start, Finish)
     */
    const setDateStatus = (date: Date, usage: string) => {
        let day = dayjs();
        //StartDate 를 설정할 때 disabled 조작
        if (usage == 'Start') {
            return day.format(format(new Date(), 'yyyy.MM.dd')) > day.format(format(date, 'yyyy.MM.dd'));
        }
        //EndDate 를 설정할 때 disabled 조작
        if (usage == 'Finish') {
            return day.format(format(new Date(), 'yyyy.MM.dd')) > day.format(format(date, 'yyyy.MM.dd'));
        }
    };

    //
    // const recruitDateRadioButton = () => {
    //     return (
    //
    //     )
    // }

    return (
        <div className={"flex flex-col gap-y-5"}>
            <section className={"flex flex-col gap-y-2"}>
                <section className={"flex gap-x-2 items-center"}>
                    <button
                        type={"button"}
                        onClick={() => {
                            setRegularRecruit(false);
                            setRecruitEndDate("")
                        }}
                        className={!regularRecruit
                            ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                            : "flex justify-center items-center w-[20px] h-[20px] rounded-full border border-gray4"}>
                        {!regularRecruit && (<div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                    </button>
                    <div className={"button-md text-gray5"}>기간 선택</div>
                </section>
                {!regularRecruit && (
                    <section className={"flex gap-x-3 items-center"}>
                        {/* 모집 시작 날짜 */}
                        <div className={"rounded-[16px] p-4 border border-gray2 body-md px-4 w-[336px]"}>
                            {format(new Date(), 'yyyy.MM.dd')}
                        </div>
                        <div className={"subtitle-lg"}>-</div>
                        {/* 모집 종료 날짜 */}
                        <div className={"relative"}>
                            <button
                                type={"button"}
                                disabled={regularRecruit}
                                onClick={() => {
                                    setIsModalOpen(!isModalOpen)
                                    setRegularRecruit(false);
                                }}
                                className={regularRecruit
                                    ? "flex justify-between items-center rounded-[16px] border border-gray2 body-md p-4 w-[336px] text-gray4"
                                    : "flex justify-between items-center rounded-[16px] border border-gray2 body-md p-4 w-[336px]"}>
                            <span>{
                                recruitEndDate === ""
                                    ? "모집 종료"
                                    : recruitEndDate}
                            </span>
                            </button>
                            {isModalOpen && (
                                <Calendar
                                    className={"absolute w-full"}
                                    usage={"Finish"}
                                    setIsModalOpen={setIsModalOpen}
                                    setDateStatus={setDateStatus}
                                    setRecruitEndDate={setRecruitEndDate}/>)}
                        </div>
                    </section>
                )}
            </section>

            <section className={"flex gap-x-2 items-center"}>
                <button
                    type={"button"}
                    onClick={() => {
                        setRegularRecruit(true);
                        setRecruitEndDate("")
                    }}
                    className={regularRecruit
                        ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                        : "flex justify-center items-center w-[20px] h-[20px] rounded-full border border-gray4"}>
                    {regularRecruit && (<div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                </button>
                <div className={"button-md text-gray5"}>상시모집</div>
            </section>
        </div>

    )
}
export default RecruitDate;
