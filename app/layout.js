import "../styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Subscribe to the launch | BrandRiderUg.com",
  description:
    "BrandRiderUg, your trusted partner for comprehensive digital solutions in Kampala, Uganda. Transform your brand with our top-notch services including Website Development, Graphics Design, Social Media Promotions, Printing, and Product Design. We cater to startups and established brands, offering affordable solutions and exceptional customer care at BrandRiderUg today.",

  keywords: [
    "Website Development Kampala",
    "Graphics Design Uganda",
    "Social Media Promotions Kampala",
    "Printing Services Uganda",
    "Product Design Solutions",
    "Affordable Branding Kampala",
    "Startup Branding Uganda",
    "Reliable Customer Care Services",
    "Kampala Digital Marketing",
    "BrandRiderUg Kireka Nakimbugwe Building",
    "Responsive Website Design Uganda",
    "Professional Graphic Design Services",
    "Social Media Marketing Kampala",
    "High-Quality Printing Kampala",
    "Creative Product Design Uganda",
    "Cost-Effective Branding Solutions",
    "Brand Enhancement Kampala",
    "Local SEO Uganda",
    "BrandRiderUg Reviews",
    "Trusted Digital Solutions Uganda",
  ],

  authors: [
    {
      name: "Kisakye Moses A.K.A Uncle Moses",
      url: "https://kisakye-moses.vercel.app",
    },
  ],
  creator: "Kisakye Moses Founder BrandRiderUg",
  publisher: "Kisakye Moses Founder BrandRiderUg",
  openGraph: {
    title: "BrandRiderUg | Website Developer In Kampala Uganda",
    description:
      "We’re a creative team devoted to making your brand thrive in digital media through effective strategy and design. We create innovative, eye-catching professional websites, logos, posters, flyers, and that are competitive and minimalistic while keeping your campaign’s goal in mind.",
    url: "https://brandriderug.vercel.app",
    siteName: "Brandrider ug",
    images: [
      {
        url: "https://brandriderug.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "BrandRiderUg | Og Image Alt",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    handle: "@bantu_creative",
    site: "@https://twitter.com/bantu_creative",
    cardType: "summary_large_image",
    title: "Kisakye Moses - Uncle Moses | Website Developer In Kampala Uganda",
    description:
      "Unlock the potential of your online presence with BrandRiderUg. A top-notch website developing agency and graphics design in Kampala, Uganda. From stunning website designs to captivating graphics, We deliver tailor-made solutions that leave a lasting impact. Let's bring your digital vision to life and stand out in the digital landscape.",
  },
  linkedin: {
    handle: "@Kisakye Moses",
    site: "@https://linkedin.com/kisakye-moses",
    cardType: "summary_large_image",
    title: "Kisakye Moses - Uncle Moses | Website Developer In Kampala Uganda",
    description:
      "Unlock the potential of your online presence with BrandRiderUg. A top-notch website developing agency and graphics design in Kampala, Uganda. From stunning website designs to captivating graphics, We deliver tailor-made solutions that leave a lasting impact. Let's bring your digital vision to life and stand out in the digital landscape.",
  },
  alternates: {
    canonical: "https://brandriderug.vercel.app",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster position='top-center' expand={false} richColors closeButton />
      </body>
    </html>
  );
}
