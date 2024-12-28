
import { useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import AnalogClock from "../Components/AnalogClock";
import Clock from "../Components/Clock";
import Weather from "../Components/Weather";

const Section1 = () => {
  // State to control the visibility of the clocks
  const [isAnalogVisible, setIsAnalogVisible] = useState(false);

  // Toggle function to switch between the clocks
  const toggleClock = () => {
    setIsAnalogVisible(!isAnalogVisible);
  };

  return (
    <div className=" p-4">
      {/* Button to toggle between the clocks */}
      <div
        className="cursor-pointer rounded"
        onClick={toggleClock}
      >
        <motion.div
        key={isAnalogVisible ? "analog" : "digital"} // Ensures proper re-mounting
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 ,y:0}}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        >
            {isAnalogVisible ? <AnalogClock /> : <Clock />}
        </motion.div>
      </div>
      <Weather></Weather>

      {/* Animated transition for the clocks */}
      
    </div>
  );
};

export default Section1;
