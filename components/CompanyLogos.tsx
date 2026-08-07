"use client";

import Image from "next/image";
import MotionSection from "@/components/ui/MotionSection";
import { COMPANIES } from "@/lib/constants";

interface CompanyLogosProps {
  title?: string;
  supportText?: string;
  id?: string;
  bridgeToDark?: boolean;
}

function LogoItem({
  company,
}: {
  company: (typeof COMPANIES)[number];
}) {
  return (
    <div className="flex h-16 shrink-0 items-center justify-center px-8 sm:h-20 sm:px-12">
      <Image
        src={company.logo}
        alt={company.name}
        width={220}
        height={72}
        className="h-12 w-auto max-w-[14rem] object-contain opacity-75 brightness-0 sm:h-14 sm:max-w-[16rem]"
      />
    </div>
  );
}

export default function CompanyLogos({
  title = "Empresas que já confiaram no meu trabalho",
  supportText,
  id,
}: CompanyLogosProps) {
  const track = [...COMPANIES, ...COMPANIES];

  return (
    <MotionSection id={id} className="overflow-hidden bg-white py-24 sm:py-28">
      <div className="section-container text-center">
        <h2
          className="mx-auto max-w-3xl font-display font-medium tracking-[-0.02em] text-ink"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", lineHeight: 1.15 }}
        >
          {title}
        </h2>
        {supportText && (
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink sm:text-lg">
            {supportText}
          </p>
        )}
      </div>

      <div
        className="logo-marquee relative mt-12 w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        <div className="logo-marquee-track flex w-max items-center">
          {track.map((company, index) => (
            <LogoItem key={`${company.name}-${index}`} company={company} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
