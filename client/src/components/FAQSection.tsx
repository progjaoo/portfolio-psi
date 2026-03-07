import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que é a psicoterapia psicológica?",
    a: "É um processo de cuidado emocional conduzido por um(a) psicólogo(a), com o objetivo de promover autoconhecimento, acolher emoções, desenvolver estratégias para lidar com desafios e melhorar a qualidade de vida.",
  },
  {
    q: "Como saber se eu preciso de psicoterapia?",
    a: "Você pode buscar psicoterapia quando estiver enfrentando sofrimento emocional, dificuldades no trabalho ou nos relacionamentos, sobrecarga, luto, entre outros. Mas não é preciso \"estar mal\" para fazer psicoterapia — ela também serve para desenvolvimento pessoal e prevenção.",
  },
  {
    q: "Como funciona uma sessão de psicoterapia?",
    a: "As sessões geralmente têm duração de 50 minutos a 1 hora. O paciente fala sobre suas questões, sentimentos, pensamentos e experiências, enquanto o(a) psicólogo(a) escuta de forma ativa e propõe reflexões, intervenções ou exercícios.",
  },
  {
    q: "Quantas sessões vou precisar?",
    a: "Isso depende da demanda de cada pessoa. Algumas pessoas buscam apoio por um período mais curto, outras seguem por mais tempo. O número de sessões é ajustado conforme os objetivos e o progresso terapêutico.",
  },
  {
    q: "A psicoterapia é sigilosa?",
    a: "Sim. O sigilo é garantido pelo Código de Ética Profissional da Psicologia. Tudo o que for dito em sessão será mantido em confidencialidade, salvo em casos extremos previstos por lei (como risco à vida).",
  },
  {
    q: "Posso fazer psicoterapia online?",
    a: "Sim! A psicoterapia online é regulamentada pelo Conselho Federal de Psicologia e oferece a mesma qualidade do atendimento presencial, com a vantagem da comodidade.",
  },
  {
    q: "A Carolina atende presencialmente?",
    a: "Sim! Além do atendimento online, a Carolina atende presencialmente em seu consultório em Barra Mansa - RJ. Você pode escolher a modalidade que melhor se adapta à sua rotina.",
  },
  {
    q: "Aceita plano de saúde?",
    a: "Não aceito plano de saúde diretamente. Consulte-me para mais informações sobre formas de pagamento.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Perguntas Frequentes
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-background rounded-xl border border-border px-6"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
