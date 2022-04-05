import React from 'react';
import Slogan from '../Slogan/Slogan';

const HomePageOne = () => {
    return (
        <div className='grid  md:grid-cols-2 gap-18 '  >
            <Slogan></Slogan>
            <img className='mt-20 mx-auto' src="https://images.unsplash.com/photo-1558603668-6570496b66f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />

        </div>
    );
};

export default HomePageOne;