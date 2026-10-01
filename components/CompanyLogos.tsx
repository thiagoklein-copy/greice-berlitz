"use client";

import Image from "next/image";
import { COMPANIES } from "@/lib/constants";

interface CompanyLogosProps {
  title?: string;
  supportText?: string;
  id?: string;
}

function LogoItem({ company }: { company: (typeof COMPANIES)[number] }) {
  return (
    <div className="flex h-20 shrink-0 items-center justify-center px-10 sm:px-16">
      <Image
        src={company.logo}
        alt={company.name}
        width={220}
        height={72}
        className="h-10 w-auto max-w-[12rem] object-contain opacity-60 brightness-0 sm:h-12 sm:max-w-[14rem]"
      />
    </div>
  );
}

/** Faixa de logos: título discreto e carrossel contínuo entre filetes. */
export default function CompanyLogos({
  title = "Empresas que já confiaram no meu trabalho",
  supportText,
  id,
}: CompanyLogosProps) {
  const track = [...COMPANIES, ...COMPANIES];

  return (
    <section id={id} className="overflow-hidden bg-sand py-20 sm:py-28">
      <div className="section-container text-center">
        <p className="t-label text-ink">{title}</p>
        {supportText && (
          <p className="t-body mx-auto mt-6 max-w-2xl text-ink/85">
            {supportText}
          </p>
        )}
      </div>

      <div
        className="relative mt-12 w-full border-y hairline py-6"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
        }}
      >
        <div className="logo-marquee-track flex w-max items-center">
          {track.map((company, index) => (
            <LogoItem key={`${company.name}-${index}`} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
