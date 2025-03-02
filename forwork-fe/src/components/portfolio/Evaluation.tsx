import {EmployeeEvaluationCountType} from "@/src/types/portfolio";
import EvaluationTag from "@/src/components/portfolio/EvaluationTag";

interface Props extends EmployeeEvaluationCountType {
    name: string;
}

const Evaluation = (props: Props) => {
    const { name, worksDiligently, skilledAtWork, joinCount, politeAndFriendly, noLatenessOrAbsence, goodCustomerService } = props
    return (
        <article className={"flex flex-col gap-y-[16px] p-[32px]"}>
            <h2 className={"title-md"}>{`${name}님은`}</h2>
            <section className={"gap-[24px] mt-[16px]"}>
                {/*<EvaluationTag leftElement={} count={worksDiligently}>약속된 급여를 제때 줘요</EvaluationTag>*/}
                {/*<EvaluationTag leftElement={} count={worksDiligently}>알바생을 존중해줘요</EvaluationTag>*/}
                {/*<EvaluationTag leftElement={} count={worksDiligently}>계약된 날짜를 잘 지켰어요</EvaluationTag>*/}
                {/*<EvaluationTag leftElement={} count={worksDiligently}>업무 강도가 적당해요</EvaluationTag>*/}
                {/*<EvaluationTag leftElement={} count={worksDiligently}>사장님이 친절해요</EvaluationTag>*/}
            </section>
            <div className={"text-gray5 small"}>{`*${joinCount}명이 참여했어요`}</div>
        </article>
    )
}
export default Evaluation
