import axios from "axios";
import {client} from "@/src/lib/axios";

/**
 * 아이디 중복 체크
 * @param userId 사용하고자 하는 사용자 아이디
 */
export const checkUserIdAvailability = async (userId: string) => {
    const response = await client.get(`/api/v1/member/verify-userid?userId=${userId}`);
    console.log(response.data);
    return response.data;
};

/**
 * 세계 나라 데이터 불러오는 api
 */
export const nationalityInfoData = async () => {
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    console.log(response.data);
    return response.data;
}

/**
 * 이메일 인증번호 전송
 * @param email 사용하고자 하는 이메일
 */
export const sendEmailCode = async (email: string) => {
    const response = await client.post(`/api/v1/member/verify-email`,
    {
        email: email
    });
    console.log(response.data);
    return response.data;
};

/**
 * 이메일 인증
 * @param code 이메일 인증 번호
 */
export const verifyEmail = async (code: string) => {
    const response = await client.post(`/api/v1/member/verification-email-code`,
        {
            code: code
        });
    console.log(response.data);
    return response.data;
};

/**
 * 전화번호 인증번호 전송
 * @param phoneNumber 사용하고자 하는 전화번호
 */
export const sendPhoneNumberCode = async (phoneNumber: string) => {
    const response = await client.post(`/api/v1/member/verify-phone`,
        {
            phoneNumber: phoneNumber
        });
    console.log(response.data);
    return response.data;
};

/**
 * 전화번호 인증
 * @param code 이메일 인증 번호
 */
export const verifyPhoneNumber = async (code: string) => {
    const response = await client.post(`/api/v1/member/verification-phone-code`,
        {
            code: code
        });
    console.log(response.data);
    return response.data;
};
