import { motion } from "framer-motion";

import { fadeInLeft, fadeInRight, staggerTextContainer } from "../variants";

import { howData } from "../data";

import girlImg from "../assets/img/how/girl.svg";

const How = () => {
  const { title, subtitle } = howData;
  return (
    <section className="mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row gap-x-10 items-center"
        >
          {/* Image */}
          <motion.div variants={fadeInRight} className="flex-1">
            <img src={girlImg} className="w-[720px] h-[678px]" alt="girl" />
          </motion.div>
          {/* Text */}
          <motion.div variants={fadeInLeft} className="flex-1 flex justify-end">
            <div className="lg:max-w-[455px]">
              <h3 className="h3">{title}</h3>
              <p className="lead">{subtitle}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default How;
