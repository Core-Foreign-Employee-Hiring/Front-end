import CalenderIcon from "@/src/assets/mypage/CalenderIcon";
import SpaceIcon from "@/src/assets/mypage/SpaceIcon";
import {formatRecruitEndDate} from "@/src/utils/mypage";
import Button from "@/src/components/common/Button";
import {ContractType} from "@/src/types/mypage";

const Contract = (props: ContractType) => {
    const {title, recruitEndDate, recruitStartDate, recruitId, workDays, workTime, workDuration, employerName} = props;
    return (
        <section className={"flex flex-col gap-y-4 p-6 rounded-[32px] border border-gray2"}>
            <div className={"flex flex-col gap-y-3"}>
                <h2 className={"subtitle-lg"}>{title}</h2>
            </div>
            <section className={"flex gap-x-[30px]"}>
                <div className={"flex gap-x-1 body-sm items-center text-gray5"}>
                    <div className={"flex items-center justify-center w-[20px] h-[20px]"}>
                        <CalenderIcon/>
                    </div>
                    <div className={"flex gap-x-1 "}>
                        <span>1개월 ~ 3개월 <span className={"text-gray4"}>(협의가능)</span></span>
                        <span>/</span>
                        <span> 주말 토,일 <span className={"text-gray4"}>(협의가능)</span></span>
                    </div>
                </div>
                <div className={"flex gap-x-1 body-sm items-center text-gray5"}>
                    <div className={"flex items-center justify-center w-[20px] h-[20px]"}>
                        <SpaceIcon/>
                    </div>
                    <span>흥덕구 복대동</span>
                </div>
                <div className={"flex gap-x-1 body-sm items-center text-gray5"}>
                    <div className={"flex items-center justify-center w-[20px] h-[20px]"}>
                        <CalenderIcon/>
                    </div>
                    <span>9:00-18:00 <span className={"text-gray4"}>(협의가능)</span></span>
                </div>
            </section>
            <div className={"badge-sm text-gray4"}>{formatRecruitEndDate(recruitStartDate , recruitEndDate)}</div>
            <div className={"border-b border-gray2"} />
            <section className={"grid grid-cols-2 gap-y-2"}>
                <div className={"flex gap-x-5 body-sm"}>
                    <div className={"w-[48px]"}>업직종</div>
                    <div>주방장·조리사, 주방보조·설거지, 일반음식점</div>
                </div>
                <div className={"flex gap-x-5 body-sm"}>
                    <div className={"w-[48px] "}>근무지</div>
                    <div>서울 서초구 서초대로 13 (방배 마에스트로) 102호 윤초밥</div>
                </div>
                <div className={"flex gap-x-5 body-sm"}>
                    <div className={"w-[48px] "}>급여</div>
                    <div>시급 10,400원</div>
                </div>
                <div className={"flex gap-x-5 body-sm "}>
                    <div className={"w-[48px]"}>접수방법</div>
                    <div className={"text-main"}>온라인지원 이메일지원</div>
                </div>
            </section>
            <section className={"flex gap-x-3 justify-end"}>
                <Button className={"border-gray2-button"} secondClassName={"h-fit"}>모집공고 보기</Button>
                <Button className={"bg-main-button"} secondClassName={"h-fit py-[7.5px] px-4 rounded-[12px]"}>근로계약서 보기</Button>
            </section>
        </section>
    )
}
export default Contract
