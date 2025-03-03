import {Dispatch, SetStateAction} from "react";

interface Props {
    setStep:  Dispatch<SetStateAction<"First" | "Second" | "Third">>;
}

const PremiumRegisterStep3 = (props: Props) => {
    const {setStep} = props;

    return (
        <div>

        </div>
    )
}
export default PremiumRegisterStep3
