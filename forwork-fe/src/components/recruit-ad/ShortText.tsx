import {CreatedPortfolioFormType} from "@/src/types/recruit-ad";
import Button from "@/src/components/common/Button";
import UpLoadIcon from "@/src/assets/common/UploadIcon";

const ShortText = (props: CreatedPortfolioFormType) => {
    const {title, required, } = props;

    return (
        <section className={"flex flex-col gap-y-[12px]"}>
            <h2 className={"title-md"}>
                {title}
                {required && (
                    <span className={"text-main"}>*</span>
                )}
            </h2>
            <div></div>
        </section>
    )
}
export default ShortText;
