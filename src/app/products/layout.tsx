import type { Metadata } from "next";
import Footer from "@/components/footer/Footer";
import Breadcrumb from "@/components/BreadCrumb";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header/>
        <Breadcrumb />
        {children}
        <Footer/>
    </>
  );
}
