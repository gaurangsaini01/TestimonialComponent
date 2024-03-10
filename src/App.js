import React from "react";
import Testimonials from "./components/testimonials";
import reviews from "./data";
const App = () => {
  return (
    <div className=" w-[100vw] h-[100vh] flex flex-col bg-gray-200 items-center justify-center">
      <div>
        <h1 className="font-bold text-center text-2xl md:text-4xl">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-[150px] mx-auto mt-3"></div>
        <Testimonials reviews={reviews}></Testimonials>
      </div>
    </div>
  )
};

export default App;
