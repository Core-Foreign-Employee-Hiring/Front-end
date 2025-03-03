import useSWR from "swr";
import {ResponseType} from "@/src/types/common";
import {BasicDetailPortfolioType} from "@/src/types/portfolio";
import {swrGetFetcher} from "@/src/lib/axios";

const useBasicPortfolioDetail = (employeeId: string | string[] | undefined ) => {
    const { data, error, mutate } = useSWR<ResponseType<BasicDetailPortfolioType>>(
        `api/v1/portfolio/basics/${employeeId}`, swrGetFetcher);

    return {
        basicPortfolioDetailData:  data ? data : null,
        basicPortfolioDetailDataMutate: mutate,
        isLoading: !error && !data,
        isError: error,
    };
}
export default useBasicPortfolioDetail;
