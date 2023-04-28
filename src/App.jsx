import React from 'react';
import Header from './assets/components/Header';
import { Outlet } from 'react-router-dom';
import LeftSidebar from './assets/components/LeftSidebar';
import RightSidebar from './assets/components/RightSidebar';

const App = () => {
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
                <LeftSidebar></LeftSidebar>
                <div className='col-span-2'>
                <Outlet></Outlet>
                </div>
                <RightSidebar></RightSidebar>

            </div>
     
    </div>
  );
};

export default App;