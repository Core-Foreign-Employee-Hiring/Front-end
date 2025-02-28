import UnCheckIcon from "@/src/assets/common/UnCheckIcon";
import {useState} from "react";
import CheckIcon from "@/src/assets/common/CheckIcon";
import Button from "@/src/components/common/Button";

interface Props {

}
const ApplicationUserProfile = (props: Props) => {
    const {} = props;
    const [isClicked, setIsClicked] = useState(false)
    return (
        <section
            onClick={() => {
                setIsClicked(!isClicked);
            }}
            className={isClicked
                ? "flex flex-col justify-end gap-y-5 items-end p-6 rounded-[32px] border border-main"
                : "flex flex-col justify-end gap-y-5 p-6 rounded-[32px] border border-gray2"}>
            <div className={"flex justify-between items-start w-full"}>
                <section className={"flex flex-col gap-y-4"}>
                    <div className={"subtitle-lg"}>{"황유림"}</div>
                    <div className={"flex gap-x-6 items-center"}>
                        <div className={"flex flex-col w-[106px]"}>
                            <div className={"subtitle-md text-gray4"}>기본정보</div>
                            <div className={"body-sm text-gray5"}>2001.04.07 / 여자</div>
                        </div>
                        <div className={"border-r h-[35px] border-gray3"}/>
                        <div className={"flex flex-col w-[95px]"}>
                            <div className={"subtitle-md text-gray4"}>연락처</div>
                            <div className={"body-sm text-gray5"}>010-7557-9217</div>
                        </div>
                        <div className={"border-r h-[35px] border-gray3"}/>
                        <div className={"flex flex-col w-[106px]"}>
                            <div className={"subtitle-md text-gray4"}>지원방법</div>
                            <div className={"body-sm text-gray5"}>온라인 지원</div>
                        </div>
                        <div className={"border-r h-[35px] border-gray3"}/>
                        <div className={"flex flex-col w-[106px]"}>
                            <div className={"subtitle-md text-gray4"}>모집상태</div>
                            <div className={"body-sm text-gray5"}>승인</div>
                        </div>
                        <div className={"border-r h-[35px] border-gray3"}/>
                        <div className={"flex flex-col w-[106px]"}>
                            <div className={"subtitle-md text-gray4"}>평가상태</div>
                            <div className={"body-sm text-gray5"}>평가하기</div>
                        </div>
                        <div className={"border-r h-[35px] border-gray3"}/>
                        <div className={"flex flex-col"}>
                            <div className={"subtitle-md text-gray4"}>계약서 상태</div>
                            <div className={"body-sm text-gray5"}>계약서 미작성</div>
                        </div>
                    </div>
                </section>
                <button

                    className={isClicked
                        ? "flex w-[24px] h-[24px] bg-main rounded-full items-center justify-center"
                        : "flex w-[24px] h-[24px] border-[1.6px] border-gray3 rounded-full items-center justify-center"}>
                    {isClicked && <CheckIcon/>}
                </button>
            </div>
            {isClicked && (
                <section className={"flex gap-x-3"}>
                    <Button className={"bg-gray2-button"} secondClassName={"flex justify-center w-[200px]"}>거절</Button>
                    <Button className={"bg-main-button"} secondClassName={"flex justify-center w-[200px]"}>승인</Button>
                </section>
            )}
        </section>

    )
}
export default ApplicationUserProfile;
