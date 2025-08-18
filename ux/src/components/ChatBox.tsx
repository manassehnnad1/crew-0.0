import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ExpandableInput: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsExpanded(true);
  };

  const handleBlur = () => {
    if (value === '') {
      setIsExpanded(false);
    }
  };

  const handleSubmit = (e: React.FormEvent | React.KeyboardEvent) => {
    if (value.trim()) {
      console.log('Submitted:', value);
      // Handle your submit logic here
      setValue('');
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h4 className='font-funnel text-xl -mt-64 mb-12 text-gray-500'>get the clearest takes on anything <br /> you wish to look up with crew 0.0</h4>
      <div className="w-full max-w-2xl flex justify-center">
        
        <div
          className={`
            relative bg-gray-200 rounded-full transition-all duration-500 ease-out
            ${isExpanded ? 'w-full' : 'w-64'}
          `}
        >
          <div className="flex items-center font-funnel">
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyPress={handleKeyPress}
              placeholder="Ask crew 0.0"
              className={`
                w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-500
                transition-all duration-500 ease-out
                ${isExpanded ? 'py-4 px-6 text-base' : 'py-3 px-5 text-sm'}
              `}
            />
            
            <button
              onClick={handleSubmit}
              className={`
                absolute right-1 w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center 
                transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400
                ${value.trim() ? 'opacity-100' : 'opacity-70'}
              `}
              disabled={!value.trim()}
            >
              <ChevronUp 
                className={`
                  w-5 h-5 text-white transition-transform duration-200
                  ${isExpanded ? 'rotate-0' : 'rotate-45 '}
                `}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableInput;