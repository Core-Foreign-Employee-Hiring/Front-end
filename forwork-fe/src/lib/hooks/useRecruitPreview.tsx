import useSWR from "swr";
import {ResponseType} from "@/src/types/common";
import {RecruitAdDetailData, RecruitPreviewType} from "@/src/types/recruit-ad";
import {swrGetFetcher} from "@/src/lib/axios";

const useRecruitPreview = (recruitId: string | string[] | undefined | number) => {
    const { data, error, mutate } = useSWR<ResponseType<RecruitPreviewType>>(`/api/v1/member/employer/recruit-preview?recruitId=${recruitId}`, swrGetFetcher);

    return {
        recruitPreview: data ? data.data : null,
        recruitPreviewMutate: mutate,
        isLoading: !error && !data,
        isError: error,
    };
}
export default useRecruitPreview;
