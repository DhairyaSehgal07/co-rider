import React, { useState, useEffect } from 'react';
import Frame76 from '../components/Frame76';
import Frame77 from '../components/Frame77';
import Frame78 from '../components/Frame78';
import Frame79 from '../components/Frame79';
import Vector from '../components/Vector';
import { AiOutlinePaperClip, AiOutlineSend } from 'react-icons/ai';
import ClipHover from '../components/ClipHover';
import axios from 'axios';
import images from '../constants/images';

const ChatScreen: React.FC = () => {
  const [message, setMessage] = useState('');
  const [showClipHover, setShowClipHover] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleClipClick = () => {
    setShowClipHover((prevState) => !prevState);
  };

  const handleSendClick = () => {
    if (message.trim() !== '') {
      const chatMessages = document.querySelector('.chat-messages');

      const messageDiv = document.createElement('div');
      messageDiv.className = 'flex flex-row items-start p-0 gap-[8px] mt-2 relative top-[80px] left-[40px] filter drop-shadow-8';

      const innerDiv = document.createElement('div');
      innerDiv.className = 'flex flex-col justify-center items-center p-[8px] gap-[16px] w-[287px] h-auto bg-[#1C63D5] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-none';

      const paragraph = document.createElement('p');
      paragraph.className = 'w-[271px] h-auto text-[14px] leading-[17.57px] font-Mulish text-[#FFFFFF] flex-none flex-order-0 self-strech flex-grow-0';
      paragraph.textContent = message;

      innerDiv.appendChild(paragraph);
      messageDiv.appendChild(innerDiv);
      chatMessages?.appendChild(messageDiv);

      setMessage('');
    }
  };

  const loadMessages = async () => {
    try {
      const response = await axios.get(`https://qa.corider.in/assignment/chat?page=${pageNumber}`);
      const data = response.data.chats;

      const LoadMessagesParent = document.getElementById('LoadMessagesParent');

      const LoadMessages = document.createElement('div');
      LoadMessagesParent?.prepend(LoadMessages);

      const pageDiv = document.createElement('div');
      pageDiv.className='mt-2'
      pageDiv.textContent = `Page ${Math.abs(pageNumber)}`;
      LoadMessages.appendChild(pageDiv);

      const dateString = data[0].time;
      const dateObj = new Date(dateString);

      const day = dateObj.getDate();
      const monthIndex = dateObj.getMonth();
      const year = dateObj.getFullYear();

      // Format the day with appropriate suffix (e.g., 1st, 2nd, 3rd, 4th, etc.)
      let dayString;
      if (day === 1 || day === 21 || day === 31) {
        dayString = `${day}st`;
      } else if (day === 2 || day === 22) {
        dayString = `${day}nd`;
      } else if (day === 3 || day === 23) {
        dayString = `${day}rd`;
      } else {
        dayString = `${day}th`;
      }

      // Get the month name
      const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const monthName = monthNames[monthIndex];

      // Generate the final formatted string
      const formattedDateString = `${dayString} ${monthName} ${year}`;

      const dateDiv = document.createElement('div');
      dateDiv.className = 'flex';
      const hr1 = document.createElement('hr');
      hr1.className = 'w-[116px] h-0 relative top-[18px] left-[-10px] border border-gray-300';
      dateDiv.appendChild(hr1);

      const p = document.createElement('p');
      p.className = 'w-[112px] h-[18px] relative top-[10px] text-[#B7B7B7] font-mulish font-normal text-[14px] leading-[18px]';
      p.textContent = formattedDateString;
      dateDiv.appendChild(p);

      const hr2 = document.createElement('hr');
      hr2.className = 'w-[116px] h-0 relative top-[18px] left-[7px]  border border-gray-300';
      dateDiv.appendChild(hr2);

      LoadMessages.appendChild(dateDiv);

      console.log(data[0].time);

      data.map((chat: any) => {
        if (!chat.sender.self) {
          const parentDiv = document.createElement('div');
          parentDiv.className = 'relative left-[-19px] w-auto h-autp  flex flex-row items-start gap-2 p-0 ';

          const imageDivParent = document.createElement('div');
          imageDivParent.className = 'w-[24px] h-[24px] rounded-[999px] mt-4';

          const imageDiv = document.createElement('div');
          imageDiv.className = 'w-[24px] h-[24px] rounded-full relative';

          const imgElement = document.createElement('img');
          imgElement.className = 'w-full h-full object-cover rounded-full';
          imgElement.src = chat.sender.image;

          const checkElementDiv = document.createElement('div');
          checkElementDiv.className = 'w-[7.64px] h-[7.64px] rounded[999px] absolute bottom-0 right-0 pb-2';

          const checkElementDivImage = document.createElement('img');
          checkElementDivImage.className = '';
          checkElementDivImage.src = images.check;

          if (chat.sender.is_kyc_verified) {
            checkElementDiv.appendChild(checkElementDivImage);
          }

          imageDiv.appendChild(imgElement);
          imageDiv.appendChild(checkElementDiv);
          imageDivParent.appendChild(imageDiv);
          parentDiv.appendChild(imageDivParent);

          const messageDiv = document.createElement('div');
          messageDiv.className =
            'flex mt-4 flex-col justify-center items-center p-2 space-y-4 w-[287px] h-auto bg-white shadow-md rounded-tl-none rounded-tr-lg rounded-bl-lg rounded-br-lg';

          const innerDiv = document.createElement('div');
          innerDiv.className = 'w-[271px] h-auto gap-[8px] flex flex-col items-start p-0';

          const paragraph = document.createElement('p');
          paragraph.className = 'w-[271px] h-auto font-mulish font-normal text-[14px] leading-[18px] text-[#606060]';
          paragraph.textContent = chat.message;

          innerDiv.appendChild(paragraph);
          messageDiv.appendChild(innerDiv);

          parentDiv.appendChild(messageDiv);
          LoadMessages.appendChild(parentDiv);
        } else {
          const messageDiv = document.createElement('div');
          messageDiv.className =
            'flex flex-row items-start p-0 gap-[8px] mt-4 relative top-[2px] left-[40px] filter drop-shadow-8';

          const innerDiv = document.createElement('div');
          innerDiv.className = 'flex flex-col justify-center items-center p-[8px] gap-[16px] w-[287px] h-auto bg-[#1C63D5] rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-none';

          const paragraph = document.createElement('p');
          paragraph.className =
            'w-[271px] h-auto text-[14px] leading-[17.57px] font-Mulish text-[#FFFFFF] flex-none flex-order-0 self-strech flex-grow-0';
          paragraph.textContent = chat.message;

          innerDiv.appendChild(paragraph);
          messageDiv.appendChild(innerDiv);

          LoadMessages.appendChild(messageDiv);
        }
      });

      setPageNumber((page) => page + 1);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    const scrollHandlerDiv = document.getElementById('ScrollHandlerDiv');

    const handleScroll = () => {
      // Check if the scroll bar is at the top
      if (scrollHandlerDiv?.scrollTop === 0) {
        loadMessages();
      }
    };

    scrollHandlerDiv?.addEventListener('scroll', handleScroll);

    return () => {
      scrollHandlerDiv?.removeEventListener('scroll', handleScroll);
    };
  }, [pageNumber]);

  return (
    <>
      <div id='ScrollHandlerDiv' className="chat-messages scrollbar-thin scrollbar-thumb-blue scrollbar-track-gray-200">
        <div>
          <div id='LoadMessagesParent'></div>
        </div>

        <Vector />
        <Frame76 />
        <Frame77 />
        <Frame78 />
        <Frame79 />
      </div>
      <div className="relative">
        <div className="w-auto h-auto bg-[#FAF9F4]">
          <div className="frame-44">
            {/*ChatSection code */}
            {showClipHover && (
              <div className="transition-opacity duration-2000 opacity-100">
                <ClipHover />
              </div>
            )}
            <div className="flex items-center border-t border-gray-200 p-2 mt-4 ">
              <div className="flex flex-grow ml-2 mr-2 py-2 px-3 bg-white rounded-[12px]">
                <input
                  type="text"
                  placeholder="I reply to @Rohit Yadav"
                  className="flex-grow ml-2 mr-2 py-2 px-3 bg-white focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-[12px]"
                  value={message}
                  onChange={handleInputChange}
                />
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer bg-white"
                  onClick={handleClipClick}
                >
                  <AiOutlinePaperClip className="text-[22px]" />
                </div>
                <button
                  className="flex items-center bg-white justify-center w-10 h-10 rounded-full hover:focus:outline-none"
                  onClick={handleSendClick}
                >
                  <AiOutlineSend className="text-xl" />
                </button>
              </div>
            </div>
            {/*Chat section code end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatScreen;
