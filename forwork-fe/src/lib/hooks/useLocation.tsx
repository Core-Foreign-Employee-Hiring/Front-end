import useSWR from "swr";

import {swrGetFetcher} from "../axios";
import {ResponseType} from "../../types/common";
import { locationType } from "@/src/types/review";

const useLocation = () => {
    const { data, error } = useSWR<ResponseType<locationType>>("https://sgisapi.kostat.go.kr/OpenAPI3/addr/geocode.json", swrGetFetcher);

    return {
        locationData: data ? data.data : null,
        isLoading: !error && !data,
        isError: error,
    };
};
export default useLocation;