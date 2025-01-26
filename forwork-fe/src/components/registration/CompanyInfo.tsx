import Button from "@/src/components/common/Button";

interface Props {
    logoUrl: string;
    companyName: string;
    companyAddress: string;
    CEO: string;
    phoneNumber: string;
    email: string;
    businessRegistrationNumber: string;
}

const CompanyInfo = (props: Props) => {
    const { logoUrl, companyName, companyAddress, CEO, phoneNumber, email, businessRegistrationNumber } = props;

    return (
        <div className={"flex flex-col gap-y-3"}>
            {/* title */}
            <div className={"flex justify-between"}>
                <div className={"title-md"}>회사정보<span className={"text-main"}>*</span></div>
                <Button className={"button-md text-gray5"}>수정하기</Button>
            </div>

            {/* 회사 정보 카드 */}
            <div className={"flex gap-x-6 items-center p-6 rounded-[24px] border border-gray3"}>
                {/*사진*/}
                <img src={logoUrl} alt={logoUrl} className={"w-[160px] h-[160px] rounded-[16px] bg-gray3"} />
                {/*정보*/}
                <div className={"flex flex-col gap-y-6"}>
                    <div className={"title-lg"}>{companyName}</div>
                    {/*회사주소 ~*/}
                    <div className={"flex flex-col gap-y-3"}>
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
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CompanyInfo;
