import Image from "next/image";
import Link from "next/link";

const GalleryAlbum = ({ title, logoUrl, id }) => {
  return (
    <div className="flex flex-col w-414 justify-self-start max-md:w-345 max-md:justify-self-center max-sm:w-310 max-sm:h-310">
      <Link href={`/pages/gallery/${id}`} as={`/pages/gallery/${id}`} className="max-md:w-345 max-sm:w-310">
        <div className="relative w-414 h-418 max-md:w-345 max-md:h-345 max-sm:w-310 max-sm:h-310">
          <Image
            src={logoUrl}
            alt={title}
            fill
            className="bg-dark object-cover"
            placeholder="blur"
            blurDataURL={logoUrl}
          />
        </div>
      </Link>
      <h2 className="mt-7 text-xl font-bold text-center">{title}</h2>
    </div>
  );
};

export default GalleryAlbum;
