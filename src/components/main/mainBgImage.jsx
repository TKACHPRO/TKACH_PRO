import Image from "next/image";
import { mainBg } from "@/app/lib/staticImages";

const MainBgImage = () => {
  return (
    <div className="max-[580px]:overflow-x-hidden relative flex justify-center w-screen bg-light">
      <Image src={mainBg} alt="main-bg" width={1300} height={1513} className="min-h-680 min-w-570" placeholder="blur" />
    </div>
  );
};

export default MainBgImage;
