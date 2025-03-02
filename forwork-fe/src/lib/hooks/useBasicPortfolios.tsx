import useSWR from "swr";
import {CommonDataType, ResponseType} from "@/src/types/common";
import {swrGetFetcher} from "@/src/lib/axios";
import {BasicPortfolioType} from "@/src/types/portfolio";

const useBasicPortfolios = (page: number, size: number) => {
    const { data, error } = useSWR<ResponseType<CommonDataType<BasicPortfolioType[]>>>(
        `api/v1/portfolio/basics?page=${page}&size=${size}`, swrGetFetcher);

    return {
        basicPortfolioData:  data ? data : null,
        isLoading: !error && !data,
        isError: error,
    };
}
export default useBasicPortfolios;
