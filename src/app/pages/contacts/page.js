import Image from "next/image";
import ContactsHeading from "@/components/contacts/contactsHeading";
import ContactsDescription from "@/components/contacts/contactsDescription";
import { contactsBg } from "@/app/lib/staticImages";

export const metadata = {
  title: "Contacts",
  description: "TKACH PRO / Contacts",
};

const Contacts = () => {
  return (
    <main className="bg-dark text-light flex flex-col min-h-605 justify-center">
      <div className="flex justify-center mt-22 mb-16 mx-4 max-lg:flex-col max-lg:items-center">
        <ContactsHeading responsiveStyles={"lg:hidden max-lg:mb-12"} />
        <Image
          src={contactsBg}
          alt="contacts-bg"
          width={398}
          height={454}
          className="max-lg:mb-12"
          placeholder="blur"
        />
        <ContactsDescription />
      </div>
    </main>
  );
};
export default Contacts;
