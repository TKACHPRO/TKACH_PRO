import getGalleryAlbum from "@/app/api/getGalleryAlbum";
import GalleryAlbumItem from "@/components/gallery/galleryAlbumItem";
import GalleryAlbumHeading from "@/components/gallery/galleryAlbumHeading";

export const generateMetadata = async ({ params }) => {
  const { albumId } = params;

  const album = await getGalleryAlbum(albumId);
  const { albumTitle } = album;

  return {
    title: albumTitle,
  };
};

export const revalidate = 1800;

const galleryAlbumPage = async ({ params }) => {
  const { albumId } = params;
  const { albumImages, albumTitle } = await getGalleryAlbum(albumId);

  return (
    <main className="px-4 flex flex-col bg-light">
      <GalleryAlbumHeading albumTitle={albumTitle} />
      <div className="grid grid-cols-galleryAlbum justify-items-center justify-center gap-20 mb-21 max-sm:grid-cols-galleryAlbumSm">
        {albumImages?.length > 0 &&
          albumImages.map((url) => {
            return <GalleryAlbumItem url={url} />;
          })}
      </div>
    </main>
  );
};
export default galleryAlbumPage;
