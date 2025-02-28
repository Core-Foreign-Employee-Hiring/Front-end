import {useSetAtom} from "jotai";
import {useRouter} from "next/navigation";

import Button from "@/src/components/common/Button";
import {MyDraftAdType} from "@/src/types/mypage";
import {formatDate} from "@/src/utils/common";
import {draftRecruitIdAtom} from "@/src/store/register/atom";

const DraftAd = (props: MyDraftAdType) => {
    const {recruitId, title, updatedAt, createdAt} = props;
    const router = useRouter();
    const setDraftRecruitId = useSetAtom(draftRecruitIdAtom)
    return (
        <section className={"flex flex-col gap-y-3 px-6 py-5 bg-gray1 rounded-[20px] w-[282px]"}>
            <div className={"small text-gray4"}>{updatedAt === createdAt ? formatDate(updatedAt) : formatDate(createdAt)}</div>
            <div className={"flex flex-col gap-y-2"}>
                <div className={"subtitle-lg"}>{title}</div>
                <div className={"body-md"}>{"1월 매주 토요일 한달 단기알..."}</div>
            </div>
            <div className={"flex justify-end"}>
                <Button
                    onClick={() => {
                        router.push("/register")
                        setDraftRecruitId(recruitId);
                    }}
                    className={"border-gray2-button"}
                    secondClassName={"w-fit"}>{"이어서 작성하기 →"}</Button>
            </div>
        </section>
    )
}
export default DraftAd;
