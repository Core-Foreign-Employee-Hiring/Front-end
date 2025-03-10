import Tag from "@/src/components/common/Tag";
import Star2Icon from "@/src/assets/recruit-ad/Star2Icon";
import {renderSalaryType} from "@/src/utils/recruit-ad";
import Button from "@/src/components/common/Button";
import HeartIcon from "@/src/assets/recruit-ad/HeartIcon";
import {RecruitAdDetailData} from "@/src/types/recruit-ad";
import {changeBusinessFieldEnumToKorType} from "@/src/utils/common";
import {switchEnumToKorGenderType} from "@/src/utils/register";
import {likeRecruitAdPost} from "@/src/lib/api/recruit-ad";

const SideAdInfo = (props: RecruitAdDetailData) => {
    const {
        recruitId,
        recruitType,
        recruitStartDate,
        recruitEndDate,
        gender,
        preferredConditions,
        education,
        otherConditions,
        businessFields,
        salaryType,
        salary,
        salaryOther,
        workDuration,
        workDurationOther,
        workTime,
        workTimeOther,
        workDays,
        workDaysOther,
    } = props;

    return (
        <section className={"flex flex-col gap-y-6 w-[411px]"}>
            <article className={"flex flex-col gap-y-3 rounded-[32px] border border-gray3 p-7"}>
                {recruitType === "PREMIUM" && (
                    <Tag className={"flex justify-center items-center bg-mainLight-tag"} LeftIcon={() => <Star2Icon/>}>프리미엄
                        공고</Tag>
                )}
                <section>
                    {/* 모집조건 */}
                    <section className={"flex flex-col gap-y-6 border-b border-gray2 pb-[24px]"}>
                        <h2 className={"subtitle-lg"}>모집조건</h2>
                        <section className={"flex flex-col gap-y-3"}>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>모집기간</div>
                                <div className={"body-sm"}>{`${recruitStartDate} ~ ${recruitEndDate}`}</div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>모집인원</div>
                                <div className={"body-sm"}>{}</div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>성별</div>
                                <div className={"body-sm"}>{switchEnumToKorGenderType(gender)}</div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>우대조건</div>
                                <div className={"body-sm"}>{preferredConditions && preferredConditions.join(", ")}</div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>학력</div>
                                <div className={"body-sm"}>{education}</div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>기타조건</div>
                                <div className={"body-sm"}>{otherConditions}</div>
                            </div>
                        </section>
                    </section>
                    <section className={"flex flex-col gap-y-6 mt-[24px]"}>
                        <h2 className={"subtitle-lg"}>근무조건</h2>
                        <section className={"flex flex-col gap-y-3"}>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>직종</div>
                                <div className={"body-sm"}>
                                    {businessFields && businessFields.map(changeBusinessFieldEnumToKorType).join(", ")}
                                </div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>급여</div>
                                <div className={"flex flex-col gap-y-1"}>
                                    <div
                                        className={"flex gap-x-1 items-center body-sm"}>{renderSalaryType(salaryType)}{salary}원
                                    </div>
                                    <div className={"body-sm text-main"}>2025년 최저시급 10,030원</div>
                                    <div className={"body-sm text-gray4"}>{salaryOther}</div>
                                </div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>근무기간</div>
                                <div className={"flex flex-col gap-y-1"}>
                                    <div className={"body-sm"}>{workDuration && workDuration.join(", ")}</div>
                                    {workDurationOther !== null && (
                                        <div className={"body-sm text-gray4"}>{`(${workDurationOther})`}</div>
                                    )}
                                </div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>근무시간</div>
                                <div className={"flex flex-col gap-y-1"}>
                                    <div className={"body-sm"}>{workTime && workTime.join(", ")}</div>
                                    {workTimeOther !== null && (
                                        <div className={"body-sm text-gray4"}>{`(${workTimeOther})`}</div>
                                    )}
                                </div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>근무요일</div>
                                <div className={"flex flex-col gap-y-1"}>
                                    <div className={"body-sm"}>{workDays && workDays.join(", ")}</div>
                                    {workDaysOther !== null && (
                                        <div className={"body-sm text-gray4"}>{`(${workDaysOther})`}</div>
                                    )}
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </article>
            <section className={"flex gap-x-4"}>
                <Button
                    onClick={() => likeRecruitAdPost(recruitId)}
                    secondClassName={"flex gap-x-0 px-[21.5px] py-5"}
                    className={"border-gray2-button"}
                    LeftIcon={() => <div className={"flex justify-center items-center w-[24px] h-[24px]"}>
                        <HeartIcon/>
                    </div>}>
                    찜
                </Button>
                <Button className={"bg-main-button"} secondClassName={"flex justify-center items-center w-full subtitle-md"}>지원하기</Button>
            </section>
        </section>
    )
}
export default SideAdInfo;
