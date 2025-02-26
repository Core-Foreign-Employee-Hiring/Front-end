import * as React from "react";
import {Dispatch, SetStateAction, useState} from "react";

import {educationList} from "@/src/utils/common";
import {EducationType, GeneralRegisterDataType} from "@/src/types/register";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import Filter from "@/src/components/common/Filter";
import Button from "@/src/components/common/Button";

interface Props {
    education: EducationType;
    setEducation:  Dispatch<SetStateAction<EducationType>>;
}

const Education = (props: Props) => {
    const {education, setEducation} = props;
    const [isEducationFilterContentFocused, setIsEducationFilterContentFocused] = useState(false);
    /**
     * 학력 필터 내용
     */
    const educationFilterContents = () => {
        return (
            <div>
                {educationList.map((education) => {
                    return (
                        <Button
                            type={"button"}
                            onClick={() => {
                                setEducation(education);
                                setIsEducationFilterContentFocused(false)
                            }}
                            key={education} className={"w-full body-md py-[16.5px] px-4 hover:bg-gray1"}>
                            {education}
                        </Button>
                    )
                })}
            </div>
        )
    }

    return (
        <section className={"flex flex-col gap-y-2"}>
            <SelectedFilterContent selectedContent={education} setIsFocused={setIsEducationFilterContentFocused} className={"py-3"}/>
            {isEducationFilterContentFocused && (<Filter filterContents={educationFilterContents} />)}
        </section>
    )
}
export default Education;
