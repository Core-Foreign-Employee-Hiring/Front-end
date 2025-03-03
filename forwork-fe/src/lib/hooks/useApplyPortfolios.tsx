import useSWR from "swr";
import {CommonDataType, ResponseType} from "@/src/types/common";
import {ApplyPortfolioType, BasicPortfolioType} from "@/src/types/portfolio";
import {swrGetFetcher} from "@/src/lib/axios";
import {JobCategoryType} from "@/src/types/register";
import {changeKorToBusinessFieldEnumType} from "@/src/utils/common";

const useApplyPortfolios = (page: number, size: number, filters: JobCategoryType[]) => {
    const { data, error } = useSWR<ResponseType<CommonDataType<ApplyPortfolioType[]>>>(
        `api/v1/portfolio/applications?page=${page}${
            filters.map((filter) => {
                return `&filter=${changeKorToBusinessFieldEnumType(filter)}`
            })
        }&size=${size}`, swrGetFetcher);

    return {
        applyPortfolioData:  data ? data : null,
        isLoading: !error && !data,
        isError: error,
    };
}
export default useApplyPortfolios;
