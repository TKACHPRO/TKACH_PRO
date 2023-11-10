import Image from "next/image";
import Link from "next/link";

const CatalogAlbumCard = ({ sectionId, objectId, logo, title }) => {
  return (
    <Link href={`/pages/catalog/${sectionId}/${objectId}`} key={objectId}>
      <div className="relative w-337 h-337 max-sm:w-310 max-sm:h-310">
        <Image src={logo} alt={title} fill className="bg-dark object-cover" placeholder="blur" blurDataURL={logo} />
      </div>

      <h3 className="font-bold text-xl mt-7 text-center">{title}</h3>
    </Link>
  );
};

export default CatalogAlbumCard;
