import Filter from "@/src/components/common/Filter";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import Button from "@/src/components/common/Button";
import AddIcon from "@/src/assets/register/AddIcon";
import TrashIcon from "@/src/assets/register/TrashIcon";
import usePortfolioForm from "@/src/hooks/usePortfolioForm";

interface Props {
    index: number;
}

const PortfolioForm = (props: Props) => {
    const {index} = props;

    const {
        generalRegisterData,
        selectedPortfolioFormContent, isPortfolioFormFocused, setIsPortfolioFormFocused,
        renderContent,
        portfolioFilterContents,
        addPortfolio,
        removePortfolio,
        switchPortfolioRequired
    } = usePortfolioForm(index);

    return (
        <section className={"flex flex-col gap-y-4 p-6 rounded-[32px] border border-gray2"}>
            <div className={"relative"}>
                <SelectedFilterContent setIsFocused={setIsPortfolioFormFocused}
                                       selectedContent={selectedPortfolioFormContent} className={"w-fit py-3 pr-3"}/>
                {isPortfolioFormFocused && (
                    <Filter className={"absolute w-fit"} filterContents={portfolioFilterContents}/>
                )}
            </div>
            {renderContent(selectedPortfolioFormContent)}
            <section className={"flex justify-between"}>
                <Button
                    onClick={() => {
                        addPortfolio()
                    }}
                    className={"text-gray5 button-md"}
                    LeftIcon={() => {
                    return (
                        <div className={"flex justify-center items-center w-[20px] h-[20px]"}>
                            <AddIcon />
                        </div>
                    )
                }}>질문 추가</Button>
                <section className={"flex gap-x-6"}>
                    <section className={"flex gap-x-2 items-center"}>
                        <span className={"body-md"}>필수</span>
                        <div
                            className={`w-[52px] h-7 p-1 rounded-[999px] flex items-center cursor-pointer transition-all ${
                                generalRegisterData.portfolios[index].required ? "bg-main justify-end" : "bg-[#c5c6cd] justify-start"
                            }`}
                            onClick={() => {
                                switchPortfolioRequired()
                            }}>
                            <div className="w-5 h-5 bg-white rounded-full transition-all" />
                        </div>
                    </section>

                    <section
                        onClick={() => {
                            removePortfolio()
                        }}
                        className={"flex justify-center items-center w-[32px] h-[32px] cursor-pointer"}>
                        <TrashIcon/>
                    </section>
                </section>
            </section>
        </section>
    )
}
export default PortfolioForm
