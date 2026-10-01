export const WHATSAPP_NUMBER = "5551998204918";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá, Greice! Gostaria de mais informações.";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE);

export const WHATSAPP_CONSULTA_URL = buildWhatsAppUrl(
  "Olá, Greice! Gostaria de agendar uma consulta estratégica.",
);

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
  {
    name: "FCC",
    logo: "/logos/fcc-logo.png",
  },
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
  retrato: {
    src: "/greice-retrato.jpg",
    alt: "Greice Berlitz, psicóloga, em seu consultório",
    objectPosition: "50% 30%",
  },
  formatura: {
    src: "/greice-formatura.jpg",
    alt: "Greice Berlitz na formatura em Psicologia",
    objectPosition: "50% 30%",
  },
  hero: {
    src: "/hero.jpg",
    alt: "Ambiente corporativo em preto e branco — placeholder até foto real",
    objectPosition: "50% 40%",
  },
  palestrasHero: {
    src: "/palestras-hero.png",
    alt: "Palestra em auditório com plateia e tela de projeção",
    objectPosition: "50% 45%",
  },
  terapiaHero: {
    src: "/terapia-hero.png",
    alt: "Sessão de terapia — mãos entrelaçadas e escuta profissional",
    objectPosition: "45% 40%",
  },
  ctaBanner: {
    src: "/cta-banner.jpg",
    alt: "Reunião profissional em preto e branco — placeholder até foto real",
    objectPosition: "50% 35%",
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
    id: "ansiedade-estresse",
    title: "Ansiedade e Gestão de Estresse",
    description:
      "O excesso de futuro e a pressão por resultados constantes podem paralisar até as mentes mais brilhantes. Desenvolvemos estratégias cognitivas para desarmar o esgotamento, gerenciar o estresse crônico e devolver o controle emocional, permitindo a tomada de decisões complexas com serenidade e clareza mental.",
    duration: "50 min",
    price: "Valores sob consulta",
    whatsappTopic: "Ansiedade e Gestão de Estresse",
  },
  {
    id: "depressao-proposito",
    title: "Depressão e Resgate de Propósito",
    description:
      "Mesmo carreiras consolidadas e vidas financeiramente estáveis enfrentam momentos de vazio, perda de sentido ou desânimo paralisante. Através de um suporte clínico altamente qualificado e humano, trabalhamos na ressignificação do sofrimento, na reconstrução da vitalidade e no realinhamento das suas ações com os seus valores fundamentais e espirituais.",
    duration: "50 min",
    price: "Valores sob consulta",
    whatsappTopic: "Depressão e Resgate de Propósito",
  },
  {
    id: "transtornos-alimentares",
    title: "Transtornos Alimentares e Autoimagem",
    description:
      "A relação disfuncional com a comida e com o corpo frequentemente reflete dinâmicas de controle, estresse e dores emocionais ocultas. Ofereço um ambiente seguro, analítico e totalmente livre de julgamentos para restaurar o equilíbrio, a paz com a alimentação e o respeito à sua própria identidade.",
    duration: "50 min",
    price: "Valores sob consulta",
    whatsappTopic: "Transtornos Alimentares e Autoimagem",
  },
] as const;

export const CONTACT_OBJECTIVES = [
  "Terapia individual (adulto)",
  "Terapia individual (avaliação neuropsicológica / hipnoterapia)",
  "Palestra para minha empresa",
  "Consultoria in company",
  "Ainda não sei, quero conversar",
] as const;
