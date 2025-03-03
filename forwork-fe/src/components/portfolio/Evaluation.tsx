import {EmployeeEvaluationCountType} from "@/src/types/portfolio";
import EvaluationTag from "@/src/components/portfolio/EvaluationTag";
import GoodIcon from "@/src/assets/portfolio/GoodIcon";
import LikeIcon from "@/src/assets/portfolio/LikeIcon";
import FireIcon from "@/src/assets/portfolio/FireIcon";
import ClockIcon from "@/src/assets/portfolio/ClockIcon";
import SmailIcon from "@/src/assets/portfolio/SmailIcon";

interface Props extends EmployeeEvaluationCountType {
    name: string | undefined;
}

const Evaluation = (props: Props) => {
    const { name, worksDiligently, skilledAtWork, joinCount, politeAndFriendly, noLatenessOrAbsence, goodCustomerService } = props
    return (
        <article className={"flex flex-col gap-y-[16px] p-[32px] border border-gray3 rounded-[24px]"}>
            <h2 className={"title-md"}>{`${name}님은`}</h2>
            <section className={"gap-[24px] mt-[16px] flex flex-wrap "}>
                <EvaluationTag
                    leftElement={() => (
                        <div className={"w-[24px] h-[24px]"}>
                            <SmailIcon width={24} height={24}/>
                        </div>
                    )}
                    count={worksDiligently}>
                    성실하게 일해요
                </EvaluationTag>
                <EvaluationTag
                    leftElement={() => (
                        <div className={"flex items-center justify-center w-[24px] h-[24px]"}>
                            <GoodIcon />
                        </div>
                    )}
                    count={goodCustomerService}>
                    고객 응대를 잘해요
                </EvaluationTag>
                <EvaluationTag
                    leftElement={() => (
                        <div className={"flex items-center justify-center w-[24px] h-[24px]"}>
                            <ClockIcon />
                        </div>
                    )}
                    count={noLatenessOrAbsence}>
                    지각/결근하지 않았어요
                </EvaluationTag>
                <EvaluationTag
                    leftElement={() => (
                        <div className={"flex items-center justify-center w-[24px] h-[24px]"}>
                            <LikeIcon />
                        </div>
                    )}
                    count={politeAndFriendly}>
                    예의바르고 친절해요
                </EvaluationTag>
                <EvaluationTag
                    leftElement={() => (
                        <div className={"flex items-center justify-center w-[24px] h-[24px]"}>
                            <FireIcon />
                        </div>
                    )}
                    count={skilledAtWork}>
                    업무 능력이 좋아요
                </EvaluationTag>
            </section>
            <div className={"text-gray5 small"}>{`*${joinCount}명이 참여했어요`}</div>
        </article>
    )
}
export default Evaluation
