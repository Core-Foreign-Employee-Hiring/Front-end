import Tag from "@/src/components/common/Tag";
import FireIcon from "@/src/assets/portfolio/FireIcon";
import Button from "@/src/components/common/Button";
import {useRouter} from "next/navigation";
import Image from "next/image";

interface Props {
    employerReliability: number;
    companyIconImage: string | null;
    title: string;
    companyName: string;
    workDuration: string[],
    workTime: string[];
    workDays: string[];
    recruitStartDate: string;
    recruitEndDate: string;
}

const SummaryAd = (props: Props) => {
    const {employerReliability, companyIconImage, title, companyName, workDuration, workTime, workDays, recruitStartDate, recruitEndDate} = props;
    const router = useRouter();
    return (
        <article className={"flex flex-col gap-y-6 p-8 rounded-[32px] bg-gray1"}>
            <section className={"flex gap-x-[24px]"}>
                <div className={"relative w-[100px] h-[100px] -z-10"}>
                    <Image
                        src={companyIconImage || "/포스터.jpg"}
                        alt={companyIconImage || "/포스터.jpg"}
                        fill
                        className={"object-cover rounded-[12px]"}/>
                </div>
                <div className={"flex flex-col gap-y-2"}>
                    <Tag LeftIcon={() => <FireIcon/>} className={"flex items-center bg-mainLight-tag h-fit"}>계약서
                        작성률 {employerReliability}% 기업</Tag>
                    <div className={"flex flex-col gap-y-1"}>
                        <span className={"subtitle-md text-gray5"}>{companyName}</span>
                        <span className={"subtitle-lg"}>{title}</span>
                    </div>
                </div>
            </section>
            <section className={"flex gap-x-[32px] items-center"}>
                <div className={"flex flex-col"}>
                    <span className={"subtitle-md text-gray4"}>모집기간</span>
                    <span className={"text-gray5 body-md"}>{recruitStartDate + "~" + recruitEndDate}</span>
                </div>
                <div className={"border-r border-gray3 h-[35px]"}/>
                <div className={"flex flex-col"}>
                    <span className={"subtitle-md text-gray4"}>근무기간</span>
                    <div className={"flex flex-col"}>
                        {workDuration.map((duration) => {
                            return (
                                <span key={duration} className={"text-gray5 body-md"}>{duration}</span>
                            )
                        })}
                    </div>
                </div>
                <div className={"border-r border-gray3 h-[35px]"}/>
                <div className={"flex flex-col"}>
                    <span className={"subtitle-md text-gray4"}>근무요일</span>
                    <div className={"flex flex-col"}>
                        {workDays.map((day) => {
                            return (
                                <span key={day} className={"text-gray5 body-md"}>{day}</span>
                            )
                        })}
                    </div>
                </div>
                <div className={"border-r border-gray3 h-[35px]"}/>
                <div className={"flex flex-col"}>
                    <span className={"subtitle-md text-gray4"}>근무시간</span>
                    <div className={"flex flex-col"}>
                        {workTime.map((time) => {
                            return (
                                <span key={time} className={"text-gray5 body-md"}>{time}</span>
                            )
                        })}
                    </div>
                </div>
            </section>

        </article>
    )
}
export default SummaryAd
