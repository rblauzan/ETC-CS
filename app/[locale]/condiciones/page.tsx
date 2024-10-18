import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Condiciones",
  description: "",
  // other metadata
};

const ContactPage = () => {
  const t = useTranslations('Conditions');
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
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/video/4.jpg"
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
                    {t('text2')} 
                  </p>
                  <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                    {t('paso1')}
                  </h5>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text4')}
                    </li>
                    <br></br>
                    <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                      {t('paso2')}
                    </h5>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text5')}
                    </li>                    
                    <br></br>
                    <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                     {t('paso3')}
                    </h5>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text6')}
                    </li>
                    <br></br>
                    <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                      {t('paso4')}
                    </h5>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text7')}
                    </li>
                    <br></br>
                    <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                     {t('paso5')}
                    </h5>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      {t('text8')}
                    </li>
                    <br></br>                    
                  </ul>  
                  <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <h4 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">{t('text10')}                    
                  </h4>
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
export default ContactPage;
