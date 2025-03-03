import {BusinessFieldEnumType, PortfolioType} from "@/src/types/register";

export interface BasicPortfolioType {
    employeeId: number;
    name: string;
    employeeEvaluationCount: EmployeeEvaluationCountType
}
export interface ApplyPortfolioType {
    resumeId: number;
    viewCount: number;
    name: string;
    businessFields: BusinessFieldEnumType[];
    employeeEvaluationCount: EmployeeEvaluationCountType;
}

export interface BasicDetailPortfolioType {
    employeeId: number;
    viewCount: number;
    name: string;
    nationality: string;
    education: string;
    visa: string;
    birthday: string;
    email: string;
    employeePortfolioDTO: EmployeePortfolioDTOType;
    employeeEvaluationCountDTO: EmployeeEvaluationCountType;
    liked: boolean;
}

export interface ApplyDetailPortfolioType {
    resumeId: number;
    employeeId: number;
    viewCount: number;
    name: string;
    nationality: string;
    education: string;
    visa: string;
    birthday: string;
    email: string;
    employeePortfolioDTO: EmployeePortfolioDTOType;
    employeeEvaluationCountDTO: EmployeeEvaluationCountType;
    texts: PortfolioTextType[];
    files: PortfolioUpLoadType[];
    liked: boolean;
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
    worksDiligently: number | undefined;
    noLatenessOrAbsence: number | undefined;
    politeAndFriendly: number | undefined;
    goodCustomerService: number | undefined;
    skilledAtWork: number | undefined;
    joinCount: number | undefined;
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

export interface PortfolioTextType {
    title: string;
    content: string;
    portfolioType: PortfolioType;
}

export interface PortfolioUpLoadType {
    portfolioType: PortfolioType;
    title: string;
    urls: string[]
}
