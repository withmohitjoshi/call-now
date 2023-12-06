import React, { useState } from 'react';
import { FiPhone } from 'react-icons/fi';

const Dialpad = () => {
  const [number, setNumber] = useState('');
  return (
    <div className='w-full flex flex-col gap-4'>
      <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} className='p-2 h-12 text-center font-semibold text-gray-800' placeholder='+1234567890' max={13} min={3} />
      <div className='grid grid-cols-3 grid-rows-4 gap-4'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((digit) => (
          <Button key={digit} onClick={(e) => setNumber((prev) => prev + e.target.innerText)}>
            {digit}
          </Button>
        ))}
        <Button classNames={'col-span-3'}
          onClick={() => {
            console.log('HElo world');
          }}
        >
          <FiPhone />
        </Button>
      </div>
    </div>
  );
};

export default Dialpad;

const Button = ({ children, classNames, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer w-12 h-12 flex items-center justify-center border-2 border-purple-700 text-gray-800 justify-self-center font-semibold rounded-full p-2
        hover:bg-purple-700 hover:text-gray-300 transition-colors duration-200 ease-in-out ${classNames}`}
    >
      {children}
    </div>
  );
};
