"use client";
import Form from "./form";

const Info = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 ">
      <div className="container">
        <div className="justify-center">
          <div
            className="wow fadeInUp mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            data-wow-delay=".15s"
          >
            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Unete a nuestro equipo
            </h2>
            <p className="mb-12 text-base font-medium text-body-color">
              Descubre las oportunidades laborales que tenemos disponibles y
              forma parte de nuestro equipo de profesionales.
            </p>
            <Form/>
          </div>
        </div>
        <div className="w-full px-4 lg:w-5/12 xl:w-4/12"></div>
      </div>
    </section>
  );
};

export default Info;
