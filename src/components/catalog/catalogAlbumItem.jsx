import Image from "next/image";
import Link from "next/link";

const CatalogAlbumItem = ({ url, author }) => {
  return (
    <Link href={url} key={url}>
      <div className="relative w-337 h-337 max-sm:w-310 max-sm:h-310">
        <Image src={url} alt={author} fill className="bg-dark object-cover" placeholder="blur" blurDataURL={url} />
      </div>
      <h3 className="font-bold text-sm mt-4 text-end max-sm:pr-4">{`@${author}`}</h3>
    </Link>
  );
};

export default CatalogAlbumItem;
