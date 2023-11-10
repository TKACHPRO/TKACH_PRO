import Link from "next/link";
import ContactsHeading from "./contactsHeading";

const ContactsDescription = () => {
  return (
    <div className="flex flex-col max-w-688 max-lg:max-w-297">
      <ContactsHeading responsiveStyles={"max-lg:hidden"} />
      <p className="text-lg text-justify my-16 max-lg:my-0 max-lg:text-base">
        Мы сотрудничаем с дизайнерами для сублимационной печати, развиваем работу с прямой печатью на льне и
        жаккардовыми сложными дизайнами, используя исключительно качественные материалы и не разрабатываем копии на
        заказ или печатаем готовые дизайны. Мы за красоту и уникальность!
      </p>
      <p className="max-lg:text-base">Открыты для любой формы сотрудничества</p>
      <Link
        href={"https://mail.google.com/mail/u/1/#inbox"}
        className="h-15 w-333 bg-pink rounded-20 flex justify-center items-center font-bold mt-22 max-lg:mt-10 max-lg:self-center max-lg:mb-4 max-sm:w-300"
      >
        TKACHPRO.GROUP@GMAIL.COM
      </Link>
    </div>
  );
};

export default ContactsDescription;
