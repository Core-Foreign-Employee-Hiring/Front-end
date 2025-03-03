import {Dispatch, SetStateAction} from "react";

import Item from "@/src/components/common/Item";
import Button from "@/src/components/common/Button";
import Input from "@/src/components/common/Input";
import CompanyInfo from "@/src/components/register/CompanyInfo";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import RecruitDate from "@/src/components/register/RecruitDate";
import ApplicationMethods from "@/src/components/register/ApplicationMethods";
import PosterImageUpload from "@/src/components/register/PosterImageUpload";
import Filter from "@/src/components/common/Filter";
import useAdRegisterStep1 from "@/src/hooks/useAdRegisterStep1";

interface Props {
    setStep: Dispatch<SetStateAction<"Second" | "First" | "Third">>
    imgRef: React.RefObject<HTMLInputElement | null>;
    setSubmitType: Dispatch<SetStateAction<"" | "draft" | "upload">>;
    setIsTrigger: Dispatch<SetStateAction<boolean>>;
}

const GeneralAdRegisterStep1 = (props: Props) => {
    const {setStep, imgRef, setSubmitType, setIsTrigger} = props;

    const {
        employerInfo,
        formState, // ✅ 상태 묶어서 반환
        uiState, // ✅ UI 관련 상태도 묶기
        saveRegisterData,
        handleSubmit
    } = useAdRegisterStep1(setStep);

    const {
        title, setTitle,
        recruitCount, setRecruitCount,
        recruitEndDate, setRecruitEndDate,
        regularRecruit, setRegularRecruit,
        applicationEnumMethods, setApplicationEnumMethods,
        uploadImage, setUploadImage,
        selectedAdTypeContent,
    } = formState;

    const {
        isAdTypeFilterFocused, setAdTypeFilterIsFocused,
        adTypeContents,
        isNextButtonDisabled
    } = uiState;

    if (!employerInfo) {
        return
    }

    return (
        <main className={"flex flex-col gap-y-[52px]"}>
            <section className={"relative"}>
                <Item title={"공고종류"} content={
                    <SelectedFilterContent
                        setIsFocused={() => setAdTypeFilterIsFocused}
                        selectedContent={selectedAdTypeContent}
                        className={"py-3 h-fit w-[508px]"}/>}/>
                {isAdTypeFilterFocused && (<Filter className={"absolute left-[214px] z-10 h-fit w-[508px]"} filterContents={adTypeContents}/>)}
            </section>
            <Item title={"공고제목"} content={
                <Input
                    setInputValue={setTitle}
                    inputValue={title}
                    className={"h-fit w-full border-gray2"}/>} />
            <Item
                className={"items-start"}
                title={"회사정보"}
                content={
                    <CompanyInfo
                        businessFields={employerInfo.businessFields}
                        companyAddress={`${employerInfo.address1} ${employerInfo.address2}`}
                        companyName={employerInfo.companyName}
                        businessRegistrationNumber={employerInfo.businessRegistrationNumber}
                        CEO={employerInfo.name}
                        email={employerInfo.companyEmail}
                        logoUrl={"/image 55.png"}
                        phoneNumber={employerInfo.mainPhoneNumber}/>} />
            <Item
                className={"items-start"}
                title={"모집 기간"}
                content={
                    <RecruitDate
                        regularRecruit={regularRecruit}
                        setRegularRecruit={setRegularRecruit}
                        recruitEndDate={recruitEndDate}
                        setRecruitEndDate={setRecruitEndDate} />} />
            <Item
                title={"모집 인원"}
                content={
                    <Input
                        placeholder={"모집 인원을 작성해주세요."}
                        type={"number"}
                        setInputValue={setRecruitCount}
                        inputValue={recruitCount}
                        className={"w-[520px]"}/>} />
            <Item
                title={"지원방법"}
                content={<ApplicationMethods
                    adtype={selectedAdTypeContent}
                    applicationEnumMethods={applicationEnumMethods}
                    setApplicationEnumMethods={setApplicationEnumMethods}/>}/>
            <Item
                title={"채용포스터 업로드"}
                titleRequired={false}
                className={"items-start"}
                content={<PosterImageUpload
                    setUploadImage={setUploadImage}
                    uploadImage={uploadImage}
                    imgRef={imgRef}/>}/>
            <section className={"flex justify-end w-full gap-x-3"}>
                <Button
                    onClick={() => {
                        saveRegisterData();
                        setSubmitType("draft");
                        setIsTrigger(true);
                    }}
                    className={"mt-[28px] flex items-center justify-center border-gray2-button w-[200px]"}>임시저장</Button>
                <Button
                    disabled={isNextButtonDisabled}
                    onClick={() => handleSubmit()}
                    className={isNextButtonDisabled
                        ? "mt-[28px] flex items-center justify-center bg-gray2-button w-[200px]"
                        : "mt-[28px] flex items-center justify-center bg-main-button w-[200px]"}>
                    다음
                </Button>
            </section>
        </main>
    )
}
export default GeneralAdRegisterStep1;
