
import { useState, useEffect } from 'react';

const AnalogClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  const secondsAngle = time.getSeconds() * 6; // 360° / 60s
  const minutesAngle = time.getMinutes() * 6 + time.getSeconds() * 0.1;
  const hoursAngle = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;

  return (
    <div className="flex justify-center items-center  " >
      <div className="relative w-48 h-48 rounded-full border-4 border-primary bg-neutral text-primary-content ">
        {/* Hour Hand */}
        <div
          className="absolute bg-primary h-12 w-1 top-12 left-24 origin-bottom"
          style={{ transform: `rotate(${hoursAngle}deg)` }}
        ></div>
        {/* Minute Hand */}
        <div
          className="absolute bg-secondary h-16 w-1 top-8 left-24 origin-bottom"
          style={{ transform: `rotate(${minutesAngle}deg)` }}
        ></div>
        {/* Second Hand */}
        <div
          className="absolute bg-accent h-20 w-0.5 top-4 left-24 origin-bottom"
          style={{ transform: `rotate(${secondsAngle}deg)` }}
        ></div>
        {/* Clock Center */}
        <div className="absolute w-4 h-4 bg-primary rounded-full top-24 left-24 -translate-x-2 -translate-y-2"></div>
        {/* Numbers
        {[...Array(12)].map((_, i) => {
          const angle = (i + 1) * 30;
          const x = 80 * Math.sin((angle * Math.PI) / 180);
          const y = -80 * Math.cos((angle * Math.PI) / 180);
          return (
            <div
              key={i}
              className="absolute text-sm font-bold"
              style={{
                transform: `translate(calc(50% + ${x}px), calc(50% + ${y}px))`,
              }}
            >
              {i + 1}
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default AnalogClock;
