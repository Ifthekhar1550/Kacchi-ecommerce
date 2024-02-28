import { motion } from "framer-motion";
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

  return (
    <motion.div
      initial={{ scale: 0.50 }} // Set initial scale to 0.50
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
      }}
    >
      <a
        href={link}
        className="block w-64 rounded overflow-hidden transform transition-transform duration-300 hover:scale-95"
      >
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
      </a>
    </motion.div>
  );
}
