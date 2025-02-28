import {ContractStatusContentType, MyPageStepType, RecruitmentStatusContentType} from "@/src/types/mypage";

export const myPageMenuContents: MyPageStepType[] = ["프로필 설정", "내 기업 정보", "내 공고", "내 근로 계약서", "지원 현황", "관심 고용인", "결제 내역", "아이디/비밀번호 변경", "탈퇴하기"]

export const formatRecruitEndDate = (recruitStartDate: string, recruitEndDate: string) => {
    if (recruitEndDate === "2099-12-31") {
        return "상시 모집"
    } else {
        return recruitStartDate + " ~ " + recruitEndDate
    }
}

export const recruitmentStatusContents: RecruitmentStatusContentType[] = ["전체", "승인", "거절", "대기"]
export const contractStatusContents: ContractStatusContentType[] = ["전체", "작성","미작성"]

export const switchRecruitmentStatusToEnum = (recruitmentStatus: RecruitmentStatusContentType ) => {
    switch (recruitmentStatus) {
        case "대기":
            return "PENDING"
        case "승인":
            return "APPROVED"
        case "거절":
            return "REJECTED"
        default:
            return null
    }
}
export const switchContractStatusToEnum = (contractStatus: ContractStatusContentType) => {
    switch (contractStatus) {
        case "작성":
            return "COMPLETED"
        case "미작성":
            return "NOT_COMPLETED"
        default:
            return "NONE"
    }
}
