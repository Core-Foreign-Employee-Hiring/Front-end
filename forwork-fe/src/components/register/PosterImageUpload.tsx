import Button from "@/src/components/common/Button";
interface Props {
    imgRef: React.RefObject<HTMLInputElement | null>;
    uploadImage: string | ArrayBuffer | null | undefined;
    setUploadImage: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null | undefined>>;
}
const PosterImageUpload = (props: Props) => {
    const {imgRef, uploadImage, setUploadImage} = props;

    // 이미지 미리보기 설정
    const handleImagePreview = async () => {
        const files = imgRef.current?.files;
        let reader = new FileReader();
        if (files) {
            reader.readAsDataURL(files[0]);
            reader.onloadend = () => {
                setUploadImage(reader.result);
            };
        }
    };

    return (
        <div className="relative w-fit">
            <img
                alt={uploadImage ? uploadImage.toString() : "/image 55.png"}
                src={
                    typeof uploadImage === 'string'
                        ? uploadImage
                        : "/image 55.png"
                }
                className={"w-[80px] h-[80px] rounded-[8px]"}/>
            <label htmlFor="input-file">
                <div className={"bg-main-button flex justify-center items-center w-[184px] mt-[8px]"}>
                    업로드
                </div>
            </label>

            <input
                type="file"
                id={'input-file'}
                ref={imgRef}
                name="input-file"
                onChange={handleImagePreview}
                className="hidden"></input>
        </div>
    )
}
export default PosterImageUpload
