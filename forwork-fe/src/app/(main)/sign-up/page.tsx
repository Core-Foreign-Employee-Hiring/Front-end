"use client";

import LOGOIcon from "@/src/assets/common/LOGOIcon";
import Button from "@/src/components/common/Button";
import Input from "@/src/components/common/Input";
import {useState} from "react";
import FilterContent from "@/src/components/common/FilterContent";

const SignUpPage = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className={"flex flex-col items-center justify-center min-h-screen gap-y-[80px]"}>
            <LOGOIcon width={267} height={68} />
            <div className={"flex flex-col gap-y-[60px]"}>
                <div className={"flex flex-col gap-y-3"}>
                    <div className={"title-lg items-start"}>회원가입(피고용인)</div>
                    <div className={"flex gap-x-3"}>
                        <div className={"h-[4px] rounded-full bg-main w-[254px]"}/>
                        <div className={"h-[4px] rounded-full bg-gray2 w-[254px]"}/>
                    </div>
                </div>
                <section className={"flex flex-col gap-y-[40px]"}>
                    <div className={"flex flex-col gap-y-3"}>
                        <div className={"title-md"}>본인인증<span className={"text-main"}>*</span></div>
                        <Button className={"bg-main-button"}
                                secondClassName={"flex items-center w-[157px] justify-center"}>인증하기</Button>
                    </div>

                    <div className={"flex flex-col gap-y-3"}>
                        <div className={"title-md"}>아이디<span className={"text-main"}>*</span></div>
                        <div className={"flex gap-x-3"}>
                            <Input setInputValue={setId} inputValue={id} placeholder={"8~15자 입력"}
                                   className={"w-[350px]"} maxLength={15}/>
                            <Button className={"bg-gray2-button"}
                                    secondClassName={"flex items-center w-[157px] justify-center"}>중복확인</Button>
                        </div>

                        <div className={"body-md text-main"}>사용가능한 아이디 입니다.</div>
                    </div>

                    <div className={"flex flex-col gap-y-3"}>
                        <div className={"title-md"}>이름<span className={"text-main"}>*</span></div>
                        <Input setInputValue={setPassword} inputValue={password} placeholder={"이름을 입력해주세요."}
                               maxLength={15}/>
                    </div>

                    <div className={"flex flex-col gap-y-3"}>
                        <div className={"title-md"}>국적<span className={"text-main"}>*</span></div>
                        <FilterContent selectedContent={"선택"}/>
                    </div>

                    <div className={"flex gap-x-5"}>
                        <div className={"flex flex-col gap-y-3 w-full"}>
                            <div className={"title-md"}>학력<span className={"text-main"}>*</span></div>
                            <FilterContent selectedContent={"선택"}/>
                        </div>
                        <div className={"flex flex-col gap-y-3 w-full"}>
                            <div className={"title-md"}>비자<span className={"text-main"}>*</span></div>
                            <FilterContent selectedContent={"선택"}/>
                        </div>
                    </div>

                    <Button className={"flex justify-center items-center title-md bg-main-button w-[520px]"}>다음</Button>
                </section>
            </div>
        </div>
    )
}
export default SignUpPage;
