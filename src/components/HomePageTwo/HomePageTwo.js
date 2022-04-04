import React from 'react';
import HomeReview from '../HomeReview/HomeReview';
import SeeMore from '../SeeMore/SeeMore';

const HomePageTwo = () => {
    return (
        <div className='mt-10'>
            <h2 className='mt-3 font-bold '>
                Customer Review:
            </h2>
            <HomeReview></HomeReview>
            <SeeMore></SeeMore>

        </div>
    );
};

export default HomePageTwo;