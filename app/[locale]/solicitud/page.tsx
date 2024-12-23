import SendInfo from "@/components/SendInfo"
import { Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Solicitud",
  description: "",
};
export default function Process() {
  return (
     <>
    <SendInfo/>  
     <Toaster position="top-right" expand={true} richColors/>
    </> 
    )
  
}


