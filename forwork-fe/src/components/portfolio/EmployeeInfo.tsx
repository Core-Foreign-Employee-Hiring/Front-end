interface Props {
    name: string | undefined ;
    nationality: string | undefined ;
    education: string | undefined ;
    visa: string | undefined ;
    birthday: string | undefined ;
    email: string | undefined ;
}
const EmployeeInfo = (props: Props) => {
    const {name, email, education, nationality, visa, birthday} = props;
    return (
        <article className={"flex flex-col gap-y-6 px-[32px] py-[24px] rounded-[24px] border border-gray3"}>
            <h2 className={"subtitle-lg"}>회원정보</h2>
            <section className={"flex flex-col gap-y-3"}>
                <div className={"flex gap-x-5"}>
                    <div className={"w-[55px] subtitle-md text-gray5"}>이름</div>
                    <span className={"body-md"}>{name}</span>
                </div>
                <div className={"flex gap-x-5"}>
                    <div className={"w-[55px] subtitle-md text-gray5"}>국적</div>
                    <span className={"body-md"}>{nationality}</span>
                </div>
                <div className={"flex gap-x-5"}>
                    <div className={"w-[55px] subtitle-md text-gray5"}>학력</div>
                    <span className={"body-md"}>{education}</span>
                </div>
                <div className={"flex gap-x-5"}>
                    <div className={"w-[55px] subtitle-md text-gray5"}>비자</div>
                    <span className={"body-md"}>{visa}</span>
                </div>
                <div className={"flex gap-x-5"}>
                    <div className={"w-[55px] subtitle-md text-gray5"}>생년월일</div>
                    <span className={"body-md"}>{birthday}</span>
                </div>
                <div className={"flex gap-x-5"}>
                    <div className={"w-[55px] subtitle-md text-gray5"}>이메일</div>
                    <span className={"body-md"}>{email}</span>
                </div>
            </section>

        </article>
    )
}
export default EmployeeInfo;
