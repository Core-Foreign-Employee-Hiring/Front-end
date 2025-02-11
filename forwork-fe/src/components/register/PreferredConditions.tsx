import {Dispatch, SetStateAction} from "react";

import {preferredConditions} from "@/src/utils/register";
import {PreferredConditionType} from "@/src/types/register";
import Button from "@/src/components/common/Button";
import CheckIcon from "@/src/assets/common/CheckIcon";

interface Props {
    selectedPreferredConditions: PreferredConditionType[]
    setSelectedPreferredConditions: Dispatch<SetStateAction<PreferredConditionType[]>>
}

const PreferredConditions = (props: Props) => {
    const {selectedPreferredConditions, setSelectedPreferredConditions} = props;

    const togglePreferredCondition = (preferredCondition: PreferredConditionType) => {
        setSelectedPreferredConditions((prevState) => {
            if (prevState.includes(preferredCondition)) {
                // 이미 선택된 경우 제거
                return prevState.filter((condition) => condition !== preferredCondition);
            } else {
                // 선택되지 않은 경우 추가 (최대 5개 제한)
                return prevState.length < 5 ? [...prevState, preferredCondition] : prevState;
            }
        });
    };

    return (
        <div className={"rounded-[32px] w-full border border-gray4"}>
            <div className={"flex justify-between items-center mx-[32px] py-[24px] border-b border-gray2"}>
                <div className={"flex gap-x-3"}>
                    {selectedPreferredConditions.map((selectedPreferredCondition) => {
                        return (
                            <div
                                key={selectedPreferredCondition}
                                className={"rounded-full border border-gray2 subtitle-md py-[12px] px-[16px] w-fit"}>
                                {selectedPreferredCondition}
                            </div>
                        )
                    })}
                </div>

                <div className={"text-gray4 body-md"}>{selectedPreferredConditions.length} / 5</div>
            </div>
            <div className={"grid grid-cols-4 gap-y-3 py-[24px] px-[32px]"}>
                {preferredConditions.map((preferredCondition) => {
                    return (
                        <div key={preferredCondition} className={"w-[205px]"}>
                            <Button
                                type={"button"}
                                onClick={() => togglePreferredCondition(preferredCondition)}
                                className={selectedPreferredConditions.includes(preferredCondition)
                                    ? "flex gap-x-2 py-3 px-4 subtitle-md rounded-full border border-main"
                                    : "flex gap-x-2 py-3 px-4 body-md text-gray5 rounded-full border border-gray2"}
                                LeftIcon={() =>
                                    selectedPreferredConditions.includes(preferredCondition)
                                        ? (<CheckIcon />)
                                        : (<div className={"w-[24px] h-[24px] rounded-full border-[1.3px] border-gray3"}/>)
                                }>
                                {preferredCondition}
                            </Button>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}
export default PreferredConditions
