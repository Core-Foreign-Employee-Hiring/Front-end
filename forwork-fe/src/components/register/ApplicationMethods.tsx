import {Dispatch, SetStateAction} from "react";

import {AdType, ApplicationMethodEnumType, ApplicationMethodType} from "@/src/types/register";
import Button from "@/src/components/common/Button";
import {applicationMethods} from "@/src/utils/register";

interface Props {
    adtype: AdType;
    applicationEnumMethods: ApplicationMethodEnumType[];
    setApplicationEnumMethods: Dispatch<SetStateAction<ApplicationMethodEnumType[]>>
}

const ApplicationMethods = (props: Props) => {
    const {adtype, applicationEnumMethods, setApplicationEnumMethods} = props;

    const toggleApplicationMethod = (applicationMethod: ApplicationMethodType) => {
        const mappedMethod = switchApplicationMethod(applicationMethod);
        if (!mappedMethod) return; // undefined일 경우 함수 종료 (안정성 보장)

        setApplicationEnumMethods((prevState) => {
            if (prevState.includes(mappedMethod)) {
                // 이미 선택된 경우 제거
                return prevState.filter((condition) => condition !== mappedMethod);
            } else {
                // 선택되지 않은 경우 추가 (최대 5개 제한)
                return [...prevState, mappedMethod];
            }
        });
    };

    const switchApplicationMethod = (applicationMethod: ApplicationMethodType): ApplicationMethodEnumType => {
        switch (applicationMethod) {
            case "온라인 지원":
                return "ONLINE";
            case "문의 지원":
                return "INQUIRY";
            case "방문 지원":
                return "VISIT";
            case "전화 지원":
                return "CALL_VISIT";
            default:
                throw new Error(`Unhandled application method: ${applicationMethod}`); // 예외 처리 추가
        }
    };

    return (
        <div className={"flex gap-x-3"}>

            {adtype === "프리미엄 공고" ? (
                <div className={"button-md text-gray5"}>온라인 지원</div>
            ) : (
                applicationMethods.map((method) => {
                return (
                    <Button
                        type={"button"}
                        key={method}
                        className={applicationEnumMethods.includes(switchApplicationMethod(method))  ? "bg-main-button py-4" : "border-gray2-button py-4 rounded-[16px]"}
                        secondClassName={"flex items-center justify-center w-full"}
                        onClick={() => {
                            toggleApplicationMethod(method);
                        }}>
                        {method}
                    </Button>
                )
            })
            )}

        </div>
    )
}
export default ApplicationMethods;
