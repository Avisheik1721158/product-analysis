import React from 'react';
import useReviews from '../hook/useReviews';
import Review from '../Review/Review';



const HomeReview = () => {
    const [reviews, setReviews] = useReviews([])
    // console.log(reviews.length)

    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                reviews.slice(0, 3).map(item => <Review key={item.id} item={item}></Review>)

            }
        </div>
    );
};


export default HomeReview;