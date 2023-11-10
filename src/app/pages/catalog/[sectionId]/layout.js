import getCatalogSections from "@/app/api/getCatalogSections";
import getCatalogSection from "@/app/api/getCatalogSection";

export const generateStaticParams = async () => {
  const sections = await getCatalogSections();

  return sections.map((section) => ({
    sectionId: section.objectId,
  }));
};

export const generateMetadata = async ({ params }) => {
  const { sectionId } = params;

  const section = await getCatalogSection(sectionId);
  const { title } = section;
  return {
    title: title,
  };
};

const SectionLayout = ({ children }) => {
  return children;
};

export default SectionLayout;
