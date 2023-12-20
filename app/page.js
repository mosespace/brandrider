import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import Pricing from "@/components/Pricing";
import Partners from "@/components/Partners";
import Testimonial from "@/components/Testimonial";
import SignUp from "@/components/SignUp";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Partners />
      <Pricing />
      <Testimonial />
      <Faq />
      <Quote />
      <Newsletter />
      {/* <Quote /> */}
    </main>
  );
}
