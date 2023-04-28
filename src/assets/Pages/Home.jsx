import React from 'react';
import RightSidebar from '../components/RightSidebar';
import LeftSidebar from '../components/LeftSidebar';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
                <LeftSidebar></LeftSidebar>
                <div>
                    main container 
                </div>
                <RightSidebar></RightSidebar>

            </div>
        </div>
    );
};

export default Home;