import {atom} from "jotai/index";
import {EmployerSignUpInfoType} from "@/src/types/sign-up";
import {
    ApplicationMethodEnumType,
    BusinessFieldEnumType,
    GeneralRegisterDataType, PortfolioType,
    PremiumRegisterDataType
} from "@/src/types/register";

export const generalRegisterDataAtom = atom<GeneralRegisterDataType>({
    title: "",
    businessFields: [],
    zipcode: "",
    address1: "",
    address2: "",
    longitude: 0,
    latitude: 0,
    recruitStartDate: "",
    recruitEndDate: "",
    recruitCount: 0,
    gender: "",
    education: "학력무관",
    otherConditions: "",
    preferredConditions: [],
    workDuration: [],
    workTime: [],
    workDays: [],
    workDaysOther: null,
    salary: "",
    salaryType: "",
    applicationMethods: [],
    salaryOther: "",
    workTimeOther: "",
    workDurationOther: "",
});

export const premiumRegisterDataAtom= atom<PremiumRegisterDataType>({
    gender: null,
    applicationMethods: [null],
    salaryType: null,
    workDuration: [null],
    salaryOther: null,
    workDaysOther: [null],
    otherConditions: null,
    workDays: [null],
    education: null,
    salary: null,
    portfolios: [],
    recruitEndDate: null,
    workDurationOther: null,
    latitude: null,
    longitude: null,
    workTimeOther: null,
    recruitStartDate: null,
    address: {
        zipcode: null,
        address1: null,
        address2: null,
    },
    title: null,
    preferredConditions: [null],
    businessFields: [null],
    workTime: [null],
});
