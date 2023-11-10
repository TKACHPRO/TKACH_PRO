import Image from "next/image";
import { catalogBg, catalogBgMobile } from "@/app/lib/staticImages";

const CatalogHero = () => {
  const catalogBgStyles =
    "absolute right-0 top-10 max-[900px]:top-0 max-[900px]:relative max-[900px]:order-first max-[900px]:self-end";
  return (
    <div className="flex justify-between mt-36 max-lg:flex-col overflow-hidden max-lg:mb-10 max-md:mb-0">
      <div className="ml-17 relative max-lg:w-[400px] max-lg:m max-[900px]:mt-23 max-[900px]:mx-5 max-[900px]:w-auto">
        <p className="max-w-600 text-lg font-normal mb-9 mr-0 max-lg:text-sm">
          Ассортимент <span className="font-futura text-pink">TKACHPRO</span> разнообразен: от интерьерной живописи до
          авторских паттернов (костюмные, мебельные, купоны) и декоративного текстиля ( шторы, гардины, покрывала,
          скатерти и т.д.). Также к нам можно обратиться по поводу создания дизайна принтов с нуля, по мудборду
          коллекции или проекта.
        </p>
        <p className="max-w-600 text-lg font-normal max-lg:text-sm">
          <span className="text-pink font-bold">Внимание:</span> все дизайны охраняются законом об авторском праве.
          Публикации на других ресурсах только с разрешения автора!{" "}
        </p>
        <p className="font-futura font-black text-xl mt-40 max-lg:text-sm max-lg:mt-12">#BE_UNIQUE</p>
      </div>

      <Image
        src={catalogBg}
        alt="catalog-bg"
        width={540}
        height={600}
        className={`${catalogBgStyles} max-[900px]:hidden`}
        placeholder="blur"
      />
      <Image
        src={catalogBgMobile}
        alt="catalog-bg"
        width={540}
        height={520}
        className={`${catalogBgStyles} min-[900px]:hidden`}
        placeholder="blur"
      />
    </div>
  );
};
export default CatalogHero;
