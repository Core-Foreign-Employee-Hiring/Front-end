"use client";

import Footer from "@/src/components/common/Footer";
import NavBar from "@/src/components/common/NavBar";
import JobReviewBoard from "@/src/components/review/JobReviewBoard";

const ReviewPage = () => {
  return (
    <div>
      <main>
        <NavBar />
        <div className="h-60" />
        <JobReviewBoard />
        <div className="h-[180px]"/>
        <Footer />
      </main>
    </div>
  );
};
export default ReviewPage;
