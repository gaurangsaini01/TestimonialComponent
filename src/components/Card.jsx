import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card({ review }) {
  return (
    <div className=" flex flex-col items-center relative">
      
      <div className="absolute w-[70px] h-[70px] sm:w-[140px] sm:h-[140px] bg-violet-400 top-[-70px] left-[-25px] rounded-full z-10 "></div>

      <img
          className="w-[80px] h-[80px] absolute top-[-4rem] left-[-2rem] aspect-square  rounded-full sm:w-[140px] sm:h-[140px] z-50 "
          src={review.image}>
      </img>  
  
      <div className="text-center mt-7">
        <p className="font-bold text-xl md:text-2xl capitalize">{review.name}</p>
      </div>
      <div className="text-center mt-2 cursor-pointer">
        <p className="text-violet-500 text-xs md:text-sm uppercase">{review.job}</p>
      </div>
      <div className= " text-violet-500 flex justify-center items-center mt-2">
        <FaQuoteLeft></FaQuoteLeft>
      </div>

      <div className="text-center text-xs md:text-sm mt-3 text-slate-600 cursor-default">
        {review.text}
        </div>

      <div className= " text-violet-500 mt-2 flex justify-center items-center">
        <FaQuoteRight />
      </div>
      
    </div>
  );
}

export default Card;
