"use client";

import Footer from "@/src/components/common/Footer";
import NavBar from "@/src/components/common/NavBar";
import ReviewForm from "@/src/components/review/ReviewForm";

const Page = () => {
  return (
    <div>
      <main>
        <NavBar />
        <div className="h-60" />
        <ReviewForm />
        <div className="h-[180px]"/>
        <Footer />
      </main>
    </div>
  );
};
export default Page;
