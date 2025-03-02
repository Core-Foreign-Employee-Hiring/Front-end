import useSWR from "swr";
import {ResponseType} from "@/src/types/common";
import {BasicDetailPortfolioType} from "@/src/types/portfolio";
import {swrGetFetcher} from "@/src/lib/axios";

const useApplyPortfolioDetail = (resumeId: string | string[] | undefined ) => {
    const { data, error } = useSWR<ResponseType<BasicDetailPortfolioType>>(
        `api/v1/portfolio/applications/${resumeId}`, swrGetFetcher);

    return {
        applyPortfolioDetailData:  data ? data : null,
        isLoading: !error && !data,
        isError: error,
    };
}
export default useApplyPortfolioDetail;
