
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "@/styles/index.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout( { children , params : {locale} } : {
  children: React.ReactNode;
  params: {locale : string};
}) {
  //Get the current locale
  const messages = await getMessages();
  return (
    <html suppressHydrationWarning lang={locale}>
      <head />
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <NextIntlClientProvider messages={messages}>
        <Providers>
          <Header />
          {children}
          <Footer />
        {/* <ScrollToTop /> */}
        </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


