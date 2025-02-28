import useSWR from "swr";
import {CommonDataType, ResponseType} from "@/src/types/common";
import {MyUploadAdType} from "@/src/types/mypage";
import {swrGetFetcher} from "@/src/lib/axios";

const useUploadMyAds = (page: number, size: number) => {
    const { data, error } = useSWR<ResponseType<CommonDataType<MyUploadAdType[]>>>(`/api/v1/recruit/my?page=${page}&size=${size}`, swrGetFetcher);

    return {
        uploadMyAds:  data ? data : null,
        isLoading: !error && !data,
        isError: error,
    };
}
export default useUploadMyAds;
