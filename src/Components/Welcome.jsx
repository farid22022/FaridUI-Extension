
// import { useState } from 'react';

// const WelcomeComponent = () => {
//   const [name, setName] = useState('');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   return (
//     <div className="absolute -translate-x-20 bottom-16">
//       <div className="text-center flex space-x-2">
//         {/* Welcome text with gradient and fancy font */}
//         <p className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text mb-4">
//           Welcome
//         </p>

//         {/* Name input with fancy font */}
//         <div className="mb-4">
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={handleNameChange}
//             className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text mb-4"
//             placeholder="Enter your name"
//           />
//         </div>

        
//       </div>
//     </div>
//   );
// };

// export default WelcomeComponent;
import { useState } from 'react';
import { motion } from 'framer-motion';

const WelcomeComponent = () => {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="absolute -translate-x-20 bottom-16">
      <div className="text-center flex space-x-2">
        {/* Welcome text with gradient and fancy font with motion */}
        <motion.p
          className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome
        </motion.p>

        {/* Name input with fancy font and motion */}
        <div className="mb-4">
          <motion.input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text mb-4"
            placeholder="Enter your name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
