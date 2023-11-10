import Image from "next/image";
import { mainHero } from "@/app/lib/staticImages";

const MainHero = () => {
  return (
    <div className="max-[990px]:overflow-x-hidden relative flex justify-center w-screen bg-light">
      <Image
        src={mainHero}
        alt="main-hero"
        width={990}
        height={580}
        className="mt-6 mb-24 min-h-514 min-w-full"
        placeholder="blur"
      />
    </div>
  );
};

export default MainHero;
