

import { useState } from "react";
import { motion } from "framer-motion";
import GoogleTools from "../Components/GoogleTools";

const Section4 = () => {
  const [isKeepNoteVisible, setIsKeepNoteVisible] = useState(false);

  

  const toggleKeepNote = () => {
    setIsKeepNoteVisible(!isKeepNoteVisible);
  };

  return (
    <div>
      <div className="flex justify-center space-x-4">
        
        <button
          onClick={toggleKeepNote}
          className="p-1 bg-green-500 text-black rounded hover:bg-green-600"
        >
          Google Services
        </button>
      </div>

     
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
            <GoogleTools className=""></GoogleTools>
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

export default Section4;
