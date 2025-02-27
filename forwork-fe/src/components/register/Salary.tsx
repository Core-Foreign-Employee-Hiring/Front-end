import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import Input from "../common/Input";
import {salaryTypeList, timeList} from "@/src/utils/register";
import Button from "@/src/components/common/Button";
import Filter from "@/src/components/common/Filter";
import {GeneralRegisterDataType, SalaryType} from "@/src/types/register";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import * as React from "react";
import Tag from "@/src/components/common/Tag";
interface Props {
    generalRegisterData: GeneralRegisterDataType;
    salary: string;
    setSalary: Dispatch<SetStateAction<string>>;
    salaryType: SalaryType;
    setSalaryType: Dispatch<SetStateAction<SalaryType>>;
    salaryErrorMessageEnable: boolean;
    setSalaryErrorMessageEnable: Dispatch<SetStateAction<boolean>>;
    salaryOther: string;
    setSalaryOther: Dispatch<SetStateAction<string>>;
}

const Salary = (props: Props) => {
    const {generalRegisterData, salary, setSalary, salaryType, setSalaryType, salaryErrorMessageEnable, setSalaryErrorMessageEnable, salaryOther, setSalaryOther} = props;

    const [isSalaryTypeFilterContentFocused, setIsSalaryTypeFilterContentFocused] = useState(false);

    const validateMinimumWage = () => {
        if (generalRegisterData.adType === "일반 공고") {
            if (parseInt(salary) < 10030){
                setSalaryErrorMessageEnable(true);
            } else {
                setSalaryErrorMessageEnable(false);
            }
        } else {
            if (parseInt(salary) < 13030){
                setSalaryErrorMessageEnable(true);
            } else {
                setSalaryErrorMessageEnable(false);
            }
        }
    }

    const wonSymbolElement = () => {
        return (
            <div className={"subtitle-lg text-gray4"}>원</div>
        )
    }

    const salaryFilterContents = () => {
        return (
            <div>
                {salaryTypeList.map((type) => {
                    return (
                        <Button
                            type={"button"}
                            onClick={() => {
                                setSalaryType(type)
                                setIsSalaryTypeFilterContentFocused(false)
                            }}
                            key={type} className={"w-full py-[16.5px] px-4 hover:bg-gray1"}>
                            {type}
                        </Button>
                    )
                })}
            </div>
        )
    }

    useEffect(() => {
        validateMinimumWage();
    }, [salary]);

    return (
        <div className={"flex flex-col gap-y-3"}>
            <Tag className={"bg-error-light-tag"}>{generalRegisterData.adType === "프리미엄 공고"
                ? "프리미엄 서비스는 시급13,030원 이상부터 등록 가능합니다."
                : "일반 서비스는 시급10,030원 이상부터 등록 가능합니다."}</Tag>
            <div className={"flex gap-x-3"}>
                <div className={"relative flex flex-col w-[250px]"}>
                    <SelectedFilterContent selectedContent={salaryType} setIsFocused={setIsSalaryTypeFilterContentFocused} className={"py-3"}/>
                    {isSalaryTypeFilterContentFocused && (<Filter className={"absolute top-16 w-full"} filterContents={salaryFilterContents} />)}
                </div>
                <Input setInputValue={setSalary} inputValue={salary} className={"w-full"} type={"number"} rightElement={wonSymbolElement}/>
            </div>
            <section className={"flex gap-x-3 items-center"}>
                <div className={"subtitle-sm"}>기타사항</div>
                <Input
                    setInputValue={setSalaryOther}
                    inputValue={salaryOther}
                    placeholder={"추가 사항이 있다면 입력해주세요."}
                    className={"flex-1"}/>
            </section>
            {salaryErrorMessageEnable && (
                <div className={"body-md text-error"}>급여는 최저 시급보다 높아야 합니다.</div>
            )}
        </div>
    )
}
export default Salary;
