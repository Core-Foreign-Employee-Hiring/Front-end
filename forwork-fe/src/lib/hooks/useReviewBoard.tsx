import useSWR from "swr";

import {swrGetFetcher} from "../axios";
import {ResponseType} from "../../types/common";
import { ReviewBoardType } from "@/src/types/reviewBoard";

const useReviewBoard = () => {
    const { data, error } = useSWR<ResponseType<ReviewBoardType>>("/api/v1/albareview", swrGetFetcher);

    return {
        reviewBoardData: data ? data.data : null,
        isLoading: !error && !data,
        isError: error,
    };
};
export default useReviewBoard;
