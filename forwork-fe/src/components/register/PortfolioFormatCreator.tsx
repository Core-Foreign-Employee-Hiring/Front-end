import Button from "@/src/components/common/Button";
import PortfolioFormat from "@/src/components/register/PortfolioFormat";
import {useAtom} from "jotai";
import {premiumRegisterDataAtom} from "@/src/store/register/atom";
import {PortfolioFormType, PortfolioType} from "@/src/types/register";
import {useState} from "react";

const PortfolioFormatCreator = () => {
    const [isFocusedList, setIsFocusedList] = useState<boolean[]>([]);
    const [premiumRegisterData, setPremiumRegisterData] = useAtom(premiumRegisterDataAtom);

    const addToPortfolioList = () => {
        setIsFocusedList((prev) => [...prev, false]);
        setPremiumRegisterData((prevState) => ({
            ...prevState,
            portfolios: [...prevState.portfolios, {
                title: '',
                type: "LONG_TEXT",
                maxFileCount: 0,
                maxFileSize: 0,
                required: false,
            }]
        }))
    }

    const deleteToPortfolioList = (index: number) => {
        setIsFocusedList((prev) => prev.filter((_, i) => i !== index));
        setPremiumRegisterData((prevState) => ({
            ...prevState,
            portfolios: prevState.portfolios.filter((_, i) => i !== index),
        }));
    };

    const changeTitle = (index: number, value: string) => {
        if (premiumRegisterData.portfolios) {
            setPremiumRegisterData((prevState) => ({
                ...prevState,
                portfolios: prevState.portfolios.map((portfolio, i) =>
                    i === index ? ({ ...portfolio, title: value } as PortfolioFormType) : portfolio
                ),
            }));
        }
    };

    const changeEnabled = (index: number) => {
        if (premiumRegisterData.portfolios) {
            setPremiumRegisterData((prevState) => ({
                ...prevState,
                portfolios: prevState.portfolios.map((portfolio, i) =>
                    i === index ? ({ ...portfolio, required: !portfolio?.required } as PortfolioFormType) : portfolio
                ),
            }));
        }
    };

    const changeFormType = (index: number, type: PortfolioType) => {
        if (premiumRegisterData.portfolios) {
            setPremiumRegisterData((prevState) => ({
                ...prevState,
                portfolios: prevState.portfolios.map((portfolio, i) =>
                    i === index ? ({ ...portfolio, type: type } as PortfolioFormType) : portfolio
                ),
            }));
        }
    };


    const changeMaxFileCount = (index: number, value: number) => {
        if (premiumRegisterData.portfolios) {
            setPremiumRegisterData((prevState) => ({
                ...prevState,
                portfolios: prevState.portfolios.map((portfolio, i) =>
                    i === index ? ({ ...portfolio, maxFileCount: value } as PortfolioFormType) : portfolio
                ),
            }));
        }
    };

    return (
        <div className={"flex flex-col gap-y-5 px-[320px] mt-[80px]"}>
            <div className={"flex justify-between"}>
                <div className={"title-lg"}>받고 싶은 정보를 추가해보세요.</div>
                <Button
                    onClick={() => {
                        addToPortfolioList()
                    }}
                    className={"bg-main-button"}
                    secondClassName={"px-4 py-[7.5px] rounded-[12px]"}>
                    + 추가하기
                </Button>
            </div>
            {premiumRegisterData.portfolios && premiumRegisterData.portfolios.map((portfolio, index) => {
                return (
                    <PortfolioFormat
                        index={index}
                        key={index}
                        type={portfolio?.type}
                        title={portfolio?.title}
                        setTitle={changeTitle}
                        enabled={portfolio?.required}
                        setEnabled={changeEnabled}
                        changeMaxFileCount={changeMaxFileCount}
                        maxFileCount={portfolio?.maxFileCount}
                        changeFormType={changeFormType}
                        setIsFocusedList={setIsFocusedList}
                        isFocusedList={isFocusedList}
                        deleteToPortfolioList={deleteToPortfolioList}/>
                )
            })}
            <Button className={"bg-main-button"} secondClassName={"flex justify-center items-center mt-[80px]"}>공고 등록하기</Button>
        </div>
    )
}
export default PortfolioFormatCreator;
