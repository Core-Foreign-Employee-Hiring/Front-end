import {Dispatch, JSX, SetStateAction} from "react";

import CancelIcon from "@/src/assets/common/CancelIcon";
import Button from "@/src/components/common/Button";

interface Props {
    content: () => JSX.Element;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    actionFunction?: () => void;
    actionButtonContent?: string;
}

const Modal = (props: Props) => {
    const {content, setIsModalOpen, actionFunction, actionButtonContent} = props;
    return (
        <div className={
            'fixed inset-0 z-50 flex flex-col items-center gap-y-2 justify-center bg-[rgba(0,0,0,0.6)] px-8 min-h-screen'
        }>
            <div className={"flex flex-col gap-y-[40px] rounded-[32px] p-6  bg-gray1 shadow-md w-[500px]"}>
                <div className={"flex flex-col justify-center items-center"}>
                    <div>{content()}</div>
                </div>
                <section>
                    <Button
                        onClick={() => {setIsModalOpen(false)}}
                        className={"border-gray2-button"}
                        secondClassName={"flex justify-center items-center py-[19.5px] w-full button-md"}>
                        닫기
                    </Button>
                    {actionFunction && (
                        <Button className={"bg-main-button"} secondClassName={"flex justify-center items-center py-[19.5px] w-full button-md"}>{actionButtonContent}</Button>
                    )}
                </section>
            </div>
        </div>
    )
}
export default Modal
