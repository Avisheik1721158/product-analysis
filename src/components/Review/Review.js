import React from 'react';

const Review = (props) => {
    const { name, review, img } = props.review;
    return (
        // <div>
        //     <h2 className='text-2xl font-bold '>
        //         {name}

        //     </h2>
        //     <h2>
        //         <p>
        //             {review}
        //         </p>
        //     </h2>
        // </div>



        <div class="py-16 bg-purple-200">



            <div class="mb-12 space-y-4">
                <h3 class="text-2xl font-semibold text-purple-900">{name}</h3>
                <p class="mb-6">{review}</p>
                <a href="#" class="block font-medium text-purple-600">Know more</a>
            </div>
            <img src={img} class="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600"></img>





        </div>


    );
};

export default Review;