import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BreadCrumbs from "@/components/breadcrumbs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ogbonna Martins",
  description: "Software Developer and DevOps Engineer in Abuja, Nigeria",
};


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
      <Navbar />      
      <BreadCrumbs />
      {children}
      
      </>
  );
}
