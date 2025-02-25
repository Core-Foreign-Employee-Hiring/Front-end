import Tag from "@/src/components/common/Tag";
import ViewIcon from "@/src/assets/review/ViewIcon";
import ReplyIcon from "@/src/assets/review/ReplyIcon";
import {useRouter} from "next/navigation";

interface Props {

}

const Post = (props: Props) => {
    const router = useRouter();
    return (
        <div
            onClick={() => {
                router.push('/review/1')
            }}
            className={"flex flex-col gap-y-3 px-[32px] py-[24px] rounded-[32px] border border-gray2 cursor-pointer"}>
            <section className={"flex gap-x-2"}>
                <Tag className={"bg-mainLight-tag"}>충북 청주시</Tag>
                <Tag className={"border-gray2-tag"}>외식/음료</Tag>
            </section>
            <section className={"flex flex-col gap-y-1 line-clamp-2"}>
                <div className={"subtitle-lg"}>이게 맞는걸까요?</div>
                <div className={"body-md text-gray5"}>오전 11시부터 오후 8시까지 종일알바를 하고있습니다! 지금 이틀째인데 하는 업무가 음식점에서 하는 알바라서 여러 일들을 하고 최저시급을 받고있어요.그런데 사장님이 쉬는시간도 주시지않고 틈틈이 알아서 쉬라네요.. 인기많은 가게라 사실 사람이 쉬지 않고 들어옵니다ㅠ 그래서 사실 틈을 내어 쉴 수 없습니다.. 이게 맞는걸까요? 다들 이...오전 11시부터 오후 8시까지 종일알바를 하고있습니다! 지금 이틀째인데 하는 업무가 음식점에서 하는 알바라서 여러 일들을 하고 최저시급을 받고있어요.그런데 사장님이 쉬는시간도 주시지않고 틈틈이 알아서 쉬라네요.. 인기많은 가게라 사실 사람이 쉬지 않고 들어옵니다ㅠ 그래서 사실 틈을 내어 쉴 수 없습니다.. 이게 맞는걸까요? 다들 이...</div>
            </section>
            <section className={"flex justify-between"}>
                <div className={"flex gap-x-1"}>
                    <div className={"flex gap-x-1 items-center"}>
                        <div className={"flex justify-center items-center w-[24px] h-[24px]"}>
                            <ViewIcon/>
                        </div>
                        <div className={"badge-sm text-gray4"}>100</div>
                    </div>
                    <div className={"flex gap-x-1 items-center"}>
                        <div className={"flex justify-center items-center w-[24px] h-[24px]"}>
                            <ReplyIcon/>
                        </div>
                        <div className={"badge-sm text-gray4"}>5</div>
                    </div>
                </div>
                <div className={"small text-gray4"}>4분 전 작성</div>
            </section>
        </div>
    )
}
export default Post
