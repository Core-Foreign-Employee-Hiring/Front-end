import {BusinessFieldEnumType, EducationType, JobCategoryType, VisaType} from "@/src/types/register";
import {Dispatch, SetStateAction} from "react";

export const jobCategoryList: JobCategoryType[] = [
    "외식/음료",
    "매장/판매",
    "생산-건설",
    "생산-기술",
    "사무/영업",
    "문화/여가/생활",
    "농어촌/선원",
    "모델/쇼핑몰",
    "교육",
    "기타/서비스"
]

export const educationList: EducationType[] = [
    "학력무관",
    "고졸",
    "대학생",
    "대학 졸업 및 졸업예정자",
    "대학원생",
    "대학원 졸업 및 졸업예정자"
]

export const visaList: VisaType[] = [
    "D-2",
    "D-4",
    "C-3",
]

export const yearList = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025']
export const monthList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
export const dayList = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];


/**
 * 업직종 백엔드 Enum 타입으로 변경
 * @param businessField 업직종
 */
export const changeKorToBusinessFieldEnumType = (businessField: JobCategoryType | undefined) => {
    if (!businessField) return "OTHER_SERVICE"; // 기본값 설정

    switch (businessField) {
        case "농어촌/선원":
            return "RURAL_FISHING"
        case "교육":
            return "EDUCATION"
        case "기타/서비스":
            return "OTHER_SERVICE"
        case "매장/판매":
            return "STORE_SALES"
        case "모델/쇼핑몰":
            return "MODEL_SHOPPING_MALL"
        case "문화/여가/생활":
            return "CULTURE_LEISURE_LIFESTYLE"
        case "사무/영업":
            return "OFFICE_SALES"
        case "생산-건설":
            return "PRODUCTION_CONSTRUCTION"
        case "생산-기술":
            return "PRODUCTION_TECHNICAL"
        case "외식/음료":
            return "FOOD_BEVERAGE"
        default:
            return "OTHER_SERVICE"; // 잘못된 값이 들어오면 기본값 반환
    }
}

/**
 * 업직종 백엔드 Enum 타입을 kor로 변경
 * @param businessField 업직종
 */
export const changeBusinessFieldEnumToKorType = (businessField: BusinessFieldEnumType | undefined) => {
    if (!businessField) return "기타"; // 기본값 설정

    switch (businessField) {
        case "RURAL_FISHING":
            return "농어촌/선원"
        case "EDUCATION":
            return "교육"
        case "OTHER_SERVICE":
            return "기타/서비스"
        case "STORE_SALES":
            return "매장/판매"
        case "MODEL_SHOPPING_MALL":
            return "모델/쇼핑몰"
        case "CULTURE_LEISURE_LIFESTYLE":
            return "문화/여가/생활"
        case "OFFICE_SALES":
            return "사무/영업"
        case "PRODUCTION_CONSTRUCTION":
            return "생산-건설"
        case "PRODUCTION_TECHNICAL":
            return "생산-기술"
        case "FOOD_BEVERAGE":
            return "외식/음료"
        default:
            return "기타"; // 잘못된 값이 들어오면 기본값 반환
    }
}

export const toggleData = (data: any, setState: Dispatch<SetStateAction<any>>) => {
    setState((prev: any) => (prev === data ? "" : data));
};
