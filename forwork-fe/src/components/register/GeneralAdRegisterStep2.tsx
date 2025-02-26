import {Dispatch, SetStateAction, useState} from "react";
import {useSetAtom} from "jotai/index";

import {format} from "date-fns";

import {EducationType, PreferredConditionType} from "@/src/types/register";
import {generalRegisterDataAtom} from "@/src/store/register/atom";
import Item from "@/src/components/common/Item";
import Input from "@/src/components/common/Input";
import Gender from "@/src/components/register/Gender";
import RecruitDate from "@/src/components/register/RecruitDate";
import Education from "@/src/components/register/Education";
import PreferredConditions from "@/src/components/register/PreferredConditions";
import Button from "@/src/components/common/Button";

interface Props {
    setStep: Dispatch<SetStateAction<"Second" | "First" | "Third">>
}

const GeneralAdRegisterStep2 = (props: Props) => {
    const {setStep} = props;
    const setGeneralRegisterData = useSetAtom(generalRegisterDataAtom);
    const [recruitCount, setRecruitCount] = useState<string>("");
    const [recruitEndDate, setRecruitEndDate] = useState("");
    const [regularRecruit, setRegularRecruit] = useState(false);
    const [otherConditions, setOtherConditions] = useState("");
    const [gender, setGender] = useState<"female" | "male" | null | "">("");
    const [education, setEducation] = useState<EducationType>("");
    const [selectedPreferredConditions, setSelectedPreferredConditions] = useState<PreferredConditionType[]>([]);

    const handleBeforeSubmit = () => {
        setGeneralRegisterData((prevState) => ({
            ...prevState,
            recruitStartDate: format(new Date(), 'yyyy-MM-dd'),
            recruitEndDate: regularRecruit ? "2099-12-31" : format(recruitEndDate, 'yyyy-MM-dd'),
            recruitCount: parseInt(recruitCount),
            gender: gender,
            education: education,
            otherConditions: otherConditions,
            preferredConditions: selectedPreferredConditions,
        }))
        setStep("First");
    }

    const handleNextSubmit = () => {
        setGeneralRegisterData((prevState) => ({
            ...prevState,
            recruitStartDate: format(new Date(), 'yyyy-MM-dd'),
            recruitEndDate: regularRecruit ? "2099-12-31" : format(recruitEndDate, 'yyyy-MM-dd'),
            recruitCount: parseInt(recruitCount),
            gender: gender,
            education: education,
            otherConditions: otherConditions,
            preferredConditions: selectedPreferredConditions,
        }))
        setStep("Third");
    }

    return (
        <main className={"flex flex-col gap-y-[52px]"}>
            <Item
                title={"성별"}
                content={<Gender
                    gender={gender}
                    setGender={setGender}/>}/>
            <Item
                title={"학력"}
                content={<Education
                    education={education}
                    setEducation={setEducation}/>}/>
            <Item
                title={"기타조건"}
                titleRequired={false}
                content={<Input
                    setInputValue={setOtherConditions}
                    inputValue={otherConditions}
                    placeholder={"직접입력"}
                    className={"w-full"}/>}/>
            <Item
                title={"우대조건"}
                titleRequired={false}
                content={<PreferredConditions
                    selectedPreferredConditions={selectedPreferredConditions}
                    setSelectedPreferredConditions={setSelectedPreferredConditions}/>}/>
            <section className={"flex gap-x-4"}>
                <Button
                    type={"button"}
                    onClick={() => handleBeforeSubmit()}
                    className={"mt-[28px] flex items-center justify-center bg-gray2-button w-full"}>이전</Button>
                <Button
                    type={"button"}
                    disabled={(recruitEndDate === "" && !regularRecruit) || recruitCount === "" || gender === "" || education === ""}
                    onClick={() => handleNextSubmit()}
                    className={(recruitEndDate === "" && !regularRecruit) || recruitCount === "" || gender === "" || education === ""
                        ? "mt-[28px] flex items-center justify-center bg-gray2-button w-full"
                        : "mt-[28px] flex items-center justify-center bg-main-button w-full"}>
                    다음
                </Button>
            </section>
        </main>
    )
}
export default GeneralAdRegisterStep2;
