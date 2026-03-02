import { useMutation } from "@tanstack/react-query";
import { api, type MessageInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateMessage() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: MessageInput) => {
      const validated = api.messages.create.input.parse(data);
      
      const res = await fetch(api.messages.create.path, {
        method: api.messages.create.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.messages.create.responses[400].parse(await res.json());
          throw new Error(error.message);
        }
        if (res.status === 500) {
          const error = api.messages.create.responses[500].parse(await res.json());
          throw new Error(error.message);
        }
        throw new Error('Falha ao enviar mensagem');
      }

      return api.messages.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Agradeço o contato. Retornarei o mais breve possível.",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Erro ao enviar",
        description: error.message || "Tente novamente ou entre em contato via WhatsApp.",
        variant: "destructive",
      });
    }
  });
}
