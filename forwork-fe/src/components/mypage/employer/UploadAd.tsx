import {MyUploadAdType} from "@/src/types/mypage";
import Tag from "@/src/components/common/Tag";
import CalenderIcon from "@/src/assets/mypage/CalenderIcon";
import SpaceIcon from "@/src/assets/mypage/SpaceIcon";
import TimeIcon from "@/src/assets/mypage/TimeIcon";
import {formatRecruitEndDate} from "@/src/utils/mypage";

const UploadAd = (props: MyUploadAdType) => {
    const {title, recruitStartDate, recruitEndDate, recruitType} = props;


    const switchRecruitType = (recruitType: "GENERAL" | "PREMIUM") => {
        switch (recruitType) {
            case "PREMIUM":
                return (
                    <Tag className={"bg-mainLight-tag"}>프리미엄</Tag>
                )
            default:
                return (
                    <Tag className={"bg-gray2-tag text-gray5"}>일반</Tag>
                )
        }
    }

    return (
        <section className={"p-6 flex flex-col gap-y-5 rounded-[32px] border border-gray2"}>
            <div>
                {switchRecruitType(recruitType)}
            </div>
            <div className={"flex flex-col gap-y-[8px]"}>
                <h2 className={"subtitle-lg"}>{title}</h2>
                <div className={"badge-sm text-gray4 pb-2 border-b border-gray2"}>{formatRecruitEndDate(recruitStartDate, recruitEndDate)}</div>
                <section className={"flex gap-x-1"}>
                    <div className={"flex items-center justify-center w-[20px] h-[20px]"}>
                        <CalenderIcon/>
                    </div>
                    <div className={"flex flex-col gap-y-1 body-sm text-gray5"}>
                        <span>1개월 ~ 3개월 <span className={"text-gray4"}>(협의가능)</span></span>
                        <span>주말 토,일 <span className={"text-gray4"}>(협의가능)</span></span>
                    </div>
                </section>
                <section className={"flex gap-x-1 body-sm text-gray5"}>
                    <div className={"flex items-center justify-center w-[20px] h-[20px]"}>
                        <SpaceIcon/>
                    </div>
                    <span>흥덕구 복대동</span>
                </section>
                <section className={"flex gap-x-1 body-sm text-gray5"}>
                    <div className={"flex items-center justify-center w-[20px] h-[20px]"}>
                        <TimeIcon/>
                    </div>
                    <span>9:00-18:00 <span className={"text-gray4"}>(협의가능)</span></span>
                </section>
            </div>
        </section>
    )
}
export default UploadAd
