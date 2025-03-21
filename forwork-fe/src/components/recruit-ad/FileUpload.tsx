import {useEffect, useRef, useState} from "react";

import {CreatedPortfolioFormType, FileUpLoadType} from "@/src/types/recruit-ad";
import FileUploadItem from "./FileUploadItem";
import UpLoadIcon from "@/src/assets/common/UploadIcon";

const FileUpload = (props: CreatedPortfolioFormType) => {
    const { title, required, maxFileCount, portfolioId } = props;
    const imgRef = useRef<HTMLInputElement>(null);
    const [uploadList, setUploadList] = useState<FileUpLoadType[]>([]);

    const saveImgFile = async () => {
        if (imgRef.current?.files) {
            const files = Array.from(imgRef.current.files);

            if (uploadList.length + files.length > (maxFileCount ?? Infinity)) {
                alert(`최대 ${maxFileCount}개의 파일만 업로드할 수 있습니다.`);
                return;
            }

            files.forEach((file) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);

                reader.onloadend = () => {
                    const imgUrl = file.type.startsWith("image/")
                        ? (reader.result as string)
                        : undefined;

                    setUploadList((prev) => [...prev, { file, imgUrl }]);
                };
            });
        }
    };

    const deleteFile = (index: number) => {
        setUploadList((prev) => prev.filter((_, i) => i !== index));
    }

    useEffect(() => {
        console.log("uploadList", uploadList)
    }, [uploadList]);

    return (
        <section className={"flex flex-col gap-y-[12px]"}>
            <h2 className={"title-md"}>
                {title}
                {required && (
                    <span className={"text-main"}>*</span>
                )}
            </h2>

            <label htmlFor="input-file" className={"flex gap-x-2 border-gray2-button w-fit"}>
                <div className={"flex justify-center items-center w-[20px] h-[20px]"}>
                    <UpLoadIcon/>
                </div>
                업로드
            </label>

            <input
                onChange={saveImgFile}
                ref={imgRef}
                type="file"
                id={'input-file'}
                name="input-file"
                className="hidden"
            />

            <section className={"flex flex-col gap-y-2"}>
                {uploadList.map((uploadData, index) => {
                    return (
                        <FileUploadItem
                            key={uploadData.file.name}
                            imgUrl={uploadData.imgUrl}
                            file={uploadData.file}
                            deleteFile={() => deleteFile(index)}
                        />
                    )
                })}
            </section>
        </section>
    )
}
export default FileUpload;
