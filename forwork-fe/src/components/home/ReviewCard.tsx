interface Props {

}
const ReviewCard = (props: Props) => {
    return (
        <div className={"flex flex-col p-6 gap-y-[13px] rounded-[20px] bg-gray1"}>
            <div className={"subtitle-lg"}>에이OO 학원 파이썬 강사 알바</div>
            <div className={"body-md"}>애들도 착하고 일도 재미있고, 코딩테스트 준비하면서 돈도 많이 벌 수 있어서 좋았습니다.</div>
            <div className={"small"}>2025.01.13</div>
        </div>
    )
}
export default ReviewCard;
