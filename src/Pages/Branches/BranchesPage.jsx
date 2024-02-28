import React from "react";
import { ProfileCard } from "./components/ProfileCard";
import BranchHeading from "./components/BranchHeading";

const BranchesPage = () => {
  return (
    <div className="bg-[#ecfafe] py-20">
      <section className="max-w-[1280px] mx-auto  ">
        <BranchHeading />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 ">
          <ProfileCard title="শনির আখড়া" />
          <ProfileCard title="মিরপুর - ১০" />
          <ProfileCard title="মোহাম্মদপুর" />
          <ProfileCard title="উত্তরা" />
          <ProfileCard title="গুলশান" />
          <ProfileCard title="বেইলি রোড" />
          <ProfileCard title="ধানমন্ডি" />
          <ProfileCard title="বসুন্ধরা গেট" />
          <ProfileCard title="ওয়ারি" />
          <ProfileCard title="খুলনা" />
          <ProfileCard title="খিলগাঁও" />
          <ProfileCard title="নারায়ণগঞ্জ" />
          <ProfileCard title="সাভার" />
          <ProfileCard title="চট্রগ্রাম" />
          <ProfileCard title="বগুড়া" />
          <ProfileCard title="পুরান ঢাকা" />
          <ProfileCard title="বনশ্রী" />
          <ProfileCard title="মিরপুর - ১" />
          <ProfileCard title="রাজশাহী" />
        </div>
      </section>
    </div>
  );
};

export default BranchesPage;
