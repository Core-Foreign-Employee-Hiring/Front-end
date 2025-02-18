import {Dispatch, SetStateAction} from "react";

interface Props {
    setStep:  Dispatch<SetStateAction<"First" | "Second" | "Third">>;
}

const PremiumRegisterStep2 = (props: Props) => {
    const {setStep} = props;

    return (
        <div>

        </div>
    )
}
export default PremiumRegisterStep2;
