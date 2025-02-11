import KaKaoMap from "@/src/components/register/KaKaoMap";
import {Dispatch, SetStateAction, useState} from "react";
import {AddressType, GeneralRegisterDataType} from "@/src/types/register";

interface Props {
    zipcode: string;
    address1: string;
    address2: string;
    setLocation: Dispatch<SetStateAction<AddressType>>;
    location:  AddressType;
}

const CompanyAddress = (props: Props) => {
    const {zipcode, address1, address2, setLocation, location} = props;

    return (
        <div className={"flex flex-col gap-y-3"}>
            <div className=" h-[413px]">
                <KaKaoMap
                    address={address1}
                    setLocation={setLocation}
                    location={location}
                />
            </div>
            <div className={"rounded-[24px] border border-gray3"}>
                <div className={"px-4 py-3 flex flex-col gap-y-[7px] subtitle-lg"}>
                    <div className={"text-gray5"}>우편번호</div>
                    <div>{zipcode}</div>
                </div>
                <div className={"px-4 py-3 flex flex-col gap-y-[7px] subtitle-lg border-y border-gray3"}>
                    <div className={"text-gray5"}>주소</div>
                    <div>{address1}</div>
                </div>
                <div className={"px-4 py-3 flex flex-col gap-y-[7px] subtitle-lg"}>
                    <div className={"text-gray5"}>상세주소</div>
                    <div>{address2}</div>
                </div>
            </div>
        </div>
    )
}
export default CompanyAddress
