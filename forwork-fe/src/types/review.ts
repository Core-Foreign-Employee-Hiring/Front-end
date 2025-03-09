import {BusinessFieldEnumType} from "@/src/types/register";

export type SortContentType = "날짜순" | "조회순";

export type SortType = "newest" | "popular";

export interface ReviewFormType {
    title: string;
    content: string;
    region1: string;
    region2: string;
    businessFields: BusinessFieldEnumType;
}
export interface ReviewDataType {
    totalElements: number;
    totalPages: number;
    page: number;
    size: number;
    content: ReviewDataContentType[]
}

export interface ReviewDataContentType {
    id: number;
    region1: string;
    region2: string;
    businessField: BusinessFieldEnumType,
    title: string;
    content: string;
    createdAt: string;
    readCount: number;
    commentCount: number;
}
