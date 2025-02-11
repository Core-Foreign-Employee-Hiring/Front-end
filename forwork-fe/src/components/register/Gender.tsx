import Button from "@/src/components/common/Button";
import {Dispatch, SetStateAction} from "react";

interface Props {
    gender: "female" | "male" | null | "";
    setGender:  Dispatch<SetStateAction<"female" | "male" | null| "">>
}

const Gender = (props: Props) => {
    const {gender, setGender} = props;

    return (
        <div className={"flex flex-col gap-y-3"}>
            <div className={"flex gap-x-3"}>
                <Button
                    type={"button"}
                    onClick={() => {
                        setGender("female")
                    }}
                    className={gender === "female" ? "bg-main-button" : "border-gray4-button"}
                        secondClassName={"flex w-full items-center justify-center"}>
                    여성
                </Button>
                <Button
                    type={"button"}
                    onClick={() => {
                        setGender("male")
                    }}
                    className={gender === "male" ? "bg-main-button" : "border-gray4-button"}
                    secondClassName={"flex w-full items-center justify-center"}>
                    남성
                </Button>
                <Button
                    type={"button"}
                    onClick={() => {
                        setGender(null)
                    }}
                    className={gender === null ? "bg-main-button" : "border-gray4-button"}
                    secondClassName={"flex w-full items-center justify-center"}>
                    무관
                </Button>
            </div>
            <div className={"body-md text-gray5"}>
                남녀고용평등법에 위반될 경우 벌금이 부과될 수 있습니다.
            </div>
            <a
                href={"https://law.go.kr/%EB%B2%95%EB%A0%B9/%EB%82%A8%EB%85%80%EA%B3%A0%EC%9A%A9%ED%8F%89%EB%93%B1%EB%B2%95"}
                className={"body-md text-main"}>
                남녀고용평등법 안내
            </a>
        </div>
    )
}
export default Gender;
