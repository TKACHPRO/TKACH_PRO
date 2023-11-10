import getCatalogAlbums from "@/app/api/getCatalogAlbums";
import getCatalogSection from "@/app/api/getCatalogSection";
import CatalogAlbumCard from "@/components/catalog/catalogAlbumCard";
import CatalogSectionHeading from "@/components/catalog/catalogSectionHeading";

export const revalidate = 60;

const CatalogSection = async ({ params }) => {
  const { sectionId } = params;
  const section = await getCatalogSection(sectionId);
  const [sectionTitle, ids] = [section.title, section.albums];
  const catalogAlbums = await getCatalogAlbums(ids);

  return (
    <main className="flex flex-col px-4 bg-light">
      <CatalogSectionHeading sectionTitle={sectionTitle} />
      <div className="grid grid-cols-sectionAlbums justify-center gap-x-14 gap-y-36 mb-20 max-sm:grid-cols-sectionAlbumsSm">
        {catalogAlbums.length > 0 &&
          catalogAlbums.map((album) => {
            return (
              <CatalogAlbumCard sectionId={sectionId} objectId={album.objectId} logo={album.logo} title={album.title} />
            );
          })}
      </div>
    </main>
  );
};
export default CatalogSection;
