import Image from "next/image";

import {EmployeePortfolioDTOType} from "@/src/types/portfolio";
import {changeBusinessFieldEnumToKorType} from "@/src/utils/common";

const CareerInfo = (props: EmployeePortfolioDTOType) => {
    const {introduction, certifications, enrollmentCertificateUrl, partTimeWorkPermitUrl, transcriptUrl, englishTestScore, englishTestType, portfolioPublic, topic, awards, experiences} = props;
    return (
        <article className={"flex flex-col gap-y-6 px-[32px] py-[24px] rounded-[24px] border border-gray3"}>
            <h2 className={"subtitle-lg"}>스팩 및 경력</h2>
            <section className={"flex flex-col gap-y-5"}>
                <div className={"flex gap-x-5"}>
                    <div className={"w-[113px] subtitle-md text-gray5"}>자기소개</div>
                    <span className={"body-md"}>{introduction}</span>
                </div>
                <div className={"flex gap-x-5"}>
                    <div className={"w-[113px] subtitle-md text-gray5"}>재학증명서</div>
                    {/*<Image src={enrollmentCertificateUrl} alt={enrollmentCertificateUrl} width={100} height={120}/>*/}
                </div>
                <div className={"flex gap-x-5"}>
                    <div className={"w-[113px] subtitle-md text-gray5"}>성적증명서</div>
                    {/*<Image src={transcriptUrl} alt={transcriptUrl} width={100} height={120}/>*/}
                </div>
                <div className={"flex gap-x-5"}>
                    <div className={"w-[113px] subtitle-md text-gray5"}>시간제근로 허가서</div>
                    {/*<Image src={partTimeWorkPermitUrl} alt={partTimeWorkPermitUrl} width={100} height={120}/>*/}
                </div>
                <div className={"flex gap-x-5"}>
                    <div className={"w-[113px] subtitle-md text-gray5"}>TOPIK</div>
                    <span className={"body-md"}>{topic}</span>
                </div>
                <div className={"flex gap-x-5"}>
                    <div className={"w-[113px] subtitle-md text-gray5"}>영어능력시험</div>
                    <div className={"flex"}>
                        <span className={"body-md"}>{englishTestType}</span>
                        <span className={"body-md"}>{englishTestScore}</span>
                    </div>
                </div>
                {experiences && (
                    <div className={"flex gap-x-5"}>
                        <div className={"w-[113px] subtitle-md text-gray5"}>경력</div>
                        <div className={"flex flex-col gap-y-3"}>
                            {experiences.map((experience) => {
                                return (
                                    <div className={"flex gap-x-3"} key={experience.experienceDescription}>
                                    <span
                                        className={"body-md text-gray5"}>{`${experience.startDate} ~ ${experience.endDate}`}</span>
                                        <span className={"body-md"}>{experience.experienceDescription}</span>
                                        <span className={"body-md text-gray5"}>{changeBusinessFieldEnumToKorType(experience.businessField)}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
                {certifications && (
                    <div className={"flex gap-x-5"}>
                        <div className={"w-[113px] subtitle-md text-gray5"}>자격증</div>
                        {certifications.map((certification) => {
                            return (
                                <div className={"flex gap-x-3"} key={certification.certificateName}>
                                    <span className={"body-md text-gray5"}>{certification.certificateDate}</span>
                                    <span className={"body-md"}>{certification.certificateName}</span>
                                    <span className={"body-md text-gray5"}>{changeBusinessFieldEnumToKorType(certification.businessField)}</span>
                                </div>
                            )
                        })}
                    </div>
                )}
                {awards && (
                    <div className={"flex gap-x-5"}>
                        <div className={"w-[113px] subtitle-md text-gray5"}>수상</div>
                        {awards.map((award) => {
                            return (
                                <div className={"flex gap-x-3"} key={award.awardName}>
                                    <span className={"body-md text-gray5"}>{award.awardDate}</span>
                                    <span className={"body-md"}>{award.awardName}</span>
                                    <span className={"body-md text-gray5"}>{changeBusinessFieldEnumToKorType(award.businessField)}</span>
                                </div>
                            )
                        })}
                    </div>
                )}
            </section>
        </article>
    )
}
export default CareerInfo;
