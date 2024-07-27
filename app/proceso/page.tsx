import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proceso",
  description: "",
  // other metadata
};

const BlogDetailsPage = () => {
  return (
    <>
      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Proceso de Trabajo
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
                    ¿Qué puedes hacer para trabajar con nosotros?
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
                    Nuestro proceso es sencillo y transparente. Como empresa
                    fiable y profesional, cumplimos rigurosamente con la ley y
                    contratamos de manera legal.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Es posible que ya sepas que si eres de países como
                    Argentina, Colombia, Cuba o México, puedes ingresar a la
                    zona Schengen como turista con tu pasaporte, con una
                    estancia máxima de 90 días. La zona Schengen incluye todos
                    los países de la Unión Europea, excepto Irlanda y Chipre.
                    Fuera de la Unión Europea, no pertenecen a la zona Schengen
                    países como Albania, Bielorrusia, Bosnia y Herzegovina,
                    Macedonia, Moldavia, Noruega, Rusia, Serbia, Ucrania, Gran
                    Bretaña y Turquía.
                  </p>
                  <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                    Paso 1. Cumplir con nuestros requisitos:
                  </h5>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Antes de comenzar el proceso, asegúrate de cumplir con los
                      requisitos específicos que nuestra empresa establece.
                      Puedes encontrar más detalles en la pestaña{" "}
                      <Link href="/condiciones" className="text-white">
                        <u>Condiciones</u>
                      </Link>
                      &nbsp;en nuestro sitio web.
                    </li>
                    <br></br>
                    <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                      Paso 2. Obtener el permiso de trabajo:
                    </h5>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Una vez que hayas verificado que cumples con los
                      requisitos, nosotros nos encargaremos de obtener el
                      permiso de trabajo en tu nombre.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Este permiso puede ser concedido por un período máximo de
                      3 años. Lo tramitaremos mientras te encuentres en tu país
                      de origen.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Una vez tengas el permiso de trabajo, podrás viajar a
                      Polonia y, al día siguiente, firmar el contrato y comenzar
                      a trabajar.
                    </li>
                    <br></br>
                    <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                      Paso 3. Consideraciones sobre la estancia legal:
                    </h5>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Es importante distinguir entre el{" "}
                      <b className="text-white">permiso de trabajo</b> y el{" "}
                      <b className="text-white">
                        permiso de residencia (karta pobytu)
                      </b>
                      .
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Aunque el permiso de trabajo pueda ser válido por 3 años,
                      legalmente solo puedes permanecer en la zona Schengen
                      durante 90 días como turista.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Por lo tanto, incluso si tienes un permiso de trabajo a
                      largo plazo, debes asegurarte de cumplir con las
                      regulaciones de estancia en la zona Schengen.
                    </li>
                    <br></br>
                    <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                      Paso 4. Obtención del permiso de trabajo:
                    </h5>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Al llegar a Polonia, se realiza el proceso para obtener el
                      permiso de trabajo.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Al día siguiente, se realizan exámenes médicos y se firma
                      el contrato para comenzar a trabajar.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Antes de cumplir los 90 días, se regresa al país de
                      origen.
                    </li>
                    <br></br>
                    <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                      Paso 5. Transición a un permiso de residencia (karta
                      pobytu):
                    </h5>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Si deseas trabajar más de 90 días y quedarte con nuestra
                      empresa, evaluaremos tu desempeño después del primer mes.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Con una evaluación positiva, te ayudaremos a obtener el
                      permiso de residencia (karta pobytu).
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Hay dos tipos: uno temporal por 3 años y otro normal por
                      10 años.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      El proceso de obtención dura aproximadamente 30 días.
                    </li>
                    <br></br>
                    <h5 className="mb-4 leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight">
                      Paso 6. Permiso de residencia (karta pobytu):
                    </h5>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Una vez concedido, el permiso de residencia es válido por 3 o 10 años.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Con el permiso de residencia, ya no necesitas el permiso de trabajo para trabajar en Polonia.
                    </li>
                  </ul>  
                  <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/solicitud"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Aplicar ahora
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
