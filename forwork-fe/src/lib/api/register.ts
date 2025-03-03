import Cookies from "js-cookie";
import {sendRequest} from "@/src/lib/axios";

/**
 * 일반 공고 등록 api
 * @param generalRegisterData formData
 */
export const uploadGeneralAd = async (generalRegisterData: FormData) => {
    try {
        const response = await sendRequest({
            headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            method: "POST",
            data: generalRegisterData,
            url: `/api/v1/recruit/general`,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("일반 공고 등록시 에러:", error);
    }
};

/**
 * 프리미엄 공고 등록 api
 * @param generalRegisterData formData
 */
export const uploadPremiumAd = async (generalRegisterData: FormData) => {
    try {
        const response = await sendRequest({
            headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            method: "POST",
            data: generalRegisterData,
            url: `/api/v1/recruit/premium`,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("일반 공고 등록시 에러:", error);
    }
};

/**
 * 일반 공고 임시 등록 api
 * @param generalRegisterData formData
 */
export const draftGeneralAd = async (generalRegisterData: FormData) => {
    try {
        const response = await sendRequest({
            headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            method: "POST",
            data: generalRegisterData,
            url: `/api/v1/recruit/general/draft`,
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("일반 공고 임시 등록시 에러:", error);
    }
};

/**
 * 프리미엄 공고 임시 등록 api
 * @param generalRegisterData formData
 */
export const draftPremiumAd = async (generalRegisterData: FormData) => {
    try {
        const response = await sendRequest({
            headers: {
                Authorization: `Bearer ${Cookies.get("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            method: "POST",
            data: generalRegisterData,
            url: `/api/v1/recruit/premium/draft`,
        });
        console.log("프리미엄", response.data);
        return response.data;
    } catch (error) {
        console.error("프리미엄 공고 임시 등록시 에러:", error);
    }
};
