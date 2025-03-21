import {CreatedPortfolioFormType} from "@/src/types/recruit-ad";
import UpLoadIcon from "@/src/assets/common/UploadIcon";

const FileUpload = (props: CreatedPortfolioFormType) => {
    const { title, required, maxFileCount,  } = props;
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
                type="file"
                id={'input-file'}
                name="input-file"
                className="hidden"
            />

            <section>
                <></>

            </section>
        </section>
    )
}
export default FileUpload;
