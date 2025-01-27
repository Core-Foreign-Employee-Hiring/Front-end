import {Dispatch, SetStateAction} from "react";
import PostCode from "react-daum-postcode";

interface Props {
    openAddrModal: boolean;
    setOpenAddrModal: Dispatch<SetStateAction<boolean>>;
    setZipcode: Dispatch<SetStateAction<string>>;
    setAddress1: Dispatch<SetStateAction<string>>;
}

const SearchAddress = (props: Props) => {
    const {openAddrModal, setOpenAddrModal, setZipcode, setAddress1} = props;

    const handleComplete = async (data: any) => {
        let fullAddress = data.address;
        let extraAddress = "";

        const { addressType, bname, buildingName, zonecode } = data;
        console.log("data", data);

        if (addressType === "R") {
            if (bname !== "") {
                extraAddress += bname;
            }
            if (buildingName !== "") {
                extraAddress += `${extraAddress !== "" && ", "}${buildingName}`;
            }
            fullAddress += `${extraAddress !== "" ? ` ${extraAddress}` : ""}`;
        }
        setZipcode(zonecode);
        setAddress1(fullAddress);

        setOpenAddrModal(false);
    };


    return (
        <div className={"absolute left-0 right-0 z-40 flex flex-col  items-center justify-center bg-[rgba(0,0,0,0.6)] min-h-screen"}>
            <div
                onClick={() => setOpenAddrModal(!openAddrModal)}
                className="fixed top-0 left-0 w-[500px] h-full z-[101]"
            >
                <PostCode
                    onComplete={handleComplete}
                    className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bnb_md_xl:max-w-[600px] bnb_sm:max-w-[85%] z-[1000]"
                />
            </div>
        </div>
    )
}
export default SearchAddress
