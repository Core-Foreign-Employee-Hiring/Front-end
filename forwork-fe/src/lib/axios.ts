import axios, { AxiosError } from "axios";

const client = axios.create({
    baseURL: "https://api.forwork.co.kr",
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: true,
});


export { client };
