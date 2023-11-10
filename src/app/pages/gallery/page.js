import GalleryAlbum from "@/components/gallery/galleryAlbum";
import getGalleryAlbums from "@/app/api/getGalleryAlbums";

export const metadata = {
  title: "Gallery",
  description: "TKACH PRO / Gallery",
};

export const revalidate = 60;

const Gallery = async () => {
  const galleryAlbums = await getGalleryAlbums();

  return (
    <main>
      <div className="grid grid-cols-gallery justify-center gap-20 pt-14 pb-20 px-4 bg-light max-sm:grid-cols-gallerySm">
        {galleryAlbums.map((album) => {
          return (
            <GalleryAlbum key={album.objectId} id={album.objectId} title={album.albumTitle} logoUrl={album.albumLogo} />
          );
        })}
      </div>
    </main>
  );
};
export default Gallery;
