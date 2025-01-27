import {Dispatch, SetStateAction, useEffect} from "react";
import {checkUserIdAvailability, verifyEmail, verifyPhoneNumber} from "@/src/lib/api/sign-up";
import {ResponseType} from "@/src/types/common";
import {AxiosError} from "axios";

/**
 * 아이디 인증번호 발송 후 이메일 인증 / 문구 띄우기 함수
 * @param userId 사용자 id
 * @param setIsUserIdAvailability 사용가능한 아이디인지 안내하는 문구
 */
export const handleUserIdVerification = async (userId: string, setIsUserIdAvailability: Dispatch<SetStateAction<boolean | undefined>>) => {
    try {
        const response: ResponseType = await checkUserIdAvailability(userId)
        if (response && response.status && response.status === 200) {
            setIsUserIdAvailability(true);
        }
    } catch (error: any) {
        const axiosError = error as AxiosError<ResponseType>; // AxiosError로 캐스팅
        if (axiosError.response?.status === 400) {
            setIsUserIdAvailability(false);
        }
    }
};


/**
 * 이메일 인증번호 발송 후 이메일 인증 / 문구 띄우기 함수
 * @param emailCode 이메일로 받은 인증 코드
 * @param setIsEmailCodeAvailability 인증이 된 이메일인지 안내하는 문구
 */
export const handleEmailVerification = async (emailCode: string, setIsEmailCodeAvailability: Dispatch<SetStateAction<boolean | undefined>>) => {
    try {
        const response: ResponseType = await verifyEmail(emailCode)
        if (response && response.status && response.status === 200) {
            setIsEmailCodeAvailability(true);
        }
    } catch (error: any) {
        const axiosError = error as AxiosError<ResponseType>; // AxiosError로 캐스팅
        if (axiosError.response?.status === 400) {
            setIsEmailCodeAvailability(false);
        }
    }
};


/**
 * 전화번호 인증번호 발송 후 이메일 인증 / 문구 띄우기 함수
 * @param phoneNumberCode 전화번호로 받은 인증 코드
 * @param setIsPhoneNumberCodeAvailability 인증이 된 전화번호인지 안내하는 문구
 */
export const handlePhoneNumberVerification = async (phoneNumberCode: string, setIsPhoneNumberCodeAvailability: Dispatch<SetStateAction<boolean | undefined>>) => {
    try {
        const response: ResponseType = await verifyPhoneNumber(phoneNumberCode)
        if (response && response.status && response.status === 200) {
            setIsPhoneNumberCodeAvailability(true);
        }
    } catch (error: any) {
        const axiosError = error as AxiosError<ResponseType>; // AxiosError로 캐스팅
        if (axiosError.response?.status === 400) {
            setIsPhoneNumberCodeAvailability(false);
        }
    }
};

