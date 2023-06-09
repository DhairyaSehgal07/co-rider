import  { useState, ChangeEvent } from 'react';
import { AiOutlinePaperClip, AiOutlineSend } from 'react-icons/ai';
import ClipHover from './ClipHover';

function ChatSection() {
  const [message, setMessage] = useState('');
  const [showClipHover, setShowClipHover] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleClipClick = () => {
    setShowClipHover((prevState) => !prevState);
  };

  const handleSendClick = () => {
    console.log('Sending message:', message);
    setMessage('');
  };

  return (
    <>
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
    </>
  );
}

export default ChatSection;
