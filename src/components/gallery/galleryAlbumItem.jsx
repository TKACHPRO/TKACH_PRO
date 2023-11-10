import Link from "next/link";
import Image from "next/image";

const GalleryAlbumItem = ({ url }) => {
  return (
    <Link href={`${url}`} className="" key={url}>
      <div className="relative w-358 h-479 max-md:w-345 max-md:h-345  max-sm:w-310 max-sm:h-310">
        <Image
          src={url}
          alt="galleryImage"
          fill
          className="bg-dark object-cover"
          placeholder="blur"
          blurDataURL={url}
        />
      </div>
    </Link>
  );
};

export default GalleryAlbumItem;
