import getCatalogSections from "@/app/api/getCatalogSections";
import CatalogHeading from "@/components/catalog/catalogHeading";
import CatalogSectionCard from "@/components/catalog/catalogSectionCard";
import CatalogHero from "@/components/catalog/catalogHero";

export const metadata = {
  title: "Catalog",
  description: "TKACH PRO / Catalog",
};

export const revalidate = 1800;

const Catalog = async () => {
  const sections = await getCatalogSections();

  return (
    <main className="bg-dark text-light flex flex-col">
      <CatalogHeading />
      <CatalogHero />
      <div className="grid grid-cols-catalog justify-center gap-12 mx-17 mb-16 mt-40 max-lg:mt-11 max-sm:grid-cols-catalogSm">
        {sections.length > 0 &&
          sections.map((section) => {
            return (
              <CatalogSectionCard
                id={section.objectId}
                logo={section.logo}
                title={section.title}
                description={section.description}
              />
            );
          })}
      </div>
    </main>
  );
};
export default Catalog;
