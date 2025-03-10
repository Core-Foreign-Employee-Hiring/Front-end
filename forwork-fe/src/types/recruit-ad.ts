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
  }
