import useSWR from "swr";
import {CommonDataType, ResponseType} from "@/src/types/common";
import { ApplyDetailPortfolioType } from "@/src/types/portfolio";
import { swrGetFetcher } from "@/src/lib/axios";
import {
    GenderEnumType,
    JobCategoryType, SalaryType,
    TimeType,
    WeekDaysType,
    WorkDaysType,
    WorkDurationType,
    WorkTimeType
} from "@/src/types/register";
import { changeKorToBusinessFieldEnumType } from "@/src/utils/common";
import {PremiumContentType} from "@/src/types/premium";

const useRecruitPremiumSearch = (
    page: number,
    businessFields: JobCategoryType[],
    workDurations: WorkDurationType[],
    workDays: WorkDaysType[],
    weekDays: WeekDaysType[],
    workTimes: WorkTimeType[],
    startTime: TimeType,
    endTime: TimeType,
    gender: GenderEnumType,
    salaryTypeList: SalaryType[],
) => {
    const queryParams = [
        `page=${page}`,
        `size=9`,
        businessFields && businessFields.length > 0
            ? businessFields.map((businessField) => `businessFields=${changeKorToBusinessFieldEnumType(businessField)}`).join("&")
            : "",
        workDurations && workDurations.length > 0
            ? workDurations.map((workDuration) => `workDurations=${workDuration}`).join("&")
            : "",
        workDays && workDays.length > 0
            ? workDays.map((workDay) => `workDays=${workDay}`).join("&")
            : "",
        weekDays && weekDays.length > 0
            ? weekDays.map((weekDay) => `weekDays=${weekDay}`).join("&")
            : "",
        workTimes && workTimes.length > 0
            ? workTimes.map((workTime) => `workTime=${workTime}`).join("&")
            : "",
        startTime !== "시작시간" && endTime !== "종료시간"
            ? `workTimes=${startTime}~${endTime}`
            : "",
        gender !== ""
            ? `gender=${gender}`
            : "",
        salaryTypeList && salaryTypeList.length > 0
            ? salaryTypeList.map((salaryType) => `salaryType=${salaryType}`).join("&")
            : ""
    ].filter(Boolean).join("&"); // 빈 값 제거

    const { data, error, mutate } = useSWR<ResponseType<CommonDataType<PremiumContentType[]>>>(
        `api/v1/recruit/premium/search?${queryParams}`,
        swrGetFetcher
    );

    return {
        premiumRecruitData: data ? data : null,
        premiumRecruitDataMutate: mutate,
        isLoading: !error && !data,
        isError: error,
    };
};

export default useRecruitPremiumSearch;
