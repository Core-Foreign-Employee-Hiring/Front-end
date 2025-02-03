"use client";

import Footer from "@/src/components/common/Footer";
import NavBar from "@/src/components/common/NavBar";
import ReviewPostPage from "@/src/components/review/ReviewPostPage";

const Page = () => {
  return (
    <div>
      <main>
        <NavBar />
        <div className="h-60" />
        <ReviewPostPage title="이게 맞는 걸까요?" id="albanoye**" date="2025.01.15" views="100" replies="5" content="
          오전 11시부터 오후 8시까지 종일알바를 하고있습니다!지금 이틀째인데
          하는 업무가 음식점에서 하는 알바라서 여러 일들을 하고 최저시급을
          받고있는데 제가 하는 일에 비해 적당하게 받고 있는지 모르겠어서 글
          남겨요ㅠㅠ 
          우선 서빙, 상 치우기, 단무지/물 전달, 각 식탁에 숫가락 젓가락 개수
          맞춰서 세팅, 설거지, 음식 고명하기, 화장실청소, 대걸레질, 청소기,
          셀프바 음식 채우기, 음식 나갈때 주방에 들어가서 받기 입니다. 
          이 일을 다 혼자 해요. 이 정도로 최저시급인 10030원 적당한 건가요?" />
        <div className="h-[180px]"/>
        <Footer />
      </main>
    </div>
  );
};
export default Page;
