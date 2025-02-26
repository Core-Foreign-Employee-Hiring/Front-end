import Tag from "@/src/components/common/Tag";
import ViewIcon from "@/src/assets/review/ViewIcon";
import ReplyIcon from "@/src/assets/review/ReplyIcon";
import {useRouter} from "next/navigation";
import {ReviewDataContentType} from "@/src/types/review";
import {formatDate} from "@/src/utils/review";
import {changeBusinessFieldEnumToKorType} from "@/src/utils/common";

const Post = (props: ReviewDataContentType) => {
    const router = useRouter();
    const {id, region1, region2, businessField, title, content, createdAt, readCount, commentCount} = props;

    return (
        <div
            onClick={() => {
                router.push(`/review/${id}`)
            }}
            className={"flex flex-col gap-y-3 px-[32px] py-[24px] rounded-[32px] border border-gray2 cursor-pointer"}>
            <section className={"flex gap-x-2"}>
                <Tag className={"bg-mainLight-tag"}>{region1} {region2}</Tag>
                <Tag className={"border-gray2-tag"}>{changeBusinessFieldEnumToKorType(businessField)}</Tag>
            </section>
            <section className={"flex flex-col gap-y-1 line-clamp-2"}>
                <h2 className={"subtitle-lg"}>{title}</h2>
                <div className={"body-md text-gray5"}>{content}</div>
            </section>
            <section className={"flex justify-between"}>
                <div className={"flex gap-x-1"}>
                    <div className={"flex gap-x-1 items-center"}>
                        <div className={"flex justify-center items-center w-[24px] h-[24px]"}>
                            <ViewIcon/>
                        </div>
                        <div className={"badge-sm text-gray4"}>{readCount}</div>
                    </div>
                    <div className={"flex gap-x-1 items-center"}>
                        <div className={"flex justify-center items-center w-[24px] h-[24px]"}>
                            <ReplyIcon/>
                        </div>
                        <div className={"badge-sm text-gray4"}>{commentCount}</div>
                    </div>
                </div>
                <div className={"small text-gray4"}>{formatDate(createdAt)} 작성</div>
            </section>
        </div>
    )
}
export default Post
