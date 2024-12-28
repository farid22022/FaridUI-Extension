// import React, { useState, useEffect } from 'react';

// const Alarm = () => {
//   const [alarmTime, setAlarmTime] = useState('');
//   const [currentTime, setCurrentTime] = useState('');
//   const [isAlarmSet, setIsAlarmSet] = useState(false);
//   const [alarmMessage, setAlarmMessage] = useState('');

//   // The sound file to play when the alarm rings
//   const alarmSound = new Audio('./../.../../Best Coast - The Only Place.mp3');

//   // Update the current time every second
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const date = new Date();
//       setCurrentTime(date.toLocaleTimeString());
//     }, 1000);

//     return () => clearInterval(intervalId); // Clean up the interval on unmount
//   }, []);

//   // Check if the alarm time is reached
//   useEffect(() => {
//     if (alarmTime === currentTime) {
//       triggerAlarm();
//     }
//   }, [currentTime, alarmTime]);

//   const handleTimeChange = (e) => {
//     setAlarmTime(e.target.value);
//   };

//   const triggerAlarm = () => {
//     setAlarmMessage('Alarm Triggered!');
//     alarmSound.play();
//     setIsAlarmSet(false); // Reset alarm after it rings
//   };

//   const setAlarm = () => {
//     if (alarmTime) {
//       setIsAlarmSet(true);
//       setAlarmMessage(`Alarm set for ${alarmTime}`);
//     }
//   };

//   const resetAlarm = () => {
//     setAlarmTime('');
//     setAlarmMessage('');
//     setIsAlarmSet(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-xl w-96">
//         <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">Alarm Clock</h1>

//         <div className="mb-4">
//           <label htmlFor="alarm-time" className="block text-lg text-gray-600 mb-2">
//             Set Alarm Time:
//           </label>
//           <input
//             type="time"
//             id="alarm-time"
//             value={alarmTime}
//             onChange={handleTimeChange}
//             disabled={isAlarmSet}
//             className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         <div className="flex justify-center gap-4 mb-4">
//           {isAlarmSet ? (
//             <div className="text-center">
//               <p className="text-lg font-semibold text-red-500 mb-2">{alarmMessage}</p>
//               <button
//                 onClick={resetAlarm}
//                 className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//               >
//                 Reset Alarm
//               </button>
//             </div>
//           ) : (
//             <button
//               onClick={setAlarm}
//               className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
//             >
//               Set Alarm
//             </button>
//           )}
//         </div>

//         <div className="text-center text-lg text-gray-600">
//           <p>Current Time: {currentTime}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Alarm;
import React, { useState, useEffect } from 'react';

const Alarm = () => {
  const [alarmTime, setAlarmTime] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [alarmMessage, setAlarmMessage] = useState('');

  // The sound file to play when the alarm rings
  const alarmSound = new Audio('./../.../../Best Coast - The Only Place.mp3');

  // Update the current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format as HH:mm
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, []);

  // Check if the alarm time is reached
  useEffect(() => {
    if (alarmTime === currentTime) {
      triggerAlarm();
    }
  }, [currentTime, alarmTime]);

  const handleTimeChange = (e) => {
    setAlarmTime(e.target.value);
  };

  const triggerAlarm = () => {
    setAlarmMessage('Alarm Triggered!');
    alarmSound.play();
    setIsAlarmSet(false); // Reset alarm after it rings
  };

  const setAlarm = () => {
    if (alarmTime) {
      setIsAlarmSet(true);
      setAlarmMessage(`Alarm set for ${alarmTime}`);
    }
  };

  const resetAlarm = () => {
    setAlarmTime('');
    setAlarmMessage('');
    setIsAlarmSet(false);
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100">
      <h3>Still Working Process....</h3>
    </div>
  );
};

export default Alarm;
