import useSWR from "swr";
import {ResponseType} from "@/src/types/common";
import {ApplyDetailPortfolioType} from "@/src/types/portfolio";
import {swrGetFetcher} from "@/src/lib/axios";

const useAllAds = (resumeId: number) => {
    const { data, error, mutate } = useSWR<ResponseType<ApplyDetailPortfolioType>>(
        `api/v1/portfolio/applications/${resumeId}`, swrGetFetcher);

    return {
        applyPortfolioDetailData:  data ? data : null,
        applyPortfolioDetailDataMutate: mutate,
        isLoading: !error && !data,
        isError: error,
    };
}
export default useAllAds;
