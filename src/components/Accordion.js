import { useState } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

import { motion } from "framer-motion";

import { fadeInRight } from "../variants";

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer } = accordion;
  return (
    <motion.div variants={fadeInRight} className="lg:max-w-[550px]">
      {/* Question */}
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="drop-shadow-primary bg-white cursor-pointer rounded-[10px] h-[90px] px-[35px] flex items-center"
      >
        <div className="w-full flex justify-between items-center">
          {/* Title */}
          <p className="lead font-medium leading-snug max-w-[480px]">
            {question}
          </p>
          <div>
            {isOpen ? (
              <motion.div initial="initial" animate={{ rotate: 180 }}>
                <HiOutlineMinus className="text-[28px]" />
              </motion.div>
            ) : (
              <motion.div initial="initial" animate={{ rotate: 0 }}>
                <HiOutlinePlus className="text-[28px]" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* Answer */}
      <div
        className={`${
          isOpen
            ? "max-h-[160px] p-8 bg-[#FFF7F5] rounded-[10px] drop-shadow-primary my-2"
            : "max-h-0"
        } h-[160px] overflow-hidden transition-all `}
      >
        <p className="lead leading-[30px] mt-2">{answer}</p>
      </div>
    </motion.div>
  );
};

export default Accordion;
