import {BusinessFieldEnumType} from "@/src/types/register";

export interface reviewFormType {
    title: string;
    content: string;
    region1: string;
    region2: string;
    businessFields: BusinessFieldEnumType;
}
