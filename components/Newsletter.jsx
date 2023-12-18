import Link from "next/link";
import React from "react";

export default function Newsletter() {
  return (
    <>
      <div className='rounded-lg'>
        <div className='mx-auto max-w-screen-7xl px-4 md:px-8 py-6 sm:py-8 lg:py-12'>
          <div className='flex flex-col items-center p-4 sm:p-8'>
            <div className='mb-4 sm:mb-8'>
              <h2 className='text-center text-xl font-bold text-black sm:text-2xl lg:text-3xl'>
                Get the latest updates
              </h2>
              <p className='text-center text-gray-500'>
                Sign up for our newsletter
              </p>
            </div>

            <form className='mb-3 flex w-full max-w-md gap-2 sm:mb-5'>
              <input
                placeholder='Email'
                className='bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-amber-300 transition duration-100 focus:ring'
              />

              <button className='inline-block rounded bg-amber-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-amber-300 transition duration-100 hover:bg-amber-600 focus-visible:ring active:bg-amber-700 md:text-base'>
                Send
              </button>
            </form>

            <p className='text-center text-xs text-gray-400'>
              By signing up to our newsletter you agree to our{" "}
              <Link
                href='#'
                className='underline transition duration-100 hover:text-amber-500 active:text-amber-600'
              >
                Term of Service
              </Link>{" "}
              and{" "}
              <Link
                href='#'
                className='underline transition duration-100 hover:text-amber-500 active:text-amber-600'
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
