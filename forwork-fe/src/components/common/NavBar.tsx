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
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // 50px 이상 스크롤 시 숨김
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const renderButtonComponentByRole = (role: RoleType | string | undefined) => {
        if (role === "EMPLOYEE" || role === "EMPLOYEE_PREMIUM") {
            return (
                <section className={"flex gap-x-3 items-center"}>
                    {isScrolled && <SearchIcon onClick={() => {
                        router.push("/search")
                    }} fill={"#6F717C"} className={"cursor-pointer"}/>}
                    <Button
                        onClick={() => {
                            router.push("/mypage");
                        }}
                        className={"bg-main-button"} secondClassName={"rounded-[12px] py-[7.5px] px-4"}>
                        포트폴리오 등록
                    </Button>
                    <Button
                        onClick={() => {
                            router.push("/contract")
                        }}
                        className={"border-gray2-button"}
                        secondClassName={"rounded-[12px] py-[7.5px] px-4"}>
                        계약서 작성
                    </Button>
                </section>
            )
        } else if (role === "EMPLOYER" || role === "EMPLOYER_PREMIUM" || role === "ADMIN") {
            return (
                <section className={"relative flex gap-x-3 items-center"}>
                    {isScrolled && <SearchIcon onClick={() => {
                        router.push("/search")
                    }} fill={"#6F717C"} className={"cursor-pointer"}/>}
                    <Button
                        onClick={() => {
                            setIsRegisterAdFilterFocused(!isRegisterAdFilterFocused);
                        }}
                        className={"bg-main-button"} secondClassName={"rounded-[12px] py-[7.5px] px-4"}>
                        공고 등록
                    </Button>
                    <Button className={"border-gray2-button"} secondClassName={"rounded-[12px] py-[7.5px] px-4"}>
                        계약서 작성
                    </Button>
                    {isRegisterAdFilterFocused && <NavBarFilter content={getRegisterMenuOptions} className={"absolute top-10 w-[400px] z-10"}/>}
                </section>
            )
        }
    }

    return (
        <nav className={"fixed top-0 px-[264px] flex flex-col w-full border-b border-gray2 bg-white"}>
            <section
                className={`flex justify-between items-end ${isScrolled ? "opacity-0 pointer-events-none h-0" : "py-5 opacity-100 h-auto"}`}>
                <div>
                    <LOGOIcon
                        className={"cursor-pointer"}
                        onClick={() => {
                            router.push("/")
                        }}/>
                </div>
                <div className={"py-3 px-4 flex gap-x-2 border border-gray4 rounded-full w-[520px] items-center"}>
                    <div className={"flex items-center w-[24px] h-[24px]"}>
                    <SearchIcon/>
                    </div>
                    <input
                        onFocus={() => {
                        router.push("/search")
                        }}
                        className={"w-full placeholder:text-black body-md outline-none"}
                        placeholder={"어떤 직무와 키워드를 찾으시나요?"}/>
                </div>
                <div className={"flex gap-x-5 w-fit"}>
                    <div className={"flex gap-x-3"}>
                        {/* 언어 */}
                        <div className={"w-[32px] h-[32px] cursor-pointer"}>
                            <LanguageIcon/>
                        </div>
                        {/* 알림 */}
                        <div className={"w-[32px] h-[32px] cursor-pointer"}>
                            <NotificationIcon/>
                        </div>
                    </div>
                    {Cookies.get("role") === undefined ? (
                        <div className={"flex gap-x-2 items-center"}>
                            <Button
                                onClick={() => {
                                    router.push("/login")
                                }}
                                className={"button-md text-gray4"}>로그인</Button>
                            <div className={"button-md text-gray4"}>|</div>
                            <Button
                                onClick={() => {
                                    router.push("/sign-up")
                                }}
                                className={"button-md text-gray4"}>회원가입</Button>
                        </div>
                    ) : (
                        <div className={"relative flex items-center"}>
                            <div
                                onClick={() => {
                                    setIsUserMenuOptionFilterFocused(!isUserMenuOptionFilterFocused)
                                }}
                                className={"flex gap-x-1 items-center justify-center cursor-pointer"}>
                                <div className={"button text-gray5"}>{Cookies.get("name")}</div>
                                <div className={"flex justify-center items-center w-[20px] h-[20px]"}>
                                    <ArrowDropDownIcon direction={isUserMenuOptionFilterFocused ? "up" : "down"}/>
                                </div>
                            </div>
                            {isUserMenuOptionFilterFocused && (<NavBarFilter content={getUserMenuOptions} className={"absolute top-10 z-10"}/>)}
                        </div>

                    )}
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
                {renderButtonComponentByRole(Cookies.get("role"))}
            </section>
        </nav>
    )
}
export default NavBar;
