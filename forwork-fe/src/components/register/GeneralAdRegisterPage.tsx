import {useEffect, useRef, useState} from "react";
import {useAtom} from "jotai/index";

import ProgressBar from "@/src/components/register/ProgressBar";
import GeneralAdRegisterStep1 from "@/src/components/register/GeneralAdRegisterStep1";
import GeneralAdRegisterStep2 from "@/src/components/register/GeneralAdRegisterStep2";
import GeneralAdRegisterStep3 from "@/src/components/register/GeneralAdRegisterStep3";
import Modal from "@/src/components/common/Modal";
import Button from "@/src/components/common/Button";
import {draftGeneralAd, draftPremiumAd, uploadGeneralAd, uploadPremiumAd} from "@/src/lib/api/register";
import {generalRegisterDataAtom} from "@/src/store/register/atom";

const GeneralAdRegisterPage = () => {
    const [step, setStep] = useState<"First" | "Second" | "Third">("Third");
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [generalRegisterData, setGeneralRegisterData] = useAtom(generalRegisterDataAtom);
    //채용 포스터
    const imgRef = useRef<HTMLInputElement>(null);
    //임시저장인지 그냥 저장인지
    const [submitType, setSubmitType] = useState<"draft" | "upload" | "">("")
    const [isTrigger, setIsTrigger] = useState(false);

    const modalContent = () => {
        return (
            <div className={"flex flex-col gap-y-4"}>
                <div className={"title-lg"}>제출하시겠습니까?</div>
                <div className={"flex gap-x-2"}>
                    <Button
                        className={"bg-gray2-button"}
                        secondClassName={"flex w-full justify-center items-center"}
                        onClick={() => {
                            setIsTrigger(true)
                            setSubmitType("draft")}}>
                        임시저장
                    </Button>
                    <Button
                        className={"bg-main-button"}
                        secondClassName={"flex w-full justify-center items-center"}
                        onClick={() => {
                            setIsTrigger(true)
                            setSubmitType("upload")
                        }}>
                        제출하기
                    </Button>
                </div>
            </div>
        )
    }

    const createFormData = () => {
        const formData = new FormData();

        // "adType"과 "uploadImage"를 제거한 새로운 객체 생성
        if (generalRegisterData.adType === "일반 공고") {
            const { adType, uploadImage, portfolios, ...filteredData } = generalRegisterData;

            console.log("filteredData", filteredData)

            // JSON 문자열로 변환 후 Blob으로 FormData에 추가
            formData.append('request', new Blob([JSON.stringify(filteredData)], { type: 'application/json' }));

            // 이미지 파일이 존재하면 추가
            if (imgRef.current?.files?.[0]) {
                formData.append('posterImage', imgRef.current.files[0]);
            }
        } else {
            const { adType, uploadImage, ...filteredData } = generalRegisterData;

            console.log("filteredData", filteredData)

            // JSON 문자열로 변환 후 Blob으로 FormData에 추가
            formData.append('request', new Blob([JSON.stringify(filteredData)], { type: 'application/json' }));

            // 이미지 파일이 존재하면 추가
            if (imgRef.current?.files?.[0]) {
                formData.append('posterImage', imgRef.current.files[0]);
            }
        }

        return formData;
    };

    /**
     * 폼 제출 함수
     */
    const handleSubmit = async () => {
        const formData = createFormData();
        if (!formData) return; // 파일 없으면 중단

        try {
            if (generalRegisterData.adType === "일반 공고") {
                const response = await uploadGeneralAd(formData);
                console.log("uploadGeneralAd", response);
            } else {
                const response = await  uploadPremiumAd(formData);
                console.log("uploadPremiumAd", response);
            }
        } catch (error) {
            console.error('폼 제출 중 오류 발생:', error);
        }
    };

    /**
     * 임시저장 함수
     */
    const handleDraftSubmit = async () => {
        const formData = createFormData();
        if (!formData) return; // 파일 없으면 중단

        try {
            if (generalRegisterData.adType === "일반 공고") {
                const response = await draftGeneralAd(formData);
                console.log("draftGeneralAd", response);
            } else {
                const response = await draftPremiumAd(formData);
                console.log("draftPremiumAd", response);
            }

        } catch (error) {
            console.error('임시저장 중 오류 발생:', error);
        }
    };

    // isTrigger 상태가 true가 되면 실행
    useEffect(() => {
        if (isTrigger) {
            if (submitType === "draft") {
                handleDraftSubmit().then((r) => {
                    console.log("임시저장", r)
                });
            } else if (submitType === "upload") {
                handleSubmit().then((r) => {
                    console.log("저장", r)
                });
            }
            setIsTrigger(false); // 실행 후 다시 false로 변경하여 중복 실행 방지
        }
    }, [isTrigger, submitType]);

    return (
        <form className={"mt-[80px] flex flex-col gap-y-[52px] px-[350px]"}>
            {isSubmitModalOpen && <Modal setIsModalOpen={setIsSubmitModalOpen} content={modalContent}/>}
            <ProgressBar step={step}/>
            {step === "First" && (<GeneralAdRegisterStep1 setStep={setStep} imgRef={imgRef} setSubmitType={setSubmitType} setIsTrigger={setIsTrigger}/>)}
            {step === "Second" && (<GeneralAdRegisterStep2 setStep={setStep} setSubmitType={setSubmitType} setIsTrigger={setIsTrigger}/>)}
            {step === "Third" && (<GeneralAdRegisterStep3 setStep={setStep} setSubmitType={setSubmitType} setIsTrigger={setIsTrigger}/>)}
        </form>
    )
}
export default GeneralAdRegisterPage;
