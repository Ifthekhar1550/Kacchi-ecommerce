import { motion } from "framer-motion";

const BranchHeading = () => {
  return (
    <motion.h2
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      className="text-center text-2xl md:text-3xl font-extrabold py-16"
    >
      আমাদের ব্রাঞ্চসমূহ
    </motion.h2>
  );
};

export default BranchHeading;
