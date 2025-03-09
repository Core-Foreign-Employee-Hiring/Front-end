import useSWR from "swr";
import {CommonDataType, ResponseType} from "@/src/types/common";
import {swrGetFetcher} from "@/src/lib/axios";
import {MyDraftAdType} from "@/src/types/mypage";

const useDraftMyAds = (page: number, size: number) => {
    const { data, error } = useSWR<ResponseType<CommonDataType<MyDraftAdType[]>>>(`/api/v1/recruit/draft/my?page=${page}&size=${size}`, swrGetFetcher);

    return {
        draftMyAds:  data ? data : null,
        isLoading: !error && !data,
        isError: error,
    };
}
export default useDraftMyAds;
