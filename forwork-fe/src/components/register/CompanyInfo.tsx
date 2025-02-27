import {BusinessFieldEnumType} from "@/src/types/register";
import {changeBusinessFieldEnumToKorType} from "@/src/utils/common";
import Button from "@/src/components/common/Button";

interface Props {
    logoUrl: string;
    companyName: string;
    companyAddress: string;
    CEO: string;
    phoneNumber: string;
    email: string;
    businessRegistrationNumber: string;
    businessFields: BusinessFieldEnumType[];
}

const CompanyInfo = (props: Props) => {
    const { logoUrl, companyName, companyAddress, CEO, phoneNumber, email, businessRegistrationNumber, businessFields } = props;

    return (
        <div className={"flex justify-between p-6 rounded-[24px] border border-gray2"}>
            <div className={"flex gap-x-6 items-center "}>
                {/*사진*/}
                <img src={logoUrl} alt={logoUrl} className={"w-[160px] h-[160px] rounded-[16px] bg-gray3"}/>
                {/*정보*/}
                <div className={"flex flex-col gap-y-6"}>
                    <div className={"title-md"}>{companyName}</div>
                    {/*회사주소 ~*/}
                    <div className={"flex flex-col gap-y-1"}>
                        <div className={"flex gap-x-5"}>
                            <div className={"w-[70px] subtitle-md text-gray5"}>회사주소</div>
                            <div className={"body-md"}>{companyAddress}</div>
                        </div>
                        <div className={"flex gap-x-5"}>
                            <div className={"w-[70px] subtitle-md text-gray5"}>담당자</div>
                            <div className={"flex gap-x-4 items-center"}>
                                <div className={"body-md"}>{CEO}</div>
                                <div className={"text-gray3 body-md"}> |</div>
                                <div className={"body-md"}>{phoneNumber}</div>
                                <div className={"text-gray3 body-md"}> |</div>
                                <div className={"body-md"}>{email}</div>
                            </div>

                        </div>
                        <div className={"flex gap-x-5"}>
                            <div className={"w-[70px] subtitle-md text-gray5"}>사업자번호</div>
                            <div className={"body-md"}>{businessRegistrationNumber}</div>
                        </div>
                        <div className={"flex gap-x-5"}>
                            <div className={"w-[70px] subtitle-md text-gray5"}>업직종</div>
                            <div className={"body-md"}>{businessFields.map((businessField) => {
                                return (
                                    <span key={businessField}>{changeBusinessFieldEnumToKorType(businessField)}</span>
                                )
                            })}</div>
                        </div>
                    </div>
                </div>
            </div>
            {/*TODO: 수정 누르면 이동*/}
            <Button className={"border-gray2-button h-fit"}>수정</Button>
        </div>
    )
}
export default CompanyInfo;
