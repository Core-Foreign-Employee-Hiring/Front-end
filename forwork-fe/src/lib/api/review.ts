import Cookies from "js-cookie";
import {sendRequest} from "@/src/lib/axios";
import { reviewFormType } from "@/src/types/review";

/**
 * 알바 후기 등록 api
 * @param data reviewFormType
 */
export const createReview = async (data: reviewFormType) => {
    try {
        const response = await sendRequest({
            headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            method: "POST",
            data: data,
            url: `/api/v1/albareview`,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("알바 후기 등록시 에러:", error);
    }
};
