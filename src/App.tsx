import React from 'react';
import MainScreen from './Screens/MainScreen';

const App: React.FC = () => {
  return (
    <div className='flex flex-col bg-[#FAF9F4] w-[375px] rounded-[32px]'>
      <MainScreen />
    </div>
  );
};

export default App;
