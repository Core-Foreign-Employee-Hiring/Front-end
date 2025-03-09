import Image from "next/image";

const RecruitPoster = () => {
    return (
        <section className={"flex flex-col gap-y-3"}>
            <h2 className={"title-md"}>모집 포스터</h2>
            <section className="flex flex-col gap-y-4 p-8 rounded-[32px] border border-gray3">
                <div className="relative h-[262px] w-full overflow-hidden border border-gray2">
                    {/* 이미지 */}
                    <Image src="/포스터.jpg" alt="포스터" fill className="object-cover brightness-75"/>

                    {/* 그라디언트 오버레이 (더 강하게 적용) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/5 opacity-70 to-white"></div>
                </div>
            </section>
        </section>
    )
}
export default RecruitPoster
