import React from 'react';
import Slogan from '../Slogan/Slogan';

const Home = () => {
    return (
        <div className='grid  md:grid-cols-2 gap-18 '  >
            <Slogan></Slogan>
            <img className='mt-20' src="https://www.re-thinkingthefuture.com/wp-content/uploads/2021/04/A3848-How-to-enhance-Soft-Furnishing-Aesthetics-in-your-house.jpg" alt="" />
        </div>

    );
};

export default Home;