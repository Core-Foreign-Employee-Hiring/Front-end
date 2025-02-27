interface Props {
    imgRef: React.RefObject<HTMLInputElement | null>;
    uploadImage: string | ArrayBuffer | null;
    setUploadImage: React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
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
        <div className="flex flex-col gap-y-2 relative w-fit">
            <label htmlFor="input-file">
                <div className={"border-gray2-button flex justify-center items-center w-[120px] mt-[8px]"}>
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
            {uploadImage && (
                <img
                    alt={uploadImage ? uploadImage.toString() : "/image 55.png"}
                    src={
                        typeof uploadImage === 'string'
                            ? uploadImage
                            : "/image 55.png"
                    }
                    className={"w-[80px] h-[80px] rounded-[8px]"}/>
            )}
        </div>
    )
}
export default PosterImageUpload
