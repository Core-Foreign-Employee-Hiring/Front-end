export type MyPageStepType = "프로필 설정" | "내 기업 정보" | "내 공고" | "내 근로 계약서" | "지원 현황" | "관심 고용인" | "결제 내역" | "아이디/비밀번호 변경" | "탈퇴하기";

export interface MyDraftAdType {
    recruitId: number;
    title: string;
    createdAt: string;
    updatedAt: string;
}

export interface MyUploadAdType {
    recruitId: number;
    title: string;
    recruitStartDate: string; //"2025-02-28",
    recruitEndDate: string; //"2025-02-28",
    workDuration: string[];
    workDays: string[];
    workTime: string[];
    recruitType: "GENERAL" | "PREMIUM"
}
