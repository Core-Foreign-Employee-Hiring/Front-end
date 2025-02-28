import Button from "@/src/components/common/Button";
import {myPageMenuContents} from "@/src/utils/mypage";
import {MyPageStepType} from "@/src/types/mypage";
import {Dispatch, SetStateAction} from "react";

interface Props {
    step: MyPageStepType;
    setStep: Dispatch<SetStateAction<MyPageStepType>>
}

const EmployerMyPageMenu = (props: Props) => {
    const {step, setStep} = props;
    return (
        <section className={"flex flex-col gap-y-10 w-[220px]"}>
            <div className={"title-lg"}>마이페이지</div>
            <div className={"flex flex-col gap-y-3"}>
                {myPageMenuContents.map((myPageMenuContent) => {
                    return (
                        <Button
                            className={myPageMenuContent === step ? "subtitle-md p-2" : "body-md p-2"}
                            onClick={() => {
                                setStep(myPageMenuContent)
                            }}
                            key={myPageMenuContent}>{myPageMenuContent}</Button>
                    )
                })}
            </div>
        </section>
    )
}
export default EmployerMyPageMenu;
