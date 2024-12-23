import ImageCarousel from "@/components/ImageCarousel/ImageCarousel";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Nuestros Proyectos",
  description: "",
};

const images = [
  { src: "/images/video/1.jpg", alt: "Image 1" },
  { src: "/images/video/2.jpg", alt: "Image 2" },
  { src: "/images/video/3.jpg", alt: "Image 3" },
  { src: "/images/video/4.jpg", alt: "Image 4" },
  { src: "/images/video/5.jpg", alt: "Image 5" },
];


const Home = () => {
  const t = useTranslations('Projects');
  return (
    <>
  <section className="pb-[120px] pt-[150px]">
    <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
        <h1 className="mb-1 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
          {t('title')}
        </h1>
        <div className="mb-8 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                    </div>
                    <div className="mb-5 flex items-center">
                  </div>
                </div></div></div>
                <li className="mb-8 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                       {t('text')}
                </li> 
        </div>
        <div className="mb-10 w-full overflow-hidden rounded">
          <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
            <ImageCarousel images={images} />
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};
export default Home;
