import Tag from "@/src/components/common/Tag";
import KaKaoMap from "@/src/components/register/KaKaoMap";

interface Props {
    companyName: string;
    zipcode: string;
    address1: string;
    address2: string;
    employerContact: string; //번호
    representative: string; //대표자명
    employerEmail: string;
    businessRegistrationNumber: string;
}

const OfficeInfo = (props: Props) => {
    const {companyName, businessRegistrationNumber, representative, employerContact, employerEmail, address2, address1, zipcode} = props;

    return (
        <section className={"flex flex-col gap-y-3"}>
            <h2 className={"title-md"}>근무지 정보</h2>
            <section className={"flex flex-col gap-y-4 p-8 rounded-[32px] border border-gray3"}>
                <section className={"flex flex-col gap-y-1"}>
                    <div className={"subtitle-lg"}>{companyName}</div>
                    <div className={"body-md text-gray4"}>{address1} {address2}</div>
                    <div className={"flex gap-x-1 items-center"}>
                        <Tag
                            className={"py-[5px] px-[7.5px] rounded-[4px] small text-gray4 border border-gray2"}>지번</Tag>
                        <span className={"text-gray4 body-md"}>{zipcode}</span>
                    </div>
                </section>
                {/* map */}
                <KaKaoMap address={`${address1} ${address2}`}></KaKaoMap>
                <section className={"flex flex-col gap-y-3"}>
                    <div className={"flex gap-x-5"}>
                        <div className={"w-[69px] subtitle-md text-gray5"}>담당자</div>
                        <div className={"flex gap-x-4 items-center body-sm"}>
                            <div className={"pr-4"}>{representative}</div>
                            <div className={"text-gray3"}>|</div>
                            <div>{employerContact}</div>
                            <div className={"text-gray3"}>|</div>
                            <div>{employerEmail}</div>
                        </div>
                    </div>
                    <div className={"flex gap-x-5"}>
                        <div className={"w-[69px] subtitle-md text-gray5"}>사업자번호</div>
                        <div className={"body-sm"}>{businessRegistrationNumber}</div>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default OfficeInfo;
