import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Condiciones",
  description: "",
};
const products = [
  {
    id: 1,
    name: 'Cocina',
    href: '#',
    imageSrc: '/images/testimonials/1.jpg',
    imageAlt: '',
  },
  {
    id: 2,
    name: 'Dormitorio',
    href: '#',
    imageSrc: '/images/testimonials/2.jpg',
    imageAlt: '',
  },
  {
    id: 3,
    name: 'Baño',
    href: '#',
    imageSrc: '/images/testimonials/3.jpg',
    imageAlt: '',
  },
  {
    id: 3,
    name: 'Dormitorio',
    href: '#',
    imageSrc: '/images/testimonials/4.jpg',
    imageAlt: '',
  },
  {
    id: 3,
    name: 'Dormitorio',
    href: '#',
    imageSrc: '/images/testimonials/5.jpg',
    imageAlt: '',
  },
  {
    id: 3,
    name: 'Dormitorio',
    href: '#',
    imageSrc: '/images/testimonials/6.jpg',
    imageAlt: '',
  },
]
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
                      <div className="mr-4">
                    </div>
                    <div className="mb-5 flex items-center">
                  </div>
                </div></div></div>
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
                    <div className="bg-black">
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <h2 id="products-heading" className="sr-only">
                              Products
                            </h2>
                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                              {products.map((product) => (
                                <a key={product.id} href={product.href} className="group">
                                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
                                    <Image
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                                      width={100}
                                      height={100}
                                    />
                                  </div>
                                  <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
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
                </div>
                 <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/contacto"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    {t('button')}
                  </Link>
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
