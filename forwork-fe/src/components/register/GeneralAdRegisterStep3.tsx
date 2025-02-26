'use client';

import {Dispatch, SetStateAction, useEffect, useMemo, useState} from "react";
import {useAtom, useSetAtom} from "jotai/index";

import {generalRegisterDataAtom} from "@/src/store/register/atom";
import Item from "@/src/components/common/Item";
import Input from "../common/Input";
import WorkDuration from "@/src/components/register/WorkDuration";
import WorkTime from "@/src/components/register/WorkTime";
import WorkDays from "@/src/components/register/WorkDays";
import Salary from "@/src/components/register/Salary";
import ApplicationMethods from "@/src/components/register/ApplicationMethods";
import {
    ApplicationMethodEnumType,
    SalaryType,
    TimeType,
    WeekDaysType,
    WorkDaysType,
    WorkDurationType,
    WorkTimeType
} from "@/src/types/register";
import Button from "@/src/components/common/Button";
import PosterImageUpload from "@/src/components/register/PosterImageUpload";

interface Props {
    setStep: Dispatch<SetStateAction<"Second" | "First" | "Third">>;
}
const GeneralAdRegisterStep3 = (props: Props) => {
    const {setStep} = props;
    const setGeneralRegisterData = useSetAtom(generalRegisterDataAtom);
    const [workDuration, setWorkDuration] = useState<WorkDurationType>("");
    const [workDurationOther, setWorkDurationOther] = useState("");
    const [workDurationAgreement, setWorkDurationAgreement] = useState(false);
    //근무 시간
    const [workTime, setWorkTime] = useState<WorkTimeType>("");
    const [startTime, setStartTime] = useState<TimeType>("시작시간");
    const [endTime, setEndTime] = useState<TimeType>("종료시간");
    const [workTimeSelectList, setWorkTimeSelectList] = useState<boolean>(false); //목록 선택
    const [workTimeDirectList, setWorkTimeDirectList] = useState<boolean>(false); //직접 선택
    const [workTimeOther, setWorkTimeOther] = useState("");
    const [workTimeAgreement, setWorkTimeAgreement] = useState(false);
    //근무 요일 선택
    const [workDay, setWorkDay] = useState<WorkDaysType>(""); //목록선택 항목
    const [workWeekDays, setWorkWeekDays] = useState<WeekDaysType[]>([]); //직접선택 항목
    const [workDaysSelectList, setWorkDaysSelectList] = useState<boolean>(false); //목록 선택
    const [workDaysDirectList, setWorkDaysDirectList] = useState<boolean>(false); //직접 선택
    const [workDaysOther, setWorkDaysOther] = useState(""); //기타사항
    const [workDaysAgreement, setWorkDaysAgreement] = useState(false);
    //월급 선택
    const [salaryType, setSalaryType] = useState<SalaryType>("시급")
    const [salary, setSalary] = useState("");
    const [salaryOther, setSalaryOther] = useState("");
    const [salaryErrorMessageEnable, setSalaryErrorMessageEnable] = useState(false);
    const [isSalaryValid, setIsSalaryValid] = useState(true);
    //지원 형태
    const [applicationEnumMethods, setApplicationEnumMethods] = useState<ApplicationMethodEnumType[]>([]);

    return (
        <main className={"flex flex-col gap-y-[52px]"}>
        </main>
    )
}
export default GeneralAdRegisterStep3;
