import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">

                <div class="rounded overflow-hidden shadow-lg bg-sky-500  ">
                    {/* <img class="w-full" src="/mountain.jpg" alt="Mountain"></img> */}
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">What is Context API?</div>
                        <p class="text-gray-700 text-base">
                            The context API  gives us a way to share the state up and down a component tree comfortably. We sometimes have trouble passing props from one component to another when the application is big.
                            The context API solves this problem. It’s giving us a central place to store data or state and share between components without passing it down as props between components.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Q/A</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ProgrammingHero</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#WebDev</span>
                    </div>
                </div>

                <div class="rounded overflow-hidden shadow-lg bg-red-500 ">
                    {/* <img class="w-full" src="/river.jpg" alt="River"></img> */}
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">What is Semantic tag?</div>
                        <p class="text-gray-700 text-base">
                            A semantic tag is basically a human-readable way to understand what part of code is written. It’s familiar to both developers and users.
                            Some of the semantic parts are named Headers, Details, Footers, etc. Users/Developers can easily find what part is done by code.
                            The Text is enclosed by the code.

                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Q/A</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ProgrammingHero</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#WebDev</span>
                    </div>
                </div>


                <div class="rounded overflow-hidden shadow-lg bg-pink-500 ">

                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Difference between block and inline-block</div>
                        <p class="text-gray-700 text-base">

                            display: inline-block permission to set the width and height of the element and also set-top ar margins.
                            the inline element allows another element to sit behind where the block element doesn’t allow it. Inline elements don’t have top and bottom margins where block elements have.

                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Q/A</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ProgrammingHero</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#WebDev</span>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blogs;