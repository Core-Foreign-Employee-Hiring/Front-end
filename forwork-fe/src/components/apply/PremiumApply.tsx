import {useParams, useRouter} from "next/navigation";
import {useAtom, useAtomValue} from "jotai/index";
import {premiumApplyDataAtom, recruitIdAtom, recruitTypeAtom} from "@/src/store/recruit-ad/atom";
import useRecruitPreview from "@/src/lib/hooks/useRecruitPreview";
import Button from "@/src/components/common/Button";
import SummaryAd from "@/src/components/common/SummaryAd";
import {RecruitPreviewType} from "@/src/types/recruit-ad";
import UnCheckIcon from "@/src/assets/common/UnCheckIcon";
import {useEffect} from "react";
import useCreatedPortfolioForm from "@/src/lib/hooks/useCreatedPortfolioForm";
import CreatedPortfolioForm from "@/src/components/recruit-ad/CreatedPortfolioForm";

const PremiumApply = () => {
    const router = useRouter();
    const params = useParams();
    const recruitId = useAtomValue(recruitIdAtom)
    const recruitType = useAtomValue(recruitTypeAtom)

    // 공고 미리보기 데이터 불러오기
    const {recruitPreview} = useRecruitPreview(params.id);

    // 프리미엄 채용 공고 지원하기 post 요청 값
    const [premiumApplyData, setPremiumApplyData] = useAtom(premiumApplyDataAtom)

    //사장님이 만든 포트폴리오 형식들 -> 실제 지원파트
    const {portfolioFormData} = useCreatedPortfolioForm(recruitId)

    useEffect(() => {
        console.log("portfolioFormData", portfolioFormData)
    }, [portfolioFormData])

    return (
        <main className={"flex flex-col justify-center items-center mt-[40px]"}>
            <section className={"flex flex-col gap-y-[40px] w-[1200px]"}>

                {/* 공고 요약 보기 */}
                <section className={"flex flex-col gap-y-[12px]"}>
                    <section className={"flex justify-between items-center"}>
                        <h2 className={"title-md"}>지원 알바</h2>
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

                {/* 기본 이력서 */}
                <section className={"flex flex-col gap-y-[12px]"}>
                    <div className={"flex justify-between items-center"}>
                        <h2 className={"title-md"}>내 이력서 <span className={"text-main"}>*</span></h2>
                        <Button
                            className={"button-md py-[7.5px] px-4"}
                            onClick={() => {
                                router.push(`/mypage/employee`)
                            }}>수정하기</Button>
                    </div>
                    {/* TODO: 나중에 현호오빠 기본 이력서 불러와서 붙이기 */}
                </section>

                {/* 포트폴리오 */}
                <section className={"flex flex-col gap-y-[12px]"}>
                    <div className={"flex justify-between items-center"}>
                        <h2 className={"title-md"}>포트폴리오 <span className={"text-main"}>*</span></h2>
                        <Button
                            className={"button-md py-[7.5px] px-4"}
                            onClick={() => {
                                router.push(`/mypage/employee`)
                            }}>수정하기</Button>
                    </div>
                    {/* TODO: 나중에 현호오빠 기본 이력서 불러와서 붙이기 */}
                </section>

                {/* 실제 지원 */}
                {portfolioFormData && portfolioFormData.data && (<CreatedPortfolioForm portfolioForms={portfolioFormData.data}/>)}

                {/* 사장님께 한마디 */}
                <section className={"flex flex-col gap-y-3 flex-shrink-0"}>
                    <div className={"title-md"}>
                        사장님(인사담당자님)께 한마디
                    </div>
                    <div className={"py-6 px-7 rounded-[24px] border border-gray3"}>
                            <textarea
                                onChange={(e) => {
                                    setPremiumApplyData((prev) => ({
                                        ...prev,
                                        generalResumeRequestDTO: {
                                            ...prev.generalResumeRequestDTO,
                                            messageToEmployer: e.target.value,
                                        }
                                    }))
                                }}
                                className={"outline-none w-full h-[200px]"}
                                placeholder={"지원동기나 각오를 간단하게 작성해주세요"}
                                maxLength={300}/>
                        <div className={"flex justify-end small text-gray3"}>{1}/300</div>
                    </div>
                </section>

                {/* 포폴 공개여부 클릭 버튼 */}
                <section className={"flex flex-col gap-y-3 flex-shrink-0"}>
                    <div className={"title-md"}>
                        프리미엄 실제 지원 공고 정보 공개 여부
                    </div>
                    <div className={"subtitle-sm"}>실제 지원한 본인의 포트폴리오 정보를 포트폴리오 서비스에 공개하시겠습니까?</div>
                    <div className={"flex gap-x-5"}>
                        <div className={"flex gap-x-2 items-center"}>
                            {/* 공개 버튼 */}
                            <button
                                type={"button"}
                                onClick={() => {
                                    setPremiumApplyData((prev) => ({
                                        ...prev,
                                        portfolioPublic: false,
                                    }))
                                }}
                                className={!premiumApplyData.portfolioPublic
                                    ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                                    : "flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1.6px] border-gray3"}>
                                {!premiumApplyData.portfolioPublic && (
                                    <div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                            </button>
                            <div className={"button-md text-gray5"}>비공개</div>
                        </div>
                        {/* 비공개 버튼 */}
                        <div className={"flex gap-x-2 items-center"}>
                            <button
                                type={"button"}
                                onClick={() => {
                                    setPremiumApplyData((prev) => ({
                                        ...prev,
                                        portfolioPublic: true,
                                    }))
                                }}
                                className={premiumApplyData.portfolioPublic
                                    ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                                    : "flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1.6px] border-gray3"}>
                                {premiumApplyData.portfolioPublic && (
                                    <div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                            </button>
                            <div className={"button-md text-gray5"}>공개</div>
                        </div>
                    </div>
                </section>


                {/* 버튼 */}
                <section className={"flex flex-col justify-center items-center gap-y-[20px]"}>
                    {/* 개인정보 제 3자 제공 동의 */}
                    <div className={"flex gap-x-2"}>
                        <div
                            onClick={() => {
                                setPremiumApplyData((prev) => ({
                                    ...prev,
                                    generalResumeRequestDTO: {
                                        ...prev.generalResumeRequestDTO,
                                        thirdPartyConsent: !prev.generalResumeRequestDTO.thirdPartyConsent,
                                    }
                                }))
                            }}
                            className={"flex subtitle-md text-gray5 gap-x-2 cursor-pointer"}>
                            <div
                                className={premiumApplyData.generalResumeRequestDTO.thirdPartyConsent
                                    ? "flex w-[24px] h-[24px] bg-main rounded-full items-center justify-center"
                                    : "flex w-[24px] h-[24px] border-[1.6px] border-gray3 rounded-full items-center justify-center"}>
                                <UnCheckIcon/>
                            </div>
                            <div className={"body-sm"}><span className={"text-main"}>(필수)</span>개인정보 제3자 제공 동의</div>
                        </div>
                    </div>
                    <Button
                        onClick={() => {
                            // applyGeneralAd(params.recruitId, generalApplyData).then((r) => {
                            //     console.log(r)
                            //     //TODO: 지원 완료되었다는 모달창 open
                            // })
                        }}
                        disabled={!premiumApplyData.generalResumeRequestDTO.thirdPartyConsent}
                        className={!premiumApplyData.generalResumeRequestDTO.thirdPartyConsent ? "bg-gray2-button" : "bg-main-button cursor-pointer"}
                        secondClassName={"flex justify-center items-center w-full"}>지원하기</Button>
                </section>
            </section>
        </main>
    )
}
export default PremiumApply;
