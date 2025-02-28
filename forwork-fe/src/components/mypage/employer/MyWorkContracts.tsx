import Button from "@/src/components/common/Button";
import Contract from "@/src/components/mypage/employer/Contract";
import Pagination from "@/src/components/common/Pagination";
import useContracts from "@/src/lib/hooks/useContracts";
import {useEffect, useState} from "react";

const MyWorkContracts = () => {
    const [pageNumber, setPageNumber] = useState(0)
    const {contractData} = useContracts(pageNumber, 3);

    useEffect(() => {
        console.log("contractData", contractData)
    }, [contractData])
    if (!contractData) return ;
    return (
        <div className={"w-full"}>
            <header className={"flex justify-between items-center"}>
                <h1 className={"title-lg"}>내 근로 계약서</h1>
                <Button className={"py-3 px-4 button-md text-gray5"}>더보기</Button>
            </header>
            <section className={"flex flex-col gap-y-4 mt-[16px]"}>
                {contractData.data?.content.map((contract) => {
                    return (
                        <Contract key={contract.recruitId} {...contract} />
                    )
                })}
            </section>
            <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalPageNumber={contractData.data?.totalPages} className={"mt-[28px]"}></Pagination>
        </div>
    )
}
export default MyWorkContracts;
