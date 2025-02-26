import {Dispatch, SetStateAction, useEffect, useMemo, useState} from "react";
import {format} from "date-fns";
import {useAtom} from "jotai/index";

import {generalRegisterDataAtom} from "@/src/store/register/atom";
import useEmployerInfo from "@/src/lib/hooks/useEmployInfo";
import useLocation from "@/src/hooks/useLocation";
import useFilter from "@/src/hooks/useFilter";
import {adTypes} from "@/src/utils/register";
import {AdType, ApplicationMethodEnumType, GeneralRegisterDataType} from "@/src/types/register";

const useAdRegisterStep1 = (setStep: Dispatch<SetStateAction<"Second" | "First" | "Third">>) => {
    const [generalRegisterData, setGeneralRegisterData] = useAtom(generalRegisterDataAtom);
    const {employerInfo} = useEmployerInfo();
    const [title, setTitle] = useState("");
    const [recruitCount, setRecruitCount] = useState<string>("");
    const [recruitEndDate, setRecruitEndDate] = useState("");
    const [regularRecruit, setRegularRecruit] = useState(false);
    //지원 형태
    const [applicationEnumMethods, setApplicationEnumMethods] = useState<ApplicationMethodEnumType[]>([]);
    //채용 포스터
    const [uploadImage, setUploadImage] = useState<string | ArrayBuffer | null>(null);
    const {location, setLocation} = useLocation(employerInfo?.address1)
    const [selectedAdTypeContent, setSelectedAdTypeContent, isAdTypeFilterFocused, setAdTypeFilterIsFocused] = useFilter<AdType>("일반 공고");

    const saveRegisterData = () => {
        if (employerInfo) {
            setGeneralRegisterData((prevState: GeneralRegisterDataType) => ({...prevState,
                adType: selectedAdTypeContent,
                uploadImage: uploadImage,
                title: title,
                businessFields: employerInfo.businessFields,
                address1: employerInfo.address1,
                address2: employerInfo.address2,
                zipcode: employerInfo.zipcode,
                longitude: location.longitude,
                latitude:location.latitude,
                recruitStartDate: format(new Date(), 'yyyy-MM-dd'),
                recruitEndDate: regularRecruit ? "2099-12-31" : format(recruitEndDate, 'yyyy-MM-dd'),
                recruitCount: parseInt(recruitCount),
                applicationMethods: applicationEnumMethods
            }))
        }
    }

    /**
     * 다음 버튼 클릭시
     */
    const handleSubmit = () => {
        saveRegisterData();
        setStep("Second");
    }

    /**
     * 시작하자 마자 불러오기
     */
    useEffect(() => {
        if (generalRegisterData.title || generalRegisterData.recruitCount || generalRegisterData.recruitEndDate || generalRegisterData.applicationMethods.length !== 0) {
            setSelectedAdTypeContent(generalRegisterData.adType);
            setUploadImage(generalRegisterData.uploadImage);
            setTitle(generalRegisterData.title as string);
            setRecruitCount(generalRegisterData.recruitCount?.toString() as string);
            if (generalRegisterData.recruitEndDate === "2099-12-31"){
                setRegularRecruit(true);
            } else {
                setRecruitEndDate(generalRegisterData.recruitEndDate as string);
            }
            setApplicationEnumMethods(generalRegisterData.applicationMethods)
        }
    }, [generalRegisterData]);

    /**
     * 공고 종류
     **/
    const adTypeContents = () => (
        <div>
            {adTypes.map((type) => {
                return (
                    <button
                        onClick={() => {
                            setSelectedAdTypeContent(type);
                            setAdTypeFilterIsFocused(false);
                        }}
                        key={type}
                        className="w-full py-[20px] px-4 body-sm hover:bg-gray1"
                    >
                        {type}
                    </button>
                )
            })}

        </div>
    );

    const isNextButtonDisabled = useMemo(() => {
        return (title === null
            || location.latitude === 0
            || location.longitude === 0
            || recruitEndDate === null
            || recruitCount === null
            || applicationEnumMethods === null
        );
    }, [selectedAdTypeContent, title, location, recruitEndDate, recruitCount, applicationEnumMethods]);

    /**
     * 상태 그룹화
     */
    const formState = {
        generalRegisterData, setGeneralRegisterData,

        title, setTitle,
        recruitCount, setRecruitCount,
        recruitEndDate, setRecruitEndDate,
        regularRecruit, setRegularRecruit,
        applicationEnumMethods, setApplicationEnumMethods,
        uploadImage, setUploadImage,
        location, setLocation,
        selectedAdTypeContent, setSelectedAdTypeContent,
    };

    /**
     * UI 관련 상태 그룹화
     */
    const uiState = {
        isAdTypeFilterFocused, setAdTypeFilterIsFocused,
        adTypeContents,
        isNextButtonDisabled
    };

    return {
        employerInfo,
        formState, // ✅ 상태 묶어서 반환
        uiState, // ✅ UI 관련 상태도 묶기
        saveRegisterData,
        handleSubmit
    };

}
export default useAdRegisterStep1;
