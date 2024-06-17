import SendInfo from "@/components/SendInfo"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitud",
  description: "",
  // other metadata
};
export default function Process() {
  return ( <>
    <SendInfo/>  
    </> )
  
}


