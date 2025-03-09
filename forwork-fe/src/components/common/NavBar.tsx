import {usePathname, useRouter} from "next/navigation";
import Button from "@/src/components/common/Button";
import LOGOIcon from "@/src/assets/common/LOGOIcon";
import LanguageIcon from "@/src/assets/common/LanguageIcon";
import NotificationIcon from "@/src/assets/common/NotificationIcon";
import SearchIcon from "@/src/assets/common/SearchIcon";

interface Props {

}
const NavBar = (props: Props) => {
    const {} = props;
    const router = useRouter();
    const pathname = usePathname();


    return (
        <div className={"fixed top-0 px-[264px] flex flex-col w-full border-b border-gray2 bg-white"}>
            <div className={"flex justify-between items-end py-5"}>
                <div>
                    <LOGOIcon/>
                </div>
                <div className={"py-3 px-4 flex gap-x-2 border border-gray4 rounded-full w-[520px] items-center"}>
                    <div className={"flex items-center w-[24px] h-[24px]"}>
                        <SearchIcon/>
                    </div>
                    <input className={"w-full placeholder:text-black body-md"} placeholder={"어떤 직무와 키워드를 찾으시나요?"}/>
                </div>
                <div className={"flex gap-x-5 w-fit"}>
                    <div className={"flex gap-x-3"}>
                        <div className={"w-[32px] h-[32px]"}>
                            <LanguageIcon/>
                        </div>
                        <div className={"w-[32px] h-[32px]"}>
                            <NotificationIcon/>
                        </div>
                    </div>
                    <div className={"flex gap-x-2 items-center"}>
                        <Button className={"button-md text-gray4"}>로그인</Button>
                        <div className={"button-md text-gray4"}>|</div>
                        <Button className={"button-md text-gray4"}>회원가입</Button>
                    </div>
                </div>
            </section>
            <section className={"flex justify-between items-center"}>
                <div className={"flex gap-x-[52px] py-[18px] subtitle-md"}>
                    <button
                        className={pathname === "/" ? "text-main" : "text-black"}
                        onClick={() => {
                            router.push("/")
                        }}>
                        홈
                    </button>
                    <button
                        className={pathname === "/premium" ? "text-main" : "text-black"}
                        onClick={() => {
                            router.push("/premium")
                        }}>
                        프리미엄 채용
                    </button>
                    <button
                        className={pathname === "/general" ? "text-main" : "text-black"}
                        onClick={() => {
                            router.push("/general")
                        }}>
                        일반 채용
                    </button>
                    <button
                        className={pathname === "/review" ? "text-main" : "text-black"}
                        onClick={() => {
                            router.push("/review")
                        }}>
                        알바 후기
                    </button>
                    <button
                        className={pathname === "/portfolio" ? "text-main" : "text-black"}
                        onClick={() => {
                            router.push("/portfolio")
                        }}>
                        포트폴리오
                    </button>
                </div>
                <div className={"flex gap-x-3"}>
                    <Button className={"bg-main text-white button-md rounded-full px-4 py-[9.5px]"}>
                        이력서 등록
                    </Button>
                    <Button className={"bg-white text-gray5 border border-gray2 button-md rounded-full px-4 py-[9.5px]"}>
                        기업 서비스
                    </Button>
                </div>
            </div>

        </div>
    )
}
export default NavBar;
