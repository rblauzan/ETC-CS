"use client";
import { toast } from "sonner";
import { enviarSolicitud } from "@/components/SendInfo/action";
import { useRef } from "react";
import { useTranslations } from "next-intl";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null); 
  const t = useTranslations('Info');
  const tr = useTranslations('Construction');
  const tra = useTranslations('Gastronomy');
  const tran = useTranslations('Time');
  const trans = useTranslations('Pais');
  const transla = useTranslations('Car');
  
 const construccion = [
  { value: tr('ayudante') },
  { value: tr('albañil') },
  { value: tr('solador') },
  { value: tr('encofrador') },
  { value: tr('ferralista') },
  { value: tr('carpintero') },
  { value: tr('carpintero2') },
  { value: tr('cerrajero') },
  { value: tr('demolicion') },
  { value: tr('techador') },
  { value: tr('pintor') },
  { value: tr('cristal') },
  { value: tr('solder') },
  { value: tr('chapista') },
  { value: tr('electrico') },
  { value: tr('plomero') },
  { value: tr('pulidor') },
  { value: tr('grua') },
  { value: tr('conductor') },
  { value: tr('colador') },
  { value: tr('tallista')},
  { value: tr('gas') },
  { value: tr('instalador') },
  { value: tr('calefacción') },
  { value: tr('jefe') },
  { value: tr('aislador') },
]
 const gastronomy = [
  { value: tra('jcocina')},
  { value: tra('subcocina')},
  { value: tra('gcocina')},
  { value: tra('cocinero')},
  { value: tra('acocinero')},
  { value: tra('limpieza')},
 ]
  const tiempo = [
  { value : tran('time1')},
  { value : tran('time2')},
  { value : tran('time3')},
  { value : tran('time4')},
 ]
 const car = [
  { value: transla('pintor') },
  { value: transla('chapista') },
  { value: transla('mecanico') }
 ]
  return (
    <form
    ref={formRef}
            action={async (formData) => {
       const result = await enviarSolicitud(formData)
        formRef.current?.reset();
        if(result?.error){
          toast.error(result.error);
        }
        else 
        toast.success(result.message);
      }}
    >
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              {t('name')}
            </label>
            <input
              type="text"
              placeholder={t('placename')}
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              name="nombre"
              required
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              {t('secondname')}
            </label>
            <input
              type="text"
              placeholder={t('placesecondname')}
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              name="apellido"
              required
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="email"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              {t('email')}
            </label>
            <input
              type="email"
              placeholder={t('placeemail')}
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              name="correo"
              required
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="tel"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
             {t('phone')}
            </label>
            <input
              type="tel"
              placeholder={t('placephone')}
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              name="telefono"
              required
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
           <div className="mb-8">
            <label
              htmlFor="text"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
             {t('textcountry')}
            </label>
            <input
              type="text"
              placeholder={t('placeholdercountry')}
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              name="pais"
              required
            />
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="profesiones"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              {t('profesiones')}
            </label>
            <select
              name="profesion"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"

               required
            >
              <option disabled>
                 {t('option1')}
              </option>
              {construccion.map((construccion) => (
                <option key={construccion.value} defaultValue={"Seleccione una profesión"}>
                  {" "}
                  {construccion.value}{" "}
                </option>
              ))}
              <hr className=""></hr>
              {gastronomy.map((gastronomy) => (
                <option key={gastronomy.value} value={gastronomy.value}>
                  {" "}
                  {gastronomy.value}{" "}
                </option>
              ))}
              <hr className=""></hr>
              {car.map((car) => (
                <option key={car.value} value={car.value}>
                  {" "}
                  {car.value}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="tiempo"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
             {t('tiempo')}
            </label>
            <select
              name="tiempo"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
               required
            >
              <option disabled>
                {t('option2')}
              </option>
              {tiempo.map((tiempo) => (
                <option key={tiempo.value} defaultValue={"Seleccione una opción"}>
                  {" "}
                  {tiempo.value}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full px-4">
          <div className="mb-8">
            <label
              htmlFor="mensaje"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              {t('infoextra')}
            </label>
            <textarea
              name="texto"
              rows={5}
              placeholder={t('placeinfoextra')}
              className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            ></textarea>
          </div>
        </div>
        <div className="w-full px-4">
          <button
            type="submit"
            className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          >
            {t('button')}
          </button>
        </div>
      </div>     
    </form>
  );
}
