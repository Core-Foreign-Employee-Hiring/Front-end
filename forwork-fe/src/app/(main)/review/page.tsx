"use client";

import NavBar from "@/src/components/common/NavBar";
import JobReviewBoard from "@/src/components/review/JobReviewBoard";

const ReviewPage = () => {
  return (
    <div>
      <main>
        <NavBar />
        <div className="h-60" />
        <JobReviewBoard />
      </main>
    </div>
  );
};
export default ReviewPage;
