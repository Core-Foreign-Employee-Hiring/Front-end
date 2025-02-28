import useDraftMyAds from "@/src/lib/hooks/useDraftMyAds";
import {useEffect, useState} from "react";
import DraftAd from "@/src/components/mypage/employer/DraftAd";
import useUploadMyAds from "@/src/lib/hooks/useUploadMyAds";
import GeneralCard from "@/src/components/home/GeneralCard";
import UploadAd from "@/src/components/mypage/employer/UploadAd";
import {B612} from "next/dist/compiled/@next/font/dist/google";
import Button from "@/src/components/common/Button";

interface Props {

}

const MyAds = (props: Props) => {
    const {} = props;
    const [pageNumber, setPageNumber] = useState(0);
    const {draftMyAds} = useDraftMyAds(pageNumber, 3);
    const {uploadMyAds} = useUploadMyAds(pageNumber, 6)

    useEffect(() => {
        console.log("uploadMyAds", uploadMyAds)
    }, [uploadMyAds]);

    return (
        <main>
            <section className={"flex justify-between items-center"}>
                <h1 className={"title-lg"}>임시저장한 공고</h1>
                <Button className={"text-gray5 py-3 px-4 button-md"}>더보기</Button>
            </section>
            <section className={"grid grid-cols-3 mt-[16px]"}>
                {draftMyAds && draftMyAds.data?.content.map((draftMyAd) => {
                    return (
                        <DraftAd key={draftMyAd.recruitId} {...draftMyAd}/>
                    )
                })}
            </section>
            <section className={"flex justify-between items-center mt-[40px]"}>
                <h1 className={"title-lg "}>내가 등록한 공고</h1>
                <Button className={"text-gray5 py-3 px-4 button-md"}>더보기</Button>
            </section>
            <section className={"grid grid-cols-3 gap-4 mt-4"}>
                {uploadMyAds && uploadMyAds.data?.content.map((uploadMyAd) => {
                    return (
                        <UploadAd key={uploadMyAd.recruitId} {...uploadMyAd} />
                    )
                })}
            </section>
        </main>
    )
}
export default MyAds;
