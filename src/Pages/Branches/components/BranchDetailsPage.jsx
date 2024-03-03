import React from "react";
import { useParams } from "react-router-dom";
import circleLogo from "../../../assets/Branch/circle_Logo kacchi.png";
import banner from "../../../assets/Branch/background.png";
import { LuClock8 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import panda from "../../../assets/Branch/foodpanda-logo-1.svg";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Rating } from "@material-tailwind/react";
import adr from "../../../assets/Branch/address.png";
import map from "../../../assets/Branch/map.png";
import menu from "../../../assets/Branch/menu.png";
import offer from "../../../assets/Branch/offer.png";
import booking from "../../../assets/Branch/booking.png";
import branchData from "../../../../public/branch-data/branchData.json"
import location from "../../../assets/Branch/location.png"
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

  // Framer Motion Animation Variants
 const controls = useAnimation();
 const [ref, inView] = useInView({
   threshold: 0.2, // Adjust this value based on when you want the animation to trigger
 });
  
 useEffect(() => {
   // Fetch additional data or perform actions based on branchTitle if needed
   console.log(`Fetching data for branch: ${branchTitle}`);
 }, [branchTitle]);

 // Access the details for the current branch
 const currentBranchDetails = branchData[branchTitle];
 // Check if currentBranchDetails exists before accessing its properties
 if (!currentBranchDetails) {
   // Handle the case when branch details are not available
   return <div>Branch details not found</div>;
 }

 const { images, address, phoneNumber, mapLink } = currentBranchDetails;
 useEffect(() => {
   if (inView) {
     controls.start("animate");
   } else {
     controls.start("initial");
   }
 }, [controls, inView]);

 const circleLogoVariants = {
   initial: {
     scale: 0,
   },
   animate: {
     scale: 1,
     transition: {
       duration: 0.5,
     },
   },
  };
 const animationVariants = {
   initial: {
     opacity: 0,
    x: 20,
   },
   animate: {
     opacity: 1,
     x: 0,
     transition: {
       duration: 0.5,
     },
   },
 };
  return (
    <div className="">
      <section className=" max-w-7xl mx-auto w-full my-20 md:my-8 grid-cols-1 md:grid md:grid-cols-[6fr,8fr] xl:grid-cols-[7fr,7fr] gap-8">
        <div className="relative">
          <img
            src={banner}
            className="object-cover object-center  w-full h-[220px] md:w-full md:h-full  rounded-tr-[44px] rounded-tl-[12px] rounded-bl-[44px] rounded-br-[148px] md:rounded-tr-[44px] md:rounded-tl-[20px] md:rounded-bl-[44px] md:rounded-br-[450px] xl:rounded-tr-[48px] xl:rounded-tl-[12px] xl:rounded-bl-[48px] xl:rounded-br-[450px] shadow-md "
            alt=""
          />
          <div
            className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ref={ref}
          >
            <motion.div
              initial="initial"
              animate={controls}
              variants={circleLogoVariants}
            >
              <img
                src={circleLogo}
                className="w-3/5 h-3/5 md:w-5/6 md:h-5/6"
                alt=""
                onError={(e) => console.error("Image Load Error:", e)}
              />
            </motion.div>
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-extrabold mt-6 flex justify-center items-center md:block">
            {" "}
            {banglaBranchTitle}
          </h2>
          <motion.div
            className="flex gap-5 my-10 justify-center items-center md:justify-start"
            ref={ref}
            variants={animationVariants}
            initial="initial"
            animate={controls}
          >
            <p className="w-8 h-8 bg-[#f5f5f5] border border-[#e6e6e6] rounded-full text-black text-xl flex justify-center items-center">
              <LuClock8 className="" />
            </p>
            <p className="text-gray-800 font-extrabold text-sm">
              সকাল ১১.৩০ - রাত ১১.৩০ পর্যন্ত
            </p>
          </motion.div>
          <div className="flex flex-col xl:flex-row justify-center items-center md:justify-start gap-5 xl:gap-0 my-10">
            <div className="w-full flex flex-row gap-5 justify-center items-center md:justify-start">
              <div>
                <Link
                  to={`tel:${currentBranchDetails.phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <Button
                    size="md"
                    className="font-semibold bg-[#FE0000] text-white  rounded-2xl py-3 "
                  >
                    কল করুন
                  </Button>
                </Link>
              </div>

              <div>
                {/* <Link to={5}></Link> */}
                <Button
                  size="sm"
                  className="font-semibold bg-white  text- rounded-3xl py-3 border border-gray-400"
                >
                  <img src={panda} alt="" srcset="" className="w-28" />
                </Button>
              </div>
            </div>
            <div className="w-full flex flex-row justify-center items-center gap-2 md:justify-start ">
              <Rating value={5} readonly />
              <p className="text-gray-700">from 500+ reviews</p>
            </div>
          </div>
        </div>
        {/* Render other details based on the fetched data */}
      </section>
      <div className="w-full h-full max-w-full bg-[#ecfafe] rounded-md shadow-md my-10 md:my-0 py-10">
        <section className="w-[90%] max-w-7xl mx-auto">
          <div className="w-full h-full max-w-full grid grid-cols-5 gap-4 justify-center items-center text-center text-black no-underline  ">
            <ScrollLink
              to="branch-address"
              smooth={true}
              duration={500}
              className="flex flex-col justify-center items-center hover:bg-red-50 bg-[#ecfafe] px-4 md:px-12 lg:px-16 xl:px-24 py-4 md:py-4 lg:py-5 xl:py-6 rounded-xl border border-gray-300 shadow-xl"
            >
              <img src={adr} width="25" alt="" />
              <h3 className="text-sm md:text-sm lg:text-xl xl:text-2xl font-normal md:font-semibold text-gray-800 mt-2 md:mt-3 lg:mt-4 xl:mt-4">
                এড্রেস
              </h3>
            </ScrollLink>

            <Link
              to={currentBranchDetails.mapLink}
              target="_blank"
              className="flex flex-col justify-center items-center hover:bg-red-50 bg-[#ecfafe] px-4 md:px-12 lg:px-16 xl:px-24 py-4 md:py-4 lg:py-5 xl:py-6 rounded-xl border border-gray-300 shadow-xl"
            >
              <img src={map} width="25" alt="" />
              <h3 className="text-sm md:text-sm lg:text-xl xl:text-2xl font-normal md:font-semibold text-gray-800 mt-2 md:mt-3 lg:mt-4 xl:mt-4">
                ম্যাপ
              </h3>
            </Link>

            <Link
              to="/menu"
              className="flex flex-col justify-center items-center hover:bg-red-50 bg-[#ecfafe] px-4 md:px-12 lg:px-16 xl:px-24 py-4 md:py-4 lg:py-5 xl:py-6 rounded-xl border border-gray-300 shadow-xl"
            >
              <img src={menu} width="25" alt="" />
              <h3 className="text-sm md:text-sm lg:text-xl xl:text-2xl font-normal md:font-semibold text-gray-800 mt-2 md:mt-3 lg:mt-4 xl:mt-4">
                মেনু
              </h3>
            </Link>

            <Link
              to="/offer"
              className="flex flex-col justify-center items-center hover:bg-red-50 bg-[#ecfafe] px-4 md:px-12 lg:px-16 xl:px-24 py-4 md:py-4 lg:py-5 xl:py-6 rounded-xl border border-gray-300 shadow-xl"
            >
              <img src={offer} width="25" alt="" />
              <h3 className="text-sm md:text-sm lg:text-xl xl:text-2xl font-normal md:font-semibold text-gray-800 mt-2 md:mt-3 lg:mt-4 xl:mt-4">
                অফার
              </h3>
            </Link>

            <Link
              to="#"
              className="flex flex-col justify-center items-center hover:bg-red-50 bg-[#ecfafe] px-4 md:px-12 lg:px-16 xl:px-24 py-4 md:py-4 lg:py-5 xl:py-6 rounded-xl border border-gray-300 shadow-xl"
            >
              <img src={booking} width="25" alt="" />
              <h3 className="text-sm md:text-sm lg:text-xl xl:text-2xl font-normal md:font-semibold text-gray-800 mt-2 md:mt-3 lg:mt-4 xl:mt-4">
                বুকিং
              </h3>
            </Link>
          </div>
        </section>
      </div>
      {/* photo section */}
      <section className="max-w-7xl mx-auto w-[90%] my-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          ফটো
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="">
            <img
              src={images.left}
              className="rounded-lg w-full h-full object-cover object-center"
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col">
              <img
                src={images.right1}
                className="rounded-lg w-full h-1/2 object-cover object-center mb-6"
                alt=""
              />
              <img
                src={images.right3}
                className="rounded-lg w-full h-1/2 object-cover object-center"
                alt=""
              />
            </div>

            <div className="flex flex-col">
              <img
                src={images.right2}
                className="rounded-lg w-full h-1/2 object-cover object-center mb-6"
                alt=""
              />
              <img
                src={images.right4}
                className="rounded-lg w-full h-1/2 object-cover object-center"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <div
        id="branch-address"
        className="w-full h-full max-w-full bg-[#ecfafe] rounded-md shadow-md  py-6"
      >
        {/* Address section
         */}
        <section className="max-w-7xl mx-auto my-10">
          <div>
            <h1 className="text-2xl md:text-4xl text-gray-900 font-extrabold text-center">
              এড্রেস
            </h1>
          </div>
          <div className="grid grid-cols-[4fr,8fr] justify-center items-center my-10">
            <div className="flex justify-end items-center">
              <img src={location} alt="" className="h-full " />
            </div>
            <div>
              <p
                dangerouslySetInnerHTML={{ __html: address }}
                className="text-2xl md:text-4xl text-gray-900 font-semibold"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BranchDetailsPage;
