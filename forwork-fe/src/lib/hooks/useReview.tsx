import useSWR from "swr";

import {swrGetFetcher} from "../axios";
import {ResponseType} from "../../types/common";
import {ReviewDataType} from "@/src/types/review";

const useReview = () => {
    const { data, error } = useSWR<ResponseType<ReviewDataType>>("/api/v1/albareview?page=0&size=8&sortType=newest", swrGetFetcher);

    const parseResultList = data ? data.data?.content.map((article) => article).flat() : null;

    return {
        reviewContents:  parseResultList ? parseResultList : null,
        isLoading: !error && !data,
        isError: error,
    };
};
export default useReview;
