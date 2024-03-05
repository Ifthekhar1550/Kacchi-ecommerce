
import { Link } from "react-router-dom";

import { ProfileCard } from "./components/ProfileCard";
import BranchHeading from "./components/BranchHeading";

const BranchesPage = () => {
  return (
    <div className="bg-[#ecfafe] py-20">
      <section className="w-[90%] max-w-7xl mx-auto">
        <BranchHeading />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
          <Link to="/branch/shanirakhra">
            <ProfileCard title="শনির আখড়া"/>
          </Link>
          <Link to="/branch/mirpur-10">
            <ProfileCard title="মিরপুর - ১০" />
          </Link>
          <Link to="/branch/mohammadpur">
            <ProfileCard title="মোহাম্মদপুর" />
          </Link>
          <Link to="/branch/uttara">
            <ProfileCard title="উত্তরা" />
          </Link>
          <Link to="/branch/gulshan">
            <ProfileCard title="গুলশান" />
          </Link>
          <Link to="/branch/bailey-road">
            <ProfileCard title="বেইলি রোড" />
          </Link>
          <Link to="/branch/dhanmondi">
            <ProfileCard title="ধানমন্ডি" />
          </Link>
          <Link to="/branch/bashundhara-gate">
            <ProfileCard title="বসুন্ধরা গেট" />
          </Link>
          <Link to="/branch/wari">
            <ProfileCard title="ওয়ারি" />
          </Link>
          <Link to="/branch/khulna">
            <ProfileCard title="খুলনা" />
          </Link>
          <Link to="/branch/khilgaon">
            <ProfileCard title="খিলগাঁও" />
          </Link>
          <Link to="/branch/narayanganj">
            <ProfileCard title="নারায়ণগঞ্জ" />
          </Link>
          <Link to="/branch/savar">
            <ProfileCard title="সাভার" />
          </Link>
          <Link to="/branch/chittagong">
            <ProfileCard title="চট্রগ্রাম" />
          </Link>
          <Link to="/branch/rajshahi">
            <ProfileCard title="রাজশাহী" />
          </Link>
          <Link to="/branch/bogura">
            <ProfileCard title="বগুড়া" />
          </Link>
          <Link to="/branch/puran-dhaka">
            <ProfileCard title="পুরান ঢাকা" />
          </Link>
          <Link to="/branch/banasree">
            <ProfileCard title="বনশ্রী" />
          </Link>
          <Link to="/branch/mirpur-1">
            <ProfileCard title="মিরপুর - ১" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BranchesPage;
