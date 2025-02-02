import {client} from "@/src/lib/axios";

/**
 * 로그인
 * @param userId id
 * @param password 비번
 */
export const login = async (userId: string, password: string) => {
        const response = await client.post(`/api/v1/member/login`, {
            userId: userId,
            password: password,
        });
        console.log(response.data);
        return response.data;
};

