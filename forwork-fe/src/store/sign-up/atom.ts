import { atom } from "jotai";
import {EmployeeSignUpInfoType, EmployerSignUpInfoType} from "@/src/types/sign-up";

export const employeeSignUpInfoAtom = atom<EmployeeSignUpInfoType>({
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


export const employerSignUpInfoAtom = atom<EmployerSignUpInfoType>({
    userId: "",
    email: "",
    password: "",
    name: "",
    phoneNumber: "",
    birthDate: "",
    zipcode: "",
    address1: "",
    address2: "",
    businessRegistrationNumber: "",
    companyName: "",
    establishedDate: "",
    businessField: "",
    termsOfServiceAgreement: false,
    personalInfoAgreement: false,
    adInfoAgreementSnsMms: false,
    adInfoAgreementEmail: false,
    male: false,
    over15: false,
});

export const zipcodeAtom = atom ("")
export const address1Atom = atom ("")
export const address2Atom = atom ("")
export const openAddrModalAtom = atom (false)
export const termsOfServiceAgreementAtom = atom (false)
export const personalInfoAgreementAtom = atom (false)
export const adInfoAgreementSnsMmsAtom = atom (false)
export const adInfoAgreementEmailAtom = atom (false)
export const over15Atom = atom (false)

