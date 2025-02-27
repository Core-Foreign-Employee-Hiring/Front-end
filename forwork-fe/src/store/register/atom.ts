import {atom} from "jotai/index";
import {EmployerSignUpInfoType} from "@/src/types/sign-up";
import {ApplicationMethodEnumType, BusinessFieldEnumType, GeneralRegisterDataType} from "@/src/types/register";

export const generalRegisterDataAtom = atom<GeneralRegisterDataType>({
    adType: "일반 공고",
    uploadImage: null,
    title: null,
    businessFields: [],
    zipcode: null,
    address1: null,
    address2: null,
    longitude: null,
    latitude: null,
    recruitStartDate: null,
    recruitEndDate: null,
    recruitCount: null,
    gender: null,
    education: null,
    otherConditions: null,
    preferredConditions: [],
    portfolios: [{
        title: "",
        type: "LONG_TEXT",
        maxFileCount: null,
        required: false,
    },],
    workDuration: [],
    workTime: [],
    workDays: [],
    workDaysOther: null,
    salary: null,
    salaryType: null,
    applicationMethods: [],
    salaryOther: null,
    workTimeOther: null,
    workDurationOther: null,
});
