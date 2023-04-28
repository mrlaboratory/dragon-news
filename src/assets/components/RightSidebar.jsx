import React from 'react';


const RightSidebar = () => {
    return (
        <div>
            <h2>right sidebar</h2>
            <div>
                <button className='btn block mt-1'>  Login with Google</button>
                <button className='btn block mt-1'>Login with Github</button>
            </div>
        </div>
    );
};

export default RightSidebar;