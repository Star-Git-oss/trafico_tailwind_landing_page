import { CgArrowLongRight } from "react-icons/cg";

import { motion } from "framer-motion";

import { staggerFooterContainer, footerTruckAnim, fadeInUp } from "../variants";

import { footerData } from "../data";

import truckImg from "../assets/img/footer/truck.svg";
import hilling from "../assets/img/footer/hill.svg";
const Footer = () => {
  const { text, links, form } = footerData;
  return (
    <footer className="bg-darkblue lg:bg-transparent lg:bg-footer lg:bg-no-repeat lg:bg-left-bottom lg:min-h-[730px] pt-12 lg:pt-0 relative">
      <motion.div
        variants={staggerFooterContainer}
        initial="initial"
        whileInView={"animate"}
        viewport={{ once: false, amount: 0.1 }}
        className="container mx-auto lg:min-h-[730px] flex flex-col justify-between"
      >
        <motion.div
          variants={footerTruckAnim}
          className="hidden lg:flex absolute -top-24 -left-[6.8%]"
        >
          <img src={truckImg} className="w-[430px] h-[210px]" alt="truck" />
        </motion.div>
        <div className="hidden lg:flex absolute z-10 top-[22] left-0">
          <img src={hilling} className="w-[137px] h-[92px]" alt="hill" />
        </div>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col lg:flex-row items-center lg:pr-[95px] lg:gap-x-[95px] gap-y-10 lg:gap-y-0"
        >
          <div className="text-white flex-1 border-l-[10px] border-accent py-4 lg:mt-24">
            <p className="max-w-[330px] text-[20px] leading-[30px] ml-[40px]">
              {text}
            </p>
          </div>
          <form className="w-full max-w-[550px] bg-white flex-1 rounded-[10px] lg:order-2 flex flex-col px-[35px] lg:px-[75px] py-[25px] lg:py-[52px] space-y-[40px] drop-shadow-primary">
            <div className="flex flex-col">
              <label className="font-light mb-[10px]" htmlFor="name">
                {form.labelName}
              </label>
              <input
                className="input"
                type="text"
                id="name"
                placeholder={form.placeholderName}
              />
            </div>

            <div className="flex flex-col">
              <label className="font-light mb-[10px]" htmlFor="email">
                {form.labelEmail}
              </label>
              <input
                className="input"
                type="text"
                id="email"
                placeholder={form.placeholderEmail}
              />
            </div>

            <button className="btn self-start hover:bg-accent-hover transition">
              {form.btnText}
              <CgArrowLongRight className="text-[30px]" />
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col py-[120px] lg:flex-row justify-between lg:pr-24"
        >
          <div className="text-6xl text-white font-bold mb-6 mx-auto lg:mb-0 lg:mx-0">
            Byduo.
          </div>
          <ul className="flex flex-col items-center lg:flex-row gap-y-4 lg:gap-y-0 gap-x-[100px] text-center">
            {links.map((link, index) => {
              return (
                <li
                  className="text-white font-light hover:text-accent transition"
                  key={index}
                >
                  <a href={link.href}>{link.name}</a>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
