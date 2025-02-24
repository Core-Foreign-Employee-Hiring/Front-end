import Cookies from "js-cookie";
import {sendRequest} from "@/src/lib/axios";
import {reviewFormType} from "@/src/types/review";
import axios from "axios";

/**
 * 알바 후기 등록 api
 * @param data reviewFormType
 */
export const createReview = async (data: reviewFormType) => {
    try {
        const response = await sendRequest({
            headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
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


export const getAddressByLevel = () => {
    axios.get("https://sgisapi.kostat.go.kr/OpenAPI3/addr/stage.json").then((res) => {
        console.log("res", res)
    })
}
