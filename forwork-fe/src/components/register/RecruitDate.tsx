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

    return (
        <div className={"flex flex-col gap-y-3"}>
            <section className={"flex gap-x-3 items-center justify-center"}>
                {/* 모집 시작 날짜 */}
                <div className={"rounded-[16px] py-[16.5px] border border-gray3 subtitle-lg px-4 w-full"}>
                    {format(new Date(), 'yyyy.MM.dd')}
                </div>
                <div className={"subtitle-lg"}>-</div>
                {/* 모집 종료 날짜 */}
                <button
                    type={"button"}
                    disabled={regularRecruit}
                    onClick={() => {
                        setIsModalOpen(!isModalOpen)
                        setRegularRecruit(false);
                    }}
                    className={regularRecruit
                        ? "flex justify-between items-center rounded-[16px] py-[10.5px] border border-gray3 subtitle-lg px-4 w-full text-gray4"
                        : "flex justify-between items-center rounded-[16px] py-[10.5px] border border-gray3 subtitle-lg px-4 w-full"}>
                    <span>{
                        recruitEndDate === ""
                            ? "종료시간"
                            : recruitEndDate}
                    </span>
                    <CalendarIcon />
                </button>

            </section>
            {isModalOpen && (
                <Calendar
                    usage={"Finish"}
                    setIsModalOpen={setIsModalOpen}
                    setDateStatus={setDateStatus}
                    setRecruitEndDate={setRecruitEndDate}/>)}
        </div>

    )
}
export default RecruitDate;
