import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import images from '../constants/images';

const Frame78: React.FC = () => {
  return (
    <div className="relative top-[60px] left-[-19px] w-auto h-auto flex flex-row items-start gap-2 p-0">
      <div className="w-[24px] h-[24px] rounded-[999px]">
        <div className="w-[24px] h-[24px] rounded-[999px] mb-[72px]">
          <div className="w-[24px] h-[24px] rounded-full relative">
            <img className="w-full h-full object-cover rounded-full" src={images.user2} alt="User Profile" />
            <div className="w-[7.64px] h-[7.64px] rounded[999px] absolute bottom-0 right-0 pb-2">
              <AiOutlineCheckCircle className="w-[7px] h-[7px] bg-[#1C63D5] text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-2 space-y-4 w-[287px] h-[70px] bg-white shadow-md rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-lg">
        <div className="w-[271px] h-[54px] gap-[8px] flex flex-col items-start p-0">
          <p className="w-[271px] h-[54px] font-mulish font-normal text-[14px] leading-[18px] text-[#606060]">
            Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frame78;
