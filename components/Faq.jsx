"use client";
import { useState } from "react";
import { GoPlus, GoDash } from "react-icons/go";

const faqData = [
  {
    id: 1,
    question: "How do I manage my account?",
    answer:
      "You can manage your account on the 'My account' page to change billing details or see your license key(s). You can also cancel your subscription there at any time. If you cancel your subscription, you will still have access to Brandrider until the end of your current billing period. Go to the My Account page.",
  },
  {
    id: 2,
    question:
      "Is there a trial? Can I try it before I purchase any package with Brandrider?",
    answer:
      "Yes, you can try Brandrider! We don't have a trial but you can use Brandrider on this website by clicking on the link below. Hit the space key to pin Brandrider.",
  },
  {
    id: 3,
    question:
      "I've used Brandrider before. Are there offers for my next purchase? ",
    answer:
      "If correct, you've received an email after your purchase that includes your license key. The subject line is 'Your Brandrider license key'. If you cannot find your license key, please send an email to info@Brandrider.com and I'll help you out.",
  },
  {
    id: 4,
    question: "Does Brandrider do deliveries on graphics printouts?",
    answer:
      "I would love to build a Firefox version of Brandrider. It is important for me, however, that I can offer a great experience for all users. And for that I need to invest a lot of time. If you are interested in a Firefox version, let me know!",
  },
  {
    id: 5,
    question: "Does Brandrider work on any website?",
    answer:
      "Yes, Brandrider works on any website. If the website does not use Tailwind CSS, there are no classes visible for any element. However, you can still add Tailwind classes to elements.",
  },
  {
    id: 6,
    question: "Do you have a refund Policy?",
    answer:
      "If you are not satisfied with Brandrider, you can email your refund request to info@Brandrider.com. We accept requests up to 14 days after purchase. It would help a lot if you also provide feedback as to why you'd like a refund, so I can make the product better for others in the future!",
  },
  {
    id: 8,
    question: "Brandrider says my license key is invalid?",
    answer:
      "Oops! If you've made sure the license key is correct (check for spaces before/after the key when copy-pasting), please send an email to info@brandrider.com and I'll help you out.",
  },
  {
    id: 9,
    question:
      "How often is there an update for a purchased website with brandrider?",
    answer:
      "Brandrider will receive periodic updates when Tailwind CSS is updated, and when there is a new set of features ready for Brandrider. I hope to release a new version with new features every 4-8 weeks.",
  },
];

export default function Faq() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <>
      <div className='h-full px-8 py-24 mx-auto md:px-12 max-w-7xl'>
        <div className='grid grid-cols-1 gap-6 lg:gap-12 lg:grid-cols-3'>
          <div className='text-center lg:text-left'>
            <div>
              <p className='text-4xl font-semibold tracking-tighter text-zinc-900'>
                Frequent questions and answers
              </p>
              <p className='text-base tmt-4 text-zinc-500'>
                Answers to commonly asked questions about our services/ packages
              </p>
            </div>
          </div>
          <div className='relative w-full mx-auto font-normal lg:col-span-2'>
            {faqData.map((faqItem) => (
              <div
                key={faqItem.id}
                className='cursor-pointer group text-gray-600 hover:text-zinc-500'
              >
                <button
                  className='flex items-center justify-between w-full p-4 pb-1 text-sm text-left select-none lg:text-base'
                  onClick={() => handleAccordionClick(faqItem.id)}
                >
                  <span className='font-semibold'>{faqItem.question}</span>
                  {activeAccordion === faqItem.id ? (
                    <GoDash className='w-5 h-5 duration-300 ease-out' />
                  ) : (
                    <GoPlus className='w-5 h-5 duration-300 ease-out' />
                  )}
                </button>
                {activeAccordion === faqItem.id && (
                  <div className='p-4 pt-2 text-sm text-gray-500'>
                    {faqItem.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
