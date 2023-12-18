import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import Image from "next/image";

export default async function Footer() {
  return (
    <div className='bg-[#1E2732]'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='sm:col-span-2'>
            <Link
              href='/'
              aria-label='Company'
              title='Company'
              className='inline-flex items-start'
            >
              <Image
                width={96}
                height={96}
                src='/Logo White.svg'
                alt='BrandRiderug'
                className='w-[4.5rem] text-teal-accent-400'
              />
              {/* <span className='text-xl font-bold tracking-wide  text-red-600'>
              Mo<span className='font-light'>Keep</span>
            </span> */}
            </Link>
            <div className='mt-6 lg:max-w-sm'>
              <p className='text-sm text-gray-100'>
                We create innovative, eye-catching logos, posters, flyers, and
                websites that are competitive and minimalistic while keeping
                your campaign’s goal in mind.
              </p>
            </div>
          </div>
          <div className='space-y-2 text-sm'>
            <p className='text-base font-bold tracking-wide text-gray-100'>
              Contacts
            </p>
            <div className='flex'>
              <p className='mr-1 text-gray-100'>Phone:</p>
              <Link
                href='tel:850-123-5021'
                aria-label='Our phone'
                title='Our phone'
                className='transition-colors duration-300 text-gray-200'
              >
                +256-770-9811
              </Link>
            </div>
            <div className='flex'>
              <p className='mr-1 text-gray-100'>Email:</p>
              <Link
                href='mailto:kiskayemoses@gmail.com'
                aria-label='Our email'
                title='Our email'
                className='transition-colors duration-300 text-gray-200'
              >
                info@brandrider.com
              </Link>
            </div>
            <div className='flex'>
              <p className='mr-1 text-gray-100'>Address:</p>
              <Link
                href='https://www.google.com/maps'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Our address'
                title='Our address'
                className='transition-colors duration-300 text-gray-200'
              >
                312 Fourth Street, Kampala-Ug
              </Link>
            </div>
          </div>
          <div>
            <span className='text-base font-bold tracking-wide text-gray-100'>
              Social
            </span>
            <div className='flex items-center mt-1 space-x-3'>
              <Link
                href='/x.com'
                className='text-amber-500 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                <BsTwitterX className='h-5' />
              </Link>
              <Link
                href='/instagram'
                className='text-amber-500 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                <BsInstagram className='h-5' />
              </Link>
              <Link
                href='/facebook'
                className='text-amber-500 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                <FaFacebookSquare className='h-5' />
              </Link>
            </div>
            <p className='mt-4 text-sm text-gray-100'>
              Discover how we make show case your brand above your
              competitors...
            </p>
          </div>
        </div>
        <div className='flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row'>
          <p className='text-sm text-gray-300'>
            © Copyright 2023 <span className='text-white font-bold'>Brand</span>
            <span className='text-white font-light'>Rider</span>. All rights
            reserved.
          </p>
          <ul className='flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row'>
            <li>
              <Link
                href='/'
                className='text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                F.Link.Q
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href='/'
                className='text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400'
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
