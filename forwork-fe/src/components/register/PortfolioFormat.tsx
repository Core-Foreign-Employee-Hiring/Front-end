import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import DeleteIcon from "@/src/assets/register/DeleteIcon";
import {PortfolioFormType, PortfolioType} from "@/src/types/register";
import Filter from "@/src/components/common/Filter";
import Button from "@/src/components/common/Button";
import * as React from "react";
import {
    maxFileCountList,
    premiumFormTypeList,
    switchEngToKorContent,
    switchKorToEngContent
} from "@/src/utils/register";
import {Dispatch, SetStateAction} from "react";
import {useAtom} from "jotai/index";
import {premiumRegisterDataAtom} from "@/src/store/register/atom";

interface Props {
    index: number;
    type: PortfolioFormType | null | undefined ;
    title: string | null | undefined ;
    setTitle: (index: number, value: string) => void;
    enabled: boolean | null | undefined ;
    setEnabled: (index: number) => void;
    maxFileCount?: number | null | undefined;
    changeFormType: (index: number, type: PortfolioFormType) => void;
    isFocusedList: boolean[];
    setIsFocusedList: Dispatch<SetStateAction<boolean[]>>;
    deleteToPortfolioList: (index: number) => void;
    changeMaxFileCount: (index: number, value: number) => void;
}
const PortfolioFormat = (props: Props) => {
    const {index, type, title, setTitle, enabled, setEnabled, maxFileCount, changeFormType, isFocusedList, setIsFocusedList, deleteToPortfolioList, changeMaxFileCount} = props;
    const [premiumRegisterData, setPremiumRegisterData] = useAtom(premiumRegisterDataAtom);

    const filterTypeContents = () => {
        return (
            <div>
                {premiumFormTypeList.map((premiumFormType) => {
                    return (
                        <Button
                            onClick={() => {
                                changeFormType(index, switchKorToEngContent(premiumFormType))
                                setIsFocusedList((prevState) => prevState.map((item, i) => (i === index ? !item : item)));
                            }}
                            key={premiumFormType} className={"w-full py-[16.5px] px-4 body-md hover:bg-gray1"}>
                            {premiumFormType}
                        </Button>
                    )
                })}
            </div>
        )
    }

    const renderType = () => {
        switch (type) {
            case "LONG_TEXT":
                return (
                    <div>
                        <div className={"flex justify-between border-b pb-3 border-gray2"}>
                            <input
                                className={"placeholder:subtitle-lg outline-none w-[60%]"}
                                placeholder={"제목을 입력해주세요."}
                                onChange={(e) => {
                                    setTitle(index, e.target.value)
                                }}
                                value={title as string}
                                />
                            <div className={"flex gap-x-5 items-center"}>
                                <div>
                                    <SelectedFilterContent
                                        isFocused={isFocusedList[index]}
                                        setIsFocused={() =>
                                            setIsFocusedList((prevState) => prevState.map((item, i) => (i === index ? !item : item)))}
                                        textStyle={"body-md"}
                                        selectedContent={switchEngToKorContent(type)}
                                        className={"w-[152px] py-[8px] px-4 border border-gray2 body-md"}/>
                                    {isFocusedList[index] && <Filter className={"absolute border border-gray3 w-[152px] h-fit bg-white"} filterContents={filterTypeContents} />}
                                </div>
                                <div className={"flex gap-x-3"}>
                                    <div className={"body-md"}>
                                        필수
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" checked={enabled as boolean}
                                               onChange={() => setEnabled(index)}/>
                                        <div
                                            className={`w-[36px] rounded-full transition-all ${enabled ? "bg-main" : "bg-gray2"}`}>
                                            <div
                                                className={`w-[17.5px] h-[17.5px] px-1 py-[3px] bg-white rounded-full shadow-md transform transition-all ${enabled ? "translate-x-5" : ""}`}></div>
                                        </div>
                                    </label>
                                </div>
                                <DeleteIcon onClick={() => {deleteToPortfolioList(index)}}/>
                            </div>
                        </div>
                        <div className={"flex flex-col mt-[12px]"}>
                            <div className={"text-gray3 body-md h-[100px]"}>
                                장문형 텍스트를 입력받습니다.
                            </div>
                            <div className={"flex justify-end text-gray3 small"}>0/1000</div>
                        </div>
                    </div>
                )
            case "SHORT_TEXT":
                return (
                    <div>
                        <div className={"flex justify-between border-b pb-3 border-gray2"}>
                            <input
                                className={"placeholder:subtitle-lg outline-none w-[60%]"}
                                placeholder={"제목을 입력해주세요."}
                                onChange={(e) => {
                                    setTitle(index, e.target.value)
                                }}
                                value={title as string}
                            />
                            <div className={"flex gap-x-5 items-center"}>
                                <div>
                                    <SelectedFilterContent
                                        textStyle={"body-md"}
                                        selectedContent={switchEngToKorContent(type)}
                                        setIsFocused={() =>
                                            setIsFocusedList((prevState) => prevState.map((item, i) => (i === index ? !item : item)))}
                                        className={"w-[152px] py-[8px] px-4 border border-gray2 body-md"}/>
                                    {isFocusedList[index] && <Filter className={"absolute border border-gray3 w-[152px] h-fit bg-white"} filterContents={filterTypeContents} />}
                                </div>
                                <div className={"flex gap-x-3"}>
                                    <div className={"body-md"}>
                                        필수
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" checked={enabled as boolean}
                                               onChange={() => setEnabled(index)}/>
                                        <div
                                            className={`w-[36px] rounded-full transition-all ${enabled ? "bg-main" : "bg-gray2"}`}>
                                            <div
                                                className={`w-[17.5px] h-[17.5px] px-1 py-[3px] bg-white rounded-full shadow-md transform transition-all ${enabled ? "translate-x-5" : ""}`}></div>
                                        </div>
                                    </label>
                                </div>
                                <DeleteIcon onClick={() => {deleteToPortfolioList(index)}}/>
                            </div>
                        </div>
                        <div className={"flex flex-col mt-[12px]"}>
                            <div className={"text-gray3 body-md"}>
                                단문형 텍스트를 입력받습니다.
                            </div>
                            <div className={"flex justify-end text-gray3 small"}>0/200</div>
                        </div>
                    </div>
                )
            case "FILE_UPLOAD":
                return (
                    <div>
                        <div className={"flex justify-between border-b pb-3 border-gray2"}>
                            <input
                                className={"placeholder:subtitle-lg outline-none w-[60%]"}
                                placeholder={"제목을 입력해주세요."}
                                onChange={(e) => {
                                    setTitle(index, e.target.value)
                                }}
                                value={title as string}
                            />
                            <div className={"flex gap-x-5 items-center"}>
                                <div>
                                    <SelectedFilterContent
                                        textStyle={"body-md"}
                                        selectedContent={switchEngToKorContent(type)}
                                        setIsFocused={() =>
                                            setIsFocusedList((prevState) => prevState.map((item, i) => (i === index ? !item : item)))}
                                        className={"w-[152px] py-[8px] px-4 border border-gray2 body-md"}/>
                                    {isFocusedList[index] && <Filter className={"absolute border border-gray3 w-[152px] h-fit bg-white"} filterContents={filterTypeContents} />}
                                </div>
                                <div className={"flex gap-x-3"}>
                                    <div className={"body-md"}>
                                        필수
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" checked={enabled as boolean}
                                               onChange={() => setEnabled(index)}/>
                                        <div
                                            className={`w-[36px] rounded-full transition-all ${enabled ? "bg-main" : "bg-gray2"}`}>
                                            <div
                                                className={`w-[17.5px] h-[17.5px] px-1 py-[3px] bg-white rounded-full shadow-md transform transition-all ${enabled ? "translate-x-5" : ""}`}></div>
                                        </div>
                                    </label>
                                </div>
                                <DeleteIcon onClick={() => {deleteToPortfolioList(index)}}/>
                            </div>
                        </div>
                        <div className={"flex flex-col mt-[12px] gap-y-3"}>
                            <div className={"text-main body-md"}>
                                이 형식에 업로드할 수 있는 최대 용량은 100MG 입니다.
                            </div>
                            <div className={"flex gap-x-6 items-center"}>
                                <div className={"subtitle-lg text-gray5"}>최대 파일 수</div>
                                {premiumRegisterData.portfolios[index] && (
                                    <input
                                        className={"outline-none body-md px-4 py-3 rounded-[16px] border border-gray3"}
                                        type={"number"}
                                        value={premiumRegisterData.portfolios[index]?.maxFileCount}
                                        onChange={(e) => changeMaxFileCount(index, parseInt(e.target.value))}
                                        max={10}
                                        min={0}/>
                                )}
                            </div>
                        </div>
                    </div>
                )
        }
    }

    return (
        <div className={"p-4 rounded-[24px] border border-gray3"}>
            {renderType()}
        </div>
    )
}
export default PortfolioFormat
