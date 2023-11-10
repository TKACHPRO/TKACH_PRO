import Image from "next/image";
import { platformBg } from "@/app/lib/staticImages";

export const metadata = {
  title: "Platform",
  description: "TKACH PRO / Platform",
};

const Platform = () => {
  return (
    <main className="flex flex-col items-center bg-dark text-light">
      <h2 className="font-bold text-1xl mt-12 max-md:order-2 max-md:my-14 max-md:text-base">TKACH PRO PLATFORM</h2>
      <Image
        src={platformBg}
        alt="platform-hero"
        width={1064}
        height={1366}
        className="mt-17 mb-36 order-1 max-md:my-0"
        placeholder="blur"
      />
      <p
        id="platform"
        className="mx-4 text-lg max-w-1024 text-center mb-8 order-2 max-md:w-317 max-md:text-start max-md:mb-14 max-md:text-base"
      >
        Специальная площадка для шоурума, конкурсов и арт-действий в режиме ONLINE. <br className="md:hidden"></br> Это
        возможность проявить себя и нашей команде, и любому человеку - творящему и желающему творить.
      </p>
    </main>
  );
};
export default Platform;
