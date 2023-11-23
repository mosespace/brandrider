import Bg from "../public/brandRider-BG2.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className='hero-section'>
      <div className='bg-image'>
        <Image src={Bg} alt='BrandRider Image Here' fill />
      </div>
      <div className='text-overlay'>
        <h1>Welcome to Our Website</h1>
        <p>Discover Amazing Content</p>
      </div>
    </div>
  );
}
