import Link from "next/link";
import Image from "next/image";
import { logoImage, logoInst, logoTele, logoGmail } from "@/app/lib/staticImages";

const Footer = () => {
  return (
    <footer className="flex justify-center flex-wrap h-73 text-light font-bold bg-dark justify-center mt-auto">
      <div className="max-w-1030 w-full mt-14 mx-4 flex justify-between ">
        <div className="flex flex-col text-sm w-32 max-sm:text-xs">
          <p className="ml-2 mb-9 max-sm:mb-5">Connect with us</p>
          <div className="mb-5">
            <Image src={logoInst} alt="logo-inst" width={21} height={21} className="inline ml-2 mr-4" />
            <Link href={"https://instagram.com/tkach_pro?igshid=MzRlODBiNWFlZA=="} target="_blank">
              Instagram
            </Link>
          </div>
          <div className="mb-5">
            <Image src={logoTele} alt="logo-tele" width={21} height={21} className="inline ml-2 mr-4" />
            <Link href={"https://t.me/tkach_pro"} target="_blank">
              Telegram
            </Link>
          </div>
          <div>
            <Image src={logoGmail} alt="logo-gmail" width={39} height={25} className="inline mr-2" />
            <Link href={"https://mail.google.com/mail/u/1/#inbox"} target="_blank">
              Gmail
            </Link>
          </div>
        </div>
        <div className="flex flex-col text-center items-center max-md:hidden">
          <Image src={logoImage} width={243} height={87} alt="logo" placeholder="blur" />
          <p className="text-sm">Textile Design Studio</p>
          <p className="text-xs mt-14">
            Vitebsk, Belarus <br></br> since 2020
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-x4 gap-10 content-between pb-20 min-w-130 justify-items-end max-md:gap-6 max-sm:text-xs max-sm:gap-3">
          <p className="font-futura text-pink md:hidden col-start-2 col-end-2 whitespace-nowrap">TKACH PRO</p>
          <Link href={"/home"} as={"/home"} className="md:col-start-2 md:col-end-2">
            Tkach Pro
          </Link>
          <Link href={"/home#about"} as={"/home#about"}>
            About
          </Link>
          <Link href={"/pages/catalog"} as={"/pages/catalog"}>
            Catalog
          </Link>
          <Link href={"/pages/gallery"} as={"/pages/gallery"}>
            Gallery
          </Link>
          <Link href={"/pages/contacts"} as={"/pages/contacts"}>
            Contacts
          </Link>
          <Link href={"/pages/platform"} as={"/pages/platform"} className="md:col-start-2 md:col-end-2">
            Platform
          </Link>
        </div>
      </div>
      <p className="text-xxs text-gray max-lg:max-w-358 leading-3 mt-5 text-center">
        tkachpro.com не является интернет-магазином. Информация на сайте носит рекламно-информационный характер.
      </p>
    </footer>
  );
};

export default Footer;
