import {
    AdEnumType,
    ApplicationMethodEnumType,
    BusinessFieldEnumType,
    SalaryType
} from "@/src/types/register";
import {EmployerEvaluationCountType} from "@/src/types/portfolio";

export interface RecruitAdDetailData {
    recruitId: number;
    companyName: string;
    companyIconImage: string | null,
    title: string;
    address: {
        zipcode: string;
        address1: string;
        address2: string;
    },
    recruitStartDate: string;
    recruitEndDate: string;
    recruitCount: number;
    gender: null,
    education: string;
    otherConditions: string;
    preferredConditions: string[];
    businessFields: BusinessFieldEnumType[];
    applicationMethods: ApplicationMethodEnumType[],
    workDuration: string[],
    workDurationOther: string | null;
    workTime: string[];
    workTimeOther: string | null;
    workDays: string[];
    workDaysOther: null,
    salary: string;
    salaryType: SalaryType;
    salaryOther: string | null;
    latitude: number;
    longitude: number;
    posterImageUrl: string | null;
    recruitType: AdEnumType;
    employerAddress: {
        zipcode: string;
        address1: string;
        address2: string;
    };
    employerContact: string; //번호
    representative: string; //대표자명
    employerEmail: string;
    businessRegistrationNumber: string;
    employerEvaluationCountDTO: EmployerEvaluationCountType;
    employerReliability: number;
    liked: boolean;
}

export interface RecruitPreviewType {
    recruitId: number;
    title: string;
    recruitStartDate: string;
    recruitEndDate: string;
    workDuration: string[],
    workDays: string[];
    workTime: string[];
    employerReliability: number;
    companyName: string;
    companyIconImage: string;
}

// 일반 채용 공고 지원하기 post 요청 값
export interface ApplyGeneralAdType {
    messageToEmployer: string;
    thirdPartyConsent: boolean;
    applyMethod: ApplicationMethodEnumType;
}

// 프리미엄 채용 공고 지원하기 post 요청 값
export interface ApplyPremiumAdType {
    generalResumeRequestDTO: ApplyGeneralAdType;
    resumePortfolios: ResumePortfolioType[];
    public: boolean;
}

export interface ResumePortfolioType {
    portfolioId: number;
    title: string;
    content: string;
}

