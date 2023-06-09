import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { BiEdit } from 'react-icons/bi';
import { IoMdCall } from 'react-icons/io';
import images from '../constants/images';
import Dropdown from './Dropdown';

const Frame81: React.FC = () => {
  return (
    <>
      <div>
        <div className="box-border flex flex-col items-start pt-[20px] pr-[16px] pb-[16px] gap-[16px] absolute w-[375px] h-auto left-0 bg-[#FAF9F4] relative">
          <div className="flex flex-row align-center p-0 gap-[12px] w-[360px] h-[30px] top-[20px] left-[16px]">
            <div className="mt-[5px]">
              <BsArrowLeft className="text-[20px] ml-[5px]" />
            </div>
            <div className="w-[275px] h-[30px] ml-[8px] text-[24px] leading-[30.12px] font-mulish font-semibold leading-30">
              Trip 1
            </div>
            <div className="w-[20px] h-[20px] top-[2px] left-[323px]">
              <div className="flex-none flex-order-2 flex-grow-0 mt-1">
                <BiEdit className="ml-[5px] w-[20.77px] h-[20.77px] text-[#141E0D]" />
              </div>
            </div>
          </div>

          <div className="w-[320px] h-[48px] gap-[16px] flex flex-row items-start p-0 ml-[10px]">
            <div className="w-[48px] h-[48px] rounded-full">
              <div className="h-[48px] w-[48px] rounded-full border border-white box-border">
                <div className="flex">
                  <div className="w-[23px] h-[24px] rounded-tl-3xl">
                    <img className="w-full h-full object-cover rounded-tl-3xl" src={images.Rectangle11} alt="Icon" />
                  </div>
                  <div className="w-[23px] h-[24px] rounded-tr-3xl bg-orange-500 text-white">
                    <img src={images.Rectangle13} className="w-[23px] h-[24px] rounded-tr-3xl" alt="Icon" />
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[23px] h-[23px] rounded-bl-3xl bg-green-500">
                    <img src={images.Rectangle14} className="w-[23px] h-[23px] rounded-bl-3xl" alt="Icon" />
                  </div>
                  <div className="w-[23px] h-[23px] rounded-br-3xl bg-gray-500">
                    <img src={images.Rectangle15} className="w-[23px] h-[23px] rounded-br-3xl" alt="Icon" />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[215px] h-[30px] font-mulish font-medium text-base leading-5 text-gray-600">
                From <span className="font-mulish font-semibold text-xl leading-6 text-[#141E0D]">IGI Airport, T3</span>
              </div>
              <div className="w-[215px] h-[30px] font-mulish font-medium text-base leading-5 text-gray-600">
                To <span className="ml-1 font-mulish font-semibold text-xl leading-6 text-[#141E0D]">Sector 28</span>
              </div>
            </div>

            <div className="mt-2 w-[24px] h-[24px] top-[12px] left-[283px] hidden flex-none flex-order-1 flex-grow-0">
              <IoMdCall className="w-[18.61px] h-[18.61px] border-2 border-[#141E0D]" />
            </div>
            <div className="mt-[7.6px] ml-[39px]">
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Frame81;
