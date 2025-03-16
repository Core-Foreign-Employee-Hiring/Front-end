import {useParams, useRouter} from "next/navigation";
import {useAtom, useAtomValue} from "jotai/index";

import {generalApplyDataAtom, recruitIdAtom, recruitTypeAtom} from "@/src/store/recruit-ad/atom";
import useRecruitPreview from "@/src/lib/hooks/useRecruitPreview";
import {RecruitPreviewType} from "@/src/types/recruit-ad";
import Button from "@/src/components/common/Button";
import SummaryAd from "@/src/components/common/SummaryAd";
import UnCheckIcon from "@/src/assets/common/UnCheckIcon";

const GeneralApply = () => {
    const router = useRouter();
    const params = useParams();
    const recruitId = useAtomValue(recruitIdAtom)
    const recruitType = useAtomValue(recruitTypeAtom)

    // 공고 미리보기 데이터 불러오기
    const {recruitPreview} = useRecruitPreview(params.id);
    // 일반 채용 공고 지원하기 post 요청 값
    const [generalApplyData, setGeneralApplyData] = useAtom(generalApplyDataAtom)

    return (
        <main className={"flex flex-col justify-center items-center mt-[40px]"}>
            <section className={"flex flex-col gap-y-[40px] w-[1200px]"}>
                {/* 공고 요약 보기 */}
                <section className={"flex flex-col gap-y-[12px]"}>
                    <section className={"flex justify-between items-center"}>
                        <h1 className={"title-md"}>지원 알바</h1>
                        <Button
                            className={"button-md text-gray5 py-[7.5px] px-4"}
                            onClick={() => {
                                if (recruitType === "PREMIUM") {
                                    router.push(`/premium/${recruitId}`)
                                } else {
                                    router.push(`/general/${recruitId}`)
                                }
                            }}>
                            공고 보러가기
                        </Button>
                    </section>
                    {recruitPreview && (
                        <SummaryAd {...recruitPreview as RecruitPreviewType} />
                    )}
                </section>
                <section className={"flex gap-x-[40px] flex-shrink-0 w-full"}>
                    {/* 기본 이력서 */}
                    <section className={"flex flex-col gap-y-[12px]"}>
                        <div className={"flex justify-between items-center"}>
                            <div className={"title-md"}>내 이력서 <span className={"text-main"}>*</span></div>
                            <Button
                                className={"button-md py-[7.5px] px-4"}
                                onClick={() => {
                                    router.push(`/mypage/employee`)
                                }}>수정하기</Button>
                        </div>
                        {/* TODO: 나중에 현호오빠 기본 이력서 불러와서 붙이기 */}
                        <div className={"w-[580px] border"}></div>
                    </section>
                    {/* 사장님께 한마디 */}
                    <section className={"flex flex-col gap-y-3 flex-shrink-0 w-[580px]"}>
                        <div className={"title-md"}>
                            사장님(인사담당자님)께 한마디
                        </div>
                        <div className={"py-6 px-7 rounded-[24px] border border-gray3"}>
                            <textarea
                                onChange={(e) => {
                                    setGeneralApplyData((prev) => ({
                                        ...prev,
                                        messageToEmployer: e.target.value,
                                    }))
                                }}
                                className={"outline-none w-full h-[180px]"}
                                placeholder={"지원동기나 각오를 간단하게 작성해주세요"}
                                maxLength={300} />
                            <div className={"flex justify-end small text-gray3"}>{1}/300</div>
                        </div>
                    </section>
                </section>
                {/* 버튼 */}
                <section className={"flex flex-col justify-center items-center gap-y-[20px]"}>
                    <div className={"flex gap-x-2"}>
                        <div
                            onClick={() => {
                                setGeneralApplyData((prev) => ({...prev,
                                    thirdPartyConsent: !generalApplyData.thirdPartyConsent,
                                }))
                            }}
                            className={"flex subtitle-md text-gray5 gap-x-2 cursor-pointer"}>
                            <div
                                className={generalApplyData.thirdPartyConsent
                                        ? "flex w-[24px] h-[24px] bg-main rounded-full items-center justify-center"
                                        : "flex w-[24px] h-[24px] border-[1.6px] border-gray3 rounded-full items-center justify-center"}>
                                <UnCheckIcon/>
                            </div>
                            <div className={"body-sm"}><span className={"text-main"}>(필수)</span>개인정보 제3자 제공 동의</div>
                        </div>
                    </div>
                    <Button
                        disabled={!generalApplyData.thirdPartyConsent}
                        className={!generalApplyData.thirdPartyConsent ? "bg-gray2-button" : "bg-main-button cursor-pointer"}
                        secondClassName={"flex justify-center items-center w-full"}>지원하기</Button>
                </section>
            </section>
        </main>)
}
export default GeneralApply;
