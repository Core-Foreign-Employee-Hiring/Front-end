import Application from "@/src/components/mypage/employer/Application";
import Pagination from "@/src/components/common/Pagination";
import {useEffect, useState} from "react";
import useApplyStatus from "@/src/lib/hooks/useApplyStatus";

const ApplicationStatus = () => {
    const [pageNumber, setPageNumber] = useState(0);
    const {application} = useApplyStatus(pageNumber, 4);

    useEffect(() => {
        console.log("application", application)
    },[])
    if (!application) return;
    return (
        <div className={"flex flex-col gap-y-4 w-full"}>
            <div className={"title-lg"}>지원 현황</div>
            <section className={"flex flex-col gap-y-4 "}>
                {application && application.data?.content.map((applicationContent) => {
                    return (
                        <Application key={applicationContent.recruitId} {...applicationContent}/>
                    )
                })}
            </section>
            <Pagination className={"pt-[80px]"} pageNumber={pageNumber} setPageNumber={setPageNumber} totalPageNumber={application.data?.totalPages} />
        </div>
    )
}
export default ApplicationStatus;
