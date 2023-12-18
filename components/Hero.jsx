export default function Hero() {
  return (
    <section className='relative flex items-center justify-center'>
      <div className='relative items-center w-full px-5 py-12 mx-auto max-w-7xl lg:px-16 lg:py-32 md:px-12'>
        <div>
          <div className='relative text-center'>
            <p className='mt-8 text-3xl font-extrabold tracking-tighter text-black md:text-6xl'>
              Crafting stories{" "}
              <span className='md:block'>building and lifting brands</span>
            </p>
            <p className='max-w-xl mx-auto mt-4 text-sm text-slate-600'>
              We create innovative, eye-catching websites, logos, posters , and
              flyers that are competitive and minimalistic while keeping your
              campaign’s goal in mind.
            </p>
            <div className='mt-6 flex flex-col md:block'>
              Try us today: Click &nbsp;
              <span className='px-4 py-2 font-mono border rounded-full'>
                brandriderug@gmail.com
              </span>
              &nbsp; and send us a message. Our team will reply immediately
            </div>
          </div>
        </div>
        <div className='relative items-center w-full py-12 pb-12 mx-auto mt-12 max-w-7xl'>
          <svg
            fill='none'
            viewBox='0 0 400 400'
            height='100%'
            width='100%'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute -mt-24 blur-3xl'
          >
            <g clipPath='url(#clip0_10_20)'>
              <g filter='url(#filter0_f_10_20)'>
                <path
                  d='M128.6 0H0V322.2L106.2 134.75L128.6 0Z'
                  fill='#ff237d'
                ></path>
                <path
                  d='M0 322.2V400H240H320L106.2 134.75L0 322.2Z'
                  fill='#7C87F8'
                ></path>
                <path
                  d='M320 400H400V78.75L106.2 134.75L320 400Z'
                  fill='#4C65E4'
                ></path>
                <path
                  d='M400 0H128.6L106.2 134.75L400 78.75V0Z'
                  fill='#043AFF'
                ></path>
              </g>
            </g>
            <defs>
              <filter
                colorInterpolationFilters='sRGB'
                filterUnits='userSpaceOnUse'
                height='720.666'
                id='filter0_f_10_20'
                width='720.666'
                x='-160.333'
                y='-160.333'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
                <feBlend
                  in='SourceGraphic'
                  in2='BackgroundImageFix'
                  mode='normal'
                  result='shape'
                ></feBlend>
                <feGaussianBlur
                  result='effect1_foregroundBlur_10_20'
                  stdDeviation='80.1666'
                ></feGaussianBlur>
              </filter>
            </defs>
          </svg>
          <video
            className='relative object-cover w-full rounded shadow-2xl lg:rounded-2xl'
            controls
            // autoPlay
            // muted
            loop
            src='/video_intro.mp4'
            typeof='video'
          />
        </div>
      </div>
    </section>
  );
}
