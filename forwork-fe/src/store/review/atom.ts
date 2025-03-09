import {atom} from "jotai/index";
import {ReviewFormType} from "@/src/types/review";

export const generalRegisterDataAtom = atom<ReviewFormType>({
    title: "",
    content: "",
    region1: "",
    region2: "",
    businessFields: "RURAL_FISHING",
});
