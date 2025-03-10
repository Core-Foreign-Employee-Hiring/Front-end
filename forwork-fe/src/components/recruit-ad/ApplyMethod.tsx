import {ApplicationMethodEnumType} from "@/src/types/register";
import {switchApplicationMethodEnumToKorType} from "@/src/utils/register";

interface Props {
    applicationMethods: ApplicationMethodEnumType[],
}
const ApplyMethod = (props: Props) => {
    const {applicationMethods} = props;
    return (
        <section className={"flex flex-col gap-y-3"}>
            <h2 className={"title-md"}>지원 방법</h2>
            <section className="flex gap-y-4 p-8 rounded-[32px] border border-gray3 body-md">
                {applicationMethods.map((applicationMethod, index) => {
                    return (
                        <div
                            className={
                            index === applicationMethods.length-1
                                ? "w-[148px] px-[19px]"
                                : "border-r border-gray2 w-[148px]"}>
                            {switchApplicationMethodEnumToKorType(applicationMethod)}
                        </div>
                    )
                })}
            </section>
        </section>
    )
}
export default ApplyMethod
