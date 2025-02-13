import {Dispatch, JSX, SetStateAction} from "react";

import CancelIcon from "@/src/assets/common/CancelIcon";

interface Props {
    content: () => JSX.Element;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const Modal = (props: Props) => {
    const {content, setIsModalOpen} = props;
    return (
        <div className={
            'absolute left-0 right-0 z-50 flex flex-col gap-y-2 justify-center bg-[rgba(0,0,0,0.6)] px-8 min-h-screen'
        }>
            <div className={"rounded-[32px] px-[40px] pt-[36px] pb-[68px]  bg-white"}>
                <div className={"flex justify-end"}>
                    <CancelIcon onClick={() => setIsModalOpen(false)}/>
                </div>
                <div className={"flex flex-col justify-center items-center"}>
                    <div>{content()}</div>
                </div>
            </div>
        </div>
    )
}
export default Modal
