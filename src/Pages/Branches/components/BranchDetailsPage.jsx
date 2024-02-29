// BranchDetailsPage.js
import React from "react";
import { useParams } from "react-router-dom";

const BranchDetailsPage = () => {
  const { branchTitle } = useParams();

  // Reverse mapping to convert back to Bangla
  const englishToBengaliMapping = {
    shanirakhra: "শনির আখড়া",
    "mirpur-10": "মিরপুর - ১০",
    mohammadpur: "মোহাম্মদপুর",
    uttara: "উত্তরা",
    gulshan: "গুলশান",
    "bailey-road": "বেইলি রোড",
    dhanmondi: "ধানমন্ডি",
    "bashundhara-gate": "বসুন্ধরা গেট",
    wari: "ওয়ারি",
    khulna: "খুলনা",
    khilgaon: "খিলগাঁও",
    narayanganj: "নারায়ণগঞ্জ",
    savar: "সাভার",
    chittagong: "চট্রগ্রাম",
    rajshahi: "রাজশাহী",
    bogura: "বগুড়া",
    "puran-dhaka": "পুরান ঢাকা",
    banasree: "বনশ্রী",
    "mirpur-1": "মিরপুর - ১",
    // Add more mappings for other branch titles
  };

  const banglaBranchTitle = englishToBengaliMapping[branchTitle] || branchTitle;

  // Fetch data for the specific branch based on branchTitle
  // You can use this data to render the content dynamically

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold"> {banglaBranchTitle}</h2>
      {/* Render other details based on the fetched data */}
    </div>
  );
};

export default BranchDetailsPage;
