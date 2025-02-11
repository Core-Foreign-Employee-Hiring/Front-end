import Item from "@/src/components/common/Item";
import Button from "@/src/components/common/Button";
import AdSummary from "@/src/components/register/AdSummary";

const ApplyGeneralAd = () => {

    /**
     * 공고보러가기 이동하는 버튼
     */
    const companyInfoEditButton = () => {
        return (
            <Button className={"text-gray5 button-md"}>공고 보러가기</Button>
        )
    }

    return (
        <div>
            <Item
                title={"지원 알바"}
                titleRequired={false}
                titleRightElement={companyInfoEditButton}
                content={
                <AdSummary
                    title={"“1월 매주 토요일 한달 단기알바” 지원자 현황"}
                    recruitPeriod={"24.12.15~25.01.01"}
                    workDays={"주말"}
                    workDuration={"1개월~3개월"}
                    workTime={"9:00-18:00"}/>}
            />
        </div>
    )
}
export default ApplyGeneralAd;
