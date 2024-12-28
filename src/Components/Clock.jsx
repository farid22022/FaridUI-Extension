
import { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-16 ">
      <div className="card w-96 bg-neutral  shadow-xl p-5  bg-gradient-to-r from-red-500 to-green-500 text-black ">
        <h1 className="text-2xl font-bold text-center">Current Time</h1>
        <p className="text-xl text-center mt-4">
          {time.toLocaleTimeString()} {/* Formats time based on user locale */}
        </p>
      </div>
    </div>
  );
};

export default Clock;
