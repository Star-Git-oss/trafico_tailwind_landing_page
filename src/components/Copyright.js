import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

import { fadeInUp } from "../variants";

const Copyright = () => {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView={"animate"}
      className="bg-white h-[140px]"
    >
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center h-full lg:pr-24">
          <p>Copyright &copy; 2024</p>

          <div className="flex gap-x-[30px]">
            <a href={"/"}>
              <div className="w-9 h-9 bg-accent hover:bg-accent-hover text-white rounded-full flex justify-center items-center transition">
                <FaYoutube className="text-lg" />
              </div>
            </a>
            <a href={"/"}>
              <div className="w-9 h-9 bg-accent hover:bg-accent-hover text-white rounded-full flex justify-center items-center transition">
                <FaInstagram className="text-lg" />
              </div>
            </a>
            <a href={"/"}>
              <div className="w-9 h-9 bg-accent hover:bg-accent-hover text-white rounded-full flex justify-center items-center transition">
                <FaGithub className="text-lg" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Copyright;
