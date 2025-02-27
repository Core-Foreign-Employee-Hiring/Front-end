import {Dispatch, SetStateAction, useEffect, useMemo, useState} from "react";
import {
    ApplicationMethodEnumType, EducationType, PreferredConditionType,
    SalaryType,
    TimeType,
    WeekDaysType,
    WorkDaysType,
    WorkDurationType,
    WorkTimeType
} from "@/src/types/register";
import {useAtom} from "jotai/index";
import {generalRegisterDataAtom} from "@/src/store/register/atom";
import {weekDaysList, workDaysList, workDurationList, workTimeList} from "@/src/utils/register";

const useAdRegisterStep2 = (setStep: Dispatch<SetStateAction<"Second" | "First" | "Third">>, setSubmitType: Dispatch<SetStateAction<"" | "draft" | "upload">>, setIsTrigger: Dispatch<SetStateAction<boolean>>) => {
    const [generalRegisterData, setGeneralRegisterData] = useAtom(generalRegisterDataAtom);
    //근무 기간
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
    const [salaryType, setSalaryType] = useState<SalaryType>("")
    const [salary, setSalary] = useState("");
    const [salaryOther, setSalaryOther] = useState("");
    const [salaryErrorMessageEnable, setSalaryErrorMessageEnable] = useState(false);
    const [isSalaryValid, setIsSalaryValid] = useState(true);
    //지원 형태
    const [applicationEnumMethods, setApplicationEnumMethods] = useState<ApplicationMethodEnumType[]>([]);
    //기타 조건
    const [otherConditions, setOtherConditions] = useState("");
    //성별
    const [gender, setGender] = useState<"female" | "male" | null | "">("");
    //학력
    const [education, setEducation] = useState<EducationType>("");
    //우대사항
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
            timeList.push(workTime); // workTime 값이 있다면 추가
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

    /**
     * 시작하자 마자 불러오기
     */
    useEffect(() => {
        if (generalRegisterData.workDuration.length !== 0
            || generalRegisterData.workDurationOther
            || generalRegisterData.workTime.length !== 0
            || generalRegisterData.workTimeOther
            || generalRegisterData.workDays.length !== 0
            || generalRegisterData.workDaysOther
            || generalRegisterData.salary
            || generalRegisterData.salaryType
            || generalRegisterData.salaryOther
            || generalRegisterData.gender
            || generalRegisterData.education
            || generalRegisterData.preferredConditions.length !==0
            || generalRegisterData.otherConditions
        ) {
            //근무 기간
            if (!workDurationList.every((duration) => (generalRegisterData.workDuration as string[]).includes(duration))) {
                setWorkDuration(generalRegisterData.workDuration[0] as WorkDurationType)
                if ((generalRegisterData.workDuration as string[]).includes('기간 협의')) {
                    setWorkDurationAgreement(true);
                }
            }
            setWorkDurationOther(generalRegisterData.workDurationOther as string)

            //근무 시간
            if (workTimeList.every((time) => (generalRegisterData.workTime as string[]).includes(time))) {
                setWorkTime(generalRegisterData.workTime[0] as WorkTimeType)
                if ((generalRegisterData.workTime as string[]).includes("시간 협의")) {
                    setWorkTimeAgreement(true);
                }
            } else if ((generalRegisterData.workTime as string[]).some(time => time.includes('~'))) {
                const parts = generalRegisterData.workTime[0].split("~").map(part => part.trim());
                console.log("parts", parts)
                setStartTime(parts[0] as TimeType);
                setEndTime(parts[1] as TimeType);
                if ((generalRegisterData.workTime as string[]).includes("시간 협의")) {
                    setWorkTimeAgreement(true);
                }
            }
            setWorkTimeOther(generalRegisterData.workTimeOther as string)

            //근무 요일
            if (!weekDaysList.every(day => (generalRegisterData.workDays as string[]).includes(day))) {
                setWorkWeekDays(
                    generalRegisterData.workDays
                        .filter(day => day !== "요일 협의") as WeekDaysType[]
                );
                if ((generalRegisterData.workDays as string[]).includes("요일 협의")) {
                    setWorkDaysAgreement(true);
                }
            } else if (!workDaysList.every(day => (generalRegisterData.workDays as string[]).includes(day))) {
                setWorkDay(generalRegisterData.workDays[0] as WorkDaysType)
                if ((generalRegisterData.workDays as string[]).includes("요일 협의")) {
                    setWorkDaysAgreement(true);
                }
            }
            setWorkDaysOther(generalRegisterData.workDaysOther as string)

            //급여
            setSalaryType(generalRegisterData.salaryType as SalaryType)
            setSalary(generalRegisterData.salary as string)
            setSalaryOther(generalRegisterData.salaryOther as string)
            //성별
            setGender(generalRegisterData.gender)
            //학력
            setEducation(generalRegisterData.education as EducationType)
            //우대조건
            setSelectedPreferredConditions(generalRegisterData.preferredConditions)
            //기타조건
            setOtherConditions(generalRegisterData.otherConditions as string)

        }
    }, [generalRegisterData]);

    const handleBeforeSubmit = () => {
        saveRegisterData();
        setStep("First");
    }

    const handleNextSubmit = () => {
        saveRegisterData();
        if (generalRegisterData.adType === "일반 공고") {
            setSubmitType("upload");
            setIsTrigger(true);
        } else {
            setStep("Third");
        }
    }

    const isNextButtonDisabled = useMemo(() => {
        return (
            workDuration.length === 0
            || (
                workTime.length === 0
                && startTime === "시작시간"
                && endTime === "종료시간"
            )
            || (
                workDay === ""
                && workWeekDays.length === 0
            )
            || salaryType === ""
            || salary === ""
            || gender === ""
            || education === ""
        );
    }, [workDuration, workTime, startTime, endTime, workDay, workWeekDays, salaryType, salary, education, gender, education]);

    /**
     * 상태 그룹화
     */
    const formState = {
        generalRegisterData, setGeneralRegisterData,
        workDuration, setWorkDuration,
        workDurationOther, setWorkDurationOther,
        workDurationAgreement, setWorkDurationAgreement,
        workTime, setWorkTime,
        startTime, setStartTime,
        endTime, setEndTime,
        workTimeSelectList, setWorkTimeSelectList,
        workTimeDirectList, setWorkTimeDirectList,
        workTimeOther, setWorkTimeOther,
        workTimeAgreement, setWorkTimeAgreement,
        workDay, setWorkDay,
        workWeekDays, setWorkWeekDays,
        workDaysSelectList, setWorkDaysSelectList,
        workDaysDirectList, setWorkDaysDirectList,
        workDaysOther, setWorkDaysOther,
        workDaysAgreement, setWorkDaysAgreement,
        salaryType, setSalaryType,
        salary, setSalary,
        salaryOther, setSalaryOther,
        salaryErrorMessageEnable, setSalaryErrorMessageEnable,
        isSalaryValid, setIsSalaryValid,
        applicationEnumMethods, setApplicationEnumMethods,
        otherConditions, setOtherConditions,
        gender, setGender,
        education, setEducation,
        selectedPreferredConditions, setSelectedPreferredConditions
    };

    /**
     * UI 관련 상태 그룹화
     */
    const uiState = {
        isNextButtonDisabled
    };

    return {
        formState, // ✅ 상태 묶어서 반환
        uiState, // ✅ UI 관련 상태도 묶기
        saveRegisterData,
        handleBeforeSubmit,
        handleNextSubmit
    };

}
export default useAdRegisterStep2;
