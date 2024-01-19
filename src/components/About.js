import { motion } from "framer-motion";

import { fadeInUp, fadeInDown, staggerTextContainer } from "../variants";
import { aboutData } from "../data";

import boyImg from "../assets/img/about/boy.svg";

const About = () => {
  const { title, subtitle, text } = aboutData;
  return (
    <section className="mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex lg:flex-row flex-col gap-x-[20px]"
        >
          <motion.div variants={fadeInDown} className="flex-1 mt-[74px]">
            <h3 className="h3">{title}</h3>
            <p className="lead lg:max-w-[470px] mb-[70px]">{subtitle}</p>
            {/* Text description */}
            <div className="bg-accent/10 border-l-[10px] border-accent  lg:py-10 py-6 flex items-center justify-start mb-8 lg:mb-0 pl-4">
              <p className="text-[20px] leading-normal lg:text-[24px] lg:leading-[32px] font-medium  lg:max-w-[460px]">
                {text}
              </p>
            </div>
          </motion.div>
          {/* Image */}
          <motion.div
            variants={fadeInUp}
            className="flex-1 flex justify-center items-center"
          >
            <img src={boyImg} alt="boy" className="w-[575px] h-[400px]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
