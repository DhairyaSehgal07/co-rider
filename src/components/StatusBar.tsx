import React from 'react';
import { IoCellularSharp } from 'react-icons/io5';
import { FaWifi } from 'react-icons/fa';
import { FaBatteryFull } from 'react-icons/fa';

const StatusBar: React.FC = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center gap-[205px] isolate absolute h-[47px] w-[375px] pt-[14px] pr-[26px] pb-[12px] pl-[27px] left-0 right-0 top-[calc(50% - 47px/2 - 382.5px)] bg-[#FAF9F4] relative">
        <div className="w-[54px] h-[21px] mt-[14px] ml-[27px] flex-none order-0 flex-grow-0 z-0">
          <div style={{ fontFamily: 'SF' }} className="absolute w-[54px] h-[22px] left-0 top-[calc(50% - 22px/2 + 0.5px)] font-bold text-[17px] leading-[22px] text-center tracking-[-0.408px] font-family:SF PRO TEXT">
            9:41
          </div>
        </div>

        <div className="w-[78.26px] h-[13px] absolute top-[18px] left-[270.74px] flex order-1 flex-grow-0 z-1">
          <div className="mt-2 w-[19.2px] h-[12px]">
            <IoCellularSharp />
          </div>
          <div className="mt-2 ml-2">
            <FaWifi />
          </div>
          <div className="mt-2 ml-2 text-[20px]">
            <FaBatteryFull />
          </div>
        </div>
      </div>
    </>
  );
};

export default StatusBar;
