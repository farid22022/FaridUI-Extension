
// import { motion } from 'framer-motion';

// const Section5 = () => {
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
//   ];

//   return (
//     <div className="flex items-center justify-center py-1 px-4">
//       <div className="flex flex-wrap gap-4 justify-center">
//         {services.map((service, index) => (
//           <motion.button
//             key={service.name}
//             onClick={() => handleNavigation(service.name)}
//             className={`${service.color} text-black p-4 rounded-lg`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ delay: index * 0.1, duration: 0.3 }}
//           >
//             {service.name}
//           </motion.button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Section5;
import { motion } from 'framer-motion';

const Section5 = () => {
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
      default:
        url = 'https://www.google.com';
    }

    // Open the service in a new tab
    window.open(url, '_blank');
  };

  const services = [
    { name: 'WhatsApp', color: 'bg-green-500', imgSrc: './../.../../Logo/whatsapp.png' },
    { name: 'Gmail', color: 'bg-red-600', imgSrc: './../.../../Logo/gmail.png' },
    { name: 'GitHub', color: 'bg-gray-600', imgSrc: './../.../../Logo/social.png' },
    { name: 'Facebook', color: 'bg-blue-600', imgSrc: './../.../../Logo/Facebook-Logosu.png' },
    { name: 'Twitter', color: 'bg-blue-400', imgSrc: './../.../../Logo/images__1_-removebg-preview (1).png' },
  ];

  return (
    <div className="flex items-center justify-center py-1 px-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {services.map((service, index) => (
          <motion.button
            key={service.name}
            onClick={() => handleNavigation(service.name)}
            className={`${service.color} text-black p-4 rounded-lg flex items-center gap-2`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <img
              src={service.imgSrc}
              alt={service.name}
              className="w-6 h-6"
            />
            <span>{service.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Section5;
