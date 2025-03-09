import Button from "@/src/components/common/Button";
import {GenderEnumType, GenderType, SalaryType} from "@/src/types/register";
import {Dispatch, SetStateAction} from "react";
import {genderList, salaryTypeList, switchEnumToKorGenderType, switchKorToEnumGenderType} from "@/src/utils/register";
import CancelIcon from "@/src/assets/common/CancelIcon";

interface Props {
    selectedGender: GenderEnumType;
    setSelectedGender: Dispatch<SetStateAction<GenderEnumType>>;
    selectedSalaryTypeList: SalaryType[];
    setSelectedSalaryTypeList: Dispatch<SetStateAction<SalaryType[]>>
    setIsDetailedConditionFilterFocused: Dispatch<SetStateAction<boolean>>
}
const DetailOptionFilter = (props: Props) => {
    const {selectedGender, setSelectedGender, selectedSalaryTypeList, setSelectedSalaryTypeList, setIsDetailedConditionFilterFocused} = props;

    const toggleSalaryType = (selectedSalaryType: SalaryType) => {
        setSelectedSalaryTypeList((prevState) => {
            if (prevState.includes(selectedSalaryType)) {
                // 이미 선택된 경우 제거
                return prevState.filter((condition) => condition !== selectedSalaryType);
            } else {
                // 선택되지 않은 경우 추가 (최대 5개 제한)
                return [...prevState, selectedSalaryType];
            }
        });
    };

    const toggleGender = (gender: GenderType) => {
        if (switchEnumToKorGenderType(selectedGender) === gender) {
            setSelectedGender("");
        } else {
            setSelectedGender(switchKorToEnumGenderType(gender));
        }
    }

    return (
        <section className={"flex flex-col gap-y-[32px] rounded-[24px] w-full border border-gray2 p-5"}>
            <section className={"flex flex-col gap-y-4"}>
                {/* 이미 선택된 월급 요소 */}
                <section className={"flex justify-between items-center"}>
                    <div className={"flex flex-wrap gap-2"}>
                        {selectedGender !== "" && (
                            <div
                                className={"flex gap-x-2 border-gray3-button pr-2 bg-gray1 py-2"}>
                                {switchEnumToKorGenderType(selectedGender)}
                                <CancelIcon
                                    onClick={() => {
                                        setSelectedGender("");
                                    }}
                                    className={"cursor-pointer"}
                                    size={20}
                                    color={"#6F717C"}/>
                            </div>
                        )}
                        {selectedSalaryTypeList.map((selectedSalaryType) => {
                            return (
                                <div
                                    key={selectedSalaryType}
                                    className={"flex gap-x-2 border-gray3-button pr-2 bg-gray1 py-2"}>
                                    {selectedSalaryType}
                                    <CancelIcon
                                        onClick={() => {
                                            toggleSalaryType(selectedSalaryType)
                                        }}
                                        className={"cursor-pointer"}
                                        size={20}
                                        color={"#6F717C"}/>
                                </div>
                            )
                        })}
                    </div>
                </section>
                {/* 성별 */}
                <section className={"flex flex-col gap-y-[16px]"}>
                    <div className={"flex gap-x-3"}>
                        <div className={"w-[100px] subtitle-sm"}>성별</div>
                        <div className={"flex gap-x-5"}>
                            {genderList.map((gender: GenderType) => {
                                return (
                                    <div
                                        key={gender}
                                        className={"flex gap-x-2"}>
                                        <button
                                            className={selectedGender === switchKorToEnumGenderType(gender) ? "flex justify-center items-center bg-main w-[20px] h-[20px] rounded-full" : "flex justify-center items-center border border-gray3 w-[20px] h-[20px] rounded-full"}
                                            onClick={() => {
                                                toggleGender(gender)
                                            }}>
                                            {selectedGender === switchKorToEnumGenderType(gender) && <div className={"w-[10px] h-[10px] rounded-full bg-white"}/>}
                                        </button>
                                        <div className={"text-gray5 button-md"}>{gender}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={"flex gap-x-3"}>
                        <div className={"w-[100px] subtitle-sm"}>급여형태</div>
                        <div className={"flex gap-x-2"}>
                            {salaryTypeList.map((salaryType) => {
                                return (
                                    <Button
                                        key={salaryType}
                                        type={"button"}
                                        onClick={() => toggleSalaryType(salaryType)}
                                        className={selectedSalaryTypeList.includes(salaryType)
                                            ? "border-main-bg-lightMain-button px-4"
                                            : "border-gray2-button"}>
                                        {salaryType}
                                    </Button>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </section>

            <section className={"flex justify-end gap-x-2"}>
                <Button
                    onClick={() => {
                        setSelectedGender("")
                        setSelectedSalaryTypeList([])
                    }}
                    className={"border-gray2-button"}
                    secondClassName={"flex items-center justify-center w-[120px] rounded-[16px] py-[9.5px]"}>초기화</Button>
                <Button
                    onClick={() => {
                        setIsDetailedConditionFilterFocused(false)
                    }}
                    className={"bg-main-button"}
                    secondClassName={"flex items-center justify-center gap-x-2 w-[120px] rounded-[16px] py-[9.5px]"}>
                    {selectedSalaryTypeList.length !== 0 && (
                        <div className={"flex justify-center items-center w-[20px] h-[20px] rounded-full bg-white text-main badge-sm"}>
                            <span>{selectedSalaryTypeList.length + (selectedGender !== "" ? 1 : 0)}</span>
                        </div>
                    )}
                    적용
                </Button>
            </section>
        </section>
    )
}
export default DetailOptionFilter;
