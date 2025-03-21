import {CreatedPortfolioFormType} from "@/src/types/recruit-ad";

const LongText = (props: CreatedPortfolioFormType) => {
    const {title, required} = props;
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
                        //TODO: 지원 post
                    }}
                    className={"outline-none w-full h-[200px]"}/>
            </div>
        </section>
    )
}
export default LongText;
