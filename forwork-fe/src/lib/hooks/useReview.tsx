import useSWR from "swr";

import {swrGetFetcher} from "../axios";
import {CommonDataType, ResponseType} from "../../types/common";
import {ReviewDataContentType, SortType} from "@/src/types/review";

const useReview = (page: number, sortType:SortType) => {
    const { data, error } = useSWR<ResponseType<CommonDataType<ReviewDataContentType[]>>>(`/api/v1/albareview?page=${page}&size=8&sortType=${sortType}`, swrGetFetcher);

    return {
        reviewData:  data ? data : null,
        isLoading: !error && !data,
        isError: error,
    };
};
export default useReview;
