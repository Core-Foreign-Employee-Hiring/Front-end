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
    setIsSubmitModalOpen: Dispatch<SetStateAction<boolean>>;
    imgRef: React.RefObject<HTMLInputElement | null>;
}
const GeneralAdRegisterStep3 = (props: Props) => {
    const {setStep, setIsSubmitModalOpen, imgRef} = props;
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
    //채용 포스터
    const [uploadImage, setUploadImage] = useState<string | ArrayBuffer | null>();

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

    const workDurationRadioButton = () => {
        return (
            <div className={"flex gap-x-2 items-center"}>
                <button
                    type={"button"}
                    onClick={() => {
                        setWorkDurationAgreement(!workDurationAgreement);
                    }}
                    className={workDurationAgreement
                        ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                        : "flex justify-center items-center w-[20px] h-[20px] rounded-full border border-gray4"}>
                    {workDurationAgreement && (<div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                </button>
                <div className={"button-md text-gray5"}>기간 협의</div>
            </div>
        )
    }

    const workTimeRadioButton = () => {
        return (
            <div className={"flex gap-x-2 items-center"}>
                <button
                    type={"button"}
                    onClick={() => {
                        setWorkTimeAgreement(!workTimeAgreement);
                    }}
                    className={workTimeAgreement
                        ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                        : "flex justify-center items-center w-[20px] h-[20px] rounded-full border border-gray4"}>
                    {workTimeAgreement && (<div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                </button>
                <div className={"button-md text-gray5"}>시간 협의</div>
            </div>
        )
    }

    const workDaysRadioButton = () => {
        return (
            <div className={"flex gap-x-2 items-center"}>
                <button
                    type={"button"}
                    onClick={() => {
                        setWorkDaysAgreement(!workDaysAgreement);
                    }}
                    className={workDaysAgreement
                        ? "flex justify-center items-center w-[20px] h-[20px] rounded-full bg-main"
                        : "flex justify-center items-center w-[20px] h-[20px] rounded-full border border-gray4"}>
                    {workDaysAgreement && (<div className={"w-[10px] h-[10px] rounded-full bg-white"}/>)}
                </button>
                <div className={"button-md text-gray5"}>요일 협의</div>
            </div>
        )
    }

    const handleBeforeSubmit = () => {
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
            applicationMethods: applicationEnumMethods
        }))
        setStep("Second");
    }

    const handleNextSubmit = () => {
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
            applicationMethods: applicationEnumMethods
        }))
        setIsSubmitModalOpen(true);
    }

    useEffect(() => {
        // salary 값이 숫자로 변환 가능하면 체크
        if (salary.trim() === "" || parseInt(salary) >= 10030) {
            setIsSalaryValid(true);
        } else {
            setIsSalaryValid(false);
        }
    }, [salary]);

    const isNextButtonDisabled = useMemo(() => {
        return (
            workDuration === "" ||
            (workTime === "" && startTime === "시작시간" && endTime === "종료시간") ||
            (workDay === "" && workWeekDays.length === 0) ||
            !isSalaryValid || // 급여 유효성 검사 추가
            applicationEnumMethods.length === 0
        );
    }, [workDuration, workTime, startTime, endTime, workDay, workWeekDays, isSalaryValid, applicationEnumMethods]);

    return (
        <main className={"flex flex-col gap-y-[52px]"}>
            <div className={"flex flex-col gap-y-3"}>
                <Item
                    title={"근무 기간"}
                    content={<WorkDuration
                        workDuration={workDuration}
                        setWorkDuration={setWorkDuration}/>}
                    titleRightElement={workDurationRadioButton}/>
                <Item
                    title={"기타사항"}
                    titleRequired={false}
                    content={<Input
                        setInputValue={setWorkDurationOther}
                        inputValue={workDurationOther}
                        placeholder={"직접입력"}
                        className={"w-full"}
                    />}
                />
            </div>
            <div className={"flex flex-col gap-y-3"}>
                <Item
                    title={"근무 시간"}
                    content={<WorkTime
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
                    titleRightElement={workTimeRadioButton}/>
                <Item
                    title={"기타사항"}
                    titleRequired={false}
                    content={<Input
                        setInputValue={setWorkTimeOther}
                        inputValue={workTimeOther}
                        placeholder={"직접입력"}
                        className={"w-full"}/>}/>
            </div>
            <div className={"flex flex-col gap-y-3"}>
                <Item
                    title={"근무 요일"}
                    content={<WorkDays
                        workDay={workDay}
                        workWeekDays={workWeekDays}
                        setWorkDay={setWorkDay}
                        setWorkWeekDays={setWorkWeekDays}
                        setWorkDaysDirectList={setWorkDaysDirectList}
                        setWorkDaysSelectList={setWorkDaysSelectList}
                        workDaysDirectList={workDaysDirectList}
                        workDaysSelectList={workDaysSelectList}
                    />}
                    titleRightElement={workDaysRadioButton}/>
                <Item
                    title={"기타사항"}
                    titleRequired={false}
                    content={<Input
                        setInputValue={setWorkDaysOther}
                        inputValue={workDaysOther}
                        placeholder={"직접입력"}
                        className={"w-full"}/>}/>
            </div>
            <div className={"flex flex-col gap-y-3"}>
                <Item
                    title={"급여"}
                    content={<Salary
                        salary={salary}
                        setSalary={setSalary}
                        salaryType={salaryType}
                        setSalaryType={setSalaryType}
                        salaryErrorMessageEnable={salaryErrorMessageEnable}
                        setSalaryErrorMessageEnable={setSalaryErrorMessageEnable}/>}/>
                <Item
                    title={"기타사항"}
                    titleRequired={false}
                    content={<Input
                        setInputValue={setSalaryOther}
                        inputValue={salaryOther}
                        placeholder={"직접입력"}
                        className={"w-full"}/>}/>
            </div>
            <Item
                title={"지원방법"}
                content={<ApplicationMethods
                    applicationEnumMethods={applicationEnumMethods}
                    setApplicationEnumMethods={setApplicationEnumMethods}/>}/>
            <Item
                title={"채용포스터 업로드"}
                titleRequired={false}
                content={<PosterImageUpload
                    setUploadImage={setUploadImage}
                    uploadImage={uploadImage}
                    imgRef={imgRef}/>}/>
            <section className={"flex gap-x-4"}>
                <Button
                    type={"button"}
                    onClick={() => handleBeforeSubmit()}
                    className={"mt-[28px] flex items-center justify-center bg-gray2-button w-full"}>이전</Button>
                <Button
                    type={"button"}
                    disabled={isNextButtonDisabled}
                    onClick={() => handleNextSubmit()}
                    className={isNextButtonDisabled
                        ? "mt-[28px] flex items-center justify-center bg-gray2-button w-full"
                        : "mt-[28px] flex items-center justify-center bg-main-button w-full"}>
                    다음
                </Button>
            </section>
        </main>
    )
}
export default GeneralAdRegisterStep3;
