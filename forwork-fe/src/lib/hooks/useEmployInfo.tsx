import useSWR from "swr";

import {swrGetFetcher} from "../axios";
import {ResponseType} from "../../types/common";
import {EmployerInfoType} from "@/src/types/register";

const useEmployerInfo = () => {
    const { data, error } = useSWR<ResponseType<EmployerInfoType>>("/api/v1/member/employer/my-company", swrGetFetcher);

    return {
        employerInfo: data ? data.data : null,
        isLoading: !error && !data,
        isError: error,
    };
};
export default useEmployerInfo;
