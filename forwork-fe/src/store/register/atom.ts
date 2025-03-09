import {atom} from "jotai/index";
import {
    GeneralRegisterDataType,
    PremiumRegisterDataType
} from "@/src/types/register";

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

/**
 * 임시 등록 선택한 recruitId
 */
export const draftRecruitIdAtom = atom(0)

