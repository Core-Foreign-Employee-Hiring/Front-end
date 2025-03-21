import {useSetAtom} from "jotai";

import {CreatedPortfolioFormType} from "@/src/types/recruit-ad";
import {premiumApplyDataAtom} from "@/src/store/recruit-ad/atom";

const LongText = (props: CreatedPortfolioFormType) => {
    const {title, required, portfolioId} = props;

    // 프리미엄 채용 공고 지원하기 post 요청 값
    const setPremiumApplyData = useSetAtom(premiumApplyDataAtom)

    return (
        <section className={"flex flex-col gap-y-[12px]"}>
            <h2 className={"title-md"}>
                {title}
                {required && (
                    <span className={"text-main"}>*</span>
                )}
            </h2>
            <div className={"py-6 px-7 rounded-[24px] border border-gray3"}>
                <textarea
                    onChange={(e) => {
                        setPremiumApplyData((prev) => ({
                            ...prev,
                            resumePortfolios: [{
                                content: e.target.value,
                                portfolioId: portfolioId,
                            }]
                        }))
                    }}
                    className={"outline-none w-full h-[200px]"}/>
            </div>
        </section>
    )
}
export default LongText;
