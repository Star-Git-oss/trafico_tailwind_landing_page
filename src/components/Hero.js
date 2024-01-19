import Header from "./Header";

import { motion } from "framer-motion";
import { CgArrowLongRight } from "react-icons/cg";

import { heroData } from "../data";

import boyImg from "../assets/img/hero/boy.svg";
import girlImg from "../assets/img/hero/girl.svg";
import truckImg from "../assets/img/hero/truck.svg";

import {
  staggerContainer,
  girlAnim,
  boyAnim,
  heroTruckAnim,
  fadeInDown,
} from "../variants";

const Hero = () => {
  const { title, btnText } = heroData;

  return (
    <section className="bg-hero bg-no-repeat bg-left-top min-h-[800px] lg:min-h-[950px] lg:mb-80">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container mx-auto relative min-h-[800px] lg:min-h-[950px] "
      >
        <motion.div variants={fadeInDown}>
          <Header />
        </motion.div>

        <motion.h1
          variants={fadeInDown}
          className="h1 max-w-[740px] text-white pt-[12rem] mb-[60px]"
        >
          {title}
        </motion.h1>

        <motion.button
          whileHover={{ scale: 1.05 }}
          variants={fadeInDown}
          className="btn"
        >
          {btnText}
          <CgArrowLongRight className="text-[30px]" />
        </motion.button>

        <motion.div
          variants={girlAnim}
          className="hidden lg:flex absolute bottom-0"
        >
          <img src={girlImg} alt="girl" className="w-[286px] h-[495px]" />
        </motion.div>

        <motion.div
          variants={heroTruckAnim}
          className="hidden lg:flex absolute  -bottom-[25%] -left-[30%]"
        >
          <img src={truckImg} alt="truck" className="w-[811px] h-[395px]" />
        </motion.div>

        <motion.div
          variants={boyAnim}
          className="hidden lg:flex absolute right-[380px] bottom-0 z-10"
        >
          <img src={boyImg} alt="boy" className="w-[286px] h-[495px]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
