interface Props {
    children: React.ReactNode;
}

const JobCategoryItem = (props: Props) => {
    const {children} = props;
    return (
        <div className={"flex bg-main-button justify-center"}>
            {children}
        </div>
    )
}
export default JobCategoryItem;
