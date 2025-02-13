import {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {
    adInfoAgreementEmailAtom,
    adInfoAgreementSnsMmsAtom, over15Atom,
    personalInfoAgreementAtom,
    termsOfServiceAgreementAtom
} from "@/src/store/sign-up/atom";
import UnCheckIcon from "@/src/assets/common/UnCheckIcon";

const TermsAgreement = () => {
    const [allOptions, setAllOptions] = useState(false);

    const [termsOfServiceAgreement, setTermsOfServiceAgreement] = useAtom(termsOfServiceAgreementAtom);
    const [personalInfoAgreement, setPersonalInfoAgreement] = useAtom(personalInfoAgreementAtom);
    const [over15, setOver15] = useAtom(over15Atom);
    const [adInfoAgreementSnsMms, setAdInfoAgreementSnsMms] = useAtom(adInfoAgreementSnsMmsAtom);
    const [adInfoAgreementEmail, setAdInfoAgreementEmail] = useAtom(adInfoAgreementEmailAtom);

    const termsOfUseContents = [
        {content: "(필수) 서비스 이용약관 동의", state: termsOfServiceAgreement, setState: setTermsOfServiceAgreement},
        {content: "(필수) 개인정보 수집 및 이용 동의", state: personalInfoAgreement, setState: setPersonalInfoAgreement},
        {content: "(필수)만 15세 이상 동의", state: over15, setState: setOver15},
        {content: "(선택) 광고성 정보 수신 동의 (SNS/MMS)", state: adInfoAgreementSnsMms, setState: setAdInfoAgreementSnsMms},
        {content: "광고성 정보 수신 동의 (이메일)", state: adInfoAgreementEmail, setState: setAdInfoAgreementEmail}
    ]

    // 개별 상태가 하나라도 false이면 allOptions를 false로 설정
    useEffect(() => {
        if (termsOfServiceAgreement && personalInfoAgreement && adInfoAgreementSnsMms && adInfoAgreementEmail && over15) {
            setAllOptions(true); // 모두 true일 경우 allOptions도 true
        } else {
            setAllOptions(false); // 하나라도 false면 allOptions는 false
        }
    }, [termsOfServiceAgreement, personalInfoAgreement, adInfoAgreementSnsMms, adInfoAgreementEmail, over15]);

    const handleAllOptionsClick = () => {
        const newAllOptions = !allOptions;
        setAllOptions(newAllOptions);
        setTermsOfServiceAgreement(newAllOptions);
        setPersonalInfoAgreement(newAllOptions);
        setAdInfoAgreementSnsMms(newAllOptions);
        setAdInfoAgreementEmail(newAllOptions);
        setOver15(newAllOptions);
    };

    const handleIndividualOptionClick = (setState:  React.Dispatch<React.SetStateAction<boolean>>, currentState: boolean) => {
        setState(!currentState);
    };

    return (
        <div className={"flex flex-col gap-y-3"}>
            <div
                onClick={() => {
                    handleAllOptionsClick()
                }}
                className={"flex subtitle-md text-gray5 gap-x-2"}>
                <div
                    className={allOptions
                        ? "flex w-[24px] h-[24px] bg-main rounded-full items-center justify-center"
                        : "flex w-[24px] h-[24px] border-[1.6px] border-gray3 rounded-full items-center justify-center"}>
                    <UnCheckIcon/>
                </div>
                전체동의
            </div>
            {termsOfUseContents.map((termsOfUseContent) => {
                return (
                    <div
                        key={termsOfUseContent.content}
                        onClick={() => {
                            handleIndividualOptionClick(termsOfUseContent.setState, termsOfUseContent.state)
                        }}
                        className={"flex subtitle-md text-gray5 gap-x-2"}>
                        <div
                            className={termsOfUseContent.state
                                ? "flex w-[24px] h-[24px] bg-main rounded-full items-center justify-center"
                                : "flex w-[24px] h-[24px] border-[1.6px] border-gray3 rounded-full items-center justify-center"}>
                            <UnCheckIcon/>
                        </div>
                        {termsOfUseContent.content}
                    </div>
                )
            })}
        </div>
    )
}
export default TermsAgreement;
