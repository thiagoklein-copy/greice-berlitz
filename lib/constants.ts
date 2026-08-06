export const WHATSAPP_NUMBER = "5551998204918";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Greice! Gostaria de mais informações.";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE);

export const WHATSAPP_PALESTRAS_URL = buildWhatsAppUrl(
  "Olá, Greice! Gostaria de solicitar um orçamento de palestra para minha empresa.",
);

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Minha História", href: "/sobre" },
  { label: "Terapia Individual", href: "/atendimento-individual" },
  { label: "Palestras", href: "/palestras-empresas" },
  { label: "Contato", href: "/contato" },
] as const;

export const CLINIC_ADDRESS =
  "Av. Cel. Frederico Linck, 714, Sala 205, Centro, Novo Hamburgo - RS, CEP 93336-002";

export const CLINIC_PHONE = "(51) 99820-4918";
/* CONFIRMAR handle oficial do Instagram antes de publicar */
export const CLINIC_INSTAGRAM = "@psicologa_greiceberlitz";
export const CLINIC_INSTAGRAM_URL =
  "https://www.instagram.com/psicologa_greiceberlitz/";
export const PROFESSIONAL_CRP = "CRP 07/16250";

export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=Av.+Cel.+Frederico+Linck,+714,+Sala+205,+Novo+Hamburgo+-+RS&hl=pt&z=16&output=embed";

/* CONFIRMAR Place ID / URL oficial do Google Business Profile */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=Greice+Berlitz+Psic%C3%B3loga+Novo+Hamburgo";

export const COMPANIES = [
  {
    name: "Britasinos Concretos",
    logo: "/logos/britasinos.png",
  },
  {
    name: "Gerdau",
    logo: "/logos/gerdau.png",
  },
  { name: "FCC" },
  {
    name: "ULBRA Saúde",
    logo: "/logos/ulbra.png",
  },
  {
    name: "FACCAT",
    logo: "/logos/faccat.png",
  },
  {
    name: "Mosmann Incorporações",
    logo: "/logos/mosmann.png",
  },
] as const;

export const IMAGES = {
  hero: {
    src: "/hero.jpg",
    alt: "Ambiente corporativo em preto e branco — placeholder até foto real",
    objectPosition: "50% 40%",
  },
  ctaBanner: {
    src: "/cta-banner.jpg",
    alt: "Reunião profissional em preto e branco — placeholder até foto real",
    objectPosition: "50% 35%",
  },
  greice: {
    src: "/team-luiza.jpg",
    alt: "Greice Berlitz, psicóloga",
    objectPosition: "50% 45%",
  },
} as const;

export const TESTIMONIALS = [
  {
    quote:
      "Com certeza 5 estrelas. Sem rodeios, ela vai direto ao ponto e a mudança é certa, semana após semana. Já fiz terapia com várias profissionais e a Dra. Greice superou todas as minhas expectativas.",
    author: "Aline C.",
  },
  {
    quote:
      "A minha vida é dividida em antes e depois da Greice. Cada sessão traz um crescimento surreal — indico para todo mundo que posso.",
    author: "Júlia S.",
  },
  {
    quote:
      "Impossível colocar em palavras a transformação que aconteceu na minha vida depois que iniciei o processo terapêutico com a Greice. Em menos de 3 meses minha qualidade de vida deu um salto.",
    author: "Vitória B.",
  },
  {
    quote:
      "Excelente profissional. Através do trabalho da Greice, melhorei diversos pontos na minha vida pessoal e profissional — superou todas as expectativas.",
    author: "Guilherme B.",
  },
  {
    quote:
      "Sou paciente da Greice há 5 anos e sou grata por tudo que aprendi e sigo aprendendo com ela. Minha vida só melhorou depois que dediquei um tempo para a terapia.",
    author: "Bruna P.",
  },
  {
    quote:
      "Minha filha foi muito bem atendida — excelente profissional, atendimento excepcional.",
    author: "Adenir S.",
  },
] as const;

export const SERVICES = [
  {
    id: "ansiedade-panico",
    title: "Ansiedade e Síndrome do Pânico",
    description:
      "Ajudo você a entender e quebrar o ciclo de crises de ansiedade e pânico, com ferramentas práticas para retomar o controle do seu dia a dia.",
    duration: "50 min",
    price: "Valores sob consulta",
    whatsappTopic: "Ansiedade e Síndrome do Pânico",
  },
  {
    id: "depressao",
    title: "Depressão",
    description:
      "Um acompanhamento estruturado, baseado em evidências, para você reencontrar sentido, energia e qualidade de vida.",
    duration: "50 min",
    price: "Valores sob consulta",
    whatsappTopic: "Depressão",
  },
  {
    id: "autoestima-autoamor",
    title: "Autoestima e Autoamor",
    description:
      "Trabalho para que você se reconecte com o seu valor e construa relações mais saudáveis, a começar pela relação com você mesmo(a).",
    duration: "50 min",
    price: "Valores sob consulta",
    whatsappTopic: "Autoestima e Autoamor",
  },
  {
    id: "mudanca-vida",
    title: "Mudança de Vida e Relacionamentos",
    description:
      "Para momentos de transição, decisões importantes ou relacionamentos que já não fazem sentido. Te ajudo a enxergar com mais clareza o próximo passo.",
    duration: "50 min",
    price: "Valores sob consulta",
    whatsappTopic: "Mudança de Vida e Relacionamentos",
  },
  {
    id: "avaliacao-neuropsicologica",
    title: "Avaliação Neuropsicológica",
    description:
      "Avaliação completa das funções cognitivas para um diagnóstico preciso e direcionamento terapêutico adequado.",
    duration: "Sob avaliação",
    price: "Valores sob consulta",
    whatsappTopic: "Avaliação Neuropsicológica",
  },
  {
    id: "hipnoterapia",
    title: "Hipnoterapia",
    description:
      "Técnica complementar para acelerar processos terapêuticos e trabalhar padrões inconscientes de forma segura.",
    duration: "50 min",
    price: "Valores sob consulta",
    whatsappTopic: "Hipnoterapia",
  },
] as const;

export const CONTACT_OBJECTIVES = [
  "Terapia individual (adulto)",
  "Terapia individual (avaliação neuropsicológica / hipnoterapia)",
  "Palestra para minha empresa",
  "Consultoria in company",
  "Ainda não sei, quero conversar",
] as const;
