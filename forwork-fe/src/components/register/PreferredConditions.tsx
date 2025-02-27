import {Dispatch, SetStateAction, useEffect} from "react";

import {preferredConditions} from "@/src/utils/register";
import {PreferredConditionType} from "@/src/types/register";
import Button from "@/src/components/common/Button";
import CheckIcon from "@/src/assets/common/CheckIcon";
import CancelIcon from "@/src/assets/common/CancelIcon";
import useFilter from "@/src/hooks/useFilter";
import Filter from "@/src/components/common/Filter";
import {twMerge} from "tailwind-merge";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import DropDownIcon from "@/src/assets/common/DropDownIcon";

interface Props {
    selectedPreferredConditions: PreferredConditionType[]
    setSelectedPreferredConditions: Dispatch<SetStateAction<PreferredConditionType[]>>
}

const PreferredConditions = (props: Props) => {
    const {selectedPreferredConditions, setSelectedPreferredConditions} = props;
    const [preferredConditionsSelectedContent, setPreferredConditionsSelectedContent, isPreferredConditionsFilterFocused, setIsPreferredConditionsFilterFocused] = useFilter("우대조건 선택");
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

    useEffect(() => {
        setPreferredConditionsSelectedContent(selectedPreferredConditions.join(", "))
    }, [selectedPreferredConditions]);

    return (
        <div>
            <Button
                onClick={() => {
                    setIsPreferredConditionsFilterFocused && setIsPreferredConditionsFilterFocused(!isPreferredConditionsFilterFocused);
                }}
                className={isPreferredConditionsFilterFocused
                    ? "flex justify-between items-center w-full pl-4 pr-3 py-3 rounded-[16px] border border-main"
                    : "flex justify-between items-center w-full pl-4 pr-3 py-3 rounded-[16px] border border-gray2"}>
                <div className={preferredConditionsSelectedContent === "우대조건 선택" ? twMerge("button-md text-gray4") : twMerge("button-md")}>{preferredConditionsSelectedContent === "우대조건 선택" ? "우대조건 선택" : preferredConditionsSelectedContent}</div>
                <div className={"flex justify-center items-center w-[36px] h-[36px]"}>
                    <DropDownIcon />
                </div>
            </Button>
            {isPreferredConditionsFilterFocused && (
                <section className={"flex flex-col gap-y-[32px] rounded-[24px] w-full border border-gray2 p-5"}>
                    <section className={"flex flex-col gap-y-4"}>
                        <section className={"flex justify-between items-center"}>
                            <div className={"flex flex-wrap gap-2"}>
                                {selectedPreferredConditions.map((selectedPreferredCondition) => {
                                    return (
                                        <div
                                            key={selectedPreferredCondition}
                                            className={"flex gap-x-2 border-gray3-button pr-2 bg-gray1 py-2"}>
                                            {selectedPreferredCondition}
                                            <CancelIcon
                                                onClick={() => {
                                                    togglePreferredCondition(selectedPreferredCondition)
                                                }}
                                                className={"cursor-pointer"}
                                                size={20}
                                                color={"#6F717C"}/>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                        <section className={"flex flex-wrap gap-2"}>
                            {preferredConditions.map((preferredCondition) => {
                                return (
                                    <div key={preferredCondition}>
                                        <Button
                                            type={"button"}
                                            onClick={() => togglePreferredCondition(preferredCondition)}
                                            className={selectedPreferredConditions.includes(preferredCondition)
                                                ? "border-main-button px-4"
                                                : "border-gray2-button"}>
                                            {preferredCondition}
                                        </Button>
                                    </div>
                                )
                            })}
                        </section>
                    </section>

                    <section className={"flex justify-end gap-x-2"}>
                        <Button
                            onClick={() => {
                                setSelectedPreferredConditions([])
                            }}
                            className={"border-gray2-button"}
                            secondClassName={"flex items-center justify-center w-[120px] py-3"}>초기화</Button>
                        <Button
                            onClick={() => {
                                setPreferredConditionsSelectedContent(selectedPreferredConditions.join(", "))
                                setIsPreferredConditionsFilterFocused(false)
                            }}
                            className={"bg-main-button"}
                            secondClassName={"flex items-center justify-center w-[120px] py-3"}>
                            {selectedPreferredConditions.length} / 5 적용
                        </Button>
                    </section>
                </section>
            )}
        </div>
    )
}
export default PreferredConditions
