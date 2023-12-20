import React from "react";

export default function Pricing() {
  return (
    <>
      <section>
        <div className='relative items-center w-full px-4 py-24 mx-auto md:px-12 lg:px-8 max-w-7xl'>
          <div className='grid items-start grid-cols-1 mx-auto lg:grid-cols-3'>
            <div className='lg:pr-12'>
              <div className='flex flex-col p-8 lg:p-0'>
                <h1 className='text-4xl text-black'>
                  Always know
                  <span className='lg:block'> what you’ll pay </span>
                </h1>
                <div className='max-w-lg mt-3'>
                  <p className='text-sm text-gray-500'>
                    Choose a plan that works the best for you and your team.
                    Start small, upgrade when you need to.
                  </p>
                </div>
              </div>
            </div>
            <section className='flex flex-col px-6 sm:px-8 lg:py-8'>
              <h3 className='mt-5 text-lg text-gray-500'>Graphics Packages</h3>
              <p className='mt-2 text-sm text-gray-500'>
                For even the biggest enterprise companies.
              </p>
              <p className='order-first text-5xl font-light tracking-tight text-black'>
                $99
              </p>
              <ul
                role='list'
                className='flex flex-col order-last mt-10 text-sm text-gray-500 gap-y-3'
              >
                <li className='flex items-center'>
                  <ion-icon
                    className='w-4 h-4 md hydrated'
                    name='checkmark-outline'
                    role='img'
                    aria-label='checkmark outline'
                  ></ion-icon>
                  <span className='ml-4'> Logo Designs </span>
                </li>
                <li className='flex items-center'>
                  <ion-icon
                    className='w-4 h-4 md hydrated'
                    name='checkmark-outline'
                    role='img'
                    aria-label='checkmark outline'
                  ></ion-icon>
                  <span className='ml-4'> Social Media Designs</span>
                </li>
                <li className='flex items-center'>
                  <ion-icon
                    className='w-4 h-4 md hydrated'
                    name='checkmark-outline'
                    role='img'
                    aria-label='checkmark outline'
                  ></ion-icon>
                  <span className='ml-4'>Flyer Designs </span>
                </li>
                <li className='flex items-center'>
                  <ion-icon
                    className='w-4 h-4 md hydrated'
                    name='checkmark-outline'
                    role='img'
                    aria-label='checkmark outline'
                  ></ion-icon>
                  <span className='ml-4'>Product Designs </span>
                </li>
                <li className='flex items-center'>
                  <ion-icon
                    className='w-4 h-4 md hydrated'
                    name='checkmark-outline'
                    role='img'
                    aria-label='checkmark outline'
                  ></ion-icon>
                  <span className='ml-4'>Packaging Designs </span>
                </li>
                <li className='flex items-center'>
                  <ion-icon
                    className='w-4 h-4 md hydrated'
                    name='checkmark-outline'
                    role='img'
                    aria-label='checkmark outline'
                  ></ion-icon>
                  <span className='ml-4'> Analytics support </span>
                </li>
                <li className='flex items-center'>
                  <ion-icon
                    className='w-4 h-4 md hydrated'
                    name='checkmark-outline'
                    role='img'
                    aria-label='checkmark outline'
                  ></ion-icon>
                  <span className='ml-4'> Export up to 24 months data </span>
                </li>
              </ul>
              <a
                className='items-center justify-center w-full px-6 py-2.5 mt-8 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black'
                aria-label='Big fish tier'
                href='/register'
              >
                Purchase Now
              </a>
            </section>
            <section className='flex flex-col order-first px-6 py-8 bg-black rounded-3xl sm:px-8 lg:order-none'>
              <h3 className='mt-5 text-lg text-white'>Website Packages</h3>
              <p className='mt-2 text-sm text-gray-100'>
                Perfect for those who want to showcase there bands online
                working 24/7. Negotiable at e-Commerce designs, landing pages
                and product launch design etc.
              </p>
              <p className='order-first text-5xl font-light tracking-tight text-white'>
                $29
              </p>
              <ul
                role='list'
                className='flex flex-col order-last mt-10 text-sm text-white gap-y-3'
              >
                <li className='flex items-center'>
                  <ion-icon
                    className='w-4 h-4 md hydrated'
                    name='checkmark-outline'
                    role='img'
                    aria-label='checkmark outline'
                  ></ion-icon>
                  <span className='ml-4'> Connect 80 websites </span>
                </li>
                <li className='flex items-center'>
                  <ion-icon
                    className='w-4 h-4 md hydrated'
                    name='checkmark-outline'
                    role='img'
                    aria-label='checkmark outline'
                  ></ion-icon>
                  <span className='ml-4'> Connect up to 5 bank accounts </span>
                </li>
                <li className='flex items-center'>
                  <ion-icon
                    className='w-4 h-4 md hydrated'
                    name='checkmark-outline'
                    role='img'
                    aria-label='checkmark outline'
                  ></ion-icon>
                  <span className='ml-4'> Track up to 50 credit cards </span>
                </li>
                <li className='flex items-center'>
                  <ion-icon
                    className='w-4 h-4 md hydrated'
                    name='checkmark-outline'
                    role='img'
                    aria-label='checkmark outline'
                  ></ion-icon>
                  <span className='ml-4'> Analytics support </span>
                </li>
                <li className='flex items-center'>
                  <ion-icon
                    className='w-4 h-4 md hydrated'
                    name='checkmark-outline'
                    role='img'
                    aria-label='checkmark outline'
                  ></ion-icon>
                  <span className='ml-4'> Export up to 12 months data </span>
                </li>
                <li className='flex items-center'>
                  <ion-icon
                    className='w-4 h-4 md hydrated'
                    name='checkmark-outline'
                    role='img'
                    aria-label='checkmark outline'
                  ></ion-icon>
                  <span className='ml-4'> Cloud service 24/7 </span>
                </li>
                <li className='flex items-center'>
                  <ion-icon
                    className='w-4 h-4 md hydrated'
                    name='checkmark-outline'
                    role='img'
                    aria-label='checkmark outline'
                  ></ion-icon>
                  <span className='ml-4'> Track in multiple users </span>
                </li>
              </ul>
              <a
                className='items-center justify-center w-full px-6 py-2.5 mt-8 text-center text-black duration-200 bg-white border-2 border-white rounded-full nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white'
                aria-label='Website Packages tier'
                href='/register'
              >
                Purchase Now
              </a>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
