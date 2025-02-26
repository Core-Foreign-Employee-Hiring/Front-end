import Button from "@/src/components/common/Button";
import {Dispatch, SetStateAction} from "react";
import {handleSelectList} from "@/src/utils/register";
import Tag from "@/src/components/common/Tag";

interface Props {
    gender: "female" | "male" | null | "";
    setGender:  Dispatch<SetStateAction<"female" | "male" | null| "">>
}

const Gender = (props: Props) => {
    const {gender, setGender} = props;

    return (
        <div className={"flex flex-col gap-y-4"}>
            <section className={"flex flex-col gap-y-2"}>
                <Tag className={"bg-gray2-tag"}>남녀고용평등법에 위반될 경우 벌금이 부과될 수 있습니다.</Tag>
                <section className={"flex gap-x-3"}>
                    <section className={"flex gap-x-2 items-center"}>
                        <button
                            type={"button"}
                            onClick={() => {
                                setGender("male")
                            }}
                            className={gender === "male"
                                ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                                : "flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1.6px] border-gray3"}>
                            {gender === "male" && (<div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                        </button>
                        <span className={"button-md text-gray5"}>남성</span>
                    </section>
                    <section className={"flex gap-x-2 items-center"}>
                        <button
                            type={"button"}
                            onClick={() => {
                                setGender("female")
                            }}
                            className={gender === "female"
                                ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                                : "flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1.6px] border-gray3"}>
                            {gender === "female" && (<div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                        </button>
                        <span className={"button-md text-gray5"}>여성</span>
                    </section>
                    <section className={"flex gap-x-2 items-center"}>
                        <button
                            type={"button"}
                            onClick={() => {
                                setGender(null)
                            }}
                            className={gender === null
                                ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                                : "flex justify-center items-center w-[20px] h-[20px] rounded-full border-[1.6px] border-gray3"}>
                            {gender === null && (<div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                        </button>
                        <span className={"button-md text-gray5"}>성별 무관</span>
                    </section>
                </section>
            </section>

            <a
                href={"https://law.go.kr/%EB%B2%95%EB%A0%B9/%EB%82%A8%EB%85%80%EA%B3%A0%EC%9A%A9%ED%8F%89%EB%93%B1%EB%B2%95"}
                className={"border-gray2-button w-fit"}>
                남녀고용평등법 안내
            </a>
        </div>
    )
}
export default Gender;
