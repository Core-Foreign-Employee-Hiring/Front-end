import {MyPageStepType} from "@/src/types/mypage";

export const myPageMenuContents: MyPageStepType[] = ["프로필 설정", "내 기업 정보", "내 공고", "내 근로 계약서", "지원 현황", "관심 고용인", "결제 내역", "아이디/비밀번호 변경", "탈퇴하기"]

export const formatRecruitEndDate = (recruitStartDate: string, recruitEndDate: string) => {
    if (recruitEndDate === "2099-12-31") {
        return "상시 모집"
    } else {
        return recruitStartDate + " ~ " + recruitEndDate
    }
}
