import {atom} from "jotai/index";
import {AdEnumType, AdType, ApplicationMethodEnumType} from "@/src/types/register";
import {ApplyGeneralAdType, ApplyPremiumAdType, ResumePortfolioType} from "@/src/types/recruit-ad";

export const recruitIdAtom = atom<number>(0)
export const recruitTypeAtom = atom<AdEnumType>("GENERAL")
// 일반 채용 공고 지원하기 post 요청 값
export const generalApplyDataAtom = atom<ApplyGeneralAdType>({
    messageToEmployer: "",
    thirdPartyConsent: false,
    applyMethod: "ONLINE",
})

// 프리미엄 채용 공고 지원하기 post 요청 값
export const premiumApplyDataAtom = atom<ApplyPremiumAdType>({
    generalResumeRequestDTO: {
        messageToEmployer: "",
        thirdPartyConsent: false,
        applyMethod: "ONLINE",
    },
    resumePortfolios: [],
    portfolioPublic: false,
})
