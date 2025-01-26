import * as React from "react";
import {JSX, useState} from "react";
import {twMerge} from "tailwind-merge";
import {className} from "postcss-selector-parser";

interface Props {
    leftElement?: () => JSX.Element;
    placeholder?: string;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
    className?: string;
    maxLength?: number;
}
const Input = (props: Props) => {
    const { leftElement, placeholder, inputValue, setInputValue, className, maxLength } = props;
    const [isFocused, setIsFocused] = useState(false); // focus 상태 관리

    return (
        <div
            className={twMerge(
                isFocused
                    ? "flex gap-x-3 rounded-[16px] border border-main py-[16.5px] px-6 items-center w-[520px]"
                    : "flex gap-x-3 rounded-[16px] border border-gray4 py-[16.5px] px-6 items-center w-[520px]"
            , className)}>
            {leftElement && leftElement()}
            <input
                maxLength={maxLength}
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
                onFocus={() => setIsFocused(true)} // focus 시 상태 변경
                onBlur={() => setIsFocused(false)} // blur 시 상태 변경
                className={"subtitle-lg outline-none placeholder:subtitle-lg placeholder:text-gray4 w-full"}/>
        </div>
    )
}
export default Input;
