import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React, { useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import logo from "../../../assets/Branch/logo.jpeg";

export function ProfileCard({ title, link }) {
  const iconRef = useRef(null);

  const handleMouseOver = () => {
    if (iconRef.current) {
      iconRef.current.style.transform = "translateX(4px)";
    }
  };

  const handleMouseOut = () => {
    if (iconRef.current) {
      iconRef.current.style.transform = "translateX(0)";
    }
  };

  // Add useEffect to trigger initial animation when component mounts
  useEffect(() => {
    // Trigger the initial animation by setting the scale to 1 in a short time
    setTimeout(() => {
      if (iconRef.current) {
        iconRef.current.style.transform = "scale(1)";
      }
    }, 300);
  }, []);
  const bengaliToEnglishMapping = {
    "শনির আখড়া": "shanirakhra",
    "মিরপুর - ১০": "mirpur-10",
    মোহাম্মদপুর: "mohammadpur",
    উত্তরা: "uttara",
    গুলশান: "gulshan",
    "বেইলি রোড": "bailey-road",
    ধানমন্ডি: "dhanmondi",
    "বসুন্ধরা গেট": "bashundhara-gate",
    ওয়ারি: "wari",
    খুলনা: "khulna",
    খিলগাঁও: "khilgaon",
    নারায়ণগঞ্জ: "narayanganj",
    সাভার: "savar",
    চট্রগ্রাম: "chittagong",
    রাজশাহী: "rajshahi",
    বগুড়া: "bogura",
    "পুরান ঢাকা": "puran-dhaka",
    বনশ্রী: "banasree",
    "মিরপুর - ১": "mirpur-1",
  };

  const routeTitle = bengaliToEnglishMapping[title] || title;

  return (
    <motion.div
      initial={{ scale: 0.5 }} // Set initial scale to 0.50
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
    >
      <Link
        to={`/branch/${encodeURIComponent(routeTitle)}`}
        className="block w-64 rounded overflow-hidden transform
        transition-transform duration-300 hover:scale-95"
      >
        {" "}
        {/* Use dynamic link */}
        <Card
          className="w-44 md:w-60 lg:w-full bg-white cursor-pointer rounded-3xl overflow-hidden"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <CardHeader
            floated={false}
            className="h-44 md:h-60 lg:h-72 shadow-none"
          >
            <img src={logo} alt="branch" />
          </CardHeader>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="black"
              className="mb-2 text-lg md:text-xl lg:text-2xl"
            >
              {title}
            </Typography>
            <div className="flex justify-center items-center">
              <Typography
                color="blue-gray"
                className="font-medium text-black"
                textGradient
              >
                দেখুন
              </Typography>
              <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                ref={iconRef}
              >
                <FaArrowRight className="font-bold text-black" />
              </div>
            </div>
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  );
}
