import useSWR from "swr";

import {swrGetFetcher} from "../axios";
import {ResponseType} from "../../types/common";
import { ReviewType } from "@/src/types/review";

const useReview = () => {
    const { data, error } = useSWR<ResponseType<ReviewType>>("/api/v1/albareview", swrGetFetcher);

    return {
        reviewData: data ? data.data : null,
        isLoading: !error && !data,
        isError: error,
    };
};
export default useReview;
