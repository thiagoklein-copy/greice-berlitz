"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollProgress from "@/components/ui/ScrollProgress";
import PageTransition from "@/components/ui/PageTransition";
import type { ReactNode } from "react";

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <PageTransition>
        <main>{children}</main>
        <Footer />
      </PageTransition>
      <WhatsAppButton />
    </>
  );
}
