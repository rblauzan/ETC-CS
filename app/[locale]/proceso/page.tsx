import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Proceso",
  description: "",
  // other metadata
};

const BlogDetailsPage = () => {
  const t = useTranslations('Proceso');
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {t('title')}
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4"></div>
                    </div>
                    <div className="mb-5 flex items-center"></div>
                  </div>
                </div>
                <div>
                  <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                    {t('subtitle')}
                  </h5>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/2.jpg"
                        alt="image"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {t('text1')}
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {t('text2')} {t('text3')}
                  </p>
                  <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                    {t('paso1')}
                  </h5>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text4')}
                       <Link href={"/condiciones"} className="text-white">
                        <u>{t('link')}</u>
                       </Link>
                      {t('text41')}
                    </li>
                    <br></br>
                    <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                      {t('paso2')}
                    </h5>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text5')}
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text51')}
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text52')}
                    </li>
                    <br></br>
                    <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                     {t('paso3')}
                    </h5>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text6')}
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text61')}
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text62')}
                    </li>
                    <br></br>
                    <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                      {t('paso4')}
                    </h5>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text7')}
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                       {t('text71')}
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                       {t('text72')}
                    </li>
                    <br></br>
                    <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                     {t('paso5')}
                    </h5>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text8')}
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text81')}
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text82')}
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text83')}
                    </li>
                    <br></br>
                    <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                      {t('paso6')}
                    </h5>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text9')}
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                     {t('text91')}
                    </li>
                  </ul>  
                  <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/solicitud"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    {t('button')}
                  </Link>
                </div>                
                  {/* <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h4 className="mb-3 text-sm font-medium text-body-color">
                        Popular Tags :
                      </h4>
                      <div className="flex items-center">
                        <TagButton text="Design" />
                        <TagButton text="Development" />
                        <TagButton text="Info" />
                      </div>
                    </div>
                    <div className="mb-5">
                      <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                        Share this post :
                      </h5>
                      <div className="flex items-center sm:justify-end">
                        <SharePost />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
