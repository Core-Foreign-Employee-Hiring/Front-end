import NavBar from "@/src/components/common/NavBar";
import SummaryAd from "@/src/components/common/SummaryAd";
import SideAdInfo from "@/src/components/recruit-ad/SideAdInfo";
import OfficeInfo from "@/src/components/recruit-ad/OfficeInfo";
import RecruitPoster from "@/src/components/recruit-ad/RecruitPoster";
import ApplyMethod from "@/src/components/recruit-ad/ApplyMethod";
import Evaluation from "@/src/components/portfolio/Evaluation";

const RecruitAdDetail = () => {
    return (
        <div>
            <NavBar/>
            <div className={"h-[158px]"}/>
            <main className={"flex gap-x-[40px] justify-center "}>
                <section className={"flex flex-col gap-y-[40px]"}>
                    <SummaryAd />
                    <OfficeInfo />
                    <RecruitPoster />
                    <ApplyMethod />
                    {/*<Evaluation />*/}
                </section>
                <SideAdInfo />
            </main>

        </div>
    )
}
export default RecruitAdDetail
