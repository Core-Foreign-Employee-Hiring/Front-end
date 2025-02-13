interface Props {
    title: string;
    recruitPeriod: string;
    workDuration: string;
    workDays: string;
    workTime: string;
}
const AdSummary = (props: Props) => {
    const {title, recruitPeriod, workDays, workTime, workDuration} = props;

    return (
        <div className={"flex flex-col gap-y-6 px-[32px] py-[24px] rounded-[24px] bg-gray1"}>
            <div className={"subtitle-lg"}>{title}</div>
            <div className={"flex"}>
                <div className={"border-r"}>
                    <div className={"text-gray4 body-md"}>모집기간</div>
                    <div className={"text-gray5 body-md"}>{recruitPeriod}</div>
                </div>
                <div>
                    <div className={"text-gray4 body-md"}>근무기간</div>
                    <div className={"text-gray5 body-md"}>{workDuration}</div>
                </div>
                <div>
                    <div className={"text-gray4 body-md"}>근무요일</div>
                    <div className={"text-gray5 body-md"}>{workDays}</div>
                </div>
                <div>
                    <div className={"text-gray4 body-md"}>근무시간</div>
                    <div className={"text-gray5 body-md"}>{workTime}</div>
                </div>
            </div>
        </div>
    )
}
export default AdSummary;
