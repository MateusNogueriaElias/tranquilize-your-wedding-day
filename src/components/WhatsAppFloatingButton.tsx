import { useState, useEffect } from "react";

const WhatsAppFloatingButton = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [autoShowTooltip, setAutoShowTooltip] = useState(false);
  const [isOnline, setIsOnline] = useState(true); // Sempre online
  const [isMinimized, setIsMinimized] = useState(false);

  // Configure aqui seu número, mensagem e horário de atendimento
  const whatsappNumber = "5511992772641"; // Substitua pelo seu número
  const whatsappMessage = encodeURIComponent("Olá! Estou planejando meu casamento e gostaria de conhecer o trabalho de assessoria de vocês. 💍");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Horário de atendimento (24h format)
  const workingHours = {
    start: 8, // 8h
    end: 18,  // 18h
    days: [1, 2, 3, 4, 5] // Segunda a Sexta (0 = Domingo, 6 = Sábado)
  };

  // Verificar se está no horário de atendimento - SEMPRE ONLINE
  useEffect(() => {
    // Removido - sempre online
    setIsOnline(true);
  }, []);

  // Auto-show tooltip após 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setAutoShowTooltip(true);
      setTimeout(() => setAutoShowTooltip(false), 4000); // Esconder após 4 segundos
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Animação de "chamar atenção" a cada 15 segundos
  useEffect(() => {
    const shakeInterval = setInterval(() => {
      if (!isTooltipVisible && !autoShowTooltip) {
        setAutoShowTooltip(true);
        setTimeout(() => setAutoShowTooltip(false), 2000);
      }
    }, 15000);
    return () => clearInterval(shakeInterval);
  }, [isTooltipVisible, autoShowTooltip]);

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
        <button
          onClick={() => setIsMinimized(false)}
          className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-600 hover:bg-gray-700 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <div className="relative">
        {/* Tooltip */}
        <div
          className={`absolute right-full top-1/2 -translate-y-1/2 mr-2 sm:left-auto sm:right-16 sm:top-1/2 sm:-translate-y-1/2 ${
            (isTooltipVisible || autoShowTooltip) ? "pointer-events-none" : "pointer-events-none"
          }`}
        >
          <div
            className={`relative sm:translate-x-0 bg-white text-gray-800 rounded-xl shadow-xl px-3 py-2 sm:px-4 sm:py-3 transition-all duration-500 whitespace-nowrap border border-gray-100 ${
              (isTooltipVisible || autoShowTooltip)
                ? "opacity-100 transform translate-x-0 scale-100"
                : "opacity-0 transform -translate-x-8 sm:translate-x-8 scale-95"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-400'} animate-pulse`}></div>
              <div>
                <div className="font-semibold text-xs sm:text-sm text-gray-800">Vamos planejar seu casamento?</div>
                <div className="text-[10px] sm:text-xs text-gray-500">
                  {isOnline ? "🟢 Atendimento online agora" : "🔴 Respondemos em breve"}
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white transform rotate-45 border-r border-b border-gray-100"></div>
          </div>
        </div>

        {/* Minimize Button */}
        <button
          onClick={() => setIsMinimized(true)}
          className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-5 h-5 sm:w-6 sm:h-6 bg-gray-500 hover:bg-gray-600 rounded-full shadow-md transition-all duration-200 flex items-center justify-center opacity-0 hover:opacity-100 group-hover:opacity-100"
        >
          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 13H5v-2h14v2z"/>
          </svg>
        </button>

        {/* WhatsApp Button */}
        <div className="group relative">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 relative overflow-hidden"
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
            onClick={() => setIsTooltipVisible(false)}
          >
            {/* Background pulse effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-500 rounded-full opacity-75 animate-ping"></div>

            {/* WhatsApp Icon */}
            <svg
              xmlns="https://icons8.com.br/icon/TRtiP3z8pXb0/whatsapp"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-300 group-hover:scale-110 relative z-10"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

            {/* Shine effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-12 transition-all duration-700 group-hover:translate-x-14 sm:group-hover:translate-x-16"></div>
          </a>

          {/* Online status indicator */}
          <div className={`absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-white transition-all duration-300 ${
            isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-400'
          }`}></div>

          {/* Activity indicator - REMOVIDO */}
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-green-400 rounded-full opacity-60 animate-ping`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${15 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloatingButton;
