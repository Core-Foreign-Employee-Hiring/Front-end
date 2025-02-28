import useSWR from "swr";
import {CommonDataType, ResponseType} from "@/src/types/common";
import {ApplicationType, MyDraftAdType} from "@/src/types/mypage";
import {swrGetFetcher} from "@/src/lib/axios";

const useApplyStatus = (page: number, size: number) => {
    const { data, error } = useSWR<ResponseType<CommonDataType<ApplicationType[]>>>(`/api/v1/recruit/apply-status?page=${page}&size=${size}`, swrGetFetcher);

    return {
        application:  data ? data : null,
        isLoading: !error && !data,
        isError: error,
    };
}
export default useApplyStatus
