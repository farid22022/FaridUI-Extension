
// import { useState } from 'react';
// import { motion } from 'framer-motion';

// const Tools = () => {
//   const [showButtons, setShowButtons] = useState(false);

//   const handleNavigation = (service) => {
//     let url = '';

//     switch (service) {
//       case 'WhatsApp':
//         url = 'https://web.whatsapp.com';
//         break;
//       case 'Gmail':
//         url = 'https://mail.google.com/mail/u/0/#inbox';
//         break;
//       case 'Facebook':
//         url = 'https://www.facebook.com/?ref=homescreenpwa';
//         break;
//       case 'Twitter':
//         url = 'https://x.com/?utm_source=homescreen&utm_medium=shortcut';
//         break;
//       case 'Instagram':
//         url = 'https://www.instagram.com';
//         break;
//       case 'LinkedIn':
//         url = 'https://www.linkedin.com';
//         break;
//       case 'Telegram':
//         url = 'https://web.telegram.org';
//         break;
//       case 'YouTube':
//         url = 'https://www.youtube.com';
//         break;
//       case 'Snapchat':
//         url = 'https://web.snapchat.com';
//         break;
//       case 'Reddit':
//         url = 'https://www.reddit.com';
//         break;
//       case 'github':
//         url = 'https://github.com';
//         break;
//       default:
//         url = 'https://www.google.com';
//     }

//     // Open the service in a new tab
//     window.open(url, '_blank');
//   };

//   const services = [
//     { name: 'WhatsApp', color: 'bg-green-500' },
//     { name: 'Gmail', color: 'bg-red-600' },
//     { name: 'GitHub', color: 'bg-gray-600' },
//     { name: 'Facebook', color: 'bg-blue-600' },
//     { name: 'Twitter', color: 'bg-blue-400' },
//     { name: 'Instagram', color: 'bg-pink-500' },
//     { name: 'LinkedIn', color: 'bg-blue-700' },
//     { name: 'Telegram', color: 'bg-blue-300' },
//     { name: 'YouTube', color: 'bg-red-500' },
//     { name: 'Snapchat', color: 'bg-yellow-500' },
//     { name: 'Reddit', color: 'bg-orange-500' },
//   ];

//   return (
//     <div className="flex items-start space-x-4 p-4 absolute w-1/2 translate-x-3/4 -translate-y-20">
//       {/* Toggle button */}
//       <button
//         onClick={() => setShowButtons(!showButtons)}
//         className="p-2 bg-blue-600 text-black rounded"
//       >
//         {showButtons ? 'Hide Services' : 'Show Services'}
//       </button>

//       {/* Service buttons with animations */}
//       {showButtons && (
//         <div className="flex flex-wrap gap-2">
//           {services.map((service, index) => (
//             <motion.button
//                 key={service.name}
//                 onClick={() => handleNavigation(service.name)}
//                 className={`${service.color} text-black p-2 rounded`}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ delay: index * 0.1, duration: 0.3 }}
//             >
//               {service.name}
//             </motion.button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Tools;
import { useState } from 'react';
import { motion } from 'framer-motion';

const Tools = () => {
  const [showButtons, setShowButtons] = useState(false);

  const handleNavigation = (service) => {
    let url = '';

    switch (service) {
      case 'WhatsApp':
        url = 'https://web.whatsapp.com';
        break;
      case 'Gmail':
        url = 'https://mail.google.com/mail/u/0/#inbox';
        break;
      case 'GitHub':
        url = 'https://github.com';
        break;
      case 'Facebook':
        url = 'https://www.facebook.com/?ref=homescreenpwa';
        break;
      case 'Twitter':
        url = 'https://x.com/?utm_source=homescreen&utm_medium=shortcut';
        break;
      case 'Instagram':
        url = 'https://www.instagram.com';
        break;
      case 'LinkedIn':
        url = 'https://www.linkedin.com';
        break;
      case 'Telegram':
        url = 'https://web.telegram.org';
        break;
      case 'YouTube':
        url = 'https://www.youtube.com';
        break;
      case 'Snapchat':
        url = 'https://web.snapchat.com';
        break;
      case 'Reddit':
        url = 'https://www.reddit.com';
        break;
      default:
        url = 'https://www.google.com';
    }

    // Open the service in a new tab
    window.open(url, '_blank');
  };

  const services = [
    { name: 'WhatsApp', color: 'bg-green-500', icon: './../../public/Logo/whatsapp.png' },
    { name: 'Gmail', color: 'bg-red-600', icon: './../../public/Logo/gmail.png' },
    { name: 'GitHub', color: 'bg-gray-600', icon: './../../public/Logo/social.png' },
    { name: 'Facebook', color: 'bg-blue-600', icon: './../../public/Logo/Facebook-Logosu.png' },
    { name: 'Twitter', color: 'bg-blue-400', icon: './../../public/Logo/images__1_-removebg-preview (1).png' },
    { name: 'Instagram', color: 'bg-pink-500', icon: './../../public/Logo/sm_5b37de3263964-removebg-preview.png' },
    { name: 'LinkedIn', color: 'bg-blue-700', icon: './../../public/Logo/png-clipart-linkedin-linkedin-thumbnail-removebg-preview.png' },
    { name: 'Telegram', color: 'bg-blue-300', icon: './../../public/Logo/Telegram-icon-on-transparent-background-PNG-removebg-preview.png' },
    { name: 'YouTube', color: 'bg-red-500', icon: './../../public/Logo/1384060.png' },
    { name: 'Snapchat', color: 'bg-yellow-500', icon: './../../public/Logo/Screenshot_2024-12-28_005738-removebg-preview.png' },
    { name: 'Reddit', color: 'bg-orange-500', icon: './../../public/Logo/png-clipart-reddit-computer-icons-logo-others-miscellaneous-orange-removebg-preview.png' },
  ];

  return (
    <div className="flex items-start space-x-4 p-4 absolute w-1/2 translate-x-3/4 -translate-y-20">
      {/* Toggle button */}
      <button
        onClick={() => setShowButtons(!showButtons)}
        className="p-2 bg-blue-600 text-black rounded"
      >
        {showButtons ? 'Hide Services' : 'Show Services'}
      </button>

      {/* Service buttons with images and animations */}
      {showButtons && (
        <div className="flex flex-wrap gap-2">
          {services.map((service, index) => (
            <motion.button
              key={service.name}
              onClick={() => handleNavigation(service.name)}
              className={`${service.color} text-black p-2 rounded flex items-center space-x-2`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              {/* Image/Icon */}
              <img src={service.icon} alt={`${service.name} icon`} className="w-6 h-6" />
              <span>{service.name}</span>
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tools;
