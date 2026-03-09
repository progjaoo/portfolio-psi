import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Quote, Monitor, CalendarHeart, Phone,  DownloadCloudIcon } from "lucide-react";
import { useState } from "react";
import FAQSection from "@/components/FAQSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleWhatsApp = () => {
    window.open("https://wa.me/5524992086261", "_blank");
  };
  const handleDownloadPortfolio = () => {
    const url = "COLE_AQUI_O_LINK_DO_DRIVE";
    window.open(url, "_blank");
  };
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const text = `
Olá Carolina, me chamo ${formData.name}.

${formData.message}

Contato:
Telefone: ${formData.phone}
E-mail: ${formData.email}
  `;

  const encodedText = encodeURIComponent(text);

  window.open(
    `https://wa.me/5524992086261?text=${encodedText}`,
    "_blank"
  );

  setFormData({ name: "", email: "", phone: "", message: "" });
};

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Abstract background decorative blobs */}
        <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-primary/10 blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-[500px] h-[500px] rounded-full bg-accent/30 blur-3xl opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.span variants={fadeInUp} className="inline-block py-1 px-3 rounded-full bg-accent/50 text-accent-foreground font-medium text-sm mb-6">
                Atendimento Presencial e Online
              </motion.span>
              
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-balance">
                Um espaço seguro para o seu <span className="text-primary italic">acolhimento</span> e <span className="text-primary italic">transformação</span>.
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 text-balance">
                A psicoterapia é um caminho gentil de autoconhecimento. Estou aqui para ajudar você a lidar com suas angústias, ressignificar vivências e construir uma vida mais leve.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleWhatsApp} className="rounded-full shadow-lg shadow-primary/20 hover-lift text-base h-14 px-8 gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Agendar via WhatsApp
                </Button>
                <Button size="lg" variant="outline" className="rounded-full hover-lift text-base h-14 px-8 border-2" onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}>
                  Como funciona?
                </Button>
                
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative hidden md:block"
            >
              {/* hero aesthetic elegant warm interior */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] lg:aspect-[3/4]">
                <img 
                  src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2070&auto=format&fit=crop" 
                  alt="Consultório de psicologia aconchegante" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-xl shadow-xl flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <CalendarHeart className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-bold">Agendamentos Abertos</p>
                  <p className="text-xs text-muted-foreground">Consulte horários disponíveis</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="sobre" className="py-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeInUp} className="order-2 lg:order-1 relative">
              {/* professional portrait woman smiling warm */}
              <div className="aspect-square max-w-md mx-auto rounded-full overflow-hidden border-8 border-background shadow-2xl relative z-10">
                <img 
                  src="fotocarol.jpeg" 
                  alt="Psicóloga Carolina Carvalho" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square rounded-full bg-accent/20 -z-0 blur-xl" />
            </motion.div>

            <motion.div variants={fadeInUp} className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Prazer, eu sou a Carolina Carvalho.</h2>
              <p className="inline-block text-lg font-medium text-primary bg-primary/15 px-3 py-1 rounded-full mb-6">
                Psicóloga Clínica • CRP 05/60519
              </p>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Sou apaixonada por escutar histórias e auxiliar pessoas a encontrarem suas próprias respostas. Acredito que a psicoterapia não precisa ser um processo rígido, mas sim um <strong>encontro acolhedor e empático</strong>.
                </p>
                <p>
                  Meu objetivo é proporcionar um ambiente seguro onde você possa expressar suas emoções, medos e inseguranças sem julgamentos, trabalhando juntos para construir uma rotina mais saudável e equilibrada.
                </p>
                <p>
                  Seja lidando com ansiedade, questões de relacionamento ou a busca por autoconhecimento, o processo psicoterapêutico é um investimento em sua qualidade de vida.
                </p>
              </div>
                <Button size="lg" variant="outline" className="rounded-full hover-lift text-base h-14 mt-10 px-8 border-2" onClick={handleDownloadPortfolio}>
                  <DownloadCloudIcon className="w-5 h-5" />
                  Baixar Portfólio
                </Button>
             
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="como-funciona" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-3xl md:text-4xl font-serif font-bold mb-4"
            >
              Como posso te ajudar?
            </motion.h2>
            <motion.p 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="text-muted-foreground text-lg"
            >
              Ofereço modalidades flexíveis de atendimento para me adaptar à sua rotina e necessidades, sempre com a mesma dedicação e sigilo.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Presencial Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                <div className="h-2 w-full bg-primary/60 group-hover:bg-primary transition-colors" />
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">Atendimento Presencial</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Um espaço fisicamente preparado para o seu conforto, pensado em cada detalhe para promover relaxamento e confidencialidade.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Consultório climatizado                                 
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Localização acessível em Barra Mansa
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Ambiente acolhedor e privativo
                    </li>
                  </ul>
                  <div className="p-4 bg-muted rounded-xl flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm font-medium text-foreground/80">
                      Localizado no centro de Barra Mansa, RJ. Agende para receber o endereço completo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Online Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
                <div className="h-2 w-full bg-accent/60 group-hover:bg-accent transition-colors" />
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-accent/30 rounded-2xl flex items-center justify-center mb-6 text-amber-700">
                    <Monitor className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3">Atendimento Online</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A mesma qualidade e ética do formato presencial, no conforto da sua casa. Ideal para quem busca flexibilidade de horários.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-amber-600" /> Sem tempo de deslocamento
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-amber-600" /> Atendimento para qualquer lugar do mundo
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-amber-600" /> Plataformas seguras de vídeo
                    </li>
                  </ul>
                  <div className="p-4 bg-muted rounded-xl flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                    <p className="text-sm font-medium text-foreground/80">
                      Sessões realizadas via Google Meet ou Zoom, garantindo criptografia e sigilo.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="depoimentos" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
              O que dizem os pacientes
            </h2>
            <p className="text-muted-foreground text-lg">
              Relatos reais de pessoas que escolheram iniciar a jornada de autoconhecimento e cuidado emocional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-300">
            {[
              {
                text: "Outro dia achei o caderno que eu anotava as coisas das nossas sessões, saudade",
                label: "Paciente Online"
              },
              {
                text: "Nossa tudo que você fez e faz por nós, pela minha filha, pelo carinho e cuidado com ela nem temos como agradecer.",
                label: "Paciente Online"
              },
              {
                text: "Excelente psicóloga, em pouco tempo me ajudou muito mas muito mesmo, Deus abençoe!.",
                label: "Paciente Presencial"
              }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
              >
                <Card className="h-full bg-background border-border/50 shadow-md hover:shadow-xl transition-shadow relative pt-8">
                  <div className="absolute top-6 left-6 text-primary/20">
                    <Quote className="w-10 h-10" />
                  </div>
                  <CardContent className="pt-6 relative z-10 flex flex-col h-full">
                    <p className="text-foreground/80 italic leading-relaxed mb-8 flex-grow relative z-10">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      {/* <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-serif">
                        
                      </div> */}
                      <div>
                        <p className="font-bold text-sm"></p>
                        <p className="text-xs font-bold text-muted-foreground">{testimonial.label}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FAQSection />
      {/* CONTACT SECTION */}
      <section id="contato" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <div className="space-y-8 lg:pr-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
                Vamos conversar?
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                Dar o primeiro passo pode parecer difícil, mas estou aqui para te ajudar. Envie uma mensagem pelo formulário ou diretamente pelo WhatsApp para agendarmos um horário.
              </p>

              <div className="space-y-6 pt-8 border-t border-primary-foreground/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70 mb-1">WhatsApp direto</p>
                    <a href="https://wa.me/5524992086261" target="_blank" rel="noreferrer" className="text-xl font-bold hover:underline">
                      (24) 99208-6261
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-primary-foreground/70 mb-1">Consultório</p>
                    <p className="text-lg font-medium">
                      Barra Mansa, RJ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white text-foreground shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-serif font-bold mb-6">Envie uma mensagem</h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Seu nome</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Como você gostaria de ser chamado?" 
                      className="bg-muted/50 border-transparent focus:border-primary focus:ring-primary/20 transition-all"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone / WhatsApp</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="(24) 99999-9999" 
                        className="bg-muted/50 border-transparent focus:border-primary focus:ring-primary/20 transition-all"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="seu@email.com" 
                        className="bg-muted/50 border-transparent focus:border-primary focus:ring-primary/20 transition-all"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Como posso te ajudar?</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Sinta-se à vontade para escrever o que desejar..." 
                      className="min-h-[120px] bg-muted/50 border-transparent focus:border-primary focus:ring-primary/20 transition-all resize-none"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                 <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-bold rounded-xl gap-2 mt-4 hover-lift"
                >
                  Enviar Mensagem
                  <ArrowRight className="w-5 h-5" />
                </Button>
                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
