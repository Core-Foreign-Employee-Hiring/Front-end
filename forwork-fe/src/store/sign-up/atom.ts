import { atom } from "jotai";
import {SignUpInfoType} from "@/src/types/sign-up";


export const signUpInfoAtom = atom<SignUpInfoType>({
    userId: "",
    email: "",
    password: "",
    name: "",
    phoneNumber: "",
    zipcode: "",
    address1: "",
    address2: "",
    birthDate: "",
    nationality: "",
    education: "",
    visa: "",
    termsOfServiceAgreement: false,
    personalInfoAgreement: false,
    adInfoAgreementSnsMms: false,
    adInfoAgreementEmail: false,
    male: false,
    over15: false,
});
