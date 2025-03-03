import Modal from "@/src/components/common/Modal";
import ProgressBar from "@/src/components/register/ProgressBar";
import GeneralAdRegisterStep1 from "@/src/components/register/GeneralAdRegisterStep1";
import GeneralAdRegisterStep2 from "@/src/components/register/GeneralAdRegisterStep2";
import GeneralAdRegisterStep3 from "@/src/components/register/GeneralAdRegisterStep3";
import {useRef, useState} from "react";
import PremiumRegisterStep1 from "@/src/components/register/PremiumRegisterStep1";
import PremiumRegisterStep2 from "@/src/components/register/PremiumRegisterStep2";
import PremiumRegisterStep3 from "@/src/components/register/PremiumRegisterStep3";

const PremiumRegisterPage = () => {
    const [step, setStep] = useState<"First" | "Second" | "Third">("First");
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    //채용 포스터
    const imgRef = useRef<HTMLInputElement>(null);

    return (
        <form className={"mt-[80px] flex flex-col gap-y-[52px] px-[350px]"}>
            <ProgressBar setStep={setStep} step={step}/>
            {step === "First" && (<PremiumRegisterStep1 setStep={setStep} />)}
            {step === "Second" && (<PremiumRegisterStep2 setStep={setStep} />)}
            {step === "Third" && (<PremiumRegisterStep3 setStep={setStep} />)}
        </form>
    )
}
export default PremiumRegisterPage;
