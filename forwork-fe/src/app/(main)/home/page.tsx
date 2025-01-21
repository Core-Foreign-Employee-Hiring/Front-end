const HomePage = () => {
    return (
        <div>
            <main>
                <NavBar/>
                <div className={"h-[158px]"}/>
                {/* 서비스 소개*/}
                <section className={"flex flex-col justify-center items-center gap-y-6 px-[264px] mt-[32px] mb-[56px]"}>
                    <div className={"flex gap-x-[7px] p-3 rounded-[16px] bg-gray1 subtitle-md w-fit items-center"}>
                        <Image src={"/image 55.png"} width={33} height={33} alt={"/image 55.png"}/>
                        <span>이력서와 포트폴리오를 등록하고 <span className={"text-[#1c6cff]"}>시급 UP!</span></span>
                        <div className={"flex items-center w-[20px] h-[20px]"}>
                            <ArrowForwardIcon/>
                        </div>
                    </div>
                    <div className={"flex justify-center items-center bg-gray3 rounded-[16px] w-full h-[160px]"}>서비스 소개
                        배너
                    </div>
                </section>
                {/* 프리미엄 공고 */}
                <section className={"flex flex-col gap-y-4 bg-gray1 px-[264px] pt-[56px] pb-[63px]"}>
                    <div className={"flex justify-between items-center"}>
                        <div className={"flex items-center gap-x-1"}>
                            <div className={"flex w-[28px] h-[28px] items-center"}>
                                <StarIcon/>
                            </div>
                            <div className={"title-lg"}>프리미엄 공고</div>
                        </div>
                        <Button className={"text-gray5 button-md"}>더보기</Button>
                    </div>
                    <div className={"grid grid-cols-3 gap-6"}>
                        <PremiumCard/>
                        <PremiumCard/>
                        <PremiumCard/>
                        <PremiumCard/>
                        <PremiumCard/>
                        <PremiumCard/>
                    </div>
                </section>


                <Footer />
            </main>
        </div>
    );
}
export default HomePage;
