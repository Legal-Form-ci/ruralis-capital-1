import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const whatsappNumber = "2250759566087"; // Format international sans le +
  const message = "Bonjour, je souhaite obtenir plus d'informations sur les plantations de palmiers à huile avec Ruralis Capital.";
  
  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="Contacter via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Contactez-nous sur WhatsApp
        </span>
      </button>
    </div>
  );
};

export default WhatsAppFloat;