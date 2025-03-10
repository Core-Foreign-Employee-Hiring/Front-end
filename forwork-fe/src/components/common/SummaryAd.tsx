import Tag from "@/src/components/common/Tag";
import FireIcon from "@/src/assets/portfolio/FireIcon";
import Button from "@/src/components/common/Button";
import {useRouter} from "next/navigation";
import Image from "next/image";

interface Props {
    type?: "detail" | "mypage";
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
    const {type = "detail", employerReliability, companyIconImage, title, companyName, workDuration, workTime, workDays, recruitStartDate, recruitEndDate} = props;
    const router = useRouter();
    return (
        type === "detail" ? (
            <article className={"flex flex-col gap-y-6 p-8 rounded-[32px] border border-main"}>
                <section className={"flex gap-x-[24px]"}>
                    <div className={"relative w-[100px] h-[100px] -z-10"}>
                        <Image
                            src={companyIconImage || "/포스터.jpg"}
                            alt={companyIconImage || "/포스터.jpg"}
                            fill
                            className={"object-cover rounded-[12px]"} />
                    </div>
                    <div className={"flex flex-col gap-y-2"}>
                        <Tag LeftIcon={() => <FireIcon/>} className={"flex items-center bg-mainLight-tag h-fit"}>계약서 작성률 {employerReliability}% 기업</Tag>
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
        ) : (
            <article className={"flex flex-col gap-y-6 py-6 px-8 rounded-[32px] bg-gray1"}>
                <div className={"flex flex-col gap-y-2"}>
                    <section className={"flex justify-between items-center"}>
                        <Tag LeftIcon={() => <FireIcon/>} className={"flex items-center bg-mainLight-tag h-fit"}>계약서 작성률 50%
                            기업</Tag>
                        <div className={"flex gap-x-3"}>
                            <Button className={"border-gray2-button"} secondClassName={"w-fit"}>공고 보기</Button>
                            <Button
                                onClick={() => {
                                    router.push("/mypage/apply/recommend")
                                }}
                                className={"bg-main-button"} secondClassName={"w-fit py-3 px-4"}>인재 추천받기</Button>
                        </div>

                    </section>
                    <div className={"subtitle-lg"}>“1월 매주 토요일 한달 단기알바” 지원자 현황</div>
                </div>
                <div className={"flex gap-x-6 items-center"}>
                    <div className={"flex flex-col w-[120px]"}>
                        <div className={"subtitle-md text-gray4"}>모집기간</div>
                        <div className={"body-md text-gray5"}>24.12.15~25.01.01</div>
                    </div>
                    <div className={"border-r h-[35px] border-gray3"}/>
                    <div className={"flex flex-col w-[120px]"}>
                        <div className={"subtitle-md text-gray4"}>근무기간</div>
                        <div className={"body-md text-gray5"}>1개월~3개월</div>
                    </div>
                    <div className={"border-r h-[35px] border-gray3"}/>
                    <div className={"flex flex-col w-[120px]"}>
                        <div className={"subtitle-md text-gray4"}>근무요일</div>
                        <div className={"body-md text-gray5"}>주말</div>
                    </div>
                    <div className={"border-r h-[35px] border-gray3"}/>
                    <div className={"flex flex-col w-[120px]"}>
                        <div className={"subtitle-md text-gray4"}>근무시간</div>
                        <div className={"body-md text-gray5"}>9:00-18:00</div>
                    </div>
                </div>
            </article>
        )

    )
}
export default SummaryAd
