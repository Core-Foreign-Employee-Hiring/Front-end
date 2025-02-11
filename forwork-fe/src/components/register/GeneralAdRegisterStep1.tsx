import {useAtom, useSetAtom} from "jotai/index";
import {Dispatch, SetStateAction, useEffect, useState} from "react";

import {generalRegisterDataAtom} from "@/src/store/register/atom";
import {AddressType} from "@/src/types/register";
import Item from "@/src/components/common/Item";
import Button from "@/src/components/common/Button";
import Input from "@/src/components/common/Input";
import AdCategory from "@/src/components/register/AdCategory";
import CompanyInfo from "@/src/components/register/CompanyInfo";
import JobCategory from "@/src/components/register/JobCategory";
import CompanyAddress from "@/src/components/register/CompanyAddress";
import useEmployerInfo from "@/src/lib/hooks/useEmployInfo";

interface Props {
    setStep: Dispatch<SetStateAction<"Second" | "First" | "Third">>
}

const GeneralAdRegisterStep1 = (props: Props) => {
    const {setStep} = props;
    const setGeneralRegisterData = useSetAtom(generalRegisterDataAtom);
    const {employerInfo} = useEmployerInfo();
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState<AddressType>({latitude: 0, longitude: 0});

    /**
     * 회사정보 수정하러 이동하는 버튼
     */
    const companyInfoEditButton = () => {
        return (
            <Button className={"text-gray5 button-md"}>수정하기</Button>
        )
    }

    /**
     * 회사주소 수정하러 이동하는 버튼
     */
    const companyAddressEditButton = () => {
        return (
            <Button className={"text-gray5 button-md"}>수정하기</Button>
        )
    }

    /**
     * 업직종 수정하러 이동하는 버튼
     */
    const companyBusinessFieldEditButton = () => {
        return (
            <Button className={"text-gray5 button-md"}>수정하기</Button>
        )
    }

    /**
     * 다음 버튼 클릭시
     */
    const handleSubmit = () => {
        if (employerInfo) {
            setGeneralRegisterData((prevState) => ({...prevState,
                title: title,
                businessFields: employerInfo.businessFields,
                address1: employerInfo.address1,
                address2: employerInfo.address2,
                zipcode: employerInfo.zipcode,
                longitude: location.longitude,
                latitude:location.latitude,
            }))

            setStep("Second");
        }
    }

    if (!employerInfo) {
        return
    }

    return (
        <main className={"flex flex-col gap-y-[52px]"}>
            <Item title={"공고종류"} content={<AdCategory adCategory={"일반 공고"}/>}/>
            <Item title={"공고제목"} content={
                <Input
                    setInputValue={setTitle}
                    inputValue={title}
                    className={"w-full"}/>} />
            <Item
                title={"회사정보"}
                titleRightElement={() => companyInfoEditButton()}
                content={
                    <CompanyInfo
                        companyAddress={`${employerInfo.address1} ${employerInfo.address2}`}
                        companyName={employerInfo.companyName}
                        businessRegistrationNumber={employerInfo.businessRegistrationNumber}
                        CEO={employerInfo.name}
                        email={employerInfo.companyEmail}
                        logoUrl={"/image 55.png"}
                        phoneNumber={employerInfo.mainPhoneNumber}/>} />
            <Item
                title={"업직종"}
                titleRightElement={() => companyBusinessFieldEditButton()}
                content={<JobCategory businessFields={employerInfo.businessFields}/>}
            />
            <Item
                title={"근무지 주소"}
                titleRightElement={() => companyAddressEditButton()}
                content={<CompanyAddress
                    setLocation={setLocation}
                    location={location}
                    address1={employerInfo.address1}
                    address2={employerInfo.address2}
                    zipcode={employerInfo.zipcode}/>
            }/>
            <Button
                disabled={title === "" || location.latitude === 0 || location.longitude === 0}
                onClick={() => handleSubmit()}
                className={title === "" || location.latitude === 0 || location.longitude === 0
                    ? "mt-[28px] flex items-center justify-center bg-gray2-button w-full"
                    : "mt-[28px] flex items-center justify-center bg-main-button w-full"}>
                다음
            </Button>
        </main>
    )
}
export default GeneralAdRegisterStep1;
