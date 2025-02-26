import * as React from "react";
import {JSX, useState} from "react";
import {twMerge} from "tailwind-merge";

interface Props {
    type?: "text" | "password" | "email" | "password_confirmation" | "number";
    leftElement?: () => JSX.Element;
    rightElement?: () => JSX.Element;
    placeholder?: string;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>
    className?: string;
    maxLength?: number;
    setIsAvailability?: React.Dispatch<React.SetStateAction<undefined | boolean>>;
    disabled?: boolean;
}
const Input = (props: Props) => {
    const { type="text", leftElement, rightElement, placeholder, inputValue, setInputValue, className, maxLength, setIsAvailability, disabled = false } = props;
    const [isFocused, setIsFocused] = useState(false); // focus 상태 관리

    return (
        <div
            className={disabled ? "flex gap-x-3 rounded-[16px] bg-gray1 p-4 items-center w-[520px]"
                : twMerge(
                    isFocused
                        ? "flex gap-x-3 rounded-[16px] border border-main p-4 items-center w-[520px]"
                        : "flex gap-x-3 rounded-[16px] border border-gray2 p-4 items-center w-[520px]"
                    , className)}>
            {leftElement && leftElement()}
            <input
                disabled={disabled}
                type={type}
                maxLength={maxLength}
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => {
                    setIsAvailability && setIsAvailability(undefined);
                    setInputValue(e.target.value);
                }}
                onFocus={() => setIsFocused(true)} // focus 시 상태 변경
                onBlur={() => setIsFocused(false)} // blur 시 상태 변경
                className={"button-md outline-none placeholder:body-md placeholder:text-gray4 w-full"}/>
            {rightElement && rightElement()}
        </div>
    )
}
export default Input;
