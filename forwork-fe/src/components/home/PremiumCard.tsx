import LocalFireDepartmentIcon from "@/src/assets/home/LocalFireDepartmentIcon";
import LocationOnIcon from "@/src/assets/home/LocationOnIcon";
import ScheduleIcon from "@/src/assets/home/ScheduleIcon";

interface Props {

}
const PremiumCard = (props: Props) => {
    const {} = props;
    return (
        <div className={"flex flex-col justify-between border border-main rounded-[32px] p-6 h-[262px]"}>
            <div className={"flex flex-col gap-y-[9px]"}>
                {/* 계약서 태그 */}
                <div
                    className={"flex badge-md text-main bg-main-light py-1 px-2 rounded-[8px] w-fit items-center gap-x-1"}>
                    <div className={"flex items-center w-[12.5px] h-[13.5px]"}><LocalFireDepartmentIcon/></div>
                    계약서 작성률 50% 기업
                </div>
                {/* 공고제목 */}
                <div className={"subtitle-lg"}>
                    이천/물류센터/단순피킹/초보자가능/일당/단순업무/동반가능/
                </div>
                {/* 회사명 */}
                <div className={"body-md"}>회사명</div>
                <div className={"flex flex-col gap-y-1"}>
                    {/* 주소 */}
                    <div className={"flex gap-x-1 items-center"}>
                        <div className={"flex items-center w-[20px] h-[20px]"}><LocationOnIcon/></div>
                        <div className={"text-gray5 body-sm"}>흥덕구 복대동</div>
                    </div>
                    {/* 근무시간 */}
                    <div className={"flex gap-x-1 items-center"}>
                        <div className={"flex items-center w-[20px] h-[20px]"}><ScheduleIcon/></div>
                        <div className={"text-gray5 body-sm"}>9:00-18:00</div>
                    </div>
                </div>
            </div>
            {/* 급여 */}
            <div className={"flex gap-x-[6px] items-center"}>
                <div className={"py-[1px] px-[7px] border border-[#00b0a9] badge-sm text-[#00b0a9] rounded-[8px]"}>시급
                </div>
                <div className={"subtitle-sm"}>13,000원</div>
            </div>
        </div>
    )
}
export default PremiumCard;
