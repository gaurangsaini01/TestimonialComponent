import React, { useState } from 'react'
import Card from './Card'
import {FiChevronLeft ,FiChevronRight } from "react-icons/fi";
function Testimonials({reviews}) {

    const[num,setNum]=useState(0);
    
    function LeftHandler(){
      if(num-1<0){
        setNum(reviews.length-1);
      }
      else{
        setNum(num-1);
      }
    }
    function RightHandler(){
      setNum((num+1)%reviews.length);
    }
    function surpriseHandler(){
      setNum((Math.floor(Math.random() * reviews.length)));
      console.log((Math.floor(Math.random() * reviews.length)))
    }

    return (
    <div className='w-[85vw] md:w-[600px] h-[400px] bg-white flex flex-col items-center justify-center m-10 p-10 hover:shadow-xl transition-all ease-out duration-300 '>
      <Card review={reviews[num]}></Card>
      
      <div className="flex text-2xl text-violet-500 font-bold mt-3 gap-4 justify-center">
        <button onClick={LeftHandler} className=" hover:text-violet-600 cursor-pointer"><FiChevronLeft/></button>
        <button onClick={RightHandler} className=" hover:text-violet-600 cursor-pointer"><FiChevronRight/></button>
      </div>
      <div>
        <button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-600 transition-all duration-200 px-6 py-2 mt-3 rounded-md text-white font-bold">Surprise Me !</button>
      </div>

    </div>
  )
}

export default Testimonials