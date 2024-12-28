
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIWebBrowserButtons = () => {
  const [showButtons, setShowButtons] = useState(false);

  const handleNavigation = (service) => {
    let url = '';

    switch (service) {
      case 'chatgpt':
        url = 'https://chat.openai.com';
        break;
      case 'gemini':
        url = 'https://www.google.com/search?q=Gemini+AI'; // Example for Gemini
        break;
      case 'copilot':
        url = 'https://github.com/copilot';
        break;
      case 'perplexity':
        url = 'https://www.perplexity.ai';
        break;
      default:
        url = 'https://chat.openai.com';
    }

    // Open the service in a new tab
    window.open(url, '_blank');
  };

  const services = [
    { name: 'ChatGPT', color: 'bg-blue-500', key: 'chatgpt', image: './../Logo/chatgpt.png' },
    { name: 'Gemini', color: 'bg-purple-600', key: 'gemini', image: '/public/Logo/ai-technology.png' },
    { name: 'Copilot', color: 'bg-gray-600', key: 'copilot', image: '/public/Logo/images__1_-removebg-preview.png' },
    { name: 'Perplexity', color: 'bg-green-500', key: 'perplexity', image: '/public/Logo/images__2_-removebg-preview.png' },
  ];

  return (
    <div className="flex items-start space-x-4 p-4">
      {/* Toggle button */}
      <button
        onClick={() => setShowButtons(!showButtons)}
        className="p-2 bg-gradient-to-r from-red-500 to-green-500 text-black rounded"
      >
        {showButtons ? 'Hide AI Tools' : 'AI Tools ->'}
      </button>

      {/* Service buttons with animations */}
      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {showButtons &&
            services.map((service, index) => (
              <motion.button
                key={service.key}
                onClick={() => handleNavigation(service.key)}
                className={`${service.color} text-black p-2 rounded flex items-center space-x-2`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <img src={service.image} alt={service.name} className="w-6 h-6" />
                <span>{service.name}</span>
              </motion.button>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AIWebBrowserButtons;
