"use client";

import Image from "next/image";
import MotionSection from "@/components/ui/MotionSection";
import { InfinityChip } from "@/components/ui/InfinityMark";
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
      {"logo" in company && company.logo ? (
        <Image
          src={company.logo}
          alt={company.name}
          width={220}
          height={72}
          className="h-12 w-auto max-w-[14rem] object-contain opacity-75 brightness-0 sm:h-14 sm:max-w-[16rem]"
        />
      ) : (
        <span className="whitespace-nowrap font-sans text-2xl font-bold tracking-tight text-ink/70 sm:text-3xl">
          {company.name}
        </span>
      )}
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
        <InfinityChip className="mb-5">Confiam no meu trabalho</InfinityChip>
        <p className="mx-auto max-w-2xl text-base font-medium text-text-muted sm:text-lg">
          {title}
        </p>
        {supportText && (
          <p className="mx-auto mt-3 max-w-xl text-sm text-text-muted/80">
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
