
import { useState } from 'react';
import { motion } from 'framer-motion';
import bing from "./../../public/Logo/Bing-Chat-Logo-removebg-preview.png";
import google from "./../../public/Logo/google (1).png";
import duck from "./../../public/Logo/png-transparent-duckduckgo-macos-bigsur-icon-thumbnail-removebg-preview.png";
import youtube from "./../../public/Logo/1384060.png";

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [selectedEngine, setSelectedEngine] = useState('google');
  const [isOpen, setIsOpen] = useState(false);

  const logos = {
    google,
    bing,
    duck,
    youtube
  };


  const suggestionList = [
    'React.js tutorial',
    'Framer Motion examples',
    'Web development tips',
    'JavaScript functions',
    'Python programming',
    'CSS Grid tutorial',
    'HTML5 features',
    'Tailwind CSS',
    'Frontend libraries',
    'Search engines'
  ];

  // Filter suggestions based on query
  const filteredSuggestions = suggestionList.filter(suggestion =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );
  const sortedSuggestions = filteredSuggestions.sort((a, b) => a.localeCompare(b));

  // Handle search function
  const handleSearch = () => {
    let searchUrl = '';

    switch (selectedEngine) {
      case 'google':
        searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        break;
      case 'bing':
        searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
        break;
      case 'duck':
        searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
        break;
      case 'youtube':
        searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
        break;
      default:
        searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }

    window.open(searchUrl, '_blank');
  };

  // Handle key press for ENTER key
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar container mt-10">
      <div className="flex flex-col items-center rounded-lg shadow-lg">
        {/* Search Bar Container */}
        <div className="flex items-center relative rounded-full">
          {/* Logo */}
          <img
            src={logos[selectedEngine]}
            alt={selectedEngine}
            className="absolute left-10   transform -translate-y-4 z-30 w-12 pb-4"
          />
          
          {/* Search Input */}
          <motion.input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyPress} // Trigger search on ENTER
            placeholder="         Search Here..."
            className="p-5 pl-16 w-96 ml-8 text-black bg-gradient-to-r from-red-900 to-red-600 rounded-full font-semibold -translate-y-4 mb-4"
          />

          {/* Search Button */}
          <motion.button
            onClick={handleSearch}
            className="p-5 rounded-3xl bg-red-600 text-black border-2 px-6 mb-2 ml-2"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Search
          </motion.button>
        </div>

        {/* Suggestions dropdown */}
        {query && sortedSuggestions.length > 0 && (
          <div className="absolute mt-2 w-1/2 bg-red-400 text-black rounded-lg shadow-lg z-20 translate-y-16">
            {sortedSuggestions.map((suggestion, index) => (
              <motion.div
                key={index}
                className="p-2 hover:bg-red-300 cursor-pointer font-semibold"
                onClick={() => setQuery(suggestion)}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {suggestion}
              </motion.div>
            ))}
          </div>
        )}

        <h3 className='font-serif font-semibold text-red-600 mt-4'>Search With</h3>

        {/* Custom Engine Options Dropdown */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="p-2 rounded-lg text-black cursor-pointer bg-gradient-to-r from-red-500 to-green-500 font-semibold text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedEngine.charAt(0).toUpperCase() + selectedEngine.slice(1)}
          </div>

          {isOpen && (
            <motion.div
              className="absolute mt-2 flex z-10 bg-gradient-to-r rounded-lg shadow-lg text-black"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{ top: '100%' }}
            >
              {['google', 'bing', 'duck', 'youtube'].map((engine, index) => (
                <motion.div
                  key={engine}
                  onClick={() => { setSelectedEngine(engine); setIsOpen(false); }}
                  className="p-2 hover:bg-red-400 cursor-pointer flex-1 text-center rounded-xl border-2 border-red-700 m-1"
                  whileHover={{ scale: 1.35 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,  // Delay for each item to appear one by one
                  }}
                >
                  {engine.charAt(0).toUpperCase() + engine.slice(1)}
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SearchBar;
