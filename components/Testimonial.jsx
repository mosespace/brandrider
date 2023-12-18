import React from "react";
import { Tweet } from "react-tweet";

export default function Testimonial() {
  const tweet_ids = [
    "1628988415281713152",
    "1722746668649746642",
    "1719659634254856582",
    "1702934711968976978",
    "1702917091999768703",
    "1702820583937847714",
    "1702762924010295800",
    "1719659343312773597",
  ];
  return (
    <>
      <section className='py-10 bg-gray-100 sm:py-16 lg:py-24'>
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='max-w-2xl mx-auto text-center'>
            <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl'>
              What our customers say
            </h2>
            <p className='max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600'>
              Customers across twitter always show their supportive and
              appreciation about the services we offer to them.
            </p>
          </div>

          <div className='grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2'>
            {tweet_ids?.map((tweet_id, index) => (
              <Tweet
                key={index}
                className='rounded-md shadow-md'
                id={tweet_id}
              />
            ))}
            {/* <div className='overflow-hidden bg-white rounded-md'>
              <div className='px-5 py-6'></div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
