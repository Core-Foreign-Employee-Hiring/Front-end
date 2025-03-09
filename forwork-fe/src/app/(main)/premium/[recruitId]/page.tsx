"use client";

import RecruitAdDetail from "@/src/components/recruit-ad/RecruitAdDetail";
import {useEffect, useState} from "react";

const PremiumRecruitDetailPage = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);
    return (
        isClient && (
            <main >
                <RecruitAdDetail/>
            </main>
        )
    )
}
export default PremiumRecruitDetailPage;
