import React, { useState } from 'react';

const Review = (props) => {
    const { name, review, img, star } = props.item;






    return (
        // <div>
        //     <h2 classNameName='text-2xl font-bold '>
        //         {name}

        //     </h2>
        //     <h2>
        //         <p>
        //             {review}
        //         </p>
        //     </h2>
        // </div>



        <div className="py-16 bg-purple-200">



            <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-purple-900">{name}</h3>
                <p className="mb-6">{review}</p>
                <p className="block font-medium text-purple-600">Rating Star: {star}</p>

            </div>
            <img src={img} className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"></img>





        </div>


    );
};

export default Review;