import Image from "next/image";

import {PortfolioTextType, PortfolioUpLoadType} from "@/src/types/portfolio";

interface Props {
    files?: PortfolioUpLoadType[];
    texts?: PortfolioTextType[];
}

const PortfolioFormInfo = (props: Props) => {
    const {files, texts} = props;
    return (
        <section className={"flex flex-col gap-y-6"}>
            {/*파일 업로드 형*/}
            <section>
                {files && files.map((file) => {
                    return (
                        <div key={file.title} className={"flex flex-col gap-y-3"}>
                            <div className={"title-md"}>{file.title}</div>
                            <div className={"flex gap-x-3"}>
                                {
                                file.urls.map((url) => {
                                    return (
                                        <Image src={url} alt={url} className={"rounded-[24px]"} width={128} height={160} key={url} />
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </section>

            {/*텍스트 업로드 형*/}
            <section className={"flex flex-col gap-y-6"}>
                {texts && texts.map((text) => {
                    return (
                        <div key={text.title} className={"flex flex-col gap-y-3"}>
                            <div className={"title-md"}>{text.title}</div>
                            <div className={"body-md"}>{text.content}</div>
                        </div>
                    )
                })}
            </section>

        </section>
    )
}
export default PortfolioFormInfo;
