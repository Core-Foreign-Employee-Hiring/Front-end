import {ApplicationMethodEnumType} from "@/src/types/register";

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

export interface ApplicationType {
    recruitId: number;
    title: string;
    recruitStartDate: string; //"2025-02-28",
    recruitEndDate: string; //"2025-02-28",
    workDuration: string[];
    workDays: string[];
    workTime: string[];
    resumeCount: number;
}

export interface ContractType {
    recruitId: number;
    title: string;
    recruitStartDate: string; //"2025-02-28",
    recruitEndDate: string; //"2025-02-28",
    employerName: string;
    workDuration: string[];
    workDays: string[];
    workTime: string[];
}

export interface ResumeType {
    resumeId: number;
    name: string;
    birthday: string;
    phoneNumber: string;
    applyMethod: ApplicationMethodEnumType,
    recruitmentStatus: RecruitmentStatusType,
    evaluationStatus: EvaluationStatusType,
    contractStatus: EvaluationStatusType,
    mail: boolean;
}


export type RecruitmentStatusType = null | "PENDING" | "REJECTED" | "APPROVED"
export type RecruitmentStatusContentType = "전체" | "대기" | "승인" | "거절"
export type EvaluationStatusType = "COMPLETED" | "NOT_EVALUATED" | "NONE"
export type ContractStatusType = "NOT_COMPLETED" | "COMPLETED" | "DRAFT_WRITING" | "COMPLETED_WRITING" | "PENDING_APPROVAL" | "APPROVED" | "REJECTED" | "NONE"
export type ContractStatusContentType = "전체" | "미작성" | "작성"
