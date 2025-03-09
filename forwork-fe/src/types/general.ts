import {
    AdEnumType, ApplicationMethodEnumType,
    BusinessFieldEnumType,
    SalaryType,
    WeekDaysType,
    WorkDaysType,
    WorkDurationType, WorkTimeType
} from "@/src/types/register";

export interface GeneralAdType{
    recruitId: number;
    companyName: string;
    title: string;
    address: {
        "zipcode": "11111",
        "address1": "일본",
        "address2": "나가사키"
    },
    workTime: WorkTimeType [];
    workDays: WorkDaysType[] | WeekDaysType[],
    workDuration: WorkDurationType[],
    salary: string;
    salaryType: SalaryType;
    businessFields: BusinessFieldEnumType[],
    recruitPeriod: "2025-03-03 ~ 2025-04-03",
    applicationMethods: ApplicationMethodEnumType[],
    recruitType: AdEnumType,
    jump: boolean;
}
