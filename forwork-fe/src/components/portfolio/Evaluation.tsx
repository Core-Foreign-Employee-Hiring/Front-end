import {EmployeeEvaluationCountType, EmployerEvaluationCountType} from "@/src/types/portfolio";
import EvaluationTag from "@/src/components/portfolio/EvaluationTag";
import GoodIcon from "@/src/assets/portfolio/GoodIcon";
import LikeIcon from "@/src/assets/portfolio/LikeIcon";
import FireIcon from "@/src/assets/portfolio/FireIcon";
import ClockIcon from "@/src/assets/portfolio/ClockIcon";
import SmailIcon from "@/src/assets/portfolio/SmailIcon";
import Star2Icon from "@/src/assets/recruit-ad/Star2Icon";
import MoneyIcon from "@/src/assets/portfolio/MoneyIcon";

interface Props extends EmployeeEvaluationCountType, EmployerEvaluationCountType {
    type: "employee" | "employer";
    name: string | undefined;
    employerReliability: number;
}

const Evaluation = (props: Props) => {
    const {
        type,
        name,
        worksDiligently,
        skilledAtWork,
        joinCount,
        politeAndFriendly,
        noLatenessOrAbsence,
        goodCustomerService,
        paysOnTime,
        keepsContractDates,
        respectsEmployees,
        friendlyBoss,
        fairWorkload,
        employerReliability
    } = props
    return (
        <article className={"flex flex-col gap-y-3"}>
            <h2 className={"title-md"}>{`\'${name}\'은(는)`}</h2>
            <article className={"flex flex-col gap-y-[16px] p-[32px] border border-gray3 rounded-[24px]"}>
                {type === "employee" ? (
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
                                    <GoodIcon/>
                                </div>
                            )}
                            count={goodCustomerService}>
                            고객 응대를 잘해요
                        </EvaluationTag>
                        <EvaluationTag
                            leftElement={() => (
                                <div className={"flex items-center justify-center w-[24px] h-[24px]"}>
                                    <ClockIcon/>
                                </div>
                            )}
                            count={noLatenessOrAbsence}>
                            지각/결근하지 않았어요
                        </EvaluationTag>
                        <EvaluationTag
                            leftElement={() => (
                                <div className={"flex items-center justify-center w-[24px] h-[24px]"}>
                                    <LikeIcon/>
                                </div>
                            )}
                            count={politeAndFriendly}>
                            예의바르고 친절해요
                        </EvaluationTag>
                        <EvaluationTag
                            leftElement={() => (
                                <div className={"flex items-center justify-center w-[24px] h-[24px]"}>
                                    <FireIcon/>
                                </div>
                            )}
                            count={skilledAtWork}>
                            업무 능력이 좋아요
                        </EvaluationTag>
                    </section>
                ) : (
                    <section className={"flex flex-col gap-y-4"}>
                        <div className={"text-gray5 small"}>{`*${joinCount}명이 참여했어요`}</div>
                        <section className={"gap-[24px] flex flex-wrap "}>
                            <EvaluationTag
                                leftElement={() => (
                                    <div className={"flex items-center justify-center w-[20px] h-[20px]"}>
                                        <Star2Icon size={20}/>
                                    </div>
                                )}
                                count={worksDiligently}>
                                근로 계약서를 {employerReliability}% 작성한 기업이에요
                            </EvaluationTag>
                            <EvaluationTag
                                leftElement={() => (
                                    <div className={"flex items-center justify-center w-[20px] h-[20px]"}>
                                        <MoneyIcon/>
                                    </div>
                                )}
                                count={paysOnTime}>
                                약속된 급여를 제때 줘요
                            </EvaluationTag>
                            <EvaluationTag
                                leftElement={() => (
                                    <div className={"flex items-center justify-center w-[20px] h-[20px]"}>
                                        <SmailIcon width={20} height={20}/>
                                    </div>
                                )}
                                count={respectsEmployees}>
                                알바생을 존중해줘요
                            </EvaluationTag>
                            <EvaluationTag
                                leftElement={() => (
                                    <div className={"flex items-center justify-center w-[20px] h-[20px]"}>
                                        <ClockIcon/>
                                    </div>
                                )}
                                count={keepsContractDates}>
                                계약된 날짜를 잘 지켰어요
                            </EvaluationTag>
                            <EvaluationTag
                                leftElement={() => (
                                    <div className={"flex items-center justify-center w-[20px] h-[20px]"}>
                                        <FireIcon/>
                                    </div>
                                )}
                                count={fairWorkload}>
                                업무 강도가 적당해요
                            </EvaluationTag>
                            <EvaluationTag
                                leftElement={() => (
                                    <div className={"flex items-center justify-center w-[20px] h-[20px]"}>
                                        <LikeIcon/>
                                    </div>
                                )}
                                count={friendlyBoss}>
                                사장님이 친절해요
                            </EvaluationTag>
                        </section>
                    </section>
                )}
            </article>
        </article>

    )
}
export default Evaluation
