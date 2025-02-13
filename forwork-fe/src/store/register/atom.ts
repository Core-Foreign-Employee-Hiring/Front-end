import {atom} from "jotai/index";
import {EmployerSignUpInfoType} from "@/src/types/sign-up";
import {ApplicationMethodEnumType, BusinessFieldEnumType, GeneralRegisterDataType} from "@/src/types/register";

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
