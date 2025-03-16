import useSWR from "swr";

import {swrGetFetcher} from "../axios";
import {ResponseType} from "../../types/common";
import {RecruitAdDetailData} from "@/src/types/recruit-ad";

const useRecruitAdDetail = (recruitId: number | string | string[] | undefined) => {
    const { data, error, mutate } = useSWR<ResponseType<RecruitAdDetailData>>(`/api/v1/recruit/view?recruitId=${recruitId}`, swrGetFetcher);

    return {
        recruitAdDetailData: data ? data.data : null,
        recruitAdDetailDataMutate: mutate,
        isLoading: !error && !data,
        isError: error,
    };
};
export default useRecruitAdDetail;
