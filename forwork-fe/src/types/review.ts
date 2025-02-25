import {BusinessFieldEnumType} from "@/src/types/register";

export type SortContentType = "날짜순" | "조회순";

export interface reviewFormType {
    title: string;
    content: string;
    region1: string;
    region2: string;
    businessFields: BusinessFieldEnumType;
}
