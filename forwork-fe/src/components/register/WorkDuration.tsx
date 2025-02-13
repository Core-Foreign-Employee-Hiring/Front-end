import {WorkDurationType} from "@/src/types/register";
import {workDurationList} from "@/src/utils/register";
import Button from "@/src/components/common/Button";
import {Dispatch, SetStateAction} from "react";
import {toggleData} from "@/src/utils/common";

interface Props {
    workDuration: WorkDurationType;
    setWorkDuration: Dispatch<SetStateAction<WorkDurationType>>
}

const WorkDuration = (props: Props) => {
    const {workDuration, setWorkDuration} = props;

    return (
        <div className={"flex gap-x-3"}>
            {workDurationList.map((duration) => {
                return (
                    <Button
                        type={"button"}
                        onClick={() => {
                            toggleData(duration, setWorkDuration);
                        }}
                        key={duration}
                        className={workDuration === duration ? "bg-main-button" : "border-gray3-button"}
                        secondClassName={"subtitle-lg flex justify-center items-center w-full"}>
                        {duration}
                    </Button>
                )
            })}

        </div>
    )
}
export default WorkDuration;
