import useSWR from "swr";
import {ResponseType} from "@/src/types/common";
import {swrGetFetcher} from "@/src/lib/axios";
import {CreatedPortfolioFormType} from "@/src/types/recruit-ad";

//사장님이 만든 포트폴리오 형식들
const useCreatedPortfolioForm = (recruitId: number) => {
    const { data, error } = useSWR<ResponseType<CreatedPortfolioFormType[]>>(`/api/v1/recruit/${recruitId}/portfolios`, swrGetFetcher);

    return {
        portfolioFormData:  data ? data : null,
        isLoading: !error && !data,
        isError: error,
    };
}
export default useCreatedPortfolioForm;
