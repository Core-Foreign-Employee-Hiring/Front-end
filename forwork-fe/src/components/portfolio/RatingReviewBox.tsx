import Tag from "@/src/components/common/Tag";
import MoneyIcon from "@/src/assets/portfolio/MoneyIcon";
import FireIcon from "@/src/assets/portfolio/FireIcon";
import GoodIcon from "@/src/assets/portfolio/GoodIcon";
import LikeIcon from "@/src/assets/portfolio/LikeIcon";
import ClockIcon from "@/src/assets/portfolio/ClockIcon";

interface Props {
    type: "default" | "apply"
}

const RatingReviewBox = (props: Props) => {
    const {type="default"} = props;
    return (
        <section className={"flex flex-col gap-y-3 border border-gray2 rounded-[32px] p-6"}>
            <div className={"flex justify-between"}>
                <div className={"subtitle-lg"}>염수빈</div>
                {type === "apply" && (<Tag className={"bg-mainLight-tag"}>실제 지원</Tag>)}
            </div>
            <div className={"border-b border-gray2 pb-3"}>
                <span className={"body-sm text-gray5"}>
                    외식/음료, 매장/판매, 기타/서비스
                </span>
            </div>
            <section className={"flex gap-x-4"}>
                <div className={"flex gap-x-1"}>
                    <div className={"flex justify-center items-center w-[20px] h-[20px]"}>
                        <MoneyIcon/>
                    </div>
                    <span className={"body-sm text-gray5"}>3</span>
                </div>
                <div className={"flex gap-x-1"}>
                    <div className={"flex justify-center items-center w-[20px] h-[20px]"}>
                        <FireIcon/>
                    </div>
                    <span className={"body-sm text-gray5"}>3</span>
                </div>
                <div className={"flex gap-x-1"}>
                    <div className={"flex justify-center items-center w-[20px] h-[20px]"}>
                        <GoodIcon/>
                    </div>
                    <span className={"body-sm text-gray5"}>3</span>
                </div>
                <div className={"flex gap-x-1"}>
                    <div className={"flex justify-center items-center w-[20px] h-[20px]"}>
                        <LikeIcon/>
                    </div>
                    <span className={"body-sm text-gray5"}>3</span>
                </div>
                <div className={"flex gap-x-1"}>
                    <div className={"flex justify-center items-center w-[20px] h-[20px]"}>
                        <ClockIcon/>
                    </div>
                    <span className={"body-sm text-gray5"}>3</span>
                </div>
            </section>

        </section>
    )
}
export default RatingReviewBox
