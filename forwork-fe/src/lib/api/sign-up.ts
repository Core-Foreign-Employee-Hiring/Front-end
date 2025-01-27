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

export const nationalityInfoData = async () => {
    const response = await axios.get(`https://restcountries.com/v3.1/all`);
    console.log(response.data);
    return response.data;
}
