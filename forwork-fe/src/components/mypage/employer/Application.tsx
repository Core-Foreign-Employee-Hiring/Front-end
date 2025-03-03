import {ApplicationType} from "@/src/types/mypage";
import CalenderIcon from "@/src/assets/mypage/CalenderIcon";
import SpaceIcon from "@/src/assets/mypage/SpaceIcon";
import {useRouter} from "next/navigation";
import {formatRecruitEndDate} from "@/src/utils/mypage";

const Application = (props: ApplicationType) => {
    const {title, recruitEndDate, recruitStartDate, recruitId, workDays, workTime, workDuration, resumeCount} = props;
    const router = useRouter();
    return (
        <section
            onClick={() => {
                router.push(`/mypage/apply/${recruitId}`)
            }}
            className={"flex justify-between p-6 rounded-[32px] border border-gray2 w-full items-center cursor-pointer"}>
            <div className={"flex flex-col gap-y-3"}>
                <h2 className={"subtitle-lg"}>{title}</h2>
                <section className={"flex gap-x-[30px]"}>
                    <div className={"flex gap-x-1 body-sm items-center text-gray5"}>
                        <div className={"flex items-center justify-center w-[20px] h-[20px]"}>
                            <CalenderIcon/>
                        </div>
                        <div className={"flex gap-x-1 "}>
                            <span>1개월 ~ 3개월 <span className={"text-gray4"}>(협의가능)</span></span>
                            <span>/</span>
                            <span> 주말 토,일 <span className={"text-gray4"}>(협의가능)</span></span>
                        </div>
                    </div>
                    <div className={"flex gap-x-1 body-sm items-center text-gray5"}>
                        <div className={"flex items-center justify-center w-[20px] h-[20px]"}>
                            <SpaceIcon/>
                        </div>
                        <span>흥덕구 복대동</span>
                    </div>
                    <div className={"flex gap-x-1 body-sm items-center text-gray5"}>
                        <div className={"flex items-center justify-center w-[20px] h-[20px]"}>
                            <CalenderIcon/>
                        </div>
                        <span>9:00-18:00 <span className={"text-gray4"}>(협의가능)</span></span>
                    </div>
                </section>
                <div className={"badge-sm text-gray4"}>{formatRecruitEndDate(recruitStartDate, recruitEndDate)}</div>
            </div>
            <div className={"subtitle-lg text-main w-[54px]"}>{resumeCount}명</div>
        </section>
    )
}
export default Application
