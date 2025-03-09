import useSWR from "swr";
import {CommonDataType, ResponseType} from "@/src/types/common";
import {ContractType} from "@/src/types/mypage";
import {swrGetFetcher} from "@/src/lib/axios";

const useContracts = (page: number, size: number) => {
    const { data, error } = useSWR<ResponseType<CommonDataType<ContractType[]>>>(
        `api/v1/member/employer/complete-contract?page=${page}&size=${size}`, swrGetFetcher);

    return {
        contractData:  data ? data : null,
        isLoading: !error && !data,
        isError: error,
    };

}
export default useContracts;
