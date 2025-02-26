import { useState } from "react";
import { useAtom } from "jotai";

import useFilter from "@/src/hooks/useFilter";
import { generalRegisterDataAtom } from "@/src/store/review/atom";
import { createReview } from "@/src/lib/api/review";
import { changeKorToBusinessFieldEnumType, jobCategoryList } from "@/src/utils/common";
import { JobCategoryType } from "@/src/types/register";

const useReviewForm = () => {
    // Atom 상태 관리 (전역 상태)
    const [generalRegisterData, setGeneralRegisterData] = useAtom(generalRegisterDataAtom);

    // 입력 필드 상태
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // 필터 선택 상태 관리
    const [businessField, setBusinessField, isBusinessFieldFilterContentFocused, setIsBusinessFieldFilterContentFocused] = useFilter<JobCategoryType>("");
    const [province, setProvince, isProvinceFilterContentFocused, setIsProvinceFilterContentFocused] = useFilter<string>("시 / 도");
    const [district, setDistrict, isDistrictFilterContentFocused, setIsDistrictFilterContentFocused] = useFilter<string>("시 / 구 / 군");

    // 업직종 필터 콘텐츠
    const businessFieldFilterContents = () => (
        <div>
            {jobCategoryList.map((jobCategory) => (
                <button
                    key={jobCategory}
                    onClick={() => {
                        setBusinessField(jobCategory);
                        setIsBusinessFieldFilterContentFocused(false);
                    }}
                    className="w-full py-[20px] px-4 body-sm hover:bg-gray1"
                >
                    {jobCategory}
                </button>
            ))}
        </div>
    );

    // 시/도 필터 콘텐츠
    const provinceFilterContents = () => (
        <div>
            <button
                onClick={() => {
                    setProvince("대전");
                    setIsProvinceFilterContentFocused(false);
                }}
                key={"대전"}
                className="w-full py-[20px] px-4 body-sm hover:bg-gray1"
            >
                대전
            </button>
        </div>
    );

    // 시/구/군 필터 콘텐츠
    const districtFilterContents = () => (
        <div>
            <button
                onClick={() => {
                    setDistrict("중구");
                    setIsDistrictFilterContentFocused(false);
                }}
                key={"중구"}
                className="w-full py-[20px] px-4 body-sm hover:bg-gray1"
            >
                중구
            </button>
        </div>
    );

    // 리뷰 제출 함수
    const handleSubmit = async () => {
        setGeneralRegisterData((prevState) => ({
            ...prevState,
            content,
            businessFields: changeKorToBusinessFieldEnumType(businessField),
            region1: province,
            region2: district,
            title,
        }));

        try {
            const response = await createReview(generalRegisterData);
            console.log("리뷰 제출 성공:", response);
        } catch (error) {
            console.error("리뷰 제출 실패:", error);
        }
    };

    return {
        title,
        setTitle,
        setContent,
        businessField,
        isBusinessFieldFilterContentFocused,
        setIsBusinessFieldFilterContentFocused,
        province,
        isProvinceFilterContentFocused,
        setIsProvinceFilterContentFocused,
        district,
        isDistrictFilterContentFocused,
        setIsDistrictFilterContentFocused,
        businessFieldFilterContents,
        provinceFilterContents,
        districtFilterContents,
        handleSubmit,
    };
};

export default useReviewForm;
