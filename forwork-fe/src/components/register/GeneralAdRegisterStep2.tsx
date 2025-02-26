import {Dispatch, SetStateAction, useEffect, useMemo, useState} from "react";
import {useSetAtom} from "jotai/index";

import {format} from "date-fns";

import {
    ApplicationMethodEnumType,
    EducationType,
    PreferredConditionType, SalaryType,
    TimeType, WeekDaysType,
    WorkDaysType,
    WorkDurationType,
    WorkTimeType
} from "@/src/types/register";
import {generalRegisterDataAtom} from "@/src/store/register/atom";
import Item from "@/src/components/common/Item";
import Input from "@/src/components/common/Input";
import Gender from "@/src/components/register/Gender";
import Education from "@/src/components/register/Education";
import PreferredConditions from "@/src/components/register/PreferredConditions";
import Button from "@/src/components/common/Button";
import WorkDuration from "@/src/components/register/WorkDuration";
import WorkTime from "@/src/components/register/WorkTime";
import WorkDays from "@/src/components/register/WorkDays";
import Salary from "@/src/components/register/Salary";
import Filter from "@/src/components/common/Filter";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import Title from "@/src/components/common/Title";
import {useAtom} from "jotai";

interface Props {
    setStep: Dispatch<SetStateAction<"Second" | "First" | "Third">>
    setSubmitType: Dispatch<SetStateAction<"" | "draft" | "upload">>;
    setIsTrigger: Dispatch<SetStateAction<boolean>>;
}

const GeneralAdRegisterStep2 = (props: Props) => {
    const {setStep, setSubmitType, setIsTrigger} = props;
    const [workDuration, setWorkDuration] = useState<WorkDurationType>("");
    const [workDurationOther, setWorkDurationOther] = useState("");
    const [workDurationAgreement, setWorkDurationAgreement] = useState(false);
    //근무 시간
    const [workTime, setWorkTime] = useState<WorkTimeType>("");
    const [startTime, setStartTime] = useState<TimeType>("시작시간");
    const [endTime, setEndTime] = useState<TimeType>("종료시간");
    const [workTimeSelectList, setWorkTimeSelectList] = useState<boolean>(false); //목록 선택
    const [workTimeDirectList, setWorkTimeDirectList] = useState<boolean>(true); //직접 선택
    const [workTimeOther, setWorkTimeOther] = useState("");
    const [workTimeAgreement, setWorkTimeAgreement] = useState(false);
    //근무 요일 선택
    const [workDay, setWorkDay] = useState<WorkDaysType>(""); //목록선택 항목
    const [workWeekDays, setWorkWeekDays] = useState<WeekDaysType[]>([]); //직접선택 항목
    const [workDaysSelectList, setWorkDaysSelectList] = useState<boolean>(false); //목록 선택
    const [workDaysDirectList, setWorkDaysDirectList] = useState<boolean>(true); //직접 선택
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
    const [generalRegisterData, setGeneralRegisterData] = useAtom(generalRegisterDataAtom);
    const [recruitCount, setRecruitCount] = useState<string>("");
    const [recruitEndDate, setRecruitEndDate] = useState("");
    const [regularRecruit, setRegularRecruit] = useState(false);
    const [otherConditions, setOtherConditions] = useState("");
    const [gender, setGender] = useState<"female" | "male" | null | "">("");
    const [education, setEducation] = useState<EducationType>("");
    const [selectedPreferredConditions, setSelectedPreferredConditions] = useState<PreferredConditionType[]>([]);

    /**
     * 백엔드 코드에 맞게 근무 기간을 설정하는 함수 새로운 []를 만든다.
     * @param workDuration 선택된 근무 기간
     * @param workDurationAgreement 기간 협의 클릭 여부
     */
    const getWorkDurationList = (workDuration: WorkDurationType, workDurationAgreement: boolean): string[] => {
        let durationList: string[] = [];

        if (workDuration) {
            durationList.push(workDuration); // workDuration 값이 있다면 추가
        }

        if (workDurationAgreement) {
            durationList.push("기간 협의"); // workDurationAgreement가 true면 '기간 협의' 추가
        }

        return durationList;
    };

    /**
     * 백엔드 코드에 맞게 근무 시간을 설정하는 함수 새로운 []를 만든다.
     * @param workTime 선택된 근무 시간
     * @param startTime 시작 시간
     * @param endTime 종료 시간
     * @param workTimeAgreement 시간 협의 클릭 여부
     */
    const getWorkTimeList = (workTime: WorkTimeType, startTime: TimeType, endTime: TimeType, workTimeAgreement: boolean): string[] => {
        let timeList: string[] = [];

        if (workTime !== "") {
            timeList.push(workTime); // workDuration 값이 있다면 추가
        }

        if (startTime !== "시작시간" && endTime !== "종료시간") {
            timeList.push(`${startTime}~${endTime}`);
        }

        if (workTimeAgreement) {
            timeList.push("시간 협의"); // workDurationAgreement가 true면 '기간 협의' 추가
        }

        return timeList;
    };

    /**
     * 백엔드 코드에 맞게 근무 시간을 설정하는 함수 새로운 []를 만든다.
     * @param workDay 선택된 근무 시간
     * @param workWeekDays 시작 시간
     * @param workDaysAgreement 종료 시간
     */
    const getWorkDaysList = (workDay: WorkDaysType, workWeekDays: WeekDaysType[], workDaysAgreement: boolean): string[] => {
        let dayList: string[] = [];

        if (workDay !== "") {
            dayList.push(workDay);
        }

        if (workWeekDays.length !== 0) {
            workWeekDays.map((workWeekDay) => {
                dayList.push(workWeekDay);
            })
        }

        if (workDaysAgreement) {
            dayList.push("요일 협의");
        }

        return dayList;
    };

    useEffect(() => {
        // salary 값이 숫자로 변환 가능하면 체크
        if (salary.trim() === "" || parseInt(salary) >= 10030) {
            setIsSalaryValid(true);
        } else {
            setIsSalaryValid(false);
        }
    }, [salary]);

    const saveRegisterData = () => {
        setGeneralRegisterData((prevState) => ({
            ...prevState,
            workDuration: getWorkDurationList(workDuration, workDurationAgreement),
            workDurationOther: workDurationOther,
            workTime: getWorkTimeList(workTime, startTime, endTime, workTimeAgreement),
            workTimeOther: workTimeOther,
            workDays: getWorkDaysList(workDay, workWeekDays, workDaysAgreement),
            workDaysOther: workDaysOther,
            salary: salary,
            salaryType: salaryType,
            salaryOther: salaryOther,
            gender: gender,
            education: education,
            preferredConditions: selectedPreferredConditions,
            otherConditions: otherConditions,
        }))
    }


    // /**
    //  * 시작하자 마자 불러오기
    //  */
    // useEffect(() => {
    //     if (generalRegisterData.title || generalRegisterData.recruitCount || generalRegisterData.recruitEndDate || generalRegisterData.applicationMethods.length !== 0) {
    //         setWorkDuration(generalRegisterData.workDuration);
    //         setWorkDurationOther(generalRegisterData.workDurationOther)
    //         setWorkTime(generalRegisterData.workTime);
    //         setWorkTimeOther(generalRegisterData.workTimeOther as string);
    //         if (!["월요일", "화요일", "수요일", "목요일", "금요일"].every(day => generalRegisterData.workDays.includes(day))) {
    //             setWorkDay()
    //         }
    //         setRecruitCount(generalRegisterData.recruitCount?.toString() as string);
    //         if (generalRegisterData.recruitEndDate === "2099-12-31"){
    //             setRegularRecruit(true);
    //         } else {
    //             setRecruitEndDate(generalRegisterData.recruitEndDate as string);
    //         }
    //         setApplicationEnumMethods(generalRegisterData.applicationMethods)
    //     }
    // }, [generalRegisterData]);

    const handleBeforeSubmit = () => {
        saveRegisterData();
        setStep("First");
    }

    const handleNextSubmit = () => {
        saveRegisterData();
        setStep("Third");
    }

    const isNextButtonDisabled = useMemo(() => {
        return (
            workDuration === "" ||
            (workTime === "" && (startTime === "시작시간" || endTime === "종료시간")) ||
            (workDay === "" && workWeekDays.length === 0) ||
            !isSalaryValid || // 급여 유효성 검사 추가
            applicationEnumMethods.length === 0 ||
            education === ""
        );
    }, [workDuration, workTime, startTime, endTime, workDay, workWeekDays, isSalaryValid, education]);



    useEffect(() => {
        console.log("generalRegisterData", generalRegisterData)
    }, [generalRegisterData]);

    return (
        <main className={"flex flex-col gap-y-[52px]"}>
            <div className={"flex flex-col gap-y-3"}>
                <Item
                    title={"근무 기간"}
                    className={"items-start"}
                    content={<WorkDuration
                        workDurationAgreement={workDurationAgreement}
                        workDurationOther={workDurationOther}
                        workDuration={workDuration}
                        setWorkDurationAgreement={setWorkDurationAgreement}
                        setWorkDurationOther={setWorkDurationOther}
                        setWorkDuration={setWorkDuration}/>}
                />
            </div>
            <div className={"flex flex-col gap-y-3"}>
                <Item
                    title={"근무 시간"}
                    className={"items-start"}
                    content={<WorkTime
                        workTimeOther={workTimeOther}
                        setWorkTimeOther={setWorkTimeOther}
                        workTimeAgreement={workTimeAgreement}
                        setWorkTimeAgreement={setWorkTimeAgreement}
                        workTime={workTime}
                        setStartTime={setStartTime}
                        startTime={startTime}
                        setEndTime={setEndTime}
                        endTime={endTime}
                        setWorkTime={setWorkTime}
                        workTimeSelectList={workTimeSelectList}
                        workTimeDirectList={workTimeDirectList}
                        setWorkTimeDirectList={setWorkTimeDirectList}
                        setWorkTimeSelectList={setWorkTimeSelectList}/>}
                />
            </div>
            <section className={"flex flex-col gap-y-3"}>
                <Item
                    className={"items-start"}
                    title={"근무 요일"}
                    content={<WorkDays
                        setWorkDaysAgreement={setWorkDaysAgreement}
                        workDaysAgreement={workDaysAgreement}
                        setWorkDaysOther={setWorkDaysOther}
                        workDaysOther={workDaysOther}
                        workDay={workDay}
                        workWeekDays={workWeekDays}
                        setWorkDay={setWorkDay}
                        setWorkWeekDays={setWorkWeekDays}
                        setWorkDaysDirectList={setWorkDaysDirectList}
                        setWorkDaysSelectList={setWorkDaysSelectList}
                        workDaysDirectList={workDaysDirectList}
                        workDaysSelectList={workDaysSelectList}
                    />}
                />
            </section>
            <section className={"flex flex-col gap-y-3"}>
                <Item
                    title={"급여"}
                    className={"items-start"}
                    content={<Salary
                        salaryOther={salaryOther}
                        setSalaryOther={setSalaryOther}
                        salary={salary}
                        setSalary={setSalary}
                        salaryType={salaryType}
                        setSalaryType={setSalaryType}
                        salaryErrorMessageEnable={salaryErrorMessageEnable}
                        setSalaryErrorMessageEnable={setSalaryErrorMessageEnable}/>}/>
            </section>
            <Item
                title={"성별"}
                className={"items-start"}
                content={<Gender
                    gender={gender}
                    setGender={setGender}/>}/>
            <Item
                title={"학력"}
                content={<Education
                    education={education}
                    setEducation={setEducation}/>}/>
            <Item
                title={"우대조건"}
                titleRequired={false}
                content={<PreferredConditions
                    selectedPreferredConditions={selectedPreferredConditions}
                    setSelectedPreferredConditions={setSelectedPreferredConditions}/>}/>
            <Item
                title={"기타조건"}
                titleRequired={false}
                content={<Input
                    setInputValue={setOtherConditions}
                    inputValue={otherConditions}
                    placeholder={"직접입력"}
                    className={"w-full"}/>}/>
            <section className={"flex justify-between"}>
                <Button
                    type={"button"}
                    onClick={() => handleBeforeSubmit()}
                    className={"mt-[28px] flex items-center justify-center border-gray2-button w-[200px]"}>이전</Button>
                <div className={"flex gap-x-4"}>
                    <Button
                        type={"button"}
                        onClick={() => {
                            saveRegisterData();
                            setSubmitType("draft");
                            setIsTrigger(true);
                        }}
                        className={"mt-[28px] flex items-center justify-center border-gray2-button w-[200px]"}>임시저장</Button>
                    <Button
                        type={"button"}
                        disabled={!isNextButtonDisabled}
                        onClick={() => handleNextSubmit()}
                        className={!isNextButtonDisabled
                            ? "mt-[28px] flex items-center justify-center bg-gray2-button w-[200px]"
                            : "mt-[28px] flex items-center justify-center bg-main-button w-[200px]"}>
                        다음
                    </Button>
                </div>
            </section>
        </main>
    )
}
export default GeneralAdRegisterStep2;
