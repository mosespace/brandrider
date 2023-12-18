"use client";
import toast from "sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Quote() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    // console.log(data);
    setLoading(true);
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_QUOTE_EMAIL_API, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // console.log(response);
      if (response.ok) {
        toast.success("Your quote has been sent successfully");
        reset();
        setLoading(false);
        // console.log(response);
      } else {
        toast.error("Your quote has not been sent. Give it a try");
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <section className='py-10  bg-gray-100 sm:py-16 lg:py-24'>
        <div className='max-w-7xl px-4 mx-auto sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10'>
            <div className='flex flex-col justify-between lg:py-5'>
              <div>
                <h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:leading-tight lg:text-5xl'>
                  It’s time to build something exciting!
                </h2>
                <p className='max-w-xl mx-auto mt-4 text-base leading-relaxed text-black'>
                  Let's create what you love to see and also lift your brand a
                  step ahead of your competitors with our affordable and
                  negotiable prices around the world.
                </p>

                <img
                  className='relative text-black z-10 max-w-xs mx-auto -mb-16 md:hidden'
                  src='https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg'
                  alt=''
                />

                <img
                  className='hidden w-full text-black translate-x-24 translate-y-8 md:block'
                  src='https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg'
                  alt=''
                />
              </div>

              <div className='hidden md:mt-auto md:block'>
                <div className='flex items-center'>
                  <svg
                    className='w-6 h-6 text-amber-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                  <svg
                    className='w-6 h-6 text-amber-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                  <svg
                    className='w-6 h-6 text-amber-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                  <svg
                    className='w-6 h-6 text-amber-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                  <svg
                    className='w-6 h-6 text-amber-400'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                  </svg>
                </div>

                <blockquote className='mt-6'>
                  <p className='text-lg leading-relaxed text-black'>
                    You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change and click save.
                  </p>
                </blockquote>

                <div className='flex items-center mt-8'>
                  <img
                    className='flex-shrink-0 object-cover w-10 h-10 rounded-full'
                    src='https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg'
                    alt=''
                  />
                  <div className='ml-4'>
                    <p className='text-base font-semibold text-black'>
                      Jenny Wilson
                    </p>
                    <p className='mt-px text-sm text-gray-400'>
                      CEO Beauty Box
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Design */}
            <div className='lg:pl-12'>
              <div className='overflow-hidden bg-white rounded-md'>
                <div className='p-6 sm:p-10'>
                  {loading ? (
                    <button className='text-3xl font-semibold text-white'>
                      Sending quotation...
                    </button>
                  ) : (
                    <button className='text-3xl font-semibold text-white'>
                      Get a free quote
                    </button>
                  )}

                  <p className='mt-4 text-base text-black'>
                    We create innovative, eye-catching websites, logos, posters,
                    and flyers that are competitive and minimalistic while
                    keeping your campaign’s goal in mind.
                  </p>

                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    method='POST'
                    className='mt-4'
                  >
                    <div className='space-y-6'>
                      <div>
                        <label
                          htmlFor=''
                          className='text-base font-medium text-gray-900'
                        >
                          {" "}
                          Your Full Names{" "}
                        </label>
                        <div className='mt-2.5 relative'>
                          <input
                            type='text'
                            name='full_Names'
                            id='full_Names'
                            {...register("full_Names", { required: true })}
                            placeholder='Enter your full name'
                            className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 caret-amber-500'
                          />
                          {errors.full_Names && (
                            <p class='text-sm text-red-600 dark:text-red-500'>
                              <span class='font-medium'>Oops!</span> The full
                              Names are required!
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor=''
                          className='text-base font-medium text-gray-900'
                        >
                          {" "}
                          Email address{" "}
                        </label>
                        <div className='mt-2.5 relative'>
                          <input
                            type='text'
                            name='email_address'
                            id='email_address'
                            {...register("email_address", { required: true })}
                            placeholder='Enter your email'
                            className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 caret-amber-500'
                          />
                          {errors.email_address && (
                            <p class='text-sm text-red-600 dark:text-red-500'>
                              <span class='font-medium'>Oops!</span> The email
                              is required!
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor=''
                          className='text-base font-medium text-gray-900'
                        >
                          {" "}
                          Project brief{" "}
                        </label>
                        <div className='mt-2.5 relative'>
                          <textarea
                            name='project_brief'
                            id='project_brief'
                            {...register("project_brief", { required: true })}
                            placeholder='Enter your project brief'
                            className='block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:ring-amber-500 focus:border-amber-500 caret-amber-500'
                            rows='4'
                          />
                          {errors.project_brief && (
                            <p class='text-sm text-red-600 dark:text-red-500'>
                              <span class='font-medium'>Oops!</span> The project
                              brief is required!
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        {loading ? (
                          <button
                            type='submit'
                            className='inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-amber-600 border border-transparent rounded-md focus:outline-none hover:bg-amber-700 focus:bg-amber-700'
                          >
                            Sending quotation...
                          </button>
                        ) : (
                          <button
                            type='submit'
                            className='inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-amber-600 border border-transparent rounded-md focus:outline-none hover:bg-amber-700 focus:bg-amber-700'
                          >
                            Get Free Quote
                          </button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className='md:hidden'>
              <div className='flex items-center'>
                <svg
                  className='w-6 h-6 text-amber-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='w-6 h-6 text-amber-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='w-6 h-6 text-amber-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='w-6 h-6 text-amber-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <svg
                  className='w-6 h-6 text-amber-400'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
              </div>

              <blockquote className='mt-6'>
                <p className='text-lg leading-relaxed text-black'>
                  You made it so simple. My new site is so much faster and
                  easier to work with than my old site. I just choose the page,
                  make the change and click save.
                </p>
              </blockquote>

              <div className='flex items-center mt-8'>
                <img
                  className='flex-shrink-0 object-cover w-10 h-10 rounded-full'
                  src='https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg'
                  alt=''
                />
                <div className='ml-4'>
                  <p className='text-base font-semibold text-black'>
                    Jenny Wilson
                  </p>
                  <p className='mt-px text-sm text-gray-400'>CEO Beauty Box</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
