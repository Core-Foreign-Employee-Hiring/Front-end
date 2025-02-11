interface Props {
    adCategory: string;
}
const AdCategory = (props: Props) => {
    const {adCategory} = props;
    return (
        <div>
            <div className={"px-4 py-[16.5px] rounded-[16px] border border-main subtitle-lg text-main"}>
                {adCategory}
            </div>
        </div>
    )
}
export default AdCategory;
