import React from 'react';
import { AiOutlineCamera } from 'react-icons/ai';
import { BsCameraVideo } from 'react-icons/bs';
import images from '../constants/images';
import { AiFillCaretDown } from 'react-icons/ai';

const ClipHover: React.FC = () => {
  return (
    <div className="absolute top-[-10px] left-[224px] w-[124px] h-[44px] rounded-[999px] gap-[14px] pt-[12px] px-[16px] pb-[12px] bg-[#008000] flex flex-row justify-center items-center shadow-sm rounded-[999px]">
      <AiOutlineCamera className="text-[34px] text-white cursor-pointer" />
      <BsCameraVideo className="text-[34px] text-white cursor-pointer" />
      <img src={images.upload} className="w-[19.17px] h-[19.67px] cursor-pointer" alt="Upload" />
      <div className="absolute w-0 h-0 bottom-[-6px] left-1/2 transform -translate-x-1/2 border-b-4 border-l-4 border-r-4 border-transparent border-[#008000]"></div>
      <AiFillCaretDown className='box-border absolute w-[16px] h-[8px] left-1/2 transform translate-x-[-50%] bottom-[-6px] text-[#008000]'/>
    </div>
  );
}

export default ClipHover;
