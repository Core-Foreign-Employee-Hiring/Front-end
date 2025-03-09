import Tag from "@/src/components/common/Tag";
import KaKaoMap from "@/src/components/register/KaKaoMap";

const OfficeInfo = () => {
    return (
        <section className={"flex flex-col gap-y-3"}>
            <h2 className={"title-md"}>근무지 정보</h2>
            <section className={"flex flex-col gap-y-4 p-8 rounded-[32px] border border-gray3"}>
                <section className={"flex flex-col gap-y-1"}>
                    <div className={"subtitle-lg"}>피자몹 대구점</div>
                    <div className={"body-md text-gray4"}>대구 중구 동성로4길 29 디헬과프로그사이피자집1층</div>
                    <div className={"flex gap-x-1 items-center"}>
                        <Tag
                            className={"py-[5px] px-[7.5px] rounded-[4px] small text-gray4 border border-gray2"}>지번</Tag>
                        <span className={"text-gray4 body-md"}>17777</span>
                    </div>
                </section>
                {/* map */}
                <KaKaoMap address={"경기도 이천시 애련정로 180"}></KaKaoMap>
                <section className={"flex flex-col gap-y-3"}>
                    <div className={"flex gap-x-5"}>
                        <div className={"w-[69px] subtitle-md text-gray5"}>담당자</div>
                        <div className={"flex gap-x-4 items-center body-sm"}>
                            <div className={"pr-4"}>남가을</div>
                            <div className={"text-gray3"}>|</div>
                            <div>010-7557-9217</div>
                            <div className={"text-gray3"}>|</div>
                            <div>hske3602@naver.com</div>
                        </div>
                    </div>
                    <div className={"flex gap-x-5"}>
                        <div className={"w-[69px] subtitle-md text-gray5"}>사업자번호</div>
                        <div className={"body-sm"}>110-81-34859</div>
                    </div>
                </section>
            </section>
        </section>
    )
}
export default OfficeInfo;
