import React from 'react';
import walk from '../assets/legs crowd fafafa@3x 1.png';

const Mark = () => {
  return (
    <section className="relative bg-white border-gray-200 overflow-hidden">
      <div className="relative w-full mx-auto text-center p-0"> {/* Relative positioning for the container */}
        <img
          src={walk}
          alt="Walking feet"
          className="w-full object-cover"
        />

        <p
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[32px] text-gray-600 font-['Nunito'] font-medium"
          style={{ fontFamily: 'Lora', fontSize: '28px' }}
        >
          leave a{' '}
          <span
            className="text-[54px] italic"
            style={{ fontFamily: 'Lora', fontSize: '45px' }}
          >
            Mark
          </span>
          , not a stain
        </p>
      </div>
    </section>
  );
};

export default Mark;