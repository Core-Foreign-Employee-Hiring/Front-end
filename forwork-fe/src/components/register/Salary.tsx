import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import Input from "../common/Input";
import {salaryTypeList, timeList} from "@/src/utils/register";
import Button from "@/src/components/common/Button";
import Filter from "@/src/components/common/Filter";
import {SalaryType} from "@/src/types/register";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import * as React from "react";
interface Props {
    salary: string;
    setSalary: Dispatch<SetStateAction<string>>;
    salaryType: SalaryType;
    setSalaryType: Dispatch<SetStateAction<SalaryType>>;
    salaryErrorMessageEnable: boolean;
    setSalaryErrorMessageEnable: Dispatch<SetStateAction<boolean>>;
}

const Salary = (props: Props) => {
    const {salary, setSalary, salaryType, setSalaryType, salaryErrorMessageEnable, setSalaryErrorMessageEnable} = props;

    const [isSalaryTypeFilterContentFocused, setIsSalaryTypeFilterContentFocused] = useState(false);

    const validateMinimumWage = () => {
        if (parseInt(salary) < 10030) {
            setSalaryErrorMessageEnable(true);
        } else {
            setSalaryErrorMessageEnable(false);
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
                            key={type} className={"w-full py-[16.5px] px-4 subtitle-lg hover:bg-gray1"}>
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
            <div className={"text-error body-md"}>* 2024년 최저임금 10,030원</div>
            <div className={"flex gap-x-3"}>
                <div className={"flex flex-col w-[250px]"}>
                    <SelectedFilterContent selectedContent={salaryType} setIsFocused={() => setIsSalaryTypeFilterContentFocused(!isSalaryTypeFilterContentFocused)}/>
                    {isSalaryTypeFilterContentFocused && (<Filter filterContents={salaryFilterContents} />)}
                </div>
                <Input setInputValue={setSalary} inputValue={salary} className={"w-full"} type={"number"} rightElement={wonSymbolElement}/>
            </div>
            {salaryErrorMessageEnable && (
                <div className={"body-md text-error"}>급여는 최저 시급보다 높아야 합니다.</div>
            )}
        </div>
    )
}
export default Salary;
