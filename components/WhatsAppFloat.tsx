import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function WhatsAppFloat() {
  return (
    <a
      href={COMPANY.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={`WhatsApp ${COMPANY.whatsappDisplay}`}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#20BD5A]"
      aria-label={`Abrir WhatsApp ${COMPANY.whatsappDisplay}`}
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
}
