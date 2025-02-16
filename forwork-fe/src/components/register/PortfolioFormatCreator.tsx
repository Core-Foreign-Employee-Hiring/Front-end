import Button from "@/src/components/common/Button";
import PortfolioFormat from "@/src/components/register/PortfolioFormat";
import {useAtom} from "jotai";
import {premiumRegisterDataAtom} from "@/src/store/register/atom";
import {PortfolioFormType, PortfolioType} from "@/src/types/register";
import {useEffect, useState} from "react";

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

    useEffect(() => {
        console.log("isFocusedList", isFocusedList)
    }, [isFocusedList]);

    const changeTitle = (index: number, value: string) => {
        if (premiumRegisterData.portfolios) {
            setPremiumRegisterData((prevState) => ({
                ...prevState,
                portfolios: prevState.portfolios.map((portfolio, i) =>
                    i === index ? ({ ...portfolio, title: value } as PortfolioType) : portfolio
                ),
            }));
        }
    };

    const changeEnabled = (index: number) => {
        if (premiumRegisterData.portfolios) {
            setPremiumRegisterData((prevState) => ({
                ...prevState,
                portfolios: prevState.portfolios.map((portfolio, i) =>
                    i === index ? ({ ...portfolio, required: !portfolio?.required } as PortfolioType) : portfolio
                ),
            }));
        }
    };

    const changeFormType = (index: number, type: PortfolioFormType) => {
        if (premiumRegisterData.portfolios) {
            setPremiumRegisterData((prevState) => ({
                ...prevState,
                portfolios: prevState.portfolios.map((portfolio, i) =>
                    i === index ? ({ ...portfolio, type: type } as PortfolioType) : portfolio
                ),
            }));
        }
    };

    useEffect(() => {
        console.log(premiumRegisterData.portfolios[0]?.type)
        console.log(premiumRegisterData.portfolios[1]?.type)
    }, [premiumRegisterData.portfolios]);

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
                        maxFileCount={portfolio?.maxFileCount}
                        changeFormType={changeFormType}
                        setIsFocusedList={setIsFocusedList}
                        isFocusedList={isFocusedList}/>
                )
            })}
        </div>
    )
}
export default PortfolioFormatCreator;
