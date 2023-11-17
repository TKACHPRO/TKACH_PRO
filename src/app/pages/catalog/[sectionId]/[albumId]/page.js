import getCatalogAlbum from "@/app/api/getCatalogAlbum";
import getCatalogSection from "@/app/api/getCatalogSection";
import CatalogAlbumItem from "@/components/catalog/catalogAlbumItem";
import CatalogAlbumHeading from "@/components/catalog/catalogAlbumHeading";

export const generateMetadata = async ({ params }) => {
  const { albumId } = params;

  const album = await getCatalogAlbum(albumId);
  const { title } = album;

  return {
    title: title,
  };
};

export const revalidate = 1800;

const CatalogAlbum = async ({ params }) => {
  const { albumId } = params;
  const { title, images } = await getCatalogAlbum(albumId);

  return (
    <main className="flex flex-col px-4 bg-light">
      <CatalogAlbumHeading title={title || "Альбомов не добавлено"} />
      <div className="grid grid-cols-sectionAlbums justify-center gap-x-14 gap-y-9 mb-20 max-sm:grid-cols-sectionAlbumsSm">
        {images?.length > 0 &&
          images.map((image) => {
            return <CatalogAlbumItem url={image.url} author={image.author} />;
          })}
      </div>
    </main>
  );
};
export default CatalogAlbum;
