import Accordion from "./Accordion";

import { motion } from "framer-motion";

import {
  fadeInLeft,
  fadeInRight,
  staggerAccordionContainer,
  staggerTextContainer,
} from "../variants";

import boyImg from "../assets/img/faq/boy.svg";

import { faqData } from "../data";

const Faq = () => {
  const { pretitle, title, accordions } = faqData;
  return (
    <section className="min-h-[1150px] lg:bg-faq bg-no-repeat bg-right-top lg:pt-40 lg:pb-24 mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ one: false, amout: 0.6 }}
          className="relative flex flex-col lg:flex-row justify-center lg:justify-start items-center pt-8 pb-16 lg:pt-16 lg:pb-32"
        >
          <motion.div variants={fadeInRight} className="lg:max-w-[45%]">
            <h3 className="h3">{pretitle}</h3>
            <h2 className="h2 mb-6 lg:mb-12">{title}</h2>
          </motion.div>
          <motion.div
            variants={fadeInLeft}
            className="lg:absolute lg:-right-16 lg:-top-16"
          >
            <img src={boyImg} alt="boy" className="w-[700px] h-[490px]" />
          </motion.div>
        </motion.div>
        {/* Accordian */}
        <motion.div
          variants={staggerAccordionContainer}
          initial="initial"
          whileInView={"animate"}
          viewport={{ once: false, amount: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-[20px] gap-y-[10px]"
        >
          {accordions.map((accordion, index) => {
            return <Accordion key={index} accordion={accordion} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
