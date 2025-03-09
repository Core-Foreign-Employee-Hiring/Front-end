import Tag from "@/src/components/common/Tag";
import Star2Icon from "@/src/assets/recruit-ad/Star2Icon";
import {renderSalaryType} from "@/src/utils/recruit-ad";
import Button from "@/src/components/common/Button";
import HeartIcon from "@/src/assets/recruit-ad/HeartIcon";

const SideAdInfo = () => {

    return (
        <section className={"flex flex-col gap-y-6 w-[411px]"}>
            <article className={"flex flex-col gap-y-3 rounded-[32px] border border-gray3 p-7"}>
                <Tag className={"flex justify-center items-center bg-mainLight-tag"} LeftIcon={() => <Star2Icon/>}>프리미엄
                    공고</Tag>
                <section>
                    {/* 모집조건 */}
                    <section className={"flex flex-col gap-y-6 border-b border-gray2 pb-[24px]"}>
                        <h2 className={"subtitle-lg"}>모집조건</h2>
                        <section className={"flex flex-col gap-y-3"}>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>모집기간</div>
                                <div className={"body-sm"}>2024.12.28(토) ~ 2025.01.01(수)</div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>모집인원</div>
                                <div className={"body-sm"}>2024.12.28(토) ~ 2025.01.01(수)</div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>성별</div>
                                <div className={"body-sm"}>2024.12.28(토) ~ 2025.01.01(수)</div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>우대조건</div>
                                <div className={"body-sm"}>2024.12.28(토) ~ 2025.01.01(수)</div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>학력</div>
                                <div className={"body-sm"}>2024.12.28(토) ~ 2025.01.01(수)</div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>기타조건</div>
                                <div className={"body-sm"}>2024.12.28(토) ~ 2025.01.01(수)</div>
                            </div>
                        </section>
                    </section>
                    <section className={"flex flex-col gap-y-6 mt-[24px]"}>
                        <h2 className={"subtitle-lg"}>근무조건</h2>
                        <section className={"flex flex-col gap-y-3"}>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>직종</div>
                                <div className={"body-sm"}>일반음식점, 치킨피자전문점, 매장 관리 판매</div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>급여</div>
                                <div className={"flex flex-col gap-y-1"}>
                                    <div
                                        className={"flex gap-x-1 items-center body-sm"}>{renderSalaryType("시급")}129,550원
                                    </div>
                                    <div className={"body-sm text-main"}>2024년 최저시급 9,860원</div>
                                    <div className={"body-sm text-gray4"}>카운터 홀청소만</div>
                                </div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>근무기간</div>
                                <div className={"flex flex-col gap-y-1"}>
                                    <div className={"body-sm"}>1주일~1개월(1월 4일 ~ 1월 25일)</div>
                                    <div className={"body-sm text-gray4"}>(수습기간있음, 협의가능)</div>
                                </div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>근무시간</div>
                                <div className={"flex flex-col gap-y-1"}>
                                    <div className={"body-sm"}>1주일~1개월(1월 4일 ~ 1월 25일)</div>
                                    <div className={"body-sm text-gray4"}>(수습기간있음, 협의가능)</div>
                                </div>
                            </div>
                            <div className={"flex gap-x-5"}>
                                <div className={"w-[100px] subtitle-md text-gray5"}>근무요일</div>
                                <div className={"flex flex-col gap-y-1"}>
                                    <div className={"body-sm"}>1주일~1개월(1월 4일 ~ 1월 25일)</div>
                                    <div className={"body-sm text-gray4"}>(수습기간있음, 협의가능)</div>
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </article>
            <section className={"flex gap-x-4"}>
                <Button
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
