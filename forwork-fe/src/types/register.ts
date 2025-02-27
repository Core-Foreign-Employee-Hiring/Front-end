export type AdType = "일반 공고" | "프리미엄 공고";
export type JobCategoryType =
    | ""
    | "외식/음료"
    | "매장/판매"
    | "생산-건설"
    | "생산-기술"
    | "사무/영업"
    | "문화/여가/생활"
    | "농어촌/선원"
    | "모델/쇼핑몰"
    | "교육"
    | "기타/서비스"

export type  EducationType = "" | "학력무관" | "고졸" | "대학생" | "대학 졸업 및 졸업예정자" | "대학원생" | "대학원 졸업 및 졸업예정자"
export type VisaType = "D-2" | "D-4" | "C-3"
export type BusinessFieldEnumType = "RURAL_FISHING" | "EDUCATION" | "OTHER_SERVICE"|  "STORE_SALES" | "MODEL_SHOPPING_MALL" | "CULTURE_LEISURE_LIFESTYLE" | "OFFICE_SALES" | "PRODUCTION_CONSTRUCTION" | "PRODUCTION_TECHNICAL" | "FOOD_BEVERAGE"
export type ApplicationMethodEnumType = "ONLINE" | "INQUIRY" | "VISIT" | "CALL_VISIT"
export type ApplicationMethodType = ""| "온라인 지원" | "문의 지원" | "방문 지원" | "전화 지원";
export type PreferredConditionType = "영어 가능" | "일본어 가능" | "중국어 가능" | "컴퓨터 활용 가능" | "포토샵 가능" | "한글(HWP) 가능" | "워드(Word) 가능" | "엑셀(Excel) 가능" | "파워포인트(PPT) 가능" | "차량소지" | "운전 가능" | "업무 관련 자격증 소지" | "유사업무 경험" | "인근 거주" | "대학 재학생" | "대학 휴학생" | "장기근무 가능"
export type WorkDurationType = "" | "하루(1일)" | "1주일 이하" | "1주일~1개월" | "1개월~3개월" | "3개월~6개월" | "6개월~1년" | "1년이상"
export type WorkTimeType = "" | "오전" | "오후" | "저녁" | "새벽" | "풀타임(8시간 이상)" | "오전-오후" | "오후-저녁" | "저녁-새벽" | "새벽-오전"
export type WorkDaysType = "" | "평일(월, 화, 수, 목, 금)" | "주말(토, 일)" | "주 7일(월~일)" | "주 6일"
export type WeekDaysType = "" | "월요일" | "화요일" | "수요일" | "목요일" | "금요일" | "토요일" | "일요일"
export type TimeType =
    "00:00" |
    "00:30" |
    "01:00" |
    "01:30" |
    "02:00" |
    "02:30" |
    "03:00" |
    "03:30" |
    "04:00" |
    "04:30" |
    "05:00" |
    "05:30" |
    "06:00" |
    "06:30" |
    "07:00" |
    "07:30" |
    "08:00" |
    "08:30" |
    "09:00" |
    "09:30" |
    "10:00" |
    "10:30" |
    "11:00" |
    "11:30" |
    "12:00" |
    "12:30" |
    "13:00" |
    "13:30" |
    "14:00" |
    "14:30" |
    "15:00" |
    "15:30" |
    "16:00" |
    "16:30" |
    "17:00" |
    "17:30" |
    "18:00" |
    "18:30" |
    "19:00" |
    "19:30" |
    "20:00" |
    "20:30" |
    "21:00" |
    "21:30" |
    "22:00" |
    "22:30" |
    "23:00" |
    "23:30" |
    "시작시간" |
    "종료시간";

export type SalaryType = "" | "시급" | "일급" | "주급" | "월급" | "연봉";


export interface EmployerInfoType {
    companyImage: string;
    companyName: string;
    name: string;
    businessRegistrationNumber: string;
    establishedDate: string;
    businessFields: BusinessFieldEnumType[];
    zipcode: string;
    address1: string;
    address2: string;
    companyEmail: string;
    mainPhoneNumber: string;
}

export interface AddressType {
    latitude: number;
    longitude: number;
}

export interface GeneralRegisterDataType {
    adType: "일반 공고" | "프리미엄 공고";
    uploadImage: string | ArrayBuffer | null;
    title: string | null;
    recruitStartDate: string | null;
    recruitEndDate: string | null;
    recruitCount: number | null;
    gender: "female" | "male" | null | "";
    education: EducationType | null;
    otherConditions: string | null;
    preferredConditions: PreferredConditionType[] | [];
    workDuration: string[] | [];
    workTime: string[] | [];
    workDays: string[] | [];
    salary: string | null;
    salaryType: string | null;
    businessFields: BusinessFieldEnumType[] | [];
    applicationMethods: ApplicationMethodEnumType[] | [];
    latitude: number | null;
    longitude: number | null;
    zipcode: string | null;
    address1: string | null;
    address2: string | null;
    workDurationOther: string | null;
    workTimeOther: string | null;
    workDaysOther: string | null;
    salaryOther: string | null;
}
