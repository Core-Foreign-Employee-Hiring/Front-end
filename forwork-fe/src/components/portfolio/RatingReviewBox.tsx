import Tag from "@/src/components/common/Tag";
import MoneyIcon from "@/src/assets/portfolio/MoneyIcon";
import FireIcon from "@/src/assets/portfolio/FireIcon";
import GoodIcon from "@/src/assets/portfolio/GoodIcon";
import LikeIcon from "@/src/assets/portfolio/LikeIcon";
import ClockIcon from "@/src/assets/portfolio/ClockIcon";
import {ApplyPortfolioType, BasicPortfolioType} from "@/src/types/portfolio";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {changeBusinessFieldEnumToKorType} from "@/src/utils/common";

interface Props extends Partial<BasicPortfolioType & ApplyPortfolioType> {
    type?: "default" | "apply";
}


const RatingReviewBox = (props: Props) => {
    const {type="default", name, employeeEvaluationCount, employeeId, resumeId, businessFields} = props;
    const router = useRouter();

    return (
        <section
            onClick={() => {
                type === "default" ?  router.push(`/portfolio/${employeeId}`) : router.push(`/portfolio/${resumeId}`) ;
            }}
            className={"flex flex-col gap-y-3 border border-gray2 rounded-[32px] p-6 cursor-pointer"}>
            <div className={"flex justify-between"}>
                <div className={"subtitle-lg"}>{name}</div>
                {type === "apply" && (<Tag className={"bg-mainLight-tag"}>실제 지원</Tag>)}
            </div>
            {type === "apply" && (
                <div className={"border-b border-gray2 pb-3"}>
                    {businessFields?.map((businessField) => {
                        return (
                            <span
                                key={businessField}
                                className={"body-sm text-gray5"}>
                                {changeBusinessFieldEnumToKorType(businessField)}
                            </span>
                        )
                    })}

                </div>
            )}
            <section className={"flex gap-x-4"}>
                {employeeEvaluationCount?.worksDiligently !== 0 && (
                    <div className={"flex gap-x-1"}>
                    <div className={"flex justify-center items-center w-[20px] h-[20px]"}>
                            <MoneyIcon/>
                        </div>
                        <span className={"body-sm text-gray5"}>{employeeEvaluationCount?.worksDiligently}</span>
                    </div>
                )}
                {employeeEvaluationCount?.skilledAtWork !== 0 && (
                    <div className={"flex gap-x-1"}>
                        <div className={"flex justify-center items-center w-[20px] h-[20px]"}>
                            <FireIcon/>
                        </div>
                        <span className={"body-sm text-gray5"}>{employeeEvaluationCount?.skilledAtWork}</span>
                    </div>)
                }
                {employeeEvaluationCount?.skilledAtWork !==0 && (
                    <div className={"flex gap-x-1"}>
                        <div className={"flex justify-center items-center w-[20px] h-[20px]"}>
                            <GoodIcon/>
                        </div>
                        <span className={"body-sm text-gray5"}>{employeeEvaluationCount?.goodCustomerService}</span>
                    </div>
                )}
                {employeeEvaluationCount?.politeAndFriendly !== 0 && (
                    <div className={"flex gap-x-1"}>
                        <div className={"flex justify-center items-center w-[20px] h-[20px]"}>
                            <LikeIcon/>
                        </div>
                        <span className={"body-sm text-gray5"}>{employeeEvaluationCount?.politeAndFriendly}</span>
                    </div>
                )}
                {employeeEvaluationCount?.noLatenessOrAbsence !== 0 && (
                    <div className={"flex gap-x-1"}>
                        <div className={"flex justify-center items-center w-[20px] h-[20px]"}>
                            <ClockIcon/>
                        </div>
                        <span className={"body-sm text-gray5"}>{employeeEvaluationCount?.noLatenessOrAbsence}</span>
                    </div>
                )}
            </section>

        </section>
    )
}
export default RatingReviewBox
