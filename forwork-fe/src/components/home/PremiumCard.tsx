import {useRouter} from "next/navigation";
import {twMerge} from "tailwind-merge";

import {PremiumContentType} from "@/src/types/premium";
import LocalFireDepartmentIcon from "@/src/assets/home/LocalFireDepartmentIcon";
import LocationOnIcon from "@/src/assets/home/LocationOnIcon";
import ScheduleIcon from "@/src/assets/home/ScheduleIcon";
import DayIcon from "@/src/assets/home/DayIcon";
import Tag from "@/src/components/common/Tag";
import {formatDateRange} from "@/src/utils/premium";
import {renderSalaryType} from "@/src/utils/recruit-ad";

const PremiumCard = (props: PremiumContentType) => {
    const {
        recruitId,
        companyName,
        title,
        address,
        workTime,
        workDays,
        workDuration,
        salary,
        salaryType,
        recruitPeriod,
        jump} = props;
    const router = useRouter();

    return (
        <div
            onClick={() => {
                router.push(`/premium/${recruitId}`);
            }}
            className={"flex flex-col gap-y-5 justify-between border border-gray2 rounded-[32px] p-6 cursor-pointer"}>
            <div className={"flex flex-col gap-y-[9px]"}>
                {/* 계약서 태그 */}
                <div className={"flex gap-x-1"}>
                    {jump && (<Tag className={"bg-error-light-tag"}>광고</Tag>)}
                    <Tag className={"bg-mainLight-tag flex items-center justify-center"} LeftIcon={() => (
                        <div className={"flex items-center w-[12.5px] h-[13.5px]"}><LocalFireDepartmentIcon/></div>
                    )}>계약서 작성률 50%</Tag>
                </div>

                {/* 공고제목 */}
                <div className={"subtitle-lg"}>
                    {title}
                </div>
                {/* 회사명 */}
                <div className={"body-md"}>{companyName}</div>
                <div className={"flex flex-col gap-y-1"}>
                    {/* 주소 */}
                    <div className={"flex gap-x-1 items-center"}>
                        <div className={"flex justify-center items-center w-[20px] h-[20px]"}><LocationOnIcon/></div>
                        <div className={"flex gap-x-1 text-gray5 body-sm"}>
                            <span>{address.address1}</span>
                            <span>{address.address2}</span>
                        </div>
                    </div>
                    {/* 근무시간 */}
                    <div className={"flex gap-x-1 items-center"}>
                        <div className={"flex items-center justify-center w-[20px] h-[20px]"}><ScheduleIcon/></div>
                        <div className={"flex flex-col gap-y-1"}>
                            {workTime.map((time) => {
                                return (
                                    <div
                                        key={time}
                                        className={"text-gray5 body-sm"}>{time}</div>

                                )
                            })}
                        </div>
                    </div>
                    {/* 근무요일 */}
                    <div className={"flex gap-x-1 "}>
                        <div className={"flex items-center w-[20px] h-[20px]"}><DayIcon /></div>
                        <div className={"flex flex-col gap-y-1"}>
                            {workDuration.map((duration) => {
                                return (
                                    <div key={duration} className={"text-gray5 body-sm"}>{duration}</div>
                                )
                            })}
                            {workDays.map((day) => {
                                return (
                                    <div key={day} className={"text-gray5 body-sm"}>{day}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <section className={"flex justify-between"}>
                {/* 급여 */}
                <div className={"flex gap-x-[6px] items-center"}>
                    {renderSalaryType(salaryType)}
                    <div className={"subtitle-sm"}>{salary}원</div>
                </div>
                <div className={"text-gray5 badge-sm"}>{formatDateRange(recruitPeriod)}</div>
            </section>
        </div>
    )
}
export default PremiumCard;
