import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TCP Group",
  description: "This is the HomePage for TCP Group",
  keywords:"europa,construccion,pintura"
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero/>
      <Features />
      <Video />      
      <AboutSectionTwo />
      <Testimonials />
      <Blog />
    </>
  );
}
