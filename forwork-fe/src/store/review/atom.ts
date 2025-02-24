import {atom} from "jotai/index";
import {GeneralRegisterDataType} from "@/src/types/register";
import {reviewFormType} from "@/src/types/review";

export const generalRegisterDataAtom = atom<reviewFormType>({
    title: "",
    content: "",
    region1: "",
    region2: "",
    businessFields: "RURAL_FISHING",
});
