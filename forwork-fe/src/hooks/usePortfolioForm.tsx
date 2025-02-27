import {useEffect, useState} from "react";
import {useAtom} from "jotai/index";

import {FileCountType, PortfolioContentType} from "@/src/types/register";
import {generalRegisterDataAtom} from "@/src/store/register/atom";
import {fileCount, portfolioContents, switchEnumToPortfolioType, switchPortfolioTypeToEnum} from "@/src/utils/register";
import useFilter from "@/src/hooks/useFilter";
import Input from "@/src/components/common/Input";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import Filter from "@/src/components/common/Filter";
import Tag from "@/src/components/common/Tag";

const usePortfolioForm = (index: number) => {
    const [generalRegisterData, setGeneralRegisterData] = useAtom(generalRegisterDataAtom)

    const [inputValue, setInputValue] = useState('');
    const [selectedPortfolioFormContent, setSelectedPortfolioFormContent, isPortfolioFormFocused, setIsPortfolioFormFocused] = useFilter<PortfolioContentType>("장문형")
    const [selectedFileCountContent, setSelectedFileCountContent, isFileCountFilterFocused, setIsFileCountFilterFocused] = useFilter<FileCountType>("파일 개수")

    /**
     * 포트폴리오 추가
     */
    const addPortfolio = () => {
        setGeneralRegisterData((prevState) => ({
            ...prevState,
            portfolios: [
                ...prevState.portfolios, // 기존 배열 유지
                {
                    title: "",
                    type: switchPortfolioTypeToEnum(selectedPortfolioFormContent),
                    maxFileCount: 1,
                    required: false,
                },
            ],
        }));
    }

    /**
     * 포트폴리오 제거
     */
    const removePortfolio = () => {
        setGeneralRegisterData((prevState) => ({
            ...prevState,
            portfolios: prevState.portfolios.filter((_, i) => i !== index),
        }));
    }

    /**
     * 필수사항 변경
     */
    const switchPortfolioRequired= () => {
        setGeneralRegisterData((prevState) => ({
            ...prevState,
            portfolios: prevState.portfolios.map((portfolio, i) =>
                i === index ? { ...portfolio, required: !portfolio.required } : portfolio
            ),
        }));

    }

    /**
     * 최대 파일 개수 설정, 파일업로드일 때는 숫자, 나머지는 null
     */
    useEffect(() => {
        if (selectedPortfolioFormContent === "파일 업로드") {
            setGeneralRegisterData((prevState) => ({
                ...prevState,
                portfolios: prevState.portfolios.map((portfolio, i) =>
                    i === index ? { ...portfolio, maxFileCount: parseInt(selectedFileCountContent) } : portfolio
                ),
            }));
        } else {
            setGeneralRegisterData((prevState) => ({
                ...prevState,
                portfolios: prevState.portfolios.map((portfolio, i) =>
                    i === index ? { ...portfolio, maxFileCount: null } : portfolio
                ),
            }));
        }
    }, [selectedFileCountContent]);

    /**
     * title 추가
     */
    useEffect(() => {
        setGeneralRegisterData((prevState) => ({
            ...prevState,
            portfolios: prevState.portfolios.map((portfolio, i) =>
                i === index ? { ...portfolio, title: inputValue } : portfolio
            ),
        }));
    }, [inputValue]);

    /**
     * type 설정, 파일업로드일 경우 자동으로 파일크기 1로 변경
     */
    useEffect(() => {
        setGeneralRegisterData((prevState) => ({
            ...prevState,
            portfolios: prevState.portfolios.map((portfolio, i) =>
                i === index ? { ...portfolio, type: switchPortfolioTypeToEnum(selectedPortfolioFormContent) } : portfolio
            ),
        }));
        if (selectedPortfolioFormContent === "파일 업로드") {
            setGeneralRegisterData((prevState) => ({
                ...prevState,
                portfolios: prevState.portfolios.map((portfolio, i) =>
                    i === index ? { ...portfolio, maxFileCount: 1 } : portfolio
                ),
            }));
        }
    }, [selectedPortfolioFormContent]);

    /**
     * 페이지 새로 이동시 값 초기화
     */
    useEffect(() => {
        setSelectedPortfolioFormContent(switchEnumToPortfolioType(generalRegisterData.portfolios[index].type));
        setSelectedFileCountContent((generalRegisterData.portfolios[index].maxFileCount ?? 1).toString() as FileCountType)
        setInputValue(generalRegisterData.portfolios[index].title)
    }, [])

    /**
     * Filter 내용
     */
    const portfolioFilterContents = () => {
        return (
            <div>
                {portfolioContents.map((content) => {
                    return (
                        <button
                            onClick={() => {
                                setSelectedPortfolioFormContent(content);
                                setIsPortfolioFormFocused(false);
                            }}
                            key={content}
                            className="w-full py-[20px] px-4 body-sm hover:bg-gray1"
                        >
                            {content}
                        </button>
                    )
                })}
            </div>
        )
    }

    /**
     * 파일 개수 필터 내용
     */
    const fileCountFilterContents = () => {
        return (
            <div className={"w-fit"}>
                {fileCount.map((content) => {
                    return (
                        <button
                            onClick={() => {
                                setSelectedFileCountContent(content);
                                setIsFileCountFilterFocused(false);
                            }}
                            key={content}
                            className="w-full py-[20px] px-4 body-sm hover:bg-gray1"
                        >
                            {content}
                        </button>
                    )
                })}
            </div>
        )
    }

    /**
     * type 에 따라서 UI 렌더링
     * @param selectedPortfolioFormContent type
     */
    const renderContent = (selectedPortfolioFormContent: PortfolioContentType) => {
        switch (selectedPortfolioFormContent) {
            case "장문형":
                return (
                    <div className={"h-[96px] border-b border-gray2 pb-4 body-md text-gray4"}>
                        <Input inputValue={inputValue} setInputValue={setInputValue} placeholder={"제목을 입력해주세요"} className={"border-none w-full px-0"}/>
                    </div>
                )
            case "단답형":
                return (
                    <div className={"border-b border-gray2 pb-4 body-md text-gray4"}>
                        <Input inputValue={inputValue} setInputValue={setInputValue} placeholder={"제목을 입력해주세요"} className={"border-none w-full px-0"}/>
                    </div>
                )
            case "파일 업로드":
                return (
                    <div className={"border-b border-gray2 pb-4 body-md text-gray4"}>
                        <Input inputValue={inputValue} setInputValue={setInputValue} placeholder={"제목을 입력해주세요"} className={"border-none w-full px-0"}/>
                        <div className={"flex flex-col gap-y-4"}>
                            <div className={"flex items-center gap-x-5"}>
                                <div className={"w-[120px] body-md text-gray4"}> 최대 파일 수</div>
                                <div className={"relative"}>
                                    <SelectedFilterContent selectedContent={selectedFileCountContent}
                                                           className={"w-fit py-3"}
                                                           setIsFocused={setIsFileCountFilterFocused}
                                                           isFocused={isFileCountFilterFocused}/>
                                    {isFileCountFilterFocused && (
                                        <Filter className={"absolute h-fit"} filterContents={fileCountFilterContents}/>
                                    )}
                                </div>
                            </div>
                            <Tag className={"bg-gray2-tag"}>이 설문지에 업로드할 수 있는 최대 용량은 50MB입니다.</Tag>
                        </div>
                    </div>
                )
        }
    }

    return {
        generalRegisterData, setGeneralRegisterData,
        inputValue, setInputValue,
        selectedPortfolioFormContent, setSelectedPortfolioFormContent, isPortfolioFormFocused, setIsPortfolioFormFocused,
        selectedFileCountContent, setSelectedFileCountContent, isFileCountFilterFocused, setIsFileCountFilterFocused,
        addPortfolio,
        removePortfolio,
        switchPortfolioRequired,
        renderContent,
        portfolioFilterContents,
        fileCountFilterContents,
    }

}
export default usePortfolioForm
