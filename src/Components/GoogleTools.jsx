

import { motion, AnimatePresence } from 'framer-motion';

const GoogleTools = () => {
  const handleNavigation = (service) => {
    let url = '';

    // Navigate to different Google services
    switch (service) {
      case 'Drive':
        url = 'https://drive.google.com';
        break;
      case 'GoogleAccount':
        url = 'https://myaccount.google.com';
        break;
      case 'YouTube':
        url = 'https://www.youtube.com';
        break;
      case 'Gmail':
        url = 'https://mail.google.com';
        break;
      case 'YTMusic':
        url = 'https://music.youtube.com';
        break;
      case 'Maps':
        url = 'https://www.google.com/maps';
        break;
      case 'Play':
        url = 'https://play.google.com';
        break;
      case 'Photos':
        url = 'https://photos.google.com';
        break;
      case 'Translate':
        url = 'https://translate.google.com';
        break;
      case 'Calendar':
        url = 'https://calendar.google.com';
        break;
      case 'Meet':
        url = 'https://meet.google.com';
        break;
      case 'Contacts':
        url = 'https://contacts.google.com';
        break;
      case 'Docs':
        url = 'https://docs.google.com';
        break;
      case 'Sheets':
        url = 'https://sheets.google.com';
        break;
      case 'Slides':
        url = 'https://slides.google.com';
        break;
      case 'Forms':
        url = 'https://forms.google.com';
        break;
      case 'Keep':
        url = 'https://keep.google.com';
        break;
      default:
        url = 'https://www.google.com';
    }

    // Open the service in a new tab
    window.open(url, '_blank');
  };

  const services = [
    { name: 'Google Drive', color: 'bg-blue-600', key: 'Drive' },
    { name: 'Google Account', color: 'bg-gray-600', key: 'GoogleAccount' },
    { name: 'YouTube', color: 'bg-red-700', key: 'YouTube' },
    { name: 'Gmail', color: 'bg-red-600', key: 'Gmail' },
    { name: 'YouTube Music', color: 'bg-purple-600', key: 'YTMusic' },
    { name: 'Google Maps', color: 'bg-green-500', key: 'Maps' },
    { name: 'Google Play', color: 'bg-teal-600', key: 'Play' },
    { name: 'Google Photos', color: 'bg-blue-400', key: 'Photos' },
    { name: 'Google Translate', color: 'bg-indigo-500', key: 'Translate' },
    { name: 'Google Calendar', color: 'bg-blue-700', key: 'Calendar' },
    { name: 'Google Meet', color: 'bg-green-700', key: 'Meet' },
    { name: 'Google Contacts', color: 'bg-orange-500', key: 'Contacts' },
    { name: 'Google Docs', color: 'bg-blue-700', key: 'Docs' },
    { name: 'Google Sheets', color: 'bg-green-700', key: 'Sheets' },
    { name: 'Google Slides', color: 'bg-pink-500', key: 'Slides' },
    { name: 'Google Forms', color: 'bg-yellow-500', key: 'Forms' },
    { name: 'Google Keep', color: 'bg-lime-600', key: 'Keep' },
  ];

  return (
    <div className="justify-center items-center text-black">
      {/* Pop-Up Section showing all services automatically */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="absolute top-12 left-0 bg-gradient-to-r from-red-500 to-green-600 p-4 shadow-lg rounded-md w-80  ml-5"
        >
          <div className="flex flex-wrap gap-2">
            <AnimatePresence>
              {services.map((service, index) => (
                <motion.button
                  key={service.key}
                  onClick={() => handleNavigation(service.key)}
                  className={`${service.color} text-black font-bold p-2 rounded`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {service.name}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GoogleTools;
