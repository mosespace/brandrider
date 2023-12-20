import React from "react";

export default function Partners() {
  return (
    <>
      <section class='py-10 bg-gray-50 sm:py-16 lg:py-24'>
        <div class='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
          <div className='relative text-center mb-10'>
            <p className='text-3xl font-semibold tracking-tighter text-black md:text-4xl'>
              Our Partners{" "}
              <span className='md:block font-normal text-xl mt-3'>
                Working with various brands and we make sure we lift them up
              </span>
            </p>
          </div>

          <div class='grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6'>
            <div>
              <img
                class='object-contain w-auto mx-auto h-14'
                src='https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-1.png'
                alt=''
              />
            </div>

            <div>
              <img
                class='object-contain w-auto mx-auto h-14'
                src='https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-2.png'
                alt=''
              />
            </div>

            <div>
              <img
                class='object-contain w-auto mx-auto h-14'
                src='https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-3.png'
                alt=''
              />
            </div>

            <div>
              <img
                class='object-contain w-auto mx-auto h-14'
                src='https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-4.png'
                alt=''
              />
            </div>

            <div>
              <img
                class='object-contain w-auto mx-auto h-14'
                src='https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-5.png'
                alt=''
              />
            </div>

            <div>
              <img
                class='object-contain w-auto mx-auto h-14'
                src='https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-6.png'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
