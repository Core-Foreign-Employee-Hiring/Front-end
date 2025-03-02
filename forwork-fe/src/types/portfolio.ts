import {BusinessFieldEnumType} from "@/src/types/register";

export interface BasicPortfolioType {
    employeeId: number;
    name: string;
    employeeEvaluationCount: EmployeeEvaluationCountType
}
export interface ApplyPortfolioType {
    resumeId: number;
    name: string;
    businessFields: BusinessFieldEnumType[];
    employeeEvaluationCount: EmployeeEvaluationCountType;
}

export interface BasicDetailPortfolioType {
    employeeId: number;
    name: string;
    nationality: string;
    education: string;
    visa: string;
    birthday: string;
    email: string;
    employeePortfolioDTO: EmployeePortfolioDTOType;
    employeeEvaluationCountDTO: EmployeeEvaluationCountType;
}

export interface EmployeePortfolioDTOType {
    introduction: string;
    enrollmentCertificateUrl: string;
    transcriptUrl: string;
    partTimeWorkPermitUrl: string;
    topic: "NONE",
    englishTestType: string;
    englishTestScore: number;
    experiences: ExperienceType[];
    certifications: CertificationType[];
    awards: AwardType[];
    portfolioPublic: boolean;
}

export interface EmployeeEvaluationCountType {
    worksDiligently: number;
    noLatenessOrAbsence: number;
    politeAndFriendly: number;
    goodCustomerService: number;
    skilledAtWork: number;
    joinCount: number;
}

export interface CertificationType {
    businessField: BusinessFieldEnumType,
    certificateName: string;
    certificateDate: string;
}

export interface ExperienceType {
    businessField: BusinessFieldEnumType,
    experienceDescription: string;
    startDate: string;
    endDate: string;
}

export interface AwardType  {
    businessField: "FOOD_BEVERAGE",
    awardName: string;
    awardDate: string;
}
