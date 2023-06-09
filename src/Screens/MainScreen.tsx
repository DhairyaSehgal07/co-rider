import React, { useEffect } from 'react';
import StatusBar from '../components/StatusBar';
import Frame81 from '../components/Frame81';
import ChatScreen from './ChatScreen';

const MainScreen: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, []);

  return (
    <>
      <StatusBar />
      <Frame81 />
      <ChatScreen />
    </>
  );
};

export default MainScreen;
