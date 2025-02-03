"use client";

import Footer from "@/src/components/common/Footer";
import NavBar from "@/src/components/common/NavBar";
import ReviewPostPage from "@/src/components/review/ReviewPostPage";

const PostPage = () => {
  return (
    <div>
      <main>
        <NavBar />
        <div className="h-60" />
        <ReviewPostPage />
        <div className="h-[180px]"/>
        <Footer />
      </main>
    </div>
  );
};
export default PostPage;