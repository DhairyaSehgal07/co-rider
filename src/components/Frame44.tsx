import React, { useEffect } from 'react';
import ChatSection from './ChatSection';

const Frame44: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const chatSection = document.querySelector('.chat-section');
      const frame44 = document.querySelector('.frame-44') as HTMLElement;

      if (window.pageYOffset >= frame44.offsetTop) {
        chatSection!.classList.add('sticky');
      } else {
        chatSection!.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <div className="w-auto h-auto bg-[#FAF9F4]">
        <div className="frame-44">
          <ChatSection />
        </div>
      </div>
    </div>
  );
};

export default Frame44;
