import Image from "next/image";
import DeleteIcon from "@/src/assets/register/DeleteIcon";
import {formatFileSize} from "@/src/utils/recruit-ad";

interface Props {
    imgUrl?: string;
    file: File;
    deleteFile: () => void
}

const FileUploadItem = (props: Props) => {
    const { imgUrl, file, deleteFile } = props;

    return (
        <div className={"p-2 rounded-[16px] border border-gray2 w-full"}>
            <div className={"p-2 flex items-center justify-between"}>
                <div className={"flex gap-x-2 items-center "}>
                    {imgUrl && (
                        <div className={"relative h-[44px] w-[44px] flex-shrink-0"}>
                            <Image alt={imgUrl} src={imgUrl} fill className={"object-cover rounded-[3px]"}/>
                        </div>
                    )}
                    <div className={"flex flex-col gap-y-2"}>
                        <span className={"body-md"}>{file.name}</span>
                        <span className={"small text-gray4"}>{formatFileSize(file.size)}</span>
                    </div>
                </div>
                <div
                    onClick={deleteFile}
                    className={"flex justify-center items-center w-[24px] h-[24px] cursor-pointer"}>
                    <DeleteIcon />
                </div>
            </div>

        </div>
    )
}
export default FileUploadItem;
