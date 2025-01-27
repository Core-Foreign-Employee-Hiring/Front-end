"use client";

import * as React from "react";
import {useState} from "react";

import LOGOIcon from "@/src/assets/common/LOGOIcon";
import {useRouter} from "next/navigation";
import Button from "@/src/components/common/Button";
import Input from "../components/common/Input";
import CheckIcon from "@/src/assets/common/CheckIcon";

export default function MainPage() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const idElement = () => {
      return (
          <div className={"flex gap-x-3 w-[85px]"}>
              <div className={"subtitle-md text-gray4"}>아이디</div>
              <div className={"subtitle-md text-gray4 ml-[12px]"}>|</div>
          </div>
      )
  }

    const passwordElement = () => {
        return (
            <div className={"flex gap-x-3 w-[87px]"}>
                <div className={"subtitle-md text-gray4"}>비밀번호</div>
                <div className={"subtitle-md text-gray4"}>|</div>
            </div>
        )
    }

    return (
        <div className={"flex flex-col items-center justify-center min-h-screen gap-y-[80px]"}>
        <LOGOIcon width={267} height={68}/>
          <div className={"flex flex-col gap-y-[32px] items-center"}>
              <div className={"flex flex-col gap-y-6"}>
                  <div className={"flex flex-col gap-y-4"}>
                      <Input leftElement={idElement} inputValue={id} setInputValue={setId} />
                      <Input leftElement={passwordElement} inputValue={password} setInputValue={setPassword} />
                      <div className={"body-md text-error"}>아이디 또는 비밀번호가 맞지 않아요</div>
                  </div>
                  <div className={"flex subtitle-md text-gray5 gap-x-2"}>
                      <div
                          className={"flex w-[24px] h-[24px] border-[1.6px] border-gray3 rounded-full items-center justify-center"}>
                          <CheckIcon/>
                      </div>
                      아이디 저장
                  </div>
                  <Button className={"bg-main-button"} secondClassName={"flex items-center justify-center w-[520px] py-6 subtitle-md"}>로그인</Button>
              </div>
              <div className={"flex gap-x-5 items-center"}>
                  <button className={"text-gray5 body-md"}>아이디 찾기</button>
                  <div className={"text-gray3"}> |</div>
                  <button className={"text-gray5 body-md"}>비밀번호 찾기</button>
                  <div className={"text-gray3"}> |</div>
                  <button
                      onClick={() => {
                          router.push("/sign-up")
                      }}
                      className={"text-main body-md"}>회원가입</button>
              </div>
          </div>
      </div>
  );
}
