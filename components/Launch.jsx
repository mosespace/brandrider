import React from "react";
import MyLogo from "../public/logo.svg";
import Image from "next/image";

export default function Launch() {
  return (
    <div className='Dm font-normal lg:max-w-2xl flex flex-col items-start justify-center gap-4 p-8 md:p-10 lg:p-20'>
      <div className='mb-3'>
        <Image
          src={MyLogo}
          width={1080}
          height={1080}
          className='h-2/4 w-2/4 lg:h-1/4 lg:w-1/4'
        />
      </div>
      <h2 className='flex flex-col text-[50px] leading-[48px] tracking-wide'>
        <span className='line-through'>Nobody needs an unknown Brand.</span>
        <span>Everybody trusts a Popular Brand.</span>
      </h2>
      <p className='lg:flex lg:flex-col text-[28px] leading-[30px] text-[#616161] mt-4'>
        Let's showcase your brand to the public
        <span>stop paying for services that don't work.</span>
      </p>
      <div className='w-full flex flex-col gap-8 pt-[1.5rem]'>
        <div className='relative h-10 w-full min-w-[200px]'>
          <input
            className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-[#616161] bg-transparent px-3 py-[1.5rem] text-2xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
            placeholder=' '
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[15px] peer-focus:leading-tight peer-focus:text-black peer-focus:font-bold peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Enter Your Email *
          </label>
        </div>
        <button className='text-center font-bold bg-black text-white rounded-md py-[.8rem]'>
          Join the Launch
        </button>
      </div>
    </div>
  );
}
