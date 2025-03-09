import Button from "@/src/components/common/Button";
import OptionIcon from "@/src/assets/common/OptionIcon";
import ReplyArrowIcon from "@/src/assets/common/ReplyArrowIcon";
import {useState} from "react";
import Input from "../common/Input";

interface Props {
    type?: "comment" | "reply"
}

const Comment = (props: Props) => {
    const {type = "comment"} = props;

    const [isReplyInputOpen, setIsReplyInputOpen] = useState(false);

    return (
        <section className={type === "comment"
            ? "flex flex-col gap-y-3 px-[32px] py-[24px] border-b border-gray2"
            : "flex flex-col gap-y-3 px-[32px] py-[24px] bg-gray1"}>
            <div className={"flex justify-between"}>
                <div className={"flex gap-x-3 items-center"}>
                    {type === "reply" && (<ReplyArrowIcon />)}
                    <div className={"text-main body-sm"}>albanoye**</div>
                    <div className={"badge-sm text-gray4"}>3분전</div>
                </div>
                <OptionIcon/>
            </div>
            <div className={"body-md"}>
                남의 돈 받는 일이라는게 쉬울 리가 없죠... 아쉽게도ㅠ
            </div>
            {(!isReplyInputOpen && type==="comment") && (
                <Button
                    className={"border-gray2-button"}
                    secondClassName={"py-2 px-3 w-fit"}
                    onClick={() => {
                        setIsReplyInputOpen(true);
                    }}>답글쓰기</Button>
            )}
            {isReplyInputOpen && (
                <div>
                    <div className={"flex gap-x-3 p-5"}>
                        {/*<Input placeholder={"대댓글을 등록해주세요."} className={"p-4 border-gray2 w-full bg-white"}/>*/}
                        <Button className={"bg-main-button"}
                                secondClassName={"flex items-center justify-center py-[15.5px] rounded-[16px] w-[100px]"}>등록</Button>
                    </div>
                </div>
            )}
        </section>
    )
}
export default Comment
