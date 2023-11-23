import Launch from "@/components/Launch";
import MyLogo from "../public/logo.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      {/* <Image src={MyLogo} /> */}
      <Launch />
    </main>
  );
}
