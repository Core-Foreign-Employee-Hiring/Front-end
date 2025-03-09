"use client";

import NavBar from "@/src/components/common/NavBar";
import Tag from "@/src/components/common/Tag";
import ViewIcon from "@/src/assets/review/ViewIcon";
import ReplyIcon from "@/src/assets/review/ReplyIcon";
import Comment from "@/src/components/review/Comment";
import Input from "@/src/components/common/Input";
import Button from "@/src/components/common/Button";
import {useRouter} from "next/navigation";

const PostPage = () => {
    const router = useRouter();

    return (
    <div>
        <NavBar />
        <div className="h-60" />
        <main className={"flex flex-col gap-y-4 justify-center items-center px-[360px]"}>
            <header className={"flex items-start w-full"}><h1 className={'subtitle-lg'}>알바 이야기</h1></header>
            <section className={"rounded-[20px] py-[24px] px-[32px] border border-gray2"}>
                <div className={"flex flex-col gap-y-2 border-b border-gray2 py-[8px]"}>
                    <section className={"flex gap-x-2"}>
                        <Tag className={"bg-mainLight-tag"}>충북 청주시</Tag>
                        <Tag className={"border-gray2-tag"}>외식/음료</Tag>
                    </section>
                    <h2 className={"subtitle-lg"}>이게 맞는걸까요?</h2>
                    <section className={"flex justify-between"}>
                        <div className={"body-sm text-main"}>albanoye**</div>
                        <div className={"body-sm text-gray4"}>2025.01.15</div>
                    </section>
                </div>


                <section className={"body-md mt-[8px]"}>오전 11시부터 오후 8시까지 종일알바를 하고있습니다! 지금 이틀째인데 하는 업무가 음식점에서 하는 알바라서 여러 일들을 하고
                    최저시급을
                    받고있는데 제가 하는 일에 비해 적당하게 받고 있는지 모르겠어서 글 남겨요ㅠㅠ 우선 서빙, 상 치우기, 단무지/물 전달, 각 식탁에 숫가락 젓가락 개수 맞춰서 세팅, 설거지, 음식
                    고명하기, 화장실청소, 대걸레질, 청소기, 셀프바 음식 채우기, 음식 나갈때 주방에 들어가서 받기 입니다. 이 일을 다 혼자 해요. 이 정도로 최저시급인 10030원 적당한
                    건가요?
                </section>
                <section className={"flex gap-x-3 mt-[12px]"}>
                    <section className={"flex items-center justify-center"}>
                            <div className={"flex w-[32px] h-[32px] items-center justify-center"}>
                                <ViewIcon width={18} height={12} fill={"#999BA5"}/>
                            </div>
                            <div className={"badge-sm text-gray4"}>100</div>

                    </section>

                    <section className={"flex items-center justify-center"}>
                        <div className={"flex w-[32px] h-[32px] items-center justify-center"}>
                            <ReplyIcon width={18} height={16} fill={"#999BA5"}/>
                        </div>
                        <div className={"flex gap-x-[2px] badge-sm text-gray4"}>댓글 <span className={"text-main"}>100</span> 개</div>
                    </section>
                </section>
            </section>
            <section className={"rounded-[32px] border border-gray2 w-full"}>
                <div className={"flex gap-x-3 p-5"}>
                    {/*<Input placeholder={"댓글을 등록해주세요."} className={"p-4 border-gray2 w-full"}/>*/}
                    <Button className={"bg-main-button"} secondClassName={"flex items-center justify-center py-[15.5px] rounded-[16px] w-[100px]"}>등록</Button>
                </div>
                <Comment />
                <Comment type={"reply"}/>
                <Comment />
                <Comment />

            </section>

            <Button
                onClick={() => {
                    router.push("/review");
                }}
                className={"border-gray2-button"}
                secondClassName={"flex items-center justify-center py-4 w-[500px]"}>목록보기</Button>
        </main>
    </div>
  );
};
export default PostPage;
