"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="md:flex-row flex-col flex gap-4"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h2 className="font-normal lg:text-[36px] text-[26px] text-white">
          {title}
        </h2>
        <p className="font-normal text-secondary-white lg:text-[20px] text-[14px] mt-[16px]">
          {subtitle}
        </p>
      </div>
      <div className="rounded-full lg:flex hidden w-[100px] h-[100px] border-[1px] border-white bg-transparent justify-center items-center">
        <img
          src="arrow.svg"
          alt="arrow"
          className="w-[40%] h-[40%] object-contain"
        />
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
