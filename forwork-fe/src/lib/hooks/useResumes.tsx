import useSWR from "swr";
import {CommonDataType, ResponseType} from "@/src/types/common";
import {swrGetFetcher} from "@/src/lib/axios";
import {ContractStatusType, RecruitmentStatusType, ResumeType} from "@/src/types/mypage";

const useResumes = (recruitId: string | string[] | undefined , keyword: string, recruitmentStatus: RecruitmentStatusType, contractStatus: ContractStatusType, page: number, size: number ) => {
    const { data, error } = useSWR<ResponseType<CommonDataType<ResumeType[]>>>(
        `api/v1/recruit/${recruitId}/resumes?${keyword !== "" ? `keyword=${keyword}&`: ""}${recruitmentStatus !== null ? `recruitmentStatus=${recruitmentStatus}&` : ""}${contractStatus !== "NONE" ? `contractStatus=${contractStatus}&` : ""}page=${page}&size=${size}`, swrGetFetcher);

    return {
        resumeData:  data ? data : null,
        isLoading: !error && !data,
        isError: error,
    };
}
export default useResumes;
