import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {useSetAtom} from "jotai/index";

import Button from "@/src/components/common/Button";
import Input from "@/src/components/common/Input";
import SelectedFilterContent from "@/src/components/common/SelectedFilterContent";
import { nationalityInfoData} from "@/src/lib/api/sign-up";
import Filter from "@/src/components/common/Filter";
import {CountryType} from "@/src/types/sign-up";
import {educationList, visaList} from "@/src/utils/common";
import {employeeSignUpInfoAtom} from "@/src/store/sign-up/atom";
import {handleUserIdVerification} from "@/src/utils/sign-up";

interface Props {
    setStep: Dispatch<SetStateAction<"First" | "Second">>;
}

const EmployeeSignUpStep1 = (props: Props) => {
    const {setStep} = props;
    {/* 필드 데이터 */}
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [nationalityInfoList, setNationalityInfoList] = useState<CountryType[]>([]);
    const [nationality, setNationality] = useState("");
    const [education, setEducation] = useState("");
    const [visa, setVisa] = useState("");
    {/* focus 상태 관리 */}
    const [isNationalityFilterContentFocused, setIsNationalityFilterContentFocused] = useState(false);
    const [isEducationFilterContentFocused, setIsEducationFilterContentFocused] = useState(false);
    const [isVisaFilterContentFocused, setIsVisaFilterContentFocused] = useState(false);
    {/* Availability */}
    const [isUserIdAvailability, setIsUserIdAvailability] = useState<undefined | boolean>(undefined);
    const [isPasswordAvailability, setIsPasswordAvailability] = useState<undefined | boolean>(undefined);
    const [isPasswordMatch, setIsPasswordMatch] = useState<undefined | boolean>(undefined);
    {/* 백엔드에 전달할 Data*/}
    const setEmployeeSignUpInfo = useSetAtom(employeeSignUpInfoAtom);

    {/* 국적 데아터 가져오기 */}
    useEffect(() => {
        nationalityInfoData().then((r: CountryType[][])=>{
            if (r) {
                const flattenedArray = r.flat();
                setNationalityInfoList(flattenedArray);
            }
        })
    }, [])

    {/* 국적 필터 내용 */}
    const nationalityFilterContents = () => {
        return (
            <div>
                {nationalityInfoList.map((nationalityInfo) => {
                    return (
                        <Button
                            onClick={() => {
                                setNationality(nationalityInfo.name.common)
                                setIsNationalityFilterContentFocused(false)
                            }}
                            key={nationalityInfo.name.common} className={"w-full py-[16.5px] px-4 subtitle-lg hover:bg-gray1"}>
                            {nationalityInfo.name.common}
                        </Button>
                    )
                })}
            </div>
        )
    }

    {/* 학력 필터 내용 */}
    const eductionFilterContents = () => {
        return (
            <div>
                {educationList.map((educationData) => {
                    return (
                        <Button
                            onClick={() => {
                                setEducation(educationData)
                                setIsEducationFilterContentFocused(false)
                            }}
                            key={educationData} className={"w-full py-[16.5px] px-4 subtitle-lg hover:bg-gray1"}>
                            {educationData}
                        </Button>
                    )
                })}
            </div>
        )
    }

    {/* 비자 필터 내용 */}
    const visaFilterContents = () => {
        return (
            <div>
                {visaList.map((educationData) => {
                    return (
                        <Button
                            onClick={() => {
                                setVisa(educationData)
                                setIsVisaFilterContentFocused(false)
                            }}
                            key={educationData} className={"w-full py-[16.5px] px-4 subtitle-lg hover:bg-gray1"}>
                            {educationData}
                        </Button>
                    )
                })}
            </div>
        )
    }

    {/* 비밀번호 문구 */}
    useEffect(() => {
        if (password === '') {
            setIsPasswordAvailability(undefined);
            return;
        }
        // 정규식을 사용하여 대소문자, 숫자, 기호, 길이 검증
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;

        if (!passwordRegex.test(password)) {
            setIsPasswordAvailability(false);
        } else {
            setIsPasswordAvailability(true);
        }
    }, [password]);

    {/* 비밀번호 확인 문구 */}
    useEffect(() => {
        if (confirmPassword === '' || password === '') {
            setIsPasswordMatch(undefined);
            return;
        }
        if (confirmPassword === password) {
            setIsPasswordMatch(true);
        } else {
            setIsPasswordMatch(false);
        }
    }, [confirmPassword]);

    const handleSubmit = () => {
        setEmployeeSignUpInfo((prev) => ({...prev,
            userId: userId,
            name: name,
            password: password,
            education: education,
            visa: visa,
            nationality: nationality,
        }))
        setStep("Second");
    }

    return (
        <section className={"flex flex-col gap-y-[40px]"}>
            {/* 아이디 */}
            <section className={"flex flex-col gap-y-3"}>
                <div className={"title-md"}>아이디<span className={"text-main"}>*</span></div>
                <div className={"flex gap-x-3"}>
                    <Input
                        setIsAvailability={setIsUserIdAvailability}
                        setInputValue={setUserId}
                        inputValue={userId}
                        placeholder={"8~15자 입력"}
                        className={"w-[350px]"}
                        maxLength={15}/>
                    <Button
                        onClick={() => handleUserIdVerification(userId, setIsUserIdAvailability)}
                        className={"bg-gray2-button"}
                        secondClassName={"flex items-center w-[157px] justify-center"}>중복확인</Button>
                </div>
                {isUserIdAvailability !== undefined ?
                    <div className={isUserIdAvailability
                        ? "body-md text-main"
                        : "body-md text-error"}>
                        {isUserIdAvailability
                            ? "사용가능한 아이디 입니다."
                            : "사용 불가능한 아이디 입니다."}
                    </div> : null}
            </section>

            {/* 비밀번호 */}
            <section className={"flex flex-col gap-y-3"}>
                <div className={"title-md"}>비밀번호<span className={"text-main"}>*</span></div>
                <div className={"flex gap-x-3"}>
                    <Input
                        // type={"password"}
                        setIsAvailability={setIsPasswordAvailability}
                        setInputValue={setPassword}
                        inputValue={password}
                        placeholder={"대소문자, 숫자, 기호 포함 8~15자"}
                        maxLength={15}/>
                </div>
                {isPasswordAvailability !== undefined ?
                    <div className={isPasswordAvailability
                        ? "body-md text-main"
                        : "body-md text-error"}>
                        {isPasswordAvailability
                            ? "사용 가능한 비밀번호 입니다."
                            : "대소문자, 숫자, 기호 포함 8~15자"}
                    </div> : null}
            </section>

            {/* 비밀번호 확인 */}
            <section className={"flex flex-col gap-y-3"}>
                <div className={"title-md"}>비밀번호 확인<span className={"text-main"}>*</span></div>
                <div className={"flex gap-x-3"}>
                    <Input
                        // type={"password"}
                        disabled={password === ""}
                        setIsAvailability={setIsPasswordMatch}
                        setInputValue={setConfirmPassword}
                        inputValue={confirmPassword}
                        placeholder={"대소문자, 숫자, 기호 포함 8~15자"}
                        maxLength={15}/>
                </div>
                {isPasswordMatch !== undefined ?
                    <div className={isPasswordMatch
                        ? "body-md text-main"
                        : "body-md text-error"}>
                        {isPasswordMatch
                            ? "사용 가능한 비밀번호 입니다."
                            : "비밀번호가 동일하지 않습니다."}
                    </div> : null}
            </section>

            {/* 이름 */}
            <section className={"flex flex-col gap-y-3"}>
                <div className={"title-md"}>이름<span className={"text-main"}>*</span></div>
                <Input setInputValue={setName} inputValue={name} placeholder={"이름을 입력해주세요."}
                       maxLength={15}/>
            </section>

            {/* 국적 */}
            <div className={"flex flex-col gap-y-3"}>
                <div className={"title-md"}>국적<span className={"text-main"}>*</span></div>
                <SelectedFilterContent
                    placeholder={"선택"}
                    selectedContent={nationality}
                    setIsFocused={() => setIsNationalityFilterContentFocused(!isNationalityFilterContentFocused)}
                    isFocused={isNationalityFilterContentFocused}/>
                {isNationalityFilterContentFocused ? (
                    <Filter filterContents={nationalityFilterContents}/>) : null}
            </div>


            <div className={"flex gap-x-5"}>
                {/* 학력 */}
                <div className={"flex flex-col gap-y-3 w-full"}>
                    <div className={"title-md"}>학력<span className={"text-main"}>*</span></div>
                    <SelectedFilterContent
                        selectedContent={education}
                        placeholder={"선택"}
                        isFocused={isEducationFilterContentFocused}
                        setIsFocused={() => setIsEducationFilterContentFocused(!isEducationFilterContentFocused)}/>
                    {isEducationFilterContentFocused ? (
                        <Filter filterContents={eductionFilterContents}/>) : null}
                </div>
                {/* 비자 */}
                <div className={"flex flex-col gap-y-3 w-full"}>
                    <div className={"title-md"}>비자<span className={"text-main"}>*</span></div>
                    <SelectedFilterContent
                        selectedContent={visa}
                        placeholder={"선택"}
                        isFocused={isVisaFilterContentFocused}
                        setIsFocused={() => setIsVisaFilterContentFocused(!isVisaFilterContentFocused)}/>
                    {isVisaFilterContentFocused ? (<Filter filterContents={visaFilterContents}/>) : null}
                </div>
            </div>

            <Button
                disabled={userId === "" || password === "" || name === "" || nationality === "" || education === "" || visa === ""}
                onClick={() => {
                    handleSubmit();
                }}
                className={userId === "" || password === "" || name === "" || nationality === "" || education === "" || visa === ""
                    ? "flex justify-center items-center title-md bg-gray2-button w-[520px]"
                    : "flex justify-center items-center title-md bg-main-button w-[520px]"}>
                다음
            </Button>
        </section>
    )
}
export default EmployeeSignUpStep1;
