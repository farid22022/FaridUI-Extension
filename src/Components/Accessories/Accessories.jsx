
import { useState } from "react";
import { motion } from "framer-motion";
import Calculator from "./Calculator";
import KeepNote from "./KeepNote";

const Accessories = () => {
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false);
  const [isKeepNoteVisible, setIsKeepNoteVisible] = useState(false);

  const toggleCalculator = () => {
    setIsCalculatorVisible(!isCalculatorVisible);
  };

  const toggleKeepNote = () => {
    setIsKeepNoteVisible(!isKeepNoteVisible);
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 mt-1">
        <button
          onClick={toggleCalculator}
          className="p-1 bg-blue-500 text-black rounded hover:bg-blue-600"
        >
          Calculator
        </button>
        <button
          onClick={toggleKeepNote}
          className="p-1 bg-green-500 text-black rounded hover:bg-green-600"
        >
          Keep Note
        </button>
      </div>

      {/* Calculator Modal with Animation */}
      {isCalculatorVisible && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50"
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className=" p-5 rounded-lg shadow-2xl w-96">
            <Calculator />
            <button
              onClick={toggleCalculator}
              className="mt-4 w-full p-2 bg-red-500 text-black rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}

      {/* Keep Note Modal with Animation */}
      {isKeepNoteVisible && (
        <motion.div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50"
          initial={{ opacity: 0, scale: 0.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className=" p-5 rounded-lg shadow-lg w-96">
            <KeepNote />
            <button
              onClick={toggleKeepNote}
              className="mt-4 w-full p-2 bg-red-500 text-black rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Accessories;
