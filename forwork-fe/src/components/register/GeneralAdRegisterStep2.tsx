import {Dispatch, SetStateAction} from "react";

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
import useAdRegisterStep2 from "@/src/hooks/useAdRegisterStep2";

interface Props {
    setStep: Dispatch<SetStateAction<"Second" | "First" | "Third">>
    setSubmitType: Dispatch<SetStateAction<"" | "draft" | "upload">>;
    setIsTrigger: Dispatch<SetStateAction<boolean>>;
}

const GeneralAdRegisterStep2 = (props: Props) => {
    const {setStep, setSubmitType, setIsTrigger} = props;

    const {
        formState, // ✅ 상태 묶어서 반환
        uiState, // ✅ UI 관련 상태도 묶기
        saveRegisterData,
        handleBeforeSubmit,
        handleNextSubmit
    } = useAdRegisterStep2(setStep);

    const {
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
        otherConditions, setOtherConditions,
        gender, setGender,
        education, setEducation,
        selectedPreferredConditions, setSelectedPreferredConditions
    } = formState;

    const{
        isNextButtonDisabled
    } = uiState;

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
                        disabled={isNextButtonDisabled}
                        onClick={() => handleNextSubmit()}
                        className={isNextButtonDisabled
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
