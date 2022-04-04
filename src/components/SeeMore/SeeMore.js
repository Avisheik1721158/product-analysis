import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../hook/useReviews';
import Review from '../Review/Review';


const SeeMore = () => {
    const navigate = useNavigate()



    // const [reviews, setReviews] = useReviews([])
    // const seeMoreReviews = () => {


    //     return (
    //         <div className=' grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
    //             {
    //                 reviews.map(review => <Review key={review.id} review={review} ></Review>)
    //             }
    //         </div>
    //     );
    // }
    return (
        <div>
            <button onClick={() => navigate('/reviews')} className='mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'> See more reviews</button>
        </div>
    );
};

export default SeeMore;