import {CreatedPortfolioFormType} from "@/src/types/recruit-ad";
import FileUpload from "@/src/components/recruit-ad/FileUpload";
import ShortText from "@/src/components/recruit-ad/ShortText";
import LongText from "@/src/components/recruit-ad/LongText";

interface Props {
    portfolioForms: CreatedPortfolioFormType[];
}

const CreatedPortfolioForm = (props: Props) => {
    const {portfolioForms} = props;

    const renderPortfolioForm = (portfolioForm: CreatedPortfolioFormType) => {
        switch (portfolioForm.portfolioType) {
            case "FILE_UPLOAD":
                return (
                    <FileUpload key={"FILE_UPLOAD"} {...portfolioForm} />
                )
            case "SHORT_TEXT":
                return (
                    <ShortText key={"SHORT_TEXT"} {...portfolioForm} />
                )
            default:
                return (
                    <LongText key={"LONG_TEXT"} {...portfolioForm} />
                )
        }
    }

    return (
        <section className={"flex flex-col gap-y-[40px]"}>
            {portfolioForms.map((portfolioForm) => {
                return (
                    renderPortfolioForm(portfolioForm)
                )
            })}
        </section>
    )
}
export default CreatedPortfolioForm;
