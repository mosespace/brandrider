"use client";
import Image from "next/image";
import MyLogo from "../public/logo.svg";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "sonner";

export default function Launch() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    // console.log(data);

    try {
      setLoading(true);

      const response = await fetch(process.env.NEXT_PUBLIC_EMAIL_API, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        toast.success("Your email has been sent successfully");
        setLoading(false);
        // console.log(response);
      } else {
        toast.error("Your email has not been sent. Give it a try");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className='Dm font-normal lg:max-w-2xl flex flex-col items-start justify-center gap-4 p-8 md:p-10 lg:p-20'>
      <div className='flex flex-col'>
        <div className='mb-0 lg:mb-5'>
          <Image
            src={MyLogo}
            width={1080}
            height={1080}
            className='h-[6.8rem] w-[6.8rem] lg:h-1/4 lg:w-1/4'
          />
        </div>
        <h2 className='lg:text-[39px] text-[25px] lg:leading-[48px] leading-[30px] font-bold tracking-wide'>
          Nobody needs an unknown brand 😧. Everybody trusts a popular brand.🤗
        </h2>
        <p className='lg:flex lg:flex-col lg:text-[28px] lg:leading-[30px] text-[25px] leading-[26px] text-[#616161] mt-4'>
          Let's showcase your brand to the public{" "}
          <span>stop paying for services that don't work.</span>
        </p>
      </div>

      <div className='w-full flex flex-col gap-8 pt-[1.5rem]'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          method='POST'
          className='space-y-8 transform w-full'
        >
          {/* Subject */}
          <div className='relative h-10 w-full min-w-[200px]'>
            <input
              type='text'
              id='subject'
              {...register("subject", { required: true })}
              className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-[#616161] bg-transparent px-3 py-[1.5rem] text-2xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
              placeholder=' '
            />
            {errors.subject && (
              <p class='text-sm text-red-600 dark:text-red-500'>
                <span class='font-medium'>Oops!</span> The Subject is required!
              </p>
            )}
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[15px] peer-focus:leading-tight peer-focus:text-black peer-focus:font-bold peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              RE: WEBSITE DEVELOPMENT *
            </label>
          </div>

          {/* Email */}
          <div className='relative h-10 w-full min-w-[200px]'>
            <input
              type='email'
              id='email'
              {...register("email", { required: true })}
              className='peer h-full w-full rounded-[7px] border border-blue-gray-200 border-[#616161] bg-transparent px-3 py-[1.5rem] text-2xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
              placeholder=' '
            />
            {errors.email && (
              <p class='text-sm text-red-600 dark:text-red-500'>
                <span class='font-medium'>Oops!</span> The Email is required!
              </p>
            )}
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[15px] peer-focus:leading-tight peer-focus:text-black peer-focus:font-bold peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              ENTER YOUR EMAIL: *
            </label>
          </div>

          {/* Message */}
          <div className='relative w-full min-w-[200px]'>
            <textarea
              id='message'
              {...register("message", { required: true })}
              className='peer w-full rounded-[7px] border border-blue-gray-200 border-[#616161] bg-transparent px-3 py-[1.5rem] text-2xl font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 resize-y no-scrollbar'
              placeholder=' '
            />
            {errors.message && (
              <p class='text-sm text-red-600 dark:text-red-500'>
                <span class='font-medium'>Oops!</span> The message is required!
              </p>
            )}
            <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[15px] peer-focus:leading-tight peer-focus:text-black peer-focus:font-bold peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-black peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-black peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              ENTER YOUR MESSAGE: *
            </label>
          </div>

          <button
            type='submit'
            className='w-full text-center font-bold bg-black text-white rounded-md py-[.8rem]'
          >
            Join the Launch
          </button>
        </form>
      </div>
    </div>
  );
}
