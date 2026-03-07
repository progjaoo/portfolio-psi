import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold">Carolina Carvalho</h3>
            <p className="text-secondary-foreground/80 text-sm max-w-sm">
              Psicoterapia pautada no acolhimento, ajudando você a encontrar equilíbrio emocional e autoconhecimento.
            </p>
            <p className="text-secondary-foreground/100 text-lg font-medium">
              CRP: 05/60519
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium">Atendimento</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-primary-foreground/70" />
                <span>
                  <strong>Consultório Presencial</strong><br />
                  Barra Mansa, RJ
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                </div>
                <span>
                  <strong>Atendimento Online</strong><br />
                  Para todo o Brasil e exterior
                </span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-medium">Contato</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/80">
              <li>
                <a href="https://wa.me/5524992086261" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  (24) 99208-6261
                </a>
              </li>
              <li>
                <a href="mailto:contato@carolinacarvalho.com.br" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  carolinasouzacarvalho@hotmail.com
                </a>
              </li>
              <li>
                <a href="https://instagram.com/psicarollcarvalho" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                  @psicarollcarvalho
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-secondary-foreground/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Carolina de Souza Carvalho. Todos os direitos reservados.</p>
          <p>Desenvolvido por JMV Solutions</p>
        </div>
      </div>
    </footer>
  );
}
