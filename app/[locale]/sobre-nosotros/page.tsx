import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      {/* <Breadcrumb
        pageName="Sobre Nosotros"
        description=""
      /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
