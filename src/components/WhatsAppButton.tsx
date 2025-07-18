import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "5511987654321"; // Formato internacional
  const message = "Olá! Gostaria de agendar uma consulta para meu pet.";
  
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      asChild
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-strong bg-green-500 hover:bg-green-600 text-white transition-bounce hover-lift"
    >
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">WhatsApp</span>
      </a>
    </Button>
  );
};

export default WhatsAppButton;