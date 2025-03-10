import useSWR from "swr";

import {swrGetFetcher} from "../axios";
import {ResponseType} from "../../types/common";
import {EmployerInfoType} from "@/src/types/register";
import {RecruitAdDetailData} from "@/src/types/recruit-ad";

const useRecruitAdDetail = (recruitId: string | string[] | undefined) => {
    const { data, error } = useSWR<ResponseType<RecruitAdDetailData>>(`/api/v1/recruit/view?recruitId=${recruitId}`, swrGetFetcher);

    return {
        recruitAdDetailData: data ? data.data : null,
        isLoading: !error && !data,
        isError: error,
    };
};
export default useRecruitAdDetail;
