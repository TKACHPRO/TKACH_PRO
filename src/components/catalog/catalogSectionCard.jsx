import Image from "next/image";
import Link from "next/link";

const CatalogSectionCard = ({ id, logo, title, description }) => {
  return (
    <div className="flex flex-col justify-between w-354 max-sm:w-310" key={id}>
      <div className="relative w-354 h-354 max-sm:w-310 max-sm:h-310">
        <Image src={logo} fill alt="card" className="bg-light object-cover" placeholder="blur" blurDataURL={logo} />
      </div>

      <h3 className="text-lg mt-8 mb-5 font-bold max-sm:pl-4">{title}</h3>
      <p className="max-sm:pl-4">{description}</p>
      <Link
        href={`/pages/catalog/${id}`}
        className="mt-5 w-48 h-14 bg-pink flex justify-center items-center text-center text-dark font-bold max-sm:ml-4"
      >
        LEARN MORE
      </Link>
    </div>
  );
};
export default CatalogSectionCard;
