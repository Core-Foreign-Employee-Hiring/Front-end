import {AdEnumType, ApplicationMethodEnumType, BusinessFieldEnumType, SalaryType} from "@/src/types/register";

export interface PremiumContentType  {
    recruitId: number;
    companyName:  string;
    title: string;
    address: {
        zipcode: string;
        address1: string;
        address2: string;
    },
    workTime: string[];
    workDays: string[];
    workDuration: string[];
    salary: string;
    salaryType: SalaryType;
    businessFields: BusinessFieldEnumType[];
    recruitPeriod: string;
    applicationMethods: ApplicationMethodEnumType[];
    recruitType: AdEnumType,
    jump: boolean;
}
