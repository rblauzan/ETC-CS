"use client";
import { toast } from "sonner";
import { Toaster } from "sonner";
import { construction } from "./datos";
import { gastronomy } from "./datos";
import { tiempo } from "./datos";
import { pais } from "./datos";
import { enviarSolicitud } from "@/components/SendInfo/action";
import { useRef } from "react";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
    ref={formRef}
      action={async (formData) => {
        await enviarSolicitud(formData)
          toast.success("Solicitud Recibida, espere nuevas actualizaciones vía correo electrónico");
          formRef.current?.reset();
      }}
      method="POST"
    >
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              placeholder="Ingrese su nombre"
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
              Apellido
            </label>
            <input
              type="text"
              placeholder="Ingrese su apellido"
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
              Correo
            </label>
            <input
              type="email"
              placeholder="Ingrese su correo"
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
              Número de Telefóno
            </label>
            <input
              type="tel"
              placeholder="Ingrese su numero de teléfono (+53 55001133)"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              name="telefono"
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
              País de Procedencia
            </label>
            <select
              id="profesiones"
              name="pais"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            >
              <option disabled selected>
                Seleccione un país:
              </option>
              {pais.map((pais) => (
                <option key={pais.value} value={pais.value}>
                  {" "}
                  {pais.text}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="profesiones"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Profesiones (Construction / Gastronomia)
            </label>
            <select
              id="profesiones"
              name="profesion"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            >
              <option disabled selected>
                Seleccione una profesión
              </option>
              {construction.map((construction) => (
                <option key={construction.value} value={construction.value}>
                  {" "}
                  {construction.text}{" "}
                </option>
              ))}
              <hr className=""></hr>
              {gastronomy.map((gastronomy) => (
                <option key={gastronomy.value} value={gastronomy.value}>
                  {" "}
                  {gastronomy.text}{" "}
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
              Tiempo que ha trabajado en la profesión
            </label>
            <select
              name="tiempo"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            >
              <option disabled selected>
                Seleccione una opción
              </option>
              {tiempo.map((tiempo) => (
                <option key={tiempo.value} value={tiempo.value}>
                  {" "}
                  {tiempo.text}{" "}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2">
          <div className="mb-8">
            <label
              htmlFor="file"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              CV
            </label>
            <input
              type="file"
              placeholder="Agrege su CV"
              className="w-full rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
              name="file"
            />
          </div>
        </div>
        <div className="w-full px-4">
          <div className="mb-8">
            <label
              htmlFor="mensaje"
              className="mb-3 block text-sm font-medium text-dark dark:text-white"
            >
              Información extra
            </label>
            <textarea
              name="mensaje"
              rows={5}
              placeholder="Puede proporcionarnos información extra que le ayude con su solicitud"
              className="w-full resize-none rounded-sm border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            ></textarea>
          </div>
        </div>
        <div className="w-full px-4">
          <button
            type="submit"
            className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
          >
            Enviar
          </button>
        </div>
      </div>
      <Toaster position="top-right" expand={true} richColors/>
    </form>
  );
}
