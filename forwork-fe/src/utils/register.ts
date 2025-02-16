import {
    ApplicationMethodType, PortfolioFormType, PortfolioFormTypeToKor, PreferredConditionType,
    SalaryType,
    TimeType,
    WeekDaysType,
    WorkDaysType,
    WorkDurationType,
    WorkTimeType
} from "@/src/types/register";
import {Dispatch, SetStateAction} from "react";

export const workDurationList: WorkDurationType[] = ["하루(1일)", "1주일 이하", "1주일~1개월", "1개월~3개월", "3개월~6개월", "6개월~1년", "1년이상"]
export const workTimeList: WorkTimeType[] = ["오전", "오후", "저녁", "새벽", "풀타임(8시간 이상)", "오전-오후", "오후-저녁", "저녁-새벽", "새벽-오전"]
export const preferredConditions: PreferredConditionType[] = ["영어 가능", "일본어 가능", "중국어 가능", "컴퓨터 활용 가능", "포토샵 가능", "한글(HWP) 가능", "워드(Word) 가능", "엑셀(Excel) 가능", "파워포인트(PPT) 가능", "차량소지", "운전 가능", "업무 관련 자격증 소지", "유사업무 경험", "인근 거주", "대학 재학생", "대학 휴학생", "장기근무 가능"]
export const workDaysList: WorkDaysType[] = ["평일(월, 화, 수, 목, 금)", "주말(토, 일)", "주 7일(월~일)", "주 6일"]
export const weekDaysList: WeekDaysType[] = ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"]
export const timeList: TimeType[] = [
    "00:00",
    "00:30",
    "01:00",
    "01:30",
    "02:00",
    "02:30",
    "03:00",
    "03:30",
    "04:00",
    "04:30",
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
    "22:30",
    "23:00",
    "23:30",
]

export const salaryTypeList: SalaryType[] = ["시급", "일급", "주급", "월급", "연봉"];
export const applicationMethods: ApplicationMethodType[] = ["온라인지원", "문의 지원", "방문 접수", "전화 후 방문"]
export const premiumFormTypeList: PortfolioFormTypeToKor[] = ["장문형", "단답형", "파일 업로드"]
export const maxFileCountList = [1, 5, 10]

export const handleSelectList = (selectList:boolean, setSelectList: Dispatch<SetStateAction<boolean>>, setUnSelectList: Dispatch<SetStateAction<boolean>>) => {
    if (selectList) {
        setSelectList(false);
    } else {
        setSelectList(true);
        setUnSelectList(false); // 직접 선택을 비활성화
    }
};

export const switchEngToKorContent = (type: PortfolioFormType) => {
    switch (type) {
        case "LONG_TEXT":
            return "장문형"
        case "SHORT_TEXT":
            return "단답형"
        case "FILE_UPLOAD":
            return "파일 업로드"
    }
}

export const switchKorToEngContent = (type: PortfolioFormTypeToKor) => {
    switch (type) {
        case "장문형":
            return "LONG_TEXT"
        case "단답형":
            return "SHORT_TEXT"
        case "파일 업로드":
            return "FILE_UPLOAD"
    }
}
