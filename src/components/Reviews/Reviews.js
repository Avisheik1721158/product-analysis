import React, { useEffect, useState } from 'react';
import useReviews from '../hook/useReviews';
import Review from '../Review/Review';

const Reviews = () => {

    const [reviews, setReviews,] = useReviews([]);



    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                reviews.map(review => <Review key={review.id} review={review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;