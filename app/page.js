import Header from "@/components/Header";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Home - BrandRider",
  description:
    "'We're a creative team based in Kampala Uganda devoted to making your brand boss digital media through effective strategy and design. We create innovative, eye-catching Webistes, logos, posters, and flyers that are competitive and minimalistic while keeping the campaign's' goal in mind. Our creative team is always ready to brainstorm and put your brand's vision into action. We'll keep in close contact with you to guarantee that your expectations are met in a clear and timely manner. Don't linger at the door; BrandRider is waiting for you. Let's work together to take your brand to the next level.",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
    </>
  );
}
